const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const request = require('request');

app.set('port', (process.env.PORT || 8443));
app.use(express.static("public"));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
})); // support encoded bodies



writeLog('[SERVER] Starting server...');
checkFiles();

var ts = Math.round(new Date().getTime() / 1000);

//dataaa
var character_table;
var dataSkin;
var playerData = JSON.parse(fs.readFileSync('account/sample.json', 'utf8'));

//config
var injectMode = true; //enable for unlock all ops and skins
//var leapDay = 0; //time leap to future

//account config
var orundum = 123456789;
var paidPO = 12345;
var name = "Luna";
var nickNumber = -1;
var level = -1;
var exp = 0;
var resume = "Luna";
var secretary = "char_113_cqbw";
var secretarySkinId = "char_113_cqbw#2"

//CC#B
var runePoint = 0;

async function getRequest(url) {
  const options = {
    url: url,
    method: 'GET',
  };
  // Return new promise
  return new Promise(function(resolve, reject) {
    // Do async job
    request.get(options, function(err, resp, body) {
      if (err) {
        reject(err);
      } else {
        resolve(body);
      }
    })
  })
}

async function postRequest(params) {
    return new Promise(function(resolve, reject) {
        request.post(params, function(err, res, body) {
            if(err) {
                console.log(err);
                reject(err);
            } else {
                resolve(body);
            }
        })
    })
}

(async function() {
    writeLog('[SERVER] Fetching Operators...')
    character_table = JSON.parse(fs.readFileSync('data/character_table.json', 'utf8'));
    dataSkin = JSON.parse(fs.readFileSync('data/skin_table.json', 'utf8'));
    //uncomment to fetch them from Dimbreath's github
    //character_table = JSON.parse(await getRequest('https://raw.githubusercontent.com/Dimbreath/ArknightsData/master/en-US/gamedata/excel/character_table.json'));
    //dataSkin = JSON.parse(await getRequest('https://raw.githubusercontent.com/Dimbreath/ArknightsData/master/en-US/gamedata/excel/skin_table.json'));
    writeLog('[SERVER] Operators Loaded');
})();

//Start Server
app.listen(app.get('port'), function() {
    writeLog('[SERVER] Server started at port ' + app.get('port'));
});

app.post('/account/login', function(req, res) {
    let data = {
        result:0,
        uid:"-1",
        secret:"luna",
        serviceLicenseVersion:0
    };

    res.json(data);
});

app.post('/account/syncStatus', function(req, res) {
    let data = {
        "ts": Math.round(new Date().getTime() / 1000),
        "result":{},
        "playerDataDelta": {}
    };
    res.json(data);
});
app.post('/account/syncData', async function(req, res) {
    if(injectMode) {
        writeLog("Modifying Operators and Skins...")
        /*
        let tempAccount = {
        url:'https://gs.arknights.global:8443/account/syncData',
        json:true,
        headers:{
            secret:req.headers['secret'],
            uid:req.headers['uid'],
            'X-Unity-Version':req.headers['X-Unity-Version'],
            seqnum:req.headers['seqnum'],
            'User-Agent':req.headers['User-Agent'],
            Host:req.headers['Host']
        },
        body:req.body
        }
        */
        let cnt = 0;
        let cntInstId = 1;
        let tempSkinTable = {};
        let myCharList = {};

        //tamper skins
        
        playerData.user.skin.characterSkins = {};
        for(var i in dataSkin.charSkins) {
            if(Object.keys(dataSkin.charSkins)[cnt].indexOf("@") == -1) {
                //not special skins
                cnt++;
                continue;
            }
            playerData.user.skin.characterSkins[Object.keys(dataSkin.charSkins)[cnt]] = 1;
            tempSkinTable[dataSkin.charSkins[i].charId] = dataSkin.charSkins[i].skinId;
            cnt++;
        }

        //tamper operators
        cnt = 0;
        for(var i in character_table) {
            if(Object.keys(character_table)[cnt].indexOf('char') == -1) {
                cnt++;
                continue;
            }
            //add operators
            myCharList[parseInt(cntInstId)] = {
                instId:parseInt(cntInstId),
                charId:Object.keys(character_table)[cnt],
                favorPoint:12312312,
                potentialRank:5,
                mainSkillLvl:7,
                skin:Object.keys(character_table)[cnt] + "#1",
                level:character_table[i].phases[character_table[i].phases.length-1].maxLevel,
                exp:0,
                evolvePhase:character_table[i].phases.length-1,
                defaultSkillIndex:character_table[i].skills.length-1,
                gainTime:1591254258,
                skills:[]
            }

            //set to E2 art if available
            if(myCharList[cntInstId].evolvePhase == 2) myCharList[cntInstId].skin = Object.keys(character_table)[cnt] + "#2";

            //set to seasonal skins [lastest release]
            if(tempSkinTable[Object.keys(character_table)[cnt]]) myCharList[cntInstId].skin = tempSkinTable[Object.keys(character_table)[cnt]];

            //add skills
            for(var k=0;k<character_table[i].skills.length;k++) {
                myCharList[parseInt(cntInstId)].skills[k] = {
                    skillId:character_table[i].skills[k].skillId,
                    unlock:1,
                    state:0,
                    specializeLevel:0,
                    completeUpgradeTime:-1
                };
                //m3
                if(character_table[i].skills[k].levelUpCostCond.length > 0) myCharList[parseInt(cntInstId)].skills[k].specializeLevel = 3;
            }

            //dexnav
            playerData.user.dexNav.character[Object.keys(character_table)[cnt]] = {
                charInstId:cntInstId,
                count:6
            };

            cnt++;
            cntInstId++;
        }
        playerData.user.troop.chars = myCharList;
        playerData.user.troop.curCharInstId = cntInstId;

        
        writeLog("Done");
    }
    playerData.user.status.lastRefreshTs = ts;
    playerData.user.status.lastApAddTime = ts;
    playerData.user.status.registerTs = ts;
    playerData.user.status.lastOnlineTs = ts;
    playerData.ts = ts;
    //modifier
    playerData.user.status.diamondShard = orundum;
    playerData.user.status.payDiamond = paidPO;
    playerData.user.status.nickName = name;
    playerData.user.status.nickNumber = nickNumber;
    playerData.user.status.level = level;
    playerData.user.status.exp = exp;
    playerData.user.status.resume = resume;
    playerData.user.status.secretary = secretary;
    playerData.user.status.secretarySkinId = secretarySkinId;

    res.json(playerData);
})
app.post('/charBuild/setDefaultSkill', function(req, res) {
	let charInstId = req.body.charInstId;
	let defaultSkillIndex = req.body.defaultSkillIndex;
    let data = {
        "playerDataDelta":{
            "modified":{
                "troop":{
                   "chars":{}
                }
            },
            "deleted":{}
        }
    }
	if(charInstId && defaultSkillIndex) {
		data.playerDataDelta.modified.troop.chars[charInstId.toString()] = {};
        data.playerDataDelta.modified.troop.chars[charInstId.toString()].defaultSkillIndex = defaultSkillIndex;
		res.json(data);
	}
});

app.post('/charBuild/changeCharSkin', function(req, res) {
    let data = {
        "playerDataDelta":{
            "modified":{
                "troop":{
                    "chars":{}
                }
            },
            "deleted":{}
        }
    }
    if(req.body.charInstId && req.body.skinId) {
        data.playerDataDelta.modified.troop.chars[req.body.charInstId.toString()] = {};
        data.playerDataDelta.modified.troop.chars[req.body.charInstId.toString()].skin = req.body.skinId;
        res.json(data);
    }
});

app.post('/quest/squadFormation', function(req, res) {
    let data = {
        "playerDataDelta":{
            "modified":{
                "troop":{
                    "squads":{}
                }
            },
            "deleted":{}
        }
    }

    if(req.body.squadId && req.body.slots) {
        data.playerDataDelta.modified.troop.squads[req.body.squadId.toString()] = {};
        data.playerDataDelta.modified.troop.squads[req.body.squadId.toString()].slots = req.body.slots;
        res.json(data);
    }
});
app.post('/user/changeSecretary', function(req, res) {
    let data = {
        "playerDataDelta":{
            "modified":{
                "status":{
                    "secretary":"",
                    "secretarySkinId":"",
                }
            },
            "deleted":{}
        }
    }
    if(req.body.charInstId && req.body.skinId) {
        data.playerDataDelta.modified.status.secretary = req.body.skinId.indexOf("@") != -1 ? req.body.skinId.split("@")[0] : req.body.skinId.split("#")[0];
        data.playerDataDelta.modified.status.secretarySkinId = req.body.skinId;
        res.json(data);
    }
});
app.post('/quest/battleStart', function(req, res) {
    let training = {
        'battleId':'abcdefgh-1234-5678-a1b2c3d4e5f6',
        'playerDataDelta':{
            'modified':{},
            'deleted':{}
        },
        'result':0
    }
    res.json(training);
});
app.post('/quest/battleFinish', function(req, res) {
    let data = {"result":0,"playerDataDelta":{"modified":{"mission":{"missions":{"GUIDE":{"guide_8":{"progress":[{"target":1,"value":1}]}}}}},"deleted":{}}};
    res.json(data);
});

app.post('/building/sync', function(req, res) {
    let data = {
        ts:Math.round(new Date().getTime() / 1000),
        playerDataDelta:{
            modified:{
                building:{},
                event:{
                    building:Math.round(new Date().getTime() / 1000) + 3000
                }
            },
            deleted:{}
        }
    };
    res.json(data);
})

//CC#Beta, already passed tho
app.post('/rune/battleStart', function(req, res) {
    //test get automatic total point
    runePoint = getRunePoints(req.body.stageId, req.body.rune);
    //console.log(runePoint);
    let data = {
        'battleId':'abcdefgh-1234-5678-a1b2c3d4e5f6',
        'playerDataDelta':{
            'modified':{},
            'deleted':{}
        },
        'result':0
    }
    res.json(data);
});
app.post('/rune/battleFinish', function(req, res) {
    let data = {
        'from':runePoint,
        'playerDataDelta':{
            'modified':{},
            'deleted':{}
        },
        'result':0,
        'score':runePoint,
        'to':runePoint
    }
    res.json(data);
    runePoint = 0;
})
//end ccBEta

app.post('/shop/getSkinGoodList', function(req, res) {
    let data = {
        goodList:[],
        playerDataDelta:{
            modified:{},
            deleted:{}
        }
    };
    res.json(data);
})
//iap end

app.post('/gacha/tenAdvancedGacha', function(req, res) {
    res.json(tenAdvancedGacha(req.body.useTkt));
});

/*
app.get('/gacha/tenAdvancedGacha', function(req, res) {
    //to do
    res.json(tenAdvancedGacha());
});
*/

app.post('/gacha/syncNormalGacha', function(req, res) {
    let data = {
        playerDataDelta:{
            modified:{},
            deleted:{}
        }
    };
    res.json(data);
})

app.post('/user/exchangeDiamondShard', function(req, res) {
    if(req.body.count) {
        if(playerData.user.status.freeDiamond - req.body.count > 0) {
            playerData.user.status.freeDiamond -= req.body.count;
        } else {
            playerData.user.status.freeDiamond = 0;
            playerData.user.status.payDiamond = (req.body.count - playerData.user.status.freeDiamond);
        }
        playerData.user.status.diamondShard += 180*req.body.count;
        let data = {
            'playerDataDelta':{
                'modified':{
                    'status':{
                        'diamondShard':playerData.user.status.diamondShard,
                        'payDiamond':playerData.user.status.payDiamond,
                        'freeDiamond':playerData.user.status.freeDiamond
                    },
                'deleted':{}
                }
            }
        }
    res.json(data);
    }
});

app.post('/charBuild/boostPotential', function(req, res) {
    playerData.user.troop.chars[req.body.charInstId].potentialRank = req.body.targetRank;
    playerData.user.inventory[req.body.itemId]--;

    let data = {
        'playerDataDelta':{
            'modified':{
                'troop':{
                    'chars':{}
                },
                'inventory':{}
            },
            'deleted':{}
        }
    }
    data.playerDataDelta.modified.troop.chars[req.body.charInstId] = {
        'potentialRank':req.body.targetRank
    }
    data.playerDataDelta.modified.inventory[req.body.itemId] = playerData.user.inventory[req.body.itemId];

    res.json(data);
});

app.post('/charBuild/upgradeChar', function(req, res) {
    res.json();
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

function writeLog(data) {
    console.log('[' +new Date().toUTCString()+'] '+data);
}

//write file
/*
function write(JSONdata) {
fs.writeFileSync('account.json', JSON.stringify(JSONdata));
}
*/

//contingency contract calculate rune
function getRunePoints(stageId, rune) {
    let dataRune = JSON.parse(fs.readFileSync('rune.json', 'utf8'));
    let points = 0;
    for(var i=0;i<dataRune.actData.stageRune.length;i++) {
        if(dataRune.actData.stageRune[i].stageId == stageId) {
            writeLog('[httpRequest] POST Started Contingency Contract : stageId');
            for(var j=0;j<dataRune.actData.stageRune[i].runes.length;j++) {
                for(var k=0;k<rune.length;k++) {
                    if(rune[k] == dataRune.actData.stageRune[i].runes[j].id) {
                        //console.log('match rune');
                        points += dataRune.actData.stageRune[i].runes[j].points;
                        rune.splice(k, 1);
                    }
                }
            }
            break;
        }
    }
    console.log("Risk " + points);
    return points;
}

var probability = function(n) {
     return !!n && Math.random() <= n;
};

function tenAdvancedGacha(useTkt) {
    var pool = JSON.parse(fs.readFileSync('gachaPool/NORM_EN_6_0_2.json','utf8'));
    //not proper way btw, just simulator
    let data = {
        'gachaResultList':[],
        'playerDataDelta':{
            'modified':{
                'status':{},
                'troop':{
                    'curCharInstId':113,
                    'chars':{}
                },
                'inventory':{},
                'gacha':{},
                'dexNav':{},
                'building':{}
            },
            'deleted':{}
        }
    }

    var pullCount =  fs.readFileSync('pullCount','utf8');
    /*
    var probList=[
        [0.02, 0.04, 0.4],
        [5, 4, 3]
    ];
    */
    //v2
    var probList = [
        [0.02, 0.04, 0.4],
        [5, 4, 3]
    ];
    var dupe = [
    //2-6
    [
        {},
        {},
        {
            'type':'LGG_SHD',
            'id':4005,
            'count':5
        },
        {
            'type':'LGG_SHD',
            'id':4005,
            'count':30
        },
        {
            'type':'HGG_SHD',
            'id':4004,
            'count':5
        },
        {
            'type':'HGG_SHD',
            'id':4004,
            'count':10
        }
    ],
    //6+
    [
        {},
        {},
        {
            'type':'LGG_SHD',
            'id':'4005',
            'count':5
        },
        {
            'type':'LGG_SHD',
            'id':'4005',
            'count':30
        },
        {
            'type':'HGG_SHD',
            'id':'4004',
            'count':8
        },
        {
            'type':'HGG_SHD',
            'id':'4004',
            'count':15
        }
    ]
    ];
    var status = {
        'diamondShard':playerData.user.status.diamondShard,
        'hggShard':playerData.user.status.hggShard,
        'lggShard':playerData.user.status.lggShard,
        'tenGachaTicket':playerData.user.status.tenGachaTicket
    };
    if(useTkt) {
        status.tenGachaTicket--;
    } else {
        status.diamondShard -= 6000;
    }
    var inventory = {};
    var troop = {
        'chars':{},
        'curCharInstId':0
    };
    var dexNav = {
        'character':{}
    };
    var temp = [];
    for(var i=0;i<10;i++) {
        var char = "";
        if(pullCount > 50) {
            probList[0][0] = 0.02+(pullCount-50)*0.02;
        }

        var rarityGet = 2;
        
        for(var j=0;j<3;j++) {
            if(probability(probList[0][j])) {
                //get
                //char = pool[probList[1][j]][1][Math.floor(Math.random()*pool[probList[1][j]][1].length)];
                //rate up
                if(probability(0.5) && pool[6][probList[1][j]].length > 0) {
                    //console.log("rate up get, rarity :" + probList[1][j]);
                    char = pool[6][probList[1][j]][Math.floor(Math.random()*pool[6][probList[1][j]].length)];
                } else {
                    char = pool[probList[1][j]][Math.floor(Math.random()*pool[probList[1][j]].length)];
                }
                if(probList[1][j] == 5) pullCount = 0;
                //if(probList[1][j] == 5) console.log('get 6 star');
                else pullCount++;

                rarityGet = probList[1][j];
                break;
            } else {
                if(j < 2) continue;
                else {
                    //3 star
                    //char = pool[2][1][Math.floor(Math.random()*pool[2][1].length)];
                    char = pool[2][Math.floor(Math.random()*pool[2].length)]
                    pullCount++;
                }
            }
        }
        //check isNew
        var isNew = 1;
        var charInstId = 0;
        var itemGet = [];
        for(var k in playerData.user.dexNav.character) {
            if(k == char) {
                isNew = 0;
                //add some shard and token
                if(playerData.user.dexNav.character[k].count < 7) {
                    itemGet[0] = dupe[0][rarityGet];
                } else {
                    itemGet[0] = dupe[1][rarityGet];
                }
                itemGet[1] = {
                    'type':'MATERIAL',
                    'id':'p_'+k,
                    'count':1
                }
                if(itemGet[0].id == 4004) {
                    status.hggShard += itemGet[0].count;
                } else {
                    status.lggShard += itemGet[0].count;
                }
                if(playerData.user.inventory['p_'+char]) {
                    playerData.user.inventory['p_'+char]++;
                } else {
                    playerData.user.inventory['p_'+char] = 1;
                }
                if(inventory['p_'+char]) {
                    inventory['p_'+char]++;
                } else {
                    inventory['p_'+char] = 1;
                }
                //set charinstid from dexnav
                charInstId = playerData.user.dexNav.character[k].charInstId;
                //increase dexnav count
                playerData.user.dexNav.character[k].count++;
                dexNav.character[k] = {
                    'charInstId':charInstId,
                    'count':playerData.user.dexNav.character[k].count
                }
                break;
            }
        }
        //isNew == 1, add some shard
        if(isNew == 1) {
            itemGet[0] = {
                'type':'HGG_SHD',
                'id':'4004',
                'count':1
            }
            status.hggShard++;
            //add dexnav
            playerData.user.dexNav.character[char] = {
                'charInstId':playerData.user.troop.curCharInstId,
                'count':1
            }
            dexNav.character[char] = playerData.user.dexNav.character[char];
            //add troop
            playerData.user.troop.chars[playerData.user.troop.curCharInstId] = {
                'instId':playerData.user.troop.curCharInstId,
                'charId':char,
                'favorPoint':0,
                'potentialRank':0,
                'mainSkillLvl':1,
                'skin':char+'#1',
                'level':1,
                'exp':0,
                'evolvePhase':0,
                'defaultSkillIndex':0,
                'gainTime':Math.round(new Date().getTime() / 1000),
                'skills':[]
            };
            //troop skill
            for(var n=0;n<character_table[char].skills.length;n++) {
                var unlock = 0;
                if(n==0) unlock = 1;
                playerData.user.troop.chars[playerData.user.troop.curCharInstId].skills[n] = {
                    'skillId':character_table[char].skills[n].skillId,
                    'unlock':unlock,
                    'state':0,
                    'specializeLevel':0,
                    'completeUpgradeTime':-1
                }
            }
            troop.chars[playerData.user.troop.curCharInstId] = playerData.user.troop.chars[playerData.user.troop.curCharInstId];
            charInstId = playerData.user.troop.curCharInstId;
            playerData.user.troop.curCharInstId++;
            troop.curCharInstId = playerData.user.troop.curCharInstId;
        }

        fs.writeFileSync('pullCount', pullCount);
        data.gachaResultList.push({
            'charInstId':(charInstId),
            'charId':char,
            'isNew':isNew,
            'itemGet':itemGet,

        });
    }

    data.playerDataDelta.modified.inventory = inventory;
    data.playerDataDelta.modified.status = status;
    data.playerDataDelta.modified.troop = troop;
    data.playerDataDelta.modified.dexNav = dexNav;

    playerData.user.status.diamondShard = status.diamondShard;
    playerData.user.status.hggShard = status.hggShard;
    playerData.user.status.lggShard = status.lggShard;
    playerData.user.status.tenGachaTicket = status.tenGachaTicket;

    return data;
}

function checkFiles() {
   //checking files
    if(fs.existsSync('pullCount')) {
        //ok
    } else {
        //not ok
        writeLog('[WARNING] Missing pullCount, creating one...');
        fs.writeFileSync('pullCount', 0);
    }
    if(fs.existsSync('account/sample.json')) {
        //ok
    } else {
        //not ok
        writeLog('[ERROR] Missing account.json');
        process.exit(1);
    }
    if(fs.existsSync('gachaPool.json')) {
        //ok
    } else {
        //not ok
        writeLog('[ERROR] Missing gachaPool.json');
        process.exit(1);
    } 
}


//to do
//save progress (squad, secretary, skin)
//add log

/*
To Do List :
1.) Data Modifier
    a.) Admin Mode (no save progress)
    b.) Custom Data (can save, can modify)
    c.) User Account (can save, can modify)
2.) Merge gachaPool.json & pullCount
3.) Auto update character list #ok
4.) Delete rune.json, and codes related to contingency contract
5.) Inject mode #ok
Optional :
a.) Put read account.json inside syncData, so we can change account without restarting server

isCheat encryption method
from battleId, caesar cipher + 7, then base64

function replaceAt(string, index, replace) {
  return string.substring(0, index) + replace + string.substring(index + 1);
}
function encryptAk(str) {
    for(var i=0;i<str.length;i++) {
    str = replaceAt(str, i, String.fromCharCode(str.charCodeAt(i) + 7));    
}
return btoa(str)
}

function decryptAk(str) {
    str = atob(str);
    for(var i=0;i<str.lengthli++) {
    str = replaceAt(str, i, String.fromCharCode(str.charCodeAt(i) - 7));
    }
    return str;
}
*/