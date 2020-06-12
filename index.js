const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const ngrok = require('ngrok');

app.set('port', (process.env.PORT || 8443));
app.use(express.static("public"));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
})); // support encoded bodies

(async function() {
	/*
    //you can use ngrok too, just replace token with your ngrok token
	await ngrok.authtoken('token');
const url = await ngrok.connect(8443);
  console.log("Url : " + url);
*/
})();

writeLog('[SERVER] Starting server...');
checkFiles();

const ts = Math.round(new Date().getTime() / 1000);
const playerData = JSON.parse(fs.readFileSync('account.json', 'utf8'));

//config
const updateData = false;



//Start Server
app.listen(app.get('port'), function() {
    writeLog('[SERVER] Server started at port ' + app.get('port'));
});

app.post('/account/syncStatus', function(req, res) {
    let data = {
        "ts": ts,
        "playerDataDelta": {},
        'modified': {},
    };
    res.json(data);
    writeLog('[httpRequest] POST /account/syncStatus');
});
app.post('/account/syncData', function(req, res) {
    
    playerData.user.status.lastRefreshTs = ts;
    playerData.user.status.lastApAddTime = ts;
    playerData.user.status.registerTs = ts;
    playerData.user.status.lastOnlineTs = ts;
    playerData.ts = ts;

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
        data.playerDataDelta.modified.status.secretary = req.body.skinId.split("#")[0];
        data.playerDataDelta.modified.status.secretarySkinId = req.body.skinId;
        res.json(data);
    }
});
app.post('/quest/battleStart', function(req, res) {
    let data = {
        "result":0,
        "battleId":"abcdefgh-1234-5678-a1b2c3d4e5f6",
        "apFailReturn":0,
        "isApProtect":0,
        "notifyPowerScoreNotEnoughIfFailed":false,
        "playerDataDelta":{
            "modified":{
                "dungeon":{
                    "stages":{
                        "tr_01":{
                            "stageId":"tr_01",
                            "completeTimes":1,
                            "startTimes":2,
                            "practiceTimes":0,
                            "state":3,
                            "hasBattleReplay":0,
                            "noCostCnt":0
                        }
                    }
                },
                "status":{
                    "ap":playerData.user.status.ap,
                    "lastApAddTime":Math.round(new Date().getTime() / 1000)
                }
            },
            "deleted":{}
        }
    };
    res.json(data);
});
app.post('/quest/battleFinish', function(req, res) {
    let data = {"result":0,"playerDataDelta":{"modified":{"mission":{"missions":{"GUIDE":{"guide_8":{"progress":[{"target":1,"value":1}]}}}}},"deleted":{}}};
    res.json(data);
});
app.post('/gacha/tenAdvancedGacha', function(req, res) {
    //to do
    res.json(tenAdvancedGacha());
});

app.get('/gacha/tenAdvancedGacha', function(req, res) {
    //to do
    //res.json(tenAdvancedGacha());
});

app.post('/user/exhcangeDiamondShard', function(req, res) {
    res.json({});
});
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

function writeLog(data) {
    console.log('[' +new Date().toUTCString()+']'+data);
}

//write file
function write(JSONdata) {
fs.writeFileSync('account.json', JSON.stringify(JSONdata));
}

var probability = function(n) {
     return !!n && Math.random() <= n;
};

function tenAdvancedGacha() {
    var pool = JSON.parse(fs.readFileSync('gachaPool.json','utf8'));
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

    var probList=[
        [0.02, 0.04, 0.4],
        [5, 4, 3]
    ];
    var temp = [];
    for(var i=0;i<10;i++) {
        var char = "";
        if(pullCount > 50) {
            probList[0][0] = 0.02+(pullCount-50)*0.02;
        }
        
        for(var j=0;j<3;j++) {
            if(probability(probList[0][j])) {
                //get
                char = pool[probList[1][j]][1][Math.floor(Math.random()*pool[probList[1][j]][1].length)];
                if(probList[1][j] == 5) pullCount = 0;
                else pullCount++;

                break;
            } else {
                if(j < 2) continue;
                else {
                    //3 star
                    char = pool[2][1][Math.floor(Math.random()*pool[2][1].length)];
                    pullCount++;
                }
            }
        }


        fs.writeFileSync('pullCount', pullCount);
        data.gachaResultList.push({'charInstId':0,'charId':char,'isNew':0,'itemGet':[{"type":"HGG_SHD","id":4004,"count":1}]});
    }

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
    if(fs.existsSync('account.json')) {
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
//auto update gacha pool
//auto update char list to inject in
//save progress (squad, secretary, skin)
//add log