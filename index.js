const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const ngrok = require('ngrok');
app.set('port', (process.env.PORT || 8443));
app.use(express.static("public"));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
})); // support encoded bodies

(async function() {
  const url = await ngrok.connect({
    proto: 'http', // http|tcp|tls, defaults to http
    addr: 8443, // port or network address, defaults to 80
    authtoken: process.env.NGROK_API_TOKEN, // your authtoken from ngrok.com
    region: 'us', // one of ngrok regions (us, eu, au, ap), defaults to us
});
  console.log("Url : " + url);
})();

//Start Server
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

app.get('/account/syncStatus', function(req, res) {
    let data = {
        "ts": Date.now(),
        "playerDataDelta": {},
        'modified': {},
    };
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data));
});
app.get('/account/syncData', function(req, res) {
    let data = {
        "user": {
            "status": {
                "nickName": "Luna",
                "nickNumber": -1,
                "level": 130,
                "exp": 0,
                "socialPoint": 300,
                "gachaTicket": 30,
                "tenGachaTicket": 30,
                "instantFinishTicket": 100,
                "hggShard": 99999,
                "lggShard": 99999,
                "recruitLicense": 999,
                "progress": 30000,
                "buyApRemainTimes": 10,
                "apLimitUpFlag": 0,
                "uid": "00000000",
                "flags": {
                    "init": 1,
                    "obt/guide/l0-0/0_home_ui": 1,
                    "obt/guide/l0-0/1_recruit_adv": 1,
                    "obt/guide/l0-0/2_make_squad": 1,
                    "obt/guide/l0-0/3_battle_ui": 1,
                    "obt/main/level_main_00-01_beg": 1,
                    "obt/main/level_main_00-01_end": 1,
                    "obt/guide/l0-1/0_mission_main": 1,
                    "obt/guide/l0-1/1_training_level": 1,
                    "obt/guide/train/tr_01": 1,
                    "obt/main/level_main_00-02_beg": 1,
                    "obt/main/level_main_00-02_end": 1,
                    "obt/guide/l0-2/0_recruit_normal": 1,
                    "obt/guide/train/tr_03": 1,
                    "obt/main/level_main_00-04_beg": 1,
                    "obt/guide/l0-4/0_upgrade_char": 1,
                    "obt/guide/train/tr_04": 1,
                    "obt/main/level_main_00-06_end": 1,
                    "obt/guide/l0-6/0_upgrade_skill": 1,
                    "obt/guide/misc/assist_char": 1,
                    "obt/guide/train/tr_05": 1,
                    "obt/main/level_main_00-07_beg": 1,
                    "obt/main/level_main_00-07_end": 1,
                    "obt/guide/misc/auto_battle": 1,
                    "obt/guide/train/tr_06": 1,
                    "obt/main/level_main_00-08_beg": 1,
                    "obt/main/level_main_00-09_end": 1,
                    "obt/guide/l0-9/0_mission_others": 1,
                    "obt/main/level_main_00-10_beg": 1,
                    "obt/guide/l0-10/0_weekly_daily": 1,
                    "obt/main/level_main_00-11_end": 1,
                    "obt/guide/l0-11/0_building_init": 1,
                    "obt/guide/l0-11/1a_slot_clean": 1,
                    "obt/guide/l0-11/1b_slot_clean": 1,
                    "obt/guide/l0-11/1c_slot_clean": 1,
                    "obt/guide/l0-11/1d_slot_clean": 1,
                    "obt/guide/l0-11/2a_build_elect": 1,
                    "obt/guide/l0-11/2b_build_manu": 1,
                    "firstTradingRoom": 1,
                    "obt/guide/l0-11/2c_build_trade": 1,
                    "obt/guide/l0-11/3a_station_manu": 1,
                    "obt/guide/l0-11/3b_op_manu": 1,
                    "obt/guide/l0-11/3c_station_trade": 1,
                    "obt/guide/l0-11/3d_op_trade": 1,
                    "obt/guide/bd/control_intro": 1,
                    "obt/guide/shop/0_main_and_extraqc": 1,
                    "obt/guide/shop/1_furni": 1,
                    "obt/guide/bd/dorm_intro": 1,
                    "obt/main/level_main_01-01_beg": 1,
                    "obt/main/level_main_01-01_end": 1,
                    "obt/guide/l1-1/0_building_control": 1,
                    "obt/guide/bd/workshop_op": 1,
                    "obt/guide/shop/2_social": 1,
                    "obt/guide/l1-2/0_upgrade_char_again": 1,
                    "obt/main/level_main_01-03_beg": 1,
                    "obt/main/level_main_01-03_end": 1,
                    "obt/main/level_main_01-04_beg": 1,
                    "obt/guide/l1-5/0_campaign_stage": 1,
                    "obt/guide/bd/meeting_intro": 1,
                    "obt/main/level_main_01-06_beg": 1,
                    "obt/main/level_main_01-07_beg": 1,
                    "obt/main/level_main_01-07_end": 1,
                    "obt/main/level_main_01-08_beg": 1,
                    "obt/main/level_main_01-10_end": 1,
                    "obt/main/level_main_01-12_beg": 1,
                    "obt/main/level_main_01-12_end": 1,
                    "obt/main/level_main_02-01_beg": 1,
                    "obt/guide/bd/drone_accel": 1,
                    "obt/main/level_main_02-01_end": 1,
                    "obt/main/level_main_02-02_beg": 1,
                    "obt/main/level_main_02-02_end": 1,
                    "obt/main/level_main_02-03_beg": 1,
                    "obt/main/level_main_02-03_end": 1,
                    "obt/guide/l2-3/0_weekly_evolve": 1,
                    "obt/main/level_main_02-04_beg": 1,
                    "obt/main/level_main_02-04_end": 1,
                    "obt/guide/bd/hr_intro": 1,
                    "obt/main/level_main_02-05_beg": 1,
                    "obt/main/level_main_02-05_end": 1,
                    "obt/main/level_main_02-06_beg": 1,
                    "obt/main/level_main_02-06_end": 1,
                    "obt/main/level_main_02-07_beg": 1,
                    "obt/main/level_main_02-07_end": 1,
                    "obt/main/level_main_02-08_beg": 1,
                    "obt/main/level_main_02-08_end": 1,
                    "obt/guide/l2-8/0_fstar_level": 1,
                    "obt/main/level_main_02-09_beg": 1,
                    "obt/main/level_main_02-09_end": 1,
                    "obt/main/level_main_02-10_beg": 1,
                    "obt/main/level_main_02-10_end": 1,
                    "obt/main/level_main_03-01_beg": 1,
                    "obt/main/level_main_03-01_end": 1,
                    "obt/main/level_main_03-02_beg": 1,
                    "obt/main/level_main_03-02_end": 1,
                    "obt/main/level_main_03-03_beg": 1,
                    "obt/main/level_main_03-03_end": 1,
                    "obt/main/level_main_03-04_beg": 1,
                    "obt/main/level_main_03-04_end": 1,
                    "obt/main/level_main_03-05_beg": 1,
                    "obt/main/level_main_03-05_end": 1,
                    "obt/main/level_main_03-06_beg": 1,
                    "obt/main/level_main_03-06_end": 1,
                    "obt/main/level_main_03-07_beg": 1,
                    "obt/main/level_main_03-07_end": 1,
                    "obt/main/level_main_03-08_beg": 1,
                    "obt/main/level_main_03-08_end": 1,
                    "obt/main/level_main_04-01_beg": 1,
                    "obt/main/level_main_04-02_beg": 1,
                    "obt/main/level_main_04-01_end": 1,
                    "obt/main/level_main_04-02_end": 1,
                    "obt/main/level_main_04-03_beg": 1,
                    "obt/main/level_main_04-03_end": 1,
                    "obt/main/level_main_04-04_beg": 1,
                    "obt/main/level_main_04-04_end": 1,
                    "obt/main/level_main_04-05_beg": 1,
                    "obt/main/level_main_04-05_end": 1,
                    "obt/main/level_main_04-06_beg": 1,
                    "obt/main/level_main_04-06_end": 1,
                    "obt/main/level_main_04-07_beg": 1,
                    "obt/main/level_main_04-07_end": 1,
                    "obt/main/level_main_04-08_beg": 1,
                    "obt/main/level_main_04-08_end": 1,
                    "obt/guide/bd/drone_exchange": 1,
                    "obt/main/level_main_04-09_beg": 1,
                    "obt/main/level_main_04-09_end": 1,
                    "obt/main/level_main_04-10_beg": 1,
                    "obt/main/level_main_04-10_end": 1,
                    "obt/main/level_main_05-01_beg": 1,
                    "obt/main/level_main_05-01_end": 1,
                    "obt/main/level_main_05-02_beg": 1,
                    "obt/main/level_main_05-02_end": 1,
                    "obt/main/level_main_05-03_beg": 1,
                    "obt/guide/bd/trade_lv3": 1,
                    "obt/main/level_main_05-03_end": 1,
                    "obt/main/level_main_05-04_beg": 1,
                    "obt/main/level_main_05-04_end": 1,
                    "obt/main/level_main_05-06_beg": 1,
                    "obt/main/level_main_05-06_end": 1,
                    "obt/main/level_main_05-07_beg": 1,
                    "obt/main/level_main_05-07_end": 1,
                    "obt/main/level_main_05-09_beg": 1,
                    "obt/main/level_main_05-09_end": 1,
                    "obt/main/level_main_05-10_beg": 1,
                    "obt/main/level_main_05-10_end": 1,
                    "activities/act3d0/level_act3d0_01_beg": 1,
                    "activities/act3d0/level_act3d0_01_end": 1,
                    "activities/act3d0/level_act3d0_02_beg": 1,
                    "activities/act3d0/level_act3d0_02_end": 1,
                    "activities/act3d0/level_act3d0_03_beg": 1,
                    "activities/act3d0/level_act3d0_03_end": 1,
                    "activities/act3d0/level_act3d0_04_beg": 1,
                    "activities/act3d0/level_act3d0_04_end": 1,
                    "activities/act3d0/level_act3d0_05_beg": 1,
                    "activities/act3d0/level_act3d0_05_end": 1,
                    "activities/act3d0/level_act3d0_06_beg": 1,
                    "activities/act3d0/level_act3d0_06_end": 1,
                    "activities/act3d0/level_act3d0_07_beg": 1,
                    "activities/act3d0/level_act3d0_07_end": 1,
                    "activities/act3d0/level_act3d0_08_beg": 1,
                    "activities/act3d0/level_act3d0_08_end": 1,
                    "activities/act3d0/level_act3d0_ex01_end": 1,
                    "activities/act3d0/level_act3d0_ex03_end": 1,
                    "activities/act5d0/ui_act5d0_firstenter": 1,
                    "activities/act5d0/level_act5d0_01_beg": 1,
                    "activities/act5d0/level_act5d0_01_end": 1,
                    "activities/act5d0/level_act5d0_02_beg": 1,
                    "activities/act5d0/level_act5d0_02_end": 1,
                    "activities/act5d0/level_act5d0_03_beg": 1,
                    "activities/act5d0/level_act5d0_03_end": 1,
                    "activities/act5d0/level_act5d0_04_beg": 1,
                    "activities/act5d0/level_act5d0_04_end": 1,
                    "activities/act5d0/level_act5d0_05_beg": 1,
                    "activities/act5d0/level_act5d0_05_end": 1,
                    "activities/act5d0/level_act5d0_06_beg": 1,
                    "activities/act5d0/level_act5d0_06_end": 1,
                    "activities/act5d0/level_act5d0_07_beg": 1,
                    "activities/act5d0/level_act5d0_07_end": 1,
                    "activities/act5d0/level_act5d0_08_beg": 1,
                    "activities/act5d0/level_act5d0_08_end": 1,
                    "activities/act5d0/level_act5d0_09_beg": 1,
                    "activities/act5d0/level_act5d0_09_end": 1,
                    "activities/act5d0/level_act5d0_10_beg": 1,
                    "activities/act5d0/level_act5d0_10_end": 1,
                    "activities/act5d0/level_act5d0_ex01_end": 1,
                    "activities/act5d0/level_act5d0_ex02_end": 1,
                    "activities/act5d0/level_act5d0_ex03_end": 1
                },
                "ap": 130,
                "maxAp": 130,
                "payDiamond": 242120,
                "freeDiamond": 244145,
                "diamondShard": 662734,
                "gold": 8724312,
                "practiceTicket": 20,
                "lastRefreshTs": Date.now(),
                "lastApAddTime": Date.now(),
                "mainStageProgress": "st_05-01",
                "registerTs": 1582341343,
                "lastOnlineTs": 1591376654,
                "serverName": "Terra",
                "avatarId": "0",
                "resume": "nee",
                "friendNumLimit": 50,
                "monthlySubscriptionStartTime": 0,
                "monthlySubscriptionEndTime": 0,
                "secretary": "char_213_mostma",
                "secretarySkinId": "char_213_mostma#2",
                "IggShard": 123094,
                "resumse": "Arknights Luna"
            },
            "pushFlags": {
                "hasGifts": 0,
                "hasFriendRequest": 0,
                "hasClues": 0,
                "hasFreeLevelGP": 0,
                "status": 1591399426
            },
            "shop": {
                "LS": {
                    "curShopId": "lggShdShopnumber6",
                    "curGroupId": "lggShdShopnumber6_Group_1",
                    "info": [{
                            "id": "LS_lggShdShopnumber6_1",
                            "count": 2
                        },
                        {
                            "id": "LS_lggShdShopnumber6_2",
                            "count": 0
                        },
                        {
                            "id": "LS_lggShdShopnumber6_3",
                            "count": 6
                        },
                        {
                            "id": "LS_lggShdShopnumber6_4",
                            "count": 0
                        },
                        {
                            "id": "LS_lggShdShopnumber6_5",
                            "count": 0
                        },
                        {
                            "id": "LS_lggShdShopnumber6_6",
                            "count": 0
                        },
                        {
                            "id": "LS_lggShdShopnumber6_7",
                            "count": 0
                        }
                    ]
                },
                "HS": {
                    "curShopId": "",
                    "info": [],
                    "progressInfo": {}
                },
                "ES": {
                    "curShopId": "xShdShopnumber2",
                    "info": [{
                            "id": "ES_xShdShopnumber2_3",
                            "count": 3
                        },
                        {
                            "id": "ES_xShdShopnumber2_1",
                            "count": 1
                        }
                    ]
                },
                "CASH": {
                    "info": []
                },
                "GP": {
                    "oneTime": {
                        "info": []
                    },
                    "level": {
                        "info": [{
                                "id": "GP_L_5",
                                "count": 1
                            },
                            {
                                "id": "GP_freeL_5",
                                "count": 1
                            },
                            {
                                "id": "GP_freeL_10",
                                "count": 1
                            },
                            {
                                "id": "GP_L_10",
                                "count": 1
                            },
                            {
                                "id": "GP_freeL_15",
                                "count": 1
                            },
                            {
                                "id": "GP_freeL_20",
                                "count": 1
                            },
                            {
                                "id": "GP_L_15",
                                "count": 1
                            },
                            {
                                "id": "GP_freeL_25",
                                "count": 1
                            },
                            {
                                "id": "GP_L_20",
                                "count": 1
                            },
                            {
                                "id": "GP_L_25",
                                "count": 1
                            },
                            {
                                "id": "GP_freeL_30",
                                "count": 1
                            },
                            {
                                "id": "GP_L_30",
                                "count": 1
                            },
                            {
                                "id": "GP_freeL_35",
                                "count": 1
                            },
                            {
                                "id": "GP_L_35",
                                "count": 1
                            },
                            {
                                "id": "GP_freeL_40",
                                "count": 1
                            },
                            {
                                "id": "GP_freeL_45",
                                "count": 1
                            },
                            {
                                "id": "GP_freeL_50",
                                "count": 1
                            },
                            {
                                "id": "GP_freeL_55",
                                "count": 1
                            },
                            {
                                "id": "GP_L_40",
                                "count": 1
                            }
                        ]
                    },
                    "weekly": {
                        "curGroupId": "gW_21",
                        "info": []
                    },
                    "monthly": {
                        "curGroupId": "gM_5",
                        "info": []
                    }
                },
                "FURNI": {
                    "info": [{
                            "id": "safetyZone_1",
                            "count": 1
                        },
                        {
                            "id": "safetyZone_10",
                            "count": 1
                        },
                        {
                            "id": "safetyZone_11",
                            "count": 1
                        },
                        {
                            "id": "safetyZone_12",
                            "count": 1
                        },
                        {
                            "id": "safetyZone_13",
                            "count": 1
                        },
                        {
                            "id": "safetyZone_14",
                            "count": 1
                        },
                        {
                            "id": "safetyZone_15",
                            "count": 1
                        },
                        {
                            "id": "safetyZone_16",
                            "count": 1
                        },
                        {
                            "id": "safetyZone_17",
                            "count": 2
                        },
                        {
                            "id": "safetyZone_18",
                            "count": 1
                        },
                        {
                            "id": "safetyZone_19",
                            "count": 1
                        },
                        {
                            "id": "safetyZone_2",
                            "count": 1
                        },
                        {
                            "id": "safetyZone_20",
                            "count": 1
                        },
                        {
                            "id": "safetyZone_3",
                            "count": 1
                        },
                        {
                            "id": "safetyZone_4",
                            "count": 1
                        },
                        {
                            "id": "safetyZone_5",
                            "count": 1
                        },
                        {
                            "id": "safetyZone_6",
                            "count": 1
                        },
                        {
                            "id": "safetyZone_7",
                            "count": 1
                        },
                        {
                            "id": "safetyZone_8",
                            "count": 1
                        },
                        {
                            "id": "safetyZone_9",
                            "count": 1
                        },
                        {
                            "id": "beach_01_1",
                            "count": 1
                        },
                        {
                            "id": "beach_01_10",
                            "count": 1
                        },
                        {
                            "id": "beach_01_11",
                            "count": 1
                        },
                        {
                            "id": "beach_01_12",
                            "count": 1
                        },
                        {
                            "id": "beach_01_13",
                            "count": 1
                        },
                        {
                            "id": "beach_01_14",
                            "count": 1
                        },
                        {
                            "id": "beach_01_15",
                            "count": 2
                        },
                        {
                            "id": "beach_01_16",
                            "count": 1
                        },
                        {
                            "id": "beach_01_17",
                            "count": 1
                        },
                        {
                            "id": "beach_01_18",
                            "count": 1
                        },
                        {
                            "id": "beach_01_2",
                            "count": 1
                        },
                        {
                            "id": "beach_01_3",
                            "count": 1
                        },
                        {
                            "id": "beach_01_4",
                            "count": 1
                        },
                        {
                            "id": "beach_01_5",
                            "count": 1
                        },
                        {
                            "id": "beach_01_6",
                            "count": 1
                        },
                        {
                            "id": "beach_01_7",
                            "count": 1
                        },
                        {
                            "id": "beach_01_8",
                            "count": 1
                        },
                        {
                            "id": "beach_01_9",
                            "count": 1
                        }
                    ],
                    "groupInfo": {
                        "safetyZone_2019": 1,
                        "beach_2020": 1
                    }
                },
                "SOCIAL": {
                    "curShopId": "SOCIAL20200605",
                    "info": [{
                        "id": "SOCIAL20200605_T2_goods_11_2",
                        "count": 1
                    }],
                    "charPurchase": {
                        "char_198_blackd": 6,
                        "char_187_ccheal": 6,
                        "char_260_durnar": 6
                    }
                }
            },
            "dungeon": {
                "stages": {
                    "main_00-01": {
                        "stageId": "main_00-01",
                        "completeTimes": 2,
                        "startTimes": 3,
                        "practiceTimes": 1,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "wk_melee_1": {
                        "stageId": "wk_melee_1",
                        "completeTimes": 1,
                        "startTimes": 2,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "wk_armor_1": {
                        "stageId": "wk_armor_1",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "wk_kc_1": {
                        "stageId": "wk_kc_1",
                        "completeTimes": 1,
                        "startTimes": 2,
                        "practiceTimes": 1,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "wk_toxic_1": {
                        "stageId": "wk_toxic_1",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "wk_fly_1": {
                        "stageId": "wk_fly_1",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "pro_a_1": {
                        "stageId": "pro_a_1",
                        "completeTimes": 40,
                        "startTimes": 46,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "pro_b_1": {
                        "stageId": "pro_b_1",
                        "completeTimes": 32,
                        "startTimes": 40,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "pro_c_1": {
                        "stageId": "pro_c_1",
                        "completeTimes": 15,
                        "startTimes": 15,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "pro_d_1": {
                        "stageId": "pro_d_1",
                        "completeTimes": 26,
                        "startTimes": 27,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "guide_01": {
                        "stageId": "guide_01",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "guide_02": {
                        "stageId": "guide_02",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "tr_01": {
                        "stageId": "tr_01",
                        "completeTimes": 4,
                        "startTimes": 4,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_00-02": {
                        "stageId": "main_00-02",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "tr_02": {
                        "stageId": "tr_02",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_00-03": {
                        "stageId": "main_00-03",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "tr_03": {
                        "stageId": "tr_03",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_00-04": {
                        "stageId": "main_00-04",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "tr_04": {
                        "stageId": "tr_04",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_00-05": {
                        "stageId": "main_00-05",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "main_00-06": {
                        "stageId": "main_00-06",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "tr_05": {
                        "stageId": "tr_05",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_00-07": {
                        "stageId": "main_00-07",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "tr_06": {
                        "stageId": "tr_06",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_00-08": {
                        "stageId": "main_00-08",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "main_00-09": {
                        "stageId": "main_00-09",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "tr_07": {
                        "stageId": "tr_07",
                        "completeTimes": 3,
                        "startTimes": 7,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_00-10": {
                        "stageId": "main_00-10",
                        "completeTimes": 1,
                        "startTimes": 3,
                        "practiceTimes": 2,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 1
                    },
                    "main_00-11": {
                        "stageId": "main_00-11",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 1
                    },
                    "main_01-01": {
                        "stageId": "main_01-01",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "main_01-02": {
                        "stageId": "main_01-02",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_01-03": {
                        "stageId": "main_01-03",
                        "completeTimes": 1,
                        "startTimes": 3,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "main_01-04": {
                        "stageId": "main_01-04",
                        "completeTimes": 2,
                        "startTimes": 3,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "main_01-05": {
                        "stageId": "main_01-05",
                        "completeTimes": 3,
                        "startTimes": 9,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "tr_08": {
                        "stageId": "tr_08",
                        "completeTimes": 1,
                        "startTimes": 2,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "camp_01": {
                        "stageId": "camp_01",
                        "completeTimes": 0,
                        "startTimes": 0,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "main_01-06": {
                        "stageId": "main_01-06",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "tr_09": {
                        "stageId": "tr_09",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_01-07": {
                        "stageId": "main_01-07",
                        "completeTimes": 52,
                        "startTimes": 54,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "main_01-08": {
                        "stageId": "main_01-08",
                        "completeTimes": 2,
                        "startTimes": 3,
                        "practiceTimes": 1,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "tr_10": {
                        "stageId": "tr_10",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_01-09": {
                        "stageId": "main_01-09",
                        "completeTimes": 2,
                        "startTimes": 2,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "main_01-10": {
                        "stageId": "main_01-10",
                        "completeTimes": 1,
                        "startTimes": 3,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "main_01-11": {
                        "stageId": "main_01-11",
                        "completeTimes": 3,
                        "startTimes": 3,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_01-12": {
                        "stageId": "main_01-12",
                        "completeTimes": 3,
                        "startTimes": 6,
                        "practiceTimes": 2,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "tr_11": {
                        "stageId": "tr_11",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_02-01": {
                        "stageId": "main_02-01",
                        "completeTimes": 2,
                        "startTimes": 2,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "wk_armor_2": {
                        "stageId": "wk_armor_2",
                        "completeTimes": 1,
                        "startTimes": 8,
                        "practiceTimes": 1,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "sub_02-01": {
                        "stageId": "sub_02-01",
                        "completeTimes": 8,
                        "startTimes": 10,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "main_02-02": {
                        "stageId": "main_02-02",
                        "completeTimes": 4,
                        "startTimes": 13,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "sub_02-02": {
                        "stageId": "sub_02-02",
                        "completeTimes": 1,
                        "startTimes": 7,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "sub_02-03": {
                        "stageId": "sub_02-03",
                        "completeTimes": 1,
                        "startTimes": 4,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "sub_02-04": {
                        "stageId": "sub_02-04",
                        "completeTimes": 2,
                        "startTimes": 27,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "main_02-03": {
                        "stageId": "main_02-03",
                        "completeTimes": 6,
                        "startTimes": 24,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "tr_12": {
                        "stageId": "tr_12",
                        "completeTimes": 1,
                        "startTimes": 2,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_02-04": {
                        "stageId": "main_02-04",
                        "completeTimes": 18,
                        "startTimes": 20,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "sub_02-05": {
                        "stageId": "sub_02-05",
                        "completeTimes": 1,
                        "startTimes": 9,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "sub_02-06": {
                        "stageId": "sub_02-06",
                        "completeTimes": 1,
                        "startTimes": 8,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "wk_armor_3": {
                        "stageId": "wk_armor_3",
                        "completeTimes": 17,
                        "startTimes": 19,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "wk_armor_4": {
                        "stageId": "wk_armor_4",
                        "completeTimes": 42,
                        "startTimes": 46,
                        "practiceTimes": 1,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "sub_02-07": {
                        "stageId": "sub_02-07",
                        "completeTimes": 1,
                        "startTimes": 4,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "tr_13": {
                        "stageId": "tr_13",
                        "completeTimes": 1,
                        "startTimes": 2,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "pro_b_2": {
                        "stageId": "pro_b_2",
                        "completeTimes": 23,
                        "startTimes": 45,
                        "practiceTimes": 3,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "pro_a_2": {
                        "stageId": "pro_a_2",
                        "completeTimes": 30,
                        "startTimes": 35,
                        "practiceTimes": 3,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "main_02-05": {
                        "stageId": "main_02-05",
                        "completeTimes": 12,
                        "startTimes": 30,
                        "practiceTimes": 1,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "main_02-06": {
                        "stageId": "main_02-06",
                        "completeTimes": 1,
                        "startTimes": 3,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "tr_14": {
                        "stageId": "tr_14",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_02-07": {
                        "stageId": "main_02-07",
                        "completeTimes": 1,
                        "startTimes": 14,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "wk_kc_2": {
                        "stageId": "wk_kc_2",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "sub_02-08": {
                        "stageId": "sub_02-08",
                        "completeTimes": 1,
                        "startTimes": 3,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "sub_02-09": {
                        "stageId": "sub_02-09",
                        "completeTimes": 1,
                        "startTimes": 2,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "main_02-08": {
                        "stageId": "main_02-08",
                        "completeTimes": 47,
                        "startTimes": 53,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "main_00-01#f#": {
                        "stageId": "main_00-01#f#",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_00-02#f#": {
                        "stageId": "main_00-02#f#",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_00-03#f#": {
                        "stageId": "main_00-03#f#",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_00-04#f#": {
                        "stageId": "main_00-04#f#",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_00-05#f#": {
                        "stageId": "main_00-05#f#",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_00-06#f#": {
                        "stageId": "main_00-06#f#",
                        "completeTimes": 1,
                        "startTimes": 2,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_00-07#f#": {
                        "stageId": "main_00-07#f#",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_00-08#f#": {
                        "stageId": "main_00-08#f#",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_00-09#f#": {
                        "stageId": "main_00-09#f#",
                        "completeTimes": 1,
                        "startTimes": 3,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_00-10#f#": {
                        "stageId": "main_00-10#f#",
                        "completeTimes": 1,
                        "startTimes": 2,
                        "practiceTimes": 1,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_00-11#f#": {
                        "stageId": "main_00-11#f#",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_01-01#f#": {
                        "stageId": "main_01-01#f#",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_01-03#f#": {
                        "stageId": "main_01-03#f#",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_01-04#f#": {
                        "stageId": "main_01-04#f#",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_01-05#f#": {
                        "stageId": "main_01-05#f#",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_01-06#f#": {
                        "stageId": "main_01-06#f#",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_01-07#f#": {
                        "stageId": "main_01-07#f#",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_01-08#f#": {
                        "stageId": "main_01-08#f#",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_01-09#f#": {
                        "stageId": "main_01-09#f#",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_01-10#f#": {
                        "stageId": "main_01-10#f#",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_01-12#f#": {
                        "stageId": "main_01-12#f#",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_02-01#f#": {
                        "stageId": "main_02-01#f#",
                        "completeTimes": 1,
                        "startTimes": 2,
                        "practiceTimes": 1,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_02-02#f#": {
                        "stageId": "main_02-02#f#",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_02-03#f#": {
                        "stageId": "main_02-03#f#",
                        "completeTimes": 1,
                        "startTimes": 2,
                        "practiceTimes": 1,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_02-04#f#": {
                        "stageId": "main_02-04#f#",
                        "completeTimes": 1,
                        "startTimes": 2,
                        "practiceTimes": 1,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_02-05#f#": {
                        "stageId": "main_02-05#f#",
                        "completeTimes": 1,
                        "startTimes": 2,
                        "practiceTimes": 1,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_02-06#f#": {
                        "stageId": "main_02-06#f#",
                        "completeTimes": 1,
                        "startTimes": 2,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_02-07#f#": {
                        "stageId": "main_02-07#f#",
                        "completeTimes": 1,
                        "startTimes": 3,
                        "practiceTimes": 2,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_02-08#f#": {
                        "stageId": "main_02-08#f#",
                        "completeTimes": 1,
                        "startTimes": 2,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_02-09": {
                        "stageId": "main_02-09",
                        "completeTimes": 7,
                        "startTimes": 15,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "camp_02": {
                        "stageId": "camp_02",
                        "completeTimes": 0,
                        "startTimes": 0,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "wk_kc_3": {
                        "stageId": "wk_kc_3",
                        "completeTimes": 2,
                        "startTimes": 4,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "wk_kc_4": {
                        "stageId": "wk_kc_4",
                        "completeTimes": 3,
                        "startTimes": 28,
                        "practiceTimes": 5,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "main_02-09#f#": {
                        "stageId": "main_02-09#f#",
                        "completeTimes": 1,
                        "startTimes": 2,
                        "practiceTimes": 1,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "sub_02-10": {
                        "stageId": "sub_02-10",
                        "completeTimes": 1,
                        "startTimes": 3,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "sub_02-11": {
                        "stageId": "sub_02-11",
                        "completeTimes": 1,
                        "startTimes": 7,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "sub_02-12": {
                        "stageId": "sub_02-12",
                        "completeTimes": 1,
                        "startTimes": 10,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "main_02-10": {
                        "stageId": "main_02-10",
                        "completeTimes": 3,
                        "startTimes": 14,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "main_03-01": {
                        "stageId": "main_03-01",
                        "completeTimes": 23,
                        "startTimes": 24,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "main_02-10#f#": {
                        "stageId": "main_02-10#f#",
                        "completeTimes": 1,
                        "startTimes": 4,
                        "practiceTimes": 3,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_03-01#f#": {
                        "stageId": "main_03-01#f#",
                        "completeTimes": 1,
                        "startTimes": 2,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_03-02": {
                        "stageId": "main_03-02",
                        "completeTimes": 26,
                        "startTimes": 28,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "main_03-02#f#": {
                        "stageId": "main_03-02#f#",
                        "completeTimes": 1,
                        "startTimes": 2,
                        "practiceTimes": 1,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_03-03": {
                        "stageId": "main_03-03",
                        "completeTimes": 58,
                        "startTimes": 69,
                        "practiceTimes": 2,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "main_03-03#f#": {
                        "stageId": "main_03-03#f#",
                        "completeTimes": 1,
                        "startTimes": 2,
                        "practiceTimes": 1,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "tr_15": {
                        "stageId": "tr_15",
                        "completeTimes": 1,
                        "startTimes": 2,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_03-04": {
                        "stageId": "main_03-04",
                        "completeTimes": 60,
                        "startTimes": 75,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "sub_03-1-1": {
                        "stageId": "sub_03-1-1",
                        "completeTimes": 12,
                        "startTimes": 14,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "sub_03-1-2": {
                        "stageId": "sub_03-1-2",
                        "completeTimes": 5,
                        "startTimes": 13,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "main_03-04#f#": {
                        "stageId": "main_03-04#f#",
                        "completeTimes": 1,
                        "startTimes": 5,
                        "practiceTimes": 1,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_03-05": {
                        "stageId": "main_03-05",
                        "completeTimes": 1,
                        "startTimes": 4,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "main_03-05#f#": {
                        "stageId": "main_03-05#f#",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_03-06": {
                        "stageId": "main_03-06",
                        "completeTimes": 1,
                        "startTimes": 5,
                        "practiceTimes": 1,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "main_03-06#f#": {
                        "stageId": "main_03-06#f#",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_03-07": {
                        "stageId": "main_03-07",
                        "completeTimes": 4,
                        "startTimes": 8,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "main_03-07#f#": {
                        "stageId": "main_03-07#f#",
                        "completeTimes": 1,
                        "startTimes": 4,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_03-08": {
                        "stageId": "main_03-08",
                        "completeTimes": 5,
                        "startTimes": 14,
                        "practiceTimes": 1,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "sub_03-2-1": {
                        "stageId": "sub_03-2-1",
                        "completeTimes": 9,
                        "startTimes": 9,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "main_03-08#f#": {
                        "stageId": "main_03-08#f#",
                        "completeTimes": 1,
                        "startTimes": 6,
                        "practiceTimes": 4,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_04-01": {
                        "stageId": "main_04-01",
                        "completeTimes": 2,
                        "startTimes": 5,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "main_04-02": {
                        "stageId": "main_04-02",
                        "completeTimes": 27,
                        "startTimes": 32,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "sub_03-2-2": {
                        "stageId": "sub_03-2-2",
                        "completeTimes": 3,
                        "startTimes": 4,
                        "practiceTimes": 1,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "main_04-01#f#": {
                        "stageId": "main_04-01#f#",
                        "completeTimes": 1,
                        "startTimes": 2,
                        "practiceTimes": 1,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_04-02#f#": {
                        "stageId": "main_04-02#f#",
                        "completeTimes": 1,
                        "startTimes": 2,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_04-03": {
                        "stageId": "main_04-03",
                        "completeTimes": 1,
                        "startTimes": 10,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "main_04-03#f#": {
                        "stageId": "main_04-03#f#",
                        "completeTimes": 1,
                        "startTimes": 3,
                        "practiceTimes": 2,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_04-04": {
                        "stageId": "main_04-04",
                        "completeTimes": 71,
                        "startTimes": 82,
                        "practiceTimes": 1,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "sub_04-1-1": {
                        "stageId": "sub_04-1-1",
                        "completeTimes": 5,
                        "startTimes": 6,
                        "practiceTimes": 1,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "main_04-04#f#": {
                        "stageId": "main_04-04#f#",
                        "completeTimes": 1,
                        "startTimes": 7,
                        "practiceTimes": 3,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_04-05": {
                        "stageId": "main_04-05",
                        "completeTimes": 16,
                        "startTimes": 85,
                        "practiceTimes": 40,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "wk_kc_5": {
                        "stageId": "wk_kc_5",
                        "completeTimes": 59,
                        "startTimes": 117,
                        "practiceTimes": 43,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "pro_d_2": {
                        "stageId": "pro_d_2",
                        "completeTimes": 9,
                        "startTimes": 13,
                        "practiceTimes": 2,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "main_04-05#f#": {
                        "stageId": "main_04-05#f#",
                        "completeTimes": 1,
                        "startTimes": 2,
                        "practiceTimes": 1,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_04-06": {
                        "stageId": "main_04-06",
                        "completeTimes": 15,
                        "startTimes": 22,
                        "practiceTimes": 4,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "main_04-06#f#": {
                        "stageId": "main_04-06#f#",
                        "completeTimes": 1,
                        "startTimes": 2,
                        "practiceTimes": 1,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_04-07": {
                        "stageId": "main_04-07",
                        "completeTimes": 1,
                        "startTimes": 9,
                        "practiceTimes": 8,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "sub_04-2-1": {
                        "stageId": "sub_04-2-1",
                        "completeTimes": 1,
                        "startTimes": 5,
                        "practiceTimes": 4,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 1
                    },
                    "main_04-07#f#": {
                        "stageId": "main_04-07#f#",
                        "completeTimes": 1,
                        "startTimes": 5,
                        "practiceTimes": 4,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_04-08": {
                        "stageId": "main_04-08",
                        "completeTimes": 11,
                        "startTimes": 14,
                        "practiceTimes": 3,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "main_04-08#f#": {
                        "stageId": "main_04-08#f#",
                        "completeTimes": 0,
                        "startTimes": 0,
                        "practiceTimes": 0,
                        "state": 0,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_04-09": {
                        "stageId": "main_04-09",
                        "completeTimes": 2,
                        "startTimes": 43,
                        "practiceTimes": 13,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "pro_c_2": {
                        "stageId": "pro_c_2",
                        "completeTimes": 9,
                        "startTimes": 11,
                        "practiceTimes": 2,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "sub_03-2-3": {
                        "stageId": "sub_03-2-3",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "wk_armor_5": {
                        "stageId": "wk_armor_5",
                        "completeTimes": 9,
                        "startTimes": 34,
                        "practiceTimes": 22,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "wk_melee_2": {
                        "stageId": "wk_melee_2",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "wk_melee_3": {
                        "stageId": "wk_melee_3",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "wk_melee_4": {
                        "stageId": "wk_melee_4",
                        "completeTimes": 1,
                        "startTimes": 2,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "wk_melee_5": {
                        "stageId": "wk_melee_5",
                        "completeTimes": 36,
                        "startTimes": 53,
                        "practiceTimes": 12,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "main_04-10": {
                        "stageId": "main_04-10",
                        "completeTimes": 1,
                        "startTimes": 9,
                        "practiceTimes": 6,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "sub_04-3-1": {
                        "stageId": "sub_04-3-1",
                        "completeTimes": 1,
                        "startTimes": 2,
                        "practiceTimes": 1,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "camp_03": {
                        "stageId": "camp_03",
                        "completeTimes": 0,
                        "startTimes": 0,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "sub_04-1-2": {
                        "stageId": "sub_04-1-2",
                        "completeTimes": 1,
                        "startTimes": 5,
                        "practiceTimes": 4,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "sub_04-1-3": {
                        "stageId": "sub_04-1-3",
                        "completeTimes": 1,
                        "startTimes": 10,
                        "practiceTimes": 7,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "main_04-10#f#": {
                        "stageId": "main_04-10#f#",
                        "completeTimes": 1,
                        "startTimes": 7,
                        "practiceTimes": 6,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_05-01": {
                        "stageId": "main_05-01",
                        "completeTimes": 2,
                        "startTimes": 25,
                        "practiceTimes": 17,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "main_05-02": {
                        "stageId": "main_05-02",
                        "completeTimes": 2,
                        "startTimes": 8,
                        "practiceTimes": 3,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "main_05-01#f#": {
                        "stageId": "main_05-01#f#",
                        "completeTimes": 1,
                        "startTimes": 3,
                        "practiceTimes": 2,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_05-02#f#": {
                        "stageId": "main_05-02#f#",
                        "completeTimes": 1,
                        "startTimes": 2,
                        "practiceTimes": 1,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_05-03": {
                        "stageId": "main_05-03",
                        "completeTimes": 38,
                        "startTimes": 70,
                        "practiceTimes": 29,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "sub_05-1-1": {
                        "stageId": "sub_05-1-1",
                        "completeTimes": 1,
                        "startTimes": 3,
                        "practiceTimes": 2,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "wk_toxic_2": {
                        "stageId": "wk_toxic_2",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "wk_toxic_3": {
                        "stageId": "wk_toxic_3",
                        "completeTimes": 1,
                        "startTimes": 3,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "wk_toxic_4": {
                        "stageId": "wk_toxic_4",
                        "completeTimes": 2,
                        "startTimes": 3,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "wk_toxic_5": {
                        "stageId": "wk_toxic_5",
                        "completeTimes": 1,
                        "startTimes": 5,
                        "practiceTimes": 4,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "main_04-09#f#": {
                        "stageId": "main_04-09#f#",
                        "completeTimes": 0,
                        "startTimes": 5,
                        "practiceTimes": 5,
                        "state": 1,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "wk_fly_2": {
                        "stageId": "wk_fly_2",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "wk_fly_3": {
                        "stageId": "wk_fly_3",
                        "completeTimes": 3,
                        "startTimes": 3,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "wk_fly_4": {
                        "stageId": "wk_fly_4",
                        "completeTimes": 1,
                        "startTimes": 2,
                        "practiceTimes": 1,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "wk_fly_5": {
                        "stageId": "wk_fly_5",
                        "completeTimes": 8,
                        "startTimes": 33,
                        "practiceTimes": 22,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "sub_04-2-2": {
                        "stageId": "sub_04-2-2",
                        "completeTimes": 1,
                        "startTimes": 3,
                        "practiceTimes": 1,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "sub_04-2-3": {
                        "stageId": "sub_04-2-3",
                        "completeTimes": 1,
                        "startTimes": 2,
                        "practiceTimes": 1,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "sub_04-3-2": {
                        "stageId": "sub_04-3-2",
                        "completeTimes": 1,
                        "startTimes": 4,
                        "practiceTimes": 3,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 1
                    },
                    "sub_04-3-3": {
                        "stageId": "sub_04-3-3",
                        "completeTimes": 1,
                        "startTimes": 10,
                        "practiceTimes": 9,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "sub_05-1-2": {
                        "stageId": "sub_05-1-2",
                        "completeTimes": 1,
                        "startTimes": 2,
                        "practiceTimes": 1,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "main_05-03#f#": {
                        "stageId": "main_05-03#f#",
                        "completeTimes": 0,
                        "startTimes": 1,
                        "practiceTimes": 1,
                        "state": 1,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_05-04": {
                        "stageId": "main_05-04",
                        "completeTimes": 1,
                        "startTimes": 4,
                        "practiceTimes": 2,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_05-04#f#": {
                        "stageId": "main_05-04#f#",
                        "completeTimes": 0,
                        "startTimes": 0,
                        "practiceTimes": 0,
                        "state": 0,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_05-05": {
                        "stageId": "main_05-05",
                        "completeTimes": 1,
                        "startTimes": 2,
                        "practiceTimes": 1,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "main_05-05#f#": {
                        "stageId": "main_05-05#f#",
                        "completeTimes": 0,
                        "startTimes": 0,
                        "practiceTimes": 0,
                        "state": 0,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_05-06": {
                        "stageId": "main_05-06",
                        "completeTimes": 1,
                        "startTimes": 7,
                        "practiceTimes": 3,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_05-06#f#": {
                        "stageId": "main_05-06#f#",
                        "completeTimes": 0,
                        "startTimes": 0,
                        "practiceTimes": 0,
                        "state": 0,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_05-07": {
                        "stageId": "main_05-07",
                        "completeTimes": 1,
                        "startTimes": 16,
                        "practiceTimes": 15,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "sub_05-2-1": {
                        "stageId": "sub_05-2-1",
                        "completeTimes": 0,
                        "startTimes": 0,
                        "practiceTimes": 0,
                        "state": 0,
                        "hasBattleReplay": 0,
                        "noCostCnt": 1
                    },
                    "main_05-07#f#": {
                        "stageId": "main_05-07#f#",
                        "completeTimes": 0,
                        "startTimes": 0,
                        "practiceTimes": 0,
                        "state": 0,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_05-08": {
                        "stageId": "main_05-08",
                        "completeTimes": 1,
                        "startTimes": 4,
                        "practiceTimes": 3,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "main_05-08#f#": {
                        "stageId": "main_05-08#f#",
                        "completeTimes": 1,
                        "startTimes": 2,
                        "practiceTimes": 1,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_05-09": {
                        "stageId": "main_05-09",
                        "completeTimes": 1,
                        "startTimes": 3,
                        "practiceTimes": 2,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "main_05-09#f#": {
                        "stageId": "main_05-09#f#",
                        "completeTimes": 1,
                        "startTimes": 4,
                        "practiceTimes": 3,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "main_05-10": {
                        "stageId": "main_05-10",
                        "completeTimes": 1,
                        "startTimes": 12,
                        "practiceTimes": 11,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 1
                    },
                    "sub_05-3-1": {
                        "stageId": "sub_05-3-1",
                        "completeTimes": 1,
                        "startTimes": 11,
                        "practiceTimes": 9,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "main_05-10#f#": {
                        "stageId": "main_05-10#f#",
                        "completeTimes": 1,
                        "startTimes": 20,
                        "practiceTimes": 17,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "st_05-01": {
                        "stageId": "st_05-01",
                        "completeTimes": 0,
                        "startTimes": 0,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "hard_05-01": {
                        "stageId": "hard_05-01",
                        "completeTimes": 1,
                        "startTimes": 14,
                        "practiceTimes": 13,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 1
                    },
                    "sub_05-3-2": {
                        "stageId": "sub_05-3-2",
                        "completeTimes": 1,
                        "startTimes": 2,
                        "practiceTimes": 1,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "hard_05-02": {
                        "stageId": "hard_05-02",
                        "completeTimes": 1,
                        "startTimes": 7,
                        "practiceTimes": 6,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 1
                    },
                    "act5d0_01": {
                        "stageId": "act5d0_01",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "act5d0_02": {
                        "stageId": "act5d0_02",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "act5d0_03": {
                        "stageId": "act5d0_03",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "act5d0_04": {
                        "stageId": "act5d0_04",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "act5d0_05": {
                        "stageId": "act5d0_05",
                        "completeTimes": 2,
                        "startTimes": 3,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "act5d0_st01": {
                        "stageId": "act5d0_st01",
                        "completeTimes": 0,
                        "startTimes": 0,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "act5d0_06": {
                        "stageId": "act5d0_06",
                        "completeTimes": 1,
                        "startTimes": 3,
                        "practiceTimes": 1,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "act5d0_07": {
                        "stageId": "act5d0_07",
                        "completeTimes": 1,
                        "startTimes": 7,
                        "practiceTimes": 5,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "act5d0_08": {
                        "stageId": "act5d0_08",
                        "completeTimes": 1,
                        "startTimes": 3,
                        "practiceTimes": 2,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 1
                    },
                    "act5d0_st02": {
                        "stageId": "act5d0_st02",
                        "completeTimes": 0,
                        "startTimes": 0,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "act5d0_09": {
                        "stageId": "act5d0_09",
                        "completeTimes": 1,
                        "startTimes": 7,
                        "practiceTimes": 5,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "act5d0_10": {
                        "stageId": "act5d0_10",
                        "completeTimes": 1,
                        "startTimes": 8,
                        "practiceTimes": 7,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "act5d0_st03": {
                        "stageId": "act5d0_st03",
                        "completeTimes": 0,
                        "startTimes": 0,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "hard_05-03": {
                        "stageId": "hard_05-03",
                        "completeTimes": 1,
                        "startTimes": 7,
                        "practiceTimes": 2,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "hard_05-04": {
                        "stageId": "hard_05-04",
                        "completeTimes": 1,
                        "startTimes": 2,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "act5d0_ex01": {
                        "stageId": "act5d0_ex01",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 1
                    },
                    "act5d0_ex01#f#": {
                        "stageId": "act5d0_ex01#f#",
                        "completeTimes": 1,
                        "startTimes": 1,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "act5d0_ex02": {
                        "stageId": "act5d0_ex02",
                        "completeTimes": 1,
                        "startTimes": 2,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "act5d0_ex02#f#": {
                        "stageId": "act5d0_ex02#f#",
                        "completeTimes": 1,
                        "startTimes": 8,
                        "practiceTimes": 7,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "act5d0_ex03": {
                        "stageId": "act5d0_ex03",
                        "completeTimes": 1,
                        "startTimes": 4,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "act5d0_ex03#f#": {
                        "stageId": "act5d0_ex03#f#",
                        "completeTimes": 0,
                        "startTimes": 0,
                        "practiceTimes": 0,
                        "state": 0,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "act5d0_ex04": {
                        "stageId": "act5d0_ex04",
                        "completeTimes": 1,
                        "startTimes": 10,
                        "practiceTimes": 8,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "act5d0_ex04#f#": {
                        "stageId": "act5d0_ex04#f#",
                        "completeTimes": 0,
                        "startTimes": 0,
                        "practiceTimes": 0,
                        "state": 0,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "act5d0_ex05": {
                        "stageId": "act5d0_ex05",
                        "completeTimes": 2,
                        "startTimes": 11,
                        "practiceTimes": 5,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "act5d0_ex05#f#": {
                        "stageId": "act5d0_ex05#f#",
                        "completeTimes": 0,
                        "startTimes": 0,
                        "practiceTimes": 0,
                        "state": 0,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "act5d0_ex06": {
                        "stageId": "act5d0_ex06",
                        "completeTimes": 1,
                        "startTimes": 2,
                        "practiceTimes": 0,
                        "state": 3,
                        "hasBattleReplay": 1,
                        "noCostCnt": 0
                    },
                    "act5d0_ex06#f#": {
                        "stageId": "act5d0_ex06#f#",
                        "completeTimes": 0,
                        "startTimes": 0,
                        "practiceTimes": 0,
                        "state": 0,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "act5d0_ex07": {
                        "stageId": "act5d0_ex07",
                        "completeTimes": 1,
                        "startTimes": 21,
                        "practiceTimes": 6,
                        "state": 3,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "act5d0_ex07#f#": {
                        "stageId": "act5d0_ex07#f#",
                        "completeTimes": 0,
                        "startTimes": 0,
                        "practiceTimes": 0,
                        "state": 0,
                        "hasBattleReplay": 0,
                        "noCostCnt": 0
                    },
                    "act5d0_ex08": {
                        "stageId": "act5d0_ex08",
                        "completeTimes": 0,
                        "startTimes": 0,
                        "practiceTimes": 0,
                        "state": 0,
                        "hasBattleReplay": 0,
                        "noCostCnt": 1
                    }
                },
                "campaigns": {
                    "activeGroupId": "camp_g_2",
                    "campaignCurrentFee": 970,
                    "campaignTotalFee": 1700,
                    "instances": {
                        "camp_01": {
                            "maxKills": 400,
                            "rewardStatus": [
                                1,
                                1,
                                1,
                                1,
                                1,
                                1,
                                1,
                                1
                            ]
                        },
                        "camp_02": {
                            "maxKills": 400,
                            "rewardStatus": [
                                1,
                                1,
                                1,
                                1,
                                1,
                                1,
                                1,
                                1
                            ]
                        },
                        "camp_03": {
                            "maxKills": 400,
                            "rewardStatus": [
                                1,
                                1,
                                1,
                                1,
                                1,
                                1,
                                1,
                                1
                            ]
                        }
                    }
                }
            },
            "mission": {
                "missions": {
                    "OPENSERVER": {
                        "openserver_1": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "openserver_2": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "openserver_3": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "openserver_4": {
                            "state": 3,
                            "progress": [{
                                "target": 8,
                                "value": 8
                            }]
                        }
                    },
                    "DAILY": {
                        "daily_801": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "daily_802": {
                            "state": 2,
                            "progress": [{
                                "target": 3,
                                "value": 3
                            }]
                        },
                        "daily_803": {
                            "state": 1,
                            "progress": [{
                                "target": 5,
                                "value": 3
                            }]
                        },
                        "daily_804": {
                            "state": 1,
                            "progress": [{
                                "target": 8,
                                "value": 3
                            }]
                        },
                        "daily_805": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 0
                            }]
                        },
                        "daily_806": {
                            "state": 1,
                            "progress": [{
                                "target": 3,
                                "value": 0
                            }]
                        },
                        "daily_807": {
                            "state": 2,
                            "progress": [{
                                "target": 200,
                                "value": 111
                            }]
                        },
                        "daily_808": {
                            "state": 1,
                            "progress": [{
                                "target": 400,
                                "value": 111
                            }]
                        },
                        "daily_809": {
                            "state": 1,
                            "progress": [{
                                "target": 600,
                                "value": 111
                            }]
                        },
                        "daily_810": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "daily_811": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "daily_812": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "daily_813": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "daily_814": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 0
                            }]
                        },
                        "daily_815": {
                            "state": 1,
                            "progress": [{
                                "target": 3,
                                "value": 0
                            }]
                        },
                        "daily_816": {
                            "state": 3,
                            "progress": [{
                                "target": 5,
                                "value": 5
                            }]
                        },
                        "daily_817": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "daily_818": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "daily_819": {
                            "state": 3,
                            "progress": [{
                                "target": 3,
                                "value": 3
                            }]
                        }
                    },
                    "WEEKLY": {
                        "weekly_101": {
                            "state": 3,
                            "progress": [{
                                "target": 10,
                                "value": 10
                            }]
                        },
                        "weekly_102": {
                            "state": 3,
                            "progress": [{
                                "target": 20,
                                "value": 20
                            }]
                        },
                        "weekly_103": {
                            "state": 3,
                            "progress": [{
                                "target": 30,
                                "value": 30
                            }]
                        },
                        "weekly_104": {
                            "state": 2,
                            "progress": [{
                                "target": 50,
                                "value": 50
                            }]
                        },
                        "weekly_105": {
                            "state": 3,
                            "progress": [{
                                "target": 5,
                                "value": 5
                            }]
                        },
                        "weekly_106": {
                            "state": 3,
                            "progress": [{
                                "target": 1000,
                                "value": 1000
                            }]
                        },
                        "weekly_107": {
                            "state": 3,
                            "progress": [{
                                "target": 2000,
                                "value": 2000
                            }]
                        },
                        "weekly_108": {
                            "state": 3,
                            "progress": [{
                                "target": 3000,
                                "value": 3000
                            }]
                        },
                        "weekly_109": {
                            "state": 2,
                            "progress": [{
                                "target": 5000,
                                "value": 4448
                            }]
                        },
                        "weekly_110": {
                            "state": 2,
                            "progress": [{
                                "target": 5,
                                "value": 5
                            }]
                        },
                        "weekly_111": {
                            "state": 3,
                            "progress": [{
                                "target": 5,
                                "value": 5
                            }]
                        },
                        "weekly_112": {
                            "state": 2,
                            "progress": [{
                                "target": 5,
                                "value": 5
                            }]
                        },
                        "weekly_113": {
                            "state": 3,
                            "progress": [{
                                "target": 5,
                                "value": 5
                            }]
                        },
                        "weekly_114": {
                            "state": 3,
                            "progress": [{
                                "target": 10,
                                "value": 10
                            }]
                        },
                        "weekly_115": {
                            "state": 3,
                            "progress": [{
                                "target": 40,
                                "value": 40
                            }]
                        },
                        "weekly_116": {
                            "state": 3,
                            "progress": [{
                                "target": 60,
                                "value": 60
                            }]
                        },
                        "weekly_117": {
                            "state": 3,
                            "progress": [{
                                "target": 10,
                                "value": 10
                            }]
                        },
                        "weekly_118": {
                            "state": 3,
                            "progress": [{
                                "target": 20,
                                "value": 20
                            }]
                        },
                        "weekly_119": {
                            "state": 3,
                            "progress": [{
                                "target": 15,
                                "value": 15
                            }]
                        },
                        "weekly_120": {
                            "state": 3,
                            "progress": [{
                                "target": 30,
                                "value": 30
                            }]
                        },
                        "weekly_121": {
                            "state": 3,
                            "progress": [{
                                "target": 20,
                                "value": 20
                            }]
                        },
                        "weekly_122": {
                            "state": 2,
                            "progress": [{
                                "target": 40,
                                "value": 40
                            }]
                        }
                    },
                    "GUIDE": {
                        "guide_1": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_2": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_3": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_4": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_5": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_6": {
                            "state": 3,
                            "progress": [{
                                "target": 2,
                                "value": 2
                            }]
                        },
                        "guide_7": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_8": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_9": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_10": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_11": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_12": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 5
                            }]
                        },
                        "guide_13": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_14": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_15": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_16": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_17": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_18": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_19": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_20": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_21": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 2
                            }]
                        },
                        "guide_22": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 3
                            }]
                        },
                        "guide_23": {
                            "state": 3,
                            "progress": [{
                                "target": 3,
                                "value": 3
                            }]
                        },
                        "guide_24": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_25": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_26": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_27": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_28": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_29": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_30": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 11
                            }]
                        },
                        "guide_31": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_32": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_33": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_34": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 3
                            }]
                        },
                        "guide_35": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_36": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_37": {
                            "state": 3,
                            "progress": [{
                                "target": 2,
                                "value": 2
                            }]
                        },
                        "guide_38": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_39": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 15
                            }]
                        },
                        "guide_40": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_41": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_42": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_43": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_44": {
                            "state": 3,
                            "progress": [{
                                "target": 200,
                                "value": 1481
                            }]
                        },
                        "guide_45": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_46": {
                            "state": 3,
                            "progress": [{
                                "target": 3000,
                                "value": 3315
                            }]
                        },
                        "guide_47": {
                            "state": 3,
                            "progress": [{
                                "target": 2,
                                "value": 3
                            }]
                        },
                        "guide_48": {
                            "state": 3,
                            "progress": [{
                                "target": 3,
                                "value": 3
                            }]
                        },
                        "guide_49": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 12
                            }]
                        },
                        "guide_50": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 11
                            }]
                        },
                        "guide_51": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_52": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_53": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 6
                            }]
                        },
                        "guide_54": {
                            "state": 3,
                            "progress": [{
                                "target": 2,
                                "value": 3
                            }]
                        },
                        "guide_55": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_56": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_57": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_58": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 11
                            }]
                        },
                        "guide_59": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 9
                            }]
                        },
                        "guide_60": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 2
                            }]
                        },
                        "guide_61": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_62": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "guide_63": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        }
                    },
                    "MAIN": {
                        "main_1": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_2": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_3": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_4": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_5": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_6": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_7": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_8": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_9": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_10": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_11": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_12": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_13": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_14": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_15": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_16": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_17": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_18": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_19": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_20": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_21": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_22": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_23": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_24": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_25": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_26": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_27": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_28": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_29": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_30": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_31": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_32": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_33": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_34": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_35": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_36": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_37": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_38": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_39": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_40": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_41": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_42": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "main_43": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        }
                    },
                    "ACTIVITY": {
                        "1stActivity_1": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 0
                            }]
                        },
                        "1stActivity_2": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 0
                            }]
                        },
                        "1stActivity_3": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 0
                            }]
                        },
                        "1stActivity_4": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 0
                            }]
                        },
                        "1stActivity_5": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 0
                            }]
                        },
                        "1stActivity_6": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 0
                            }]
                        },
                        "1stActivity_7": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 0
                            }]
                        },
                        "1stActivity_8": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 0
                            }]
                        },
                        "1stActivity_9": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 0
                            }]
                        },
                        "1stActivity_10": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 0
                            }]
                        },
                        "1stActivity_11": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 0
                            }]
                        },
                        "1stActivity_12": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 0
                            }]
                        },
                        "1stActivity_13": {
                            "state": 2,
                            "progress": [{
                                "target": 1000,
                                "value": 0
                            }]
                        },
                        "1stActivity_14": {
                            "state": 2,
                            "progress": [{
                                "target": 5000,
                                "value": 0
                            }]
                        },
                        "1stActivity_15": {
                            "state": 2,
                            "progress": [{
                                "target": 10000,
                                "value": 0
                            }]
                        },
                        "0D5Activity_1": {
                            "state": 2,
                            "progress": [{
                                "target": 100,
                                "value": 0
                            }]
                        },
                        "0D5Activity_2": {
                            "state": 2,
                            "progress": [{
                                "target": 300,
                                "value": 0
                            }]
                        },
                        "0D5Activity_3": {
                            "state": 2,
                            "progress": [{
                                "target": 500,
                                "value": 0
                            }]
                        },
                        "0D5Activity_4": {
                            "state": 2,
                            "progress": [{
                                "target": 1000,
                                "value": 0
                            }]
                        },
                        "0D5Activity_5": {
                            "state": 2,
                            "progress": [{
                                "target": 200,
                                "value": 0
                            }]
                        },
                        "0D5Activity_6": {
                            "state": 2,
                            "progress": [{
                                "target": 600,
                                "value": 0
                            }]
                        },
                        "0D5Activity_7": {
                            "state": 2,
                            "progress": [{
                                "target": 1000,
                                "value": 0
                            }]
                        },
                        "0D5Activity_8": {
                            "state": 2,
                            "progress": [{
                                "target": 2000,
                                "value": 0
                            }]
                        },
                        "0D5Activity_9": {
                            "state": 2,
                            "progress": [{
                                "target": 20000,
                                "value": 0
                            }]
                        },
                        "0D5Activity_10": {
                            "state": 2,
                            "progress": [{
                                "target": 50000,
                                "value": 0
                            }]
                        },
                        "0D5Activity_11": {
                            "state": 2,
                            "progress": [{
                                "target": 100000,
                                "value": 0
                            }]
                        },
                        "0D5Activity_12": {
                            "state": 2,
                            "progress": [{
                                "target": 150000,
                                "value": 0
                            }]
                        },
                        "0D5Activity_13": {
                            "state": 2,
                            "progress": [{
                                "target": 10000,
                                "value": 0
                            }]
                        },
                        "0D5Activity_14": {
                            "state": 2,
                            "progress": [{
                                "target": 20000,
                                "value": 0
                            }]
                        },
                        "0D5Activity_15": {
                            "state": 2,
                            "progress": [{
                                "target": 50000,
                                "value": 0
                            }]
                        },
                        "0D5Activity_16": {
                            "state": 2,
                            "progress": [{
                                "target": 75000,
                                "value": 0
                            }]
                        },
                        "3D5Activity_1": {
                            "state": 3,
                            "progress": [{
                                "target": 800,
                                "value": 800
                            }]
                        },
                        "3D5Activity_2": {
                            "state": 3,
                            "progress": [{
                                "target": 1600,
                                "value": 1600
                            }]
                        },
                        "3D5Activity_3": {
                            "state": 3,
                            "progress": [{
                                "target": 2400,
                                "value": 2400
                            }]
                        },
                        "3D5Activity_4": {
                            "state": 3,
                            "progress": [{
                                "target": 50000,
                                "value": 50000
                            }]
                        },
                        "3D5Activity_5": {
                            "state": 3,
                            "progress": [{
                                "target": 100000,
                                "value": 100000
                            }]
                        },
                        "3D5Activity_6": {
                            "state": 3,
                            "progress": [{
                                "target": 150000,
                                "value": 150000
                            }]
                        },
                        "3D5Activity_7": {
                            "state": 3,
                            "progress": [{
                                "target": 80000,
                                "value": 80000
                            }]
                        },
                        "3D5Activity_8": {
                            "state": 3,
                            "progress": [{
                                "target": 150000,
                                "value": 150000
                            }]
                        },
                        "3D5Activity_9": {
                            "state": 3,
                            "progress": [{
                                "target": 250000,
                                "value": 250000
                            }]
                        },
                        "3D5Activity_10": {
                            "state": 3,
                            "progress": [{
                                "target": 1000,
                                "value": 1000
                            }]
                        },
                        "3D5Activity_11": {
                            "state": 3,
                            "progress": [{
                                "target": 2000,
                                "value": 2000
                            }]
                        },
                        "3D5Activity_12": {
                            "state": 3,
                            "progress": [{
                                "target": 3000,
                                "value": 3000
                            }]
                        },
                        "3D5Activity_13": {
                            "state": 2,
                            "progress": [{
                                "target": 6,
                                "value": 4
                            }]
                        },
                        "3D5Activity_14": {
                            "state": 2,
                            "progress": [{
                                "target": 12,
                                "value": 4
                            }]
                        },
                        "3D5Activity_15": {
                            "state": 2,
                            "progress": [{
                                "target": 18,
                                "value": 4
                            }]
                        },
                        "3D5Activity_16": {
                            "state": 3,
                            "progress": [{
                                "target": 1000,
                                "value": 1000
                            }]
                        },
                        "3D5Activity_17": {
                            "state": 3,
                            "progress": [{
                                "target": 2000,
                                "value": 2000
                            }]
                        },
                        "3D5Activity_18": {
                            "state": 2,
                            "progress": [{
                                "target": 3000,
                                "value": 3000
                            }]
                        },
                        "3D5Activity_19": {
                            "state": 3,
                            "progress": [{
                                "target": 40,
                                "value": 40
                            }]
                        },
                        "3D5Activity_20": {
                            "state": 3,
                            "progress": [{
                                "target": 80,
                                "value": 80
                            }]
                        },
                        "3D5Activity_21": {
                            "state": 3,
                            "progress": [{
                                "target": 120,
                                "value": 120
                            }]
                        },
                        "3D5Activity_22": {
                            "state": 3,
                            "progress": [{
                                "target": 3000,
                                "value": 3000
                            }]
                        },
                        "3D5Activity_23": {
                            "state": 3,
                            "progress": [{
                                "target": 6000,
                                "value": 6000
                            }]
                        },
                        "3D5Activity_24": {
                            "state": 3,
                            "progress": [{
                                "target": 10000,
                                "value": 10000
                            }]
                        },
                        "3D5Activity_25": {
                            "state": 3,
                            "progress": [{
                                "target": 10,
                                "value": 10
                            }]
                        },
                        "3D5Activity_26": {
                            "state": 3,
                            "progress": [{
                                "target": 25,
                                "value": 25
                            }]
                        },
                        "3D5Activity_27": {
                            "state": 2,
                            "progress": [{
                                "target": 40,
                                "value": 40
                            }]
                        },
                        "3D5Activity_28": {
                            "state": 3,
                            "progress": [{
                                "target": 100,
                                "value": 100
                            }]
                        },
                        "3D5Activity_29": {
                            "state": 2,
                            "progress": [{
                                "target": 200,
                                "value": 200
                            }]
                        },
                        "3D5Activity_30": {
                            "state": 2,
                            "progress": [{
                                "target": 300,
                                "value": 226
                            }]
                        },
                        "3D5Activity_31": {
                            "state": 3,
                            "progress": [{
                                "target": 50,
                                "value": 50
                            }]
                        },
                        "3D5Activity_32": {
                            "state": 3,
                            "progress": [{
                                "target": 100,
                                "value": 100
                            }]
                        },
                        "3D5Activity_33": {
                            "state": 3,
                            "progress": [{
                                "target": 150,
                                "value": 150
                            }]
                        },
                        "3D5Activity_34": {
                            "state": 3,
                            "progress": [{
                                "target": 100,
                                "value": 100
                            }]
                        },
                        "3D5Activity_35": {
                            "state": 3,
                            "progress": [{
                                "target": 200,
                                "value": 200
                            }]
                        },
                        "3D5Activity_36": {
                            "state": 3,
                            "progress": [{
                                "target": 300,
                                "value": 300
                            }]
                        },
                        "3D5Activity_37": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "3D5Activity_38": {
                            "state": 3,
                            "progress": [{
                                "target": 2,
                                "value": 2
                            }]
                        },
                        "3D5Activity_39": {
                            "state": 3,
                            "progress": [{
                                "target": 3,
                                "value": 3
                            }]
                        },
                        "5D0Activity_1": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "5D0Activity_2": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "5D0Activity_3": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "5D0Activity_4": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "5D0Activity_5": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "5D0Activity_6": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "5D0Activity_7": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "5D0Activity_8": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "5D0Activity_9": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "5D0Activity_10": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "5D0Activity_11": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "5D0Activity_12": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "5D0Activity_13": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "5D0Activity_14": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "5D0Activity_15": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "5D0Activity_16": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "5D0Activity_17": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "5D0Activity_18": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "5D0Activity_19": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 0
                            }]
                        },
                        "5D0Activity_20": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 0
                            }]
                        }
                    },
                    "SUB": {
                        "sub_1": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_2": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_3": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_4": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_5": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_6": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_7": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_8": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_9": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_10": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_11": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_12": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_13": {
                            "state": 3,
                            "progress": [{
                                "target": 2,
                                "value": 2
                            }]
                        },
                        "sub_14": {
                            "state": 3,
                            "progress": [{
                                "target": 2,
                                "value": 2
                            }]
                        },
                        "sub_15": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_16": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_17": {
                            "state": 3,
                            "progress": [{
                                "target": 2,
                                "value": 2
                            }]
                        },
                        "sub_18": {
                            "state": 3,
                            "progress": [{
                                "target": 2,
                                "value": 2
                            }]
                        },
                        "sub_19": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_20": {
                            "state": 3,
                            "progress": [{
                                "target": 2,
                                "value": 2
                            }]
                        },
                        "sub_21": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_22": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_23": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_24": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_25": {
                            "state": 3,
                            "progress": [{
                                "target": 5,
                                "value": 5
                            }]
                        },
                        "sub_26": {
                            "state": 3,
                            "progress": [{
                                "target": 5,
                                "value": 5
                            }]
                        },
                        "sub_27": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_28": {
                            "state": 3,
                            "progress": [{
                                "target": 5,
                                "value": 5
                            }]
                        },
                        "sub_29": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_30": {
                            "state": 3,
                            "progress": [{
                                "target": 5,
                                "value": 5
                            }]
                        },
                        "sub_31": {
                            "state": 2,
                            "progress": [{
                                "target": 10,
                                "value": 0
                            }]
                        },
                        "sub_32": {
                            "state": 3,
                            "progress": [{
                                "target": 100,
                                "value": 100
                            }]
                        },
                        "sub_33": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_34": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_35": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_36": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_37": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_38": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_39": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_40": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_41": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_42": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_43": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_44": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_45": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_46": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_47": {
                            "state": 1,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_48": {
                            "state": 1,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_49": {
                            "state": 1,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_50": {
                            "state": 2,
                            "progress": [{
                                "target": 100,
                                "value": 400
                            }]
                        },
                        "sub_51": {
                            "state": 1,
                            "progress": [{
                                "target": 200,
                                "value": 400
                            }]
                        },
                        "sub_52": {
                            "state": 1,
                            "progress": [{
                                "target": 300,
                                "value": 400
                            }]
                        },
                        "sub_53": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_54": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_55": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_56": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_57": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_58": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_59": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_60": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_61": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_62": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_63": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_64": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_65": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_66": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_67": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_68": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_69": {
                            "state": 2,
                            "progress": [{
                                "target": 350,
                                "value": 400
                            }]
                        },
                        "sub_70": {
                            "state": 1,
                            "progress": [{
                                "target": 400,
                                "value": 400
                            }]
                        },
                        "sub_71": {
                            "state": 2,
                            "progress": [{
                                "target": 100,
                                "value": 100
                            }]
                        },
                        "sub_72": {
                            "state": 1,
                            "progress": [{
                                "target": 200,
                                "value": 200
                            }]
                        },
                        "sub_73": {
                            "state": 2,
                            "progress": [{
                                "target": 3,
                                "value": 3
                            }]
                        },
                        "sub_74": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_75": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_76": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_77": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_78": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_79": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 2
                            }]
                        },
                        "sub_80": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 2
                            }]
                        },
                        "sub_81": {
                            "state": 2,
                            "progress": [{
                                "target": 10,
                                "value": 10
                            }]
                        },
                        "sub_82": {
                            "state": 2,
                            "progress": [{
                                "target": 10,
                                "value": 10
                            }]
                        },
                        "sub_83": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_84": {
                            "state": 2,
                            "progress": [{
                                "target": 10,
                                "value": 10
                            }]
                        },
                        "sub_85": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_86": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_87": {
                            "state": 3,
                            "progress": [{
                                "target": 5,
                                "value": 5
                            }]
                        },
                        "sub_88": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 0
                            }]
                        },
                        "sub_89": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 0
                            }]
                        },
                        "sub_90": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 0
                            }]
                        },
                        "sub_91": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 0
                            }]
                        },
                        "sub_92": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 0
                            }]
                        },
                        "sub_93": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 0
                            }]
                        },
                        "sub_94": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_95": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_96": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_97": {
                            "state": 2,
                            "progress": [{
                                "target": 300,
                                "value": 300
                            }]
                        },
                        "sub_98": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_99": {
                            "state": 2,
                            "progress": [{
                                "target": 350,
                                "value": 350
                            }]
                        },
                        "sub_100": {
                            "state": 2,
                            "progress": [{
                                "target": 6,
                                "value": 6
                            }]
                        },
                        "sub_101": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_102": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_103": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_104": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_105": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_106": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_107": {
                            "state": 1,
                            "progress": [{
                                "target": 20,
                                "value": 20
                            }]
                        },
                        "sub_108": {
                            "state": 1,
                            "progress": [{
                                "target": 20,
                                "value": 20
                            }]
                        },
                        "sub_109": {
                            "state": 1,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_110": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_111": {
                            "state": 1,
                            "progress": [{
                                "target": 20,
                                "value": 20
                            }]
                        },
                        "sub_112": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_113": {
                            "state": 2,
                            "progress": [{
                                "target": 4000,
                                "value": 4000
                            }]
                        },
                        "sub_114": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_115": {
                            "state": 1,
                            "progress": [{
                                "target": 5,
                                "value": 5
                            }]
                        },
                        "sub_116": {
                            "state": 1,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_117": {
                            "state": 1,
                            "progress": [{
                                "target": 1,
                                "value": 0
                            }]
                        },
                        "sub_118": {
                            "state": 1,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_119": {
                            "state": 1,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_120": {
                            "state": 1,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_121": {
                            "state": 1,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_122": {
                            "state": 1,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_123": {
                            "state": 1,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_124": {
                            "state": 1,
                            "progress": [{
                                "target": 1,
                                "value": 0
                            }]
                        },
                        "sub_125": {
                            "state": 1,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_126": {
                            "state": 1,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_127": {
                            "state": 1,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_128": {
                            "state": 1,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_129": {
                            "state": 1,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_130": {
                            "state": 1,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_131": {
                            "state": 1,
                            "progress": [{
                                "target": 1,
                                "value": 0
                            }]
                        },
                        "sub_132": {
                            "state": 1,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_133": {
                            "state": 1,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_134": {
                            "state": 1,
                            "progress": [{
                                "target": 1,
                                "value": 0
                            }]
                        },
                        "sub_135": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_136": {
                            "state": 1,
                            "progress": [{
                                "target": 1,
                                "value": 0
                            }]
                        },
                        "sub_137": {
                            "state": 1,
                            "progress": [{
                                "target": 1,
                                "value": 0
                            }]
                        },
                        "sub_138": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_139": {
                            "state": 2,
                            "progress": [{
                                "target": 6000,
                                "value": 6000
                            }]
                        },
                        "sub_140": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_141": {
                            "state": 2,
                            "progress": [{
                                "target": 400,
                                "value": 400
                            }]
                        },
                        "sub_142": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_143": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_144": {
                            "state": 1,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_145": {
                            "state": 1,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_146": {
                            "state": 1,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_147": {
                            "state": 1,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_148": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_149": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_150": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_151": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_152": {
                            "state": 3,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        },
                        "sub_153": {
                            "state": 2,
                            "progress": [{
                                "target": 1,
                                "value": 1
                            }]
                        }
                    }
                },
                "missionRewards": {
                    "dailyPoint": 0,
                    "weeklyPoint": 0,
                    "rewards": {
                        "DAILY": {
                            "reward_daily_64": 1,
                            "reward_daily_65": 1,
                            "reward_daily_66": 1,
                            "reward_daily_67": 1,
                            "reward_daily_68": 1,
                            "reward_daily_69": 0,
                            "reward_daily_70": 0,
                            "reward_daily_71": 0
                        },
                        "WEEKLY": {
                            "reward_weekly_101": 1,
                            "reward_weekly_102": 1,
                            "reward_weekly_103": 1,
                            "reward_weekly_104": 1,
                            "reward_weekly_105": 1,
                            "reward_weekly_106": 1,
                            "reward_weekly_107": 1,
                            "reward_weekly_108": 1,
                            "reward_weekly_109": 1,
                            "reward_weekly_110": 1,
                            "reward_weekly_111": 1
                        }
                    }
                },
                "missionGroups": {
                    "openseverTaskGroup1": 1,
                    "guide_g_1": 1,
                    "main_1": 1,
                    "1stact": 0,
                    "0D5act": 0,
                    "sub_g_1": 1,
                    "main_2": 1,
                    "main_3": 1,
                    "main_4": 1,
                    "main_5": 1,
                    "sub_g_2": 1,
                    "sub_g_3": 1,
                    "main_6": 1,
                    "main_7": 1,
                    "main_8": 1,
                    "main_9": 1,
                    "main_10": 1,
                    "main_11": 1,
                    "main_12": 1,
                    "sub_g_4": 1,
                    "sub_g_5": 1,
                    "sub_g_6": 0,
                    "main_13": 1,
                    "main_14": 1,
                    "sub_g_7": 1,
                    "sub_g_8": 1,
                    "main_15": 1,
                    "main_16": 1,
                    "sub_g_9": 1,
                    "main_17": 1,
                    "guide_g_2": 1,
                    "guide_g_3": 1,
                    "guide_g_4": 1,
                    "main_18": 1,
                    "main_19": 1,
                    "sub_g_10": 1,
                    "sub_g_11": 0,
                    "main_20": 1,
                    "main_21": 1,
                    "main_22": 1,
                    "main_23": 1,
                    "main_24": 1,
                    "main_25": 1,
                    "main_26": 1,
                    "main_27": 1,
                    "main_28": 1,
                    "sub_g_12": 0,
                    "main_29": 1,
                    "sub_g_13": 0,
                    "sub_g_14": 0,
                    "main_30": 1,
                    "main_31": 1,
                    "main_32": 1,
                    "sub_g_15": 1,
                    "sub_g_16": 1,
                    "sub_g_17": 0,
                    "main_33": 1,
                    "sub_g_18": 0,
                    "sub_g_19": 0,
                    "sub_g_20": 0,
                    "sub_g_21": 0,
                    "sub_g_22": 0,
                    "sub_g_23": 0,
                    "sub_g_24": 0,
                    "sub_g_25": 1,
                    "sub_g_26": 0,
                    "main_34": 1,
                    "main_35": 1,
                    "sub_g_27": 1,
                    "sub_g_28": 0,
                    "sub_g_29": 0,
                    "main_36": 1,
                    "main_37": 1,
                    "main_38": 1,
                    "sub_g_30": 0,
                    "sub_g_31": 0,
                    "sub_g_32": 0,
                    "sub_g_33": 0,
                    "sub_g_34": 0,
                    "sub_g_35": 0,
                    "sub_g_36": 0,
                    "sub_g_37": 0,
                    "sub_g_38": 0,
                    "main_39": 1,
                    "main_40": 1,
                    "sub_g_39": 0,
                    "sub_g_40": 0,
                    "main_41": 1,
                    "sub_g_41": 0,
                    "sub_g_42": 0,
                    "sub_g_43": 0,
                    "sub_g_44": 1,
                    "main_42": 1,
                    "guide_g_5": 1,
                    "guide_g_6": 1,
                    "sub_g_45": 0,
                    "main_43": 0,
                    "act3d5": 0,
                    "guide_g_7": 1,
                    "act5d0": 0,
                    "weekly_g_1": 0,
                    "daily_g_8": 0
                }
            },
            "social": {
                "assistCharList": [{
                        "charInstId": 60,
                        "skillIndex": 1
                    },
                    {
                        "charInstId": 59,
                        "skillIndex": 1
                    },
                    {
                        "charInstId": 65,
                        "skillIndex": 1
                    }
                ],
                "yesterdayReward": {
                    "canReceive": 0,
                    "assistAmount": 30,
                    "comfortAmount": 145,
                    "first": 0
                },
                "yCrisisSs": ""
            },
            "building": {
                "status": {
                    "labor": {
                        "buffSpeed": 0,
                        "processPoint": 0,
                        "value": 200,
                        "lastUpdateTime": 1591376654,
                        "maxValue": 200
                    }
                },
                "chars": {
                    "1": {
                        "charId": "char_002_amiya",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "",
                        "index": -1,
                        "changeScale": 0,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "2": {
                        "charId": "char_502_nblade",
                        "lastApAddTime": 1591376654,
                        "ap": 8219970,
                        "roomSlotId": "slot_24",
                        "index": 1,
                        "changeScale": -90,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 4667
                    },
                    "3": {
                        "charId": "char_500_noirc",
                        "lastApAddTime": 1591376654,
                        "ap": 8227080,
                        "roomSlotId": "slot_15",
                        "index": 2,
                        "changeScale": -90,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 4588
                    },
                    "4": {
                        "charId": "char_503_rang",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "",
                        "index": -1,
                        "changeScale": 0,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "5": {
                        "charId": "char_150_snakek",
                        "lastApAddTime": 1591376654,
                        "ap": 8227080,
                        "roomSlotId": "slot_15",
                        "index": 1,
                        "changeScale": -90,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 4588
                    },
                    "6": {
                        "charId": "char_120_hibisc",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "slot_3",
                        "index": 2,
                        "changeScale": 317,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "7": {
                        "charId": "char_211_adnach",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "",
                        "index": -1,
                        "changeScale": 0,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "8": {
                        "charId": "char_235_jesica",
                        "lastApAddTime": 1591376654,
                        "ap": 8226540,
                        "roomSlotId": "slot_25",
                        "index": 1,
                        "changeScale": -90,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 4594
                    },
                    "9": {
                        "charId": "char_123_fang",
                        "lastApAddTime": 1591376654,
                        "ap": 4081235,
                        "roomSlotId": "slot_14",
                        "index": 0,
                        "changeScale": -95,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 47987
                    },
                    "10": {
                        "charId": "char_192_falco",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "",
                        "index": -1,
                        "changeScale": 0,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "11": {
                        "charId": "char_501_durin",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "slot_3",
                        "index": 4,
                        "changeScale": 307,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "12": {
                        "charId": "char_009_12fce",
                        "lastApAddTime": 1591376654,
                        "ap": 1294286,
                        "roomSlotId": "slot_9",
                        "index": 1,
                        "changeScale": 281,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "13": {
                        "charId": "char_121_lava",
                        "lastApAddTime": 1591376654,
                        "ap": 8638800,
                        "roomSlotId": "",
                        "index": -1,
                        "changeScale": 0,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 12
                    },
                    "14": {
                        "charId": "char_122_beagle",
                        "lastApAddTime": 1591376654,
                        "ap": 1617350,
                        "roomSlotId": "slot_20",
                        "index": 0,
                        "changeScale": 350,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "15": {
                        "charId": "char_212_ansel",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "",
                        "index": -1,
                        "changeScale": 0,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "16": {
                        "charId": "char_208_melan",
                        "lastApAddTime": 1591376654,
                        "ap": 1640070,
                        "roomSlotId": "slot_28",
                        "index": 1,
                        "changeScale": 350,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "17": {
                        "charId": "char_283_midn",
                        "lastApAddTime": 1591376654,
                        "ap": 1625405,
                        "roomSlotId": "slot_28",
                        "index": 2,
                        "changeScale": 350,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "18": {
                        "charId": "char_109_fmout",
                        "lastApAddTime": 1591376654,
                        "ap": 8219070,
                        "roomSlotId": "slot_5",
                        "index": 1,
                        "changeScale": -90,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 4677
                    },
                    "19": {
                        "charId": "char_277_sqrrel",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "",
                        "index": -1,
                        "changeScale": 0,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "20": {
                        "charId": "char_237_gravel",
                        "lastApAddTime": 1591376654,
                        "ap": 3836580,
                        "roomSlotId": "slot_7",
                        "index": 0,
                        "changeScale": -90,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 4582
                    },
                    "21": {
                        "charId": "char_210_stward",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "",
                        "index": -1,
                        "changeScale": 0,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "22": {
                        "charId": "char_199_yak",
                        "lastApAddTime": 1591376654,
                        "ap": 1640070,
                        "roomSlotId": "slot_28",
                        "index": 0,
                        "changeScale": 350,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "23": {
                        "charId": "char_107_liskam",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "",
                        "index": -1,
                        "changeScale": 0,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "24": {
                        "charId": "char_278_orchid",
                        "lastApAddTime": 1591376654,
                        "ap": 1625400,
                        "roomSlotId": "slot_28",
                        "index": 3,
                        "changeScale": 350,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "25": {
                        "charId": "char_124_kroos",
                        "lastApAddTime": 1591376654,
                        "ap": 8226540,
                        "roomSlotId": "slot_25",
                        "index": 2,
                        "changeScale": -90,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 4594
                    },
                    "26": {
                        "charId": "char_285_medic2",
                        "lastApAddTime": 1591376654,
                        "ap": 8639500,
                        "roomSlotId": "",
                        "index": -1,
                        "changeScale": 0,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 5
                    },
                    "27": {
                        "charId": "char_282_catap",
                        "lastApAddTime": 1591376654,
                        "ap": 8336645,
                        "roomSlotId": "slot_24",
                        "index": 2,
                        "changeScale": -65,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 4667
                    },
                    "28": {
                        "charId": "char_290_vigna",
                        "lastApAddTime": 1591376654,
                        "ap": 1617530,
                        "roomSlotId": "slot_20",
                        "index": 3,
                        "changeScale": 350,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "29": {
                        "charId": "char_130_doberm",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "",
                        "index": -1,
                        "changeScale": 0,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "30": {
                        "charId": "char_284_spot",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "",
                        "index": -1,
                        "changeScale": 0,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "31": {
                        "charId": "char_209_ardign",
                        "lastApAddTime": 1591376654,
                        "ap": 1617350,
                        "roomSlotId": "slot_20",
                        "index": 2,
                        "changeScale": 350,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "32": {
                        "charId": "char_196_sunbr",
                        "lastApAddTime": 1591376654,
                        "ap": 1625405,
                        "roomSlotId": "slot_28",
                        "index": 4,
                        "changeScale": 350,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "33": {
                        "charId": "char_166_skfire",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "",
                        "index": -1,
                        "changeScale": 0,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "34": {
                        "charId": "char_183_skgoat",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "",
                        "index": -1,
                        "changeScale": 0,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "35": {
                        "charId": "char_117_myrrh",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "",
                        "index": -1,
                        "changeScale": 0,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "36": {
                        "charId": "char_173_slchan",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "slot_3",
                        "index": 3,
                        "changeScale": 317,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "37": {
                        "charId": "char_198_blackd",
                        "lastApAddTime": 1591376654,
                        "ap": 5554436,
                        "roomSlotId": "slot_9",
                        "index": 4,
                        "changeScale": 281,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "38": {
                        "charId": "char_181_flower",
                        "lastApAddTime": 1591376654,
                        "ap": 3836580,
                        "roomSlotId": "slot_7",
                        "index": 1,
                        "changeScale": -90,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 4582
                    },
                    "39": {
                        "charId": "char_187_ccheal",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "",
                        "index": -1,
                        "changeScale": 0,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "40": {
                        "charId": "char_126_shotst",
                        "lastApAddTime": 1591376654,
                        "ap": 8227620,
                        "roomSlotId": "slot_7",
                        "index": 2,
                        "changeScale": -90,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 4582
                    },
                    "41": {
                        "charId": "char_236_rope",
                        "lastApAddTime": 1591376654,
                        "ap": 8164700,
                        "roomSlotId": "slot_36",
                        "index": 1,
                        "changeScale": -100,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 4753
                    },
                    "42": {
                        "charId": "char_149_scave",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "",
                        "index": -1,
                        "changeScale": 0,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "43": {
                        "charId": "char_136_hsguma",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "",
                        "index": -1,
                        "changeScale": 0,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "44": {
                        "charId": "char_240_wyvern",
                        "lastApAddTime": 1591376654,
                        "ap": 4081235,
                        "roomSlotId": "slot_14",
                        "index": 1,
                        "changeScale": -95,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 47987
                    },
                    "45": {
                        "charId": "char_253_greyy",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "",
                        "index": -1,
                        "changeScale": 0,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "46": {
                        "charId": "char_103_angel",
                        "lastApAddTime": 1591376654,
                        "ap": 8219970,
                        "roomSlotId": "slot_24",
                        "index": 0,
                        "changeScale": -90,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 4667
                    },
                    "47": {
                        "charId": "char_241_panda",
                        "lastApAddTime": 1591376654,
                        "ap": 1617530,
                        "roomSlotId": "slot_20",
                        "index": 4,
                        "changeScale": 350,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "48": {
                        "charId": "char_118_yuki",
                        "lastApAddTime": 1591376654,
                        "ap": 1294366,
                        "roomSlotId": "slot_9",
                        "index": 2,
                        "changeScale": 281,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "49": {
                        "charId": "char_141_nights",
                        "lastApAddTime": 1591376654,
                        "ap": 1294556,
                        "roomSlotId": "slot_9",
                        "index": 3,
                        "changeScale": 281,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "50": {
                        "charId": "char_281_popka",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "",
                        "index": -1,
                        "changeScale": 0,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "51": {
                        "charId": "char_129_bluep",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "",
                        "index": -1,
                        "changeScale": 0,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "52": {
                        "charId": "char_127_estell",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "",
                        "index": -1,
                        "changeScale": 0,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "53": {
                        "charId": "char_190_clour",
                        "lastApAddTime": 1591376654,
                        "ap": 8341780,
                        "roomSlotId": "slot_15",
                        "index": 0,
                        "changeScale": -65,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 4588
                    },
                    "54": {
                        "charId": "char_308_swire",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "",
                        "index": -1,
                        "changeScale": 0,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "55": {
                        "charId": "char_193_frostl",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "slot_3",
                        "index": 1,
                        "changeScale": 387,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "56": {
                        "charId": "char_131_flameb",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "",
                        "index": -1,
                        "changeScale": 0,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "57": {
                        "charId": "char_137_brownb",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "",
                        "index": -1,
                        "changeScale": 0,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "58": {
                        "charId": "char_219_meteo",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "",
                        "index": -1,
                        "changeScale": 0,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "59": {
                        "charId": "char_134_ifrit",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "slot_13",
                        "index": 1,
                        "changeScale": 0,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "60": {
                        "charId": "char_151_myrtle",
                        "lastApAddTime": 1591376654,
                        "ap": 5174915,
                        "roomSlotId": "slot_5",
                        "index": 0,
                        "changeScale": -65,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 4677
                    },
                    "61": {
                        "charId": "char_171_bldsk",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "",
                        "index": -1,
                        "changeScale": 0,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "62": {
                        "charId": "char_274_astesi",
                        "lastApAddTime": 1591376654,
                        "ap": 1294286,
                        "roomSlotId": "slot_9",
                        "index": 0,
                        "changeScale": 281,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "63": {
                        "charId": "char_298_susuro",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "",
                        "index": -1,
                        "changeScale": 0,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "64": {
                        "charId": "char_348_ceylon",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "",
                        "index": -1,
                        "changeScale": 0,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "65": {
                        "charId": "char_202_demkni",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "",
                        "index": -1,
                        "changeScale": 0,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "66": {
                        "charId": "char_260_durnar",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "",
                        "index": -1,
                        "changeScale": 0,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "67": {
                        "charId": "char_143_ghost",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "slot_3",
                        "index": 0,
                        "changeScale": 387,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "68": {
                        "charId": "char_355_ethan",
                        "lastApAddTime": 1591376654,
                        "ap": 8182700,
                        "roomSlotId": "slot_23",
                        "index": 0,
                        "changeScale": -100,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 4573
                    },
                    "69": {
                        "charId": "char_158_milu",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "",
                        "index": -1,
                        "changeScale": 0,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "70": {
                        "charId": "char_325_bison",
                        "lastApAddTime": 1591376654,
                        "ap": 8219070,
                        "roomSlotId": "slot_5",
                        "index": 2,
                        "changeScale": -90,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 4677
                    },
                    "71": {
                        "charId": "char_243_waaifu",
                        "lastApAddTime": 1591376654,
                        "ap": 8226540,
                        "roomSlotId": "slot_25",
                        "index": 0,
                        "changeScale": -90,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 4594
                    },
                    "72": {
                        "charId": "char_128_plosis",
                        "lastApAddTime": 1591376654,
                        "ap": 1617350,
                        "roomSlotId": "slot_20",
                        "index": 1,
                        "changeScale": 350,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "73": {
                        "charId": "char_010_chen",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "",
                        "index": -1,
                        "changeScale": 0,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "74": {
                        "charId": "char_133_mm",
                        "lastApAddTime": 1591376654,
                        "ap": 8164700,
                        "roomSlotId": "slot_36",
                        "index": 0,
                        "changeScale": -100,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 4753
                    },
                    "75": {
                        "charId": "char_279_excu",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "slot_13",
                        "index": 0,
                        "changeScale": 0,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    },
                    "76": {
                        "charId": "char_242_otter",
                        "lastApAddTime": 1591376654,
                        "ap": 8640000,
                        "roomSlotId": "",
                        "index": -1,
                        "changeScale": 0,
                        "bubble": {
                            "normal": {
                                "add": -1,
                                "ts": 0
                            },
                            "assist": {
                                "add": -1,
                                "ts": 0
                            }
                        },
                        "workTime": 0
                    }
                },
                "roomSlots": {
                    "slot_34": {
                        "level": 5,
                        "state": 2,
                        "roomId": "CONTROL",
                        "charInstIds": [
                            -1,
                            -1,
                            -1,
                            -1,
                            -1
                        ],
                        "completeConstructTime": 1586114834
                    },
                    "slot_37": {
                        "level": 1,
                        "state": 2,
                        "roomId": "ELEVATOR",
                        "charInstIds": [],
                        "completeConstructTime": -1
                    },
                    "slot_38": {
                        "level": 1,
                        "state": 2,
                        "roomId": "ELEVATOR",
                        "charInstIds": [],
                        "completeConstructTime": -1
                    },
                    "slot_33": {
                        "level": 1,
                        "state": 2,
                        "roomId": "ELEVATOR",
                        "charInstIds": [],
                        "completeConstructTime": -1
                    },
                    "slot_27": {
                        "level": 1,
                        "state": 2,
                        "roomId": "ELEVATOR",
                        "charInstIds": [],
                        "completeConstructTime": -1
                    },
                    "slot_26": {
                        "level": 3,
                        "state": 2,
                        "roomId": "POWER",
                        "charInstIds": [
                            -1
                        ],
                        "completeConstructTime": 1585435034
                    },
                    "slot_25": {
                        "level": 3,
                        "state": 2,
                        "roomId": "MANUFACTURE",
                        "charInstIds": [
                            71,
                            8,
                            25
                        ],
                        "completeConstructTime": 1584015420
                    },
                    "slot_24": {
                        "level": 3,
                        "state": 2,
                        "roomId": "TRADING",
                        "charInstIds": [
                            46,
                            2,
                            27
                        ],
                        "completeConstructTime": 1585637385
                    },
                    "slot_28": {
                        "level": 4,
                        "state": 2,
                        "roomId": "DORMITORY",
                        "charInstIds": [
                            22,
                            16,
                            17,
                            24,
                            32
                        ],
                        "completeConstructTime": 1589357589
                    },
                    "slot_29": {
                        "level": 1,
                        "state": 2,
                        "roomId": "CORRIDOR",
                        "charInstIds": [],
                        "completeConstructTime": -1
                    },
                    "slot_30": {
                        "level": 1,
                        "state": 2,
                        "roomId": "ELEVATOR",
                        "charInstIds": [],
                        "completeConstructTime": -1
                    },
                    "slot_31": {
                        "level": 1,
                        "state": 2,
                        "roomId": "CORRIDOR",
                        "charInstIds": [],
                        "completeConstructTime": -1
                    },
                    "slot_32": {
                        "level": 3,
                        "state": 2,
                        "roomId": "WORKSHOP",
                        "charInstIds": [
                            -1
                        ],
                        "completeConstructTime": 1583979384
                    },
                    "slot_35": {
                        "level": 1,
                        "state": 2,
                        "roomId": "ELEVATOR",
                        "charInstIds": [],
                        "completeConstructTime": -1
                    },
                    "slot_36": {
                        "level": 3,
                        "state": 2,
                        "roomId": "MEETING",
                        "charInstIds": [
                            74,
                            41
                        ],
                        "completeConstructTime": 1585364057
                    },
                    "slot_18": {
                        "level": 1,
                        "state": 2,
                        "roomId": "ELEVATOR",
                        "charInstIds": [],
                        "completeConstructTime": -1
                    },
                    "slot_19": {
                        "level": 1,
                        "state": 2,
                        "roomId": "CORRIDOR",
                        "charInstIds": [],
                        "completeConstructTime": -1
                    },
                    "slot_20": {
                        "level": 4,
                        "state": 2,
                        "roomId": "DORMITORY",
                        "charInstIds": [
                            14,
                            72,
                            31,
                            28,
                            47
                        ],
                        "completeConstructTime": 1586914444
                    },
                    "slot_17": {
                        "level": 1,
                        "state": 2,
                        "roomId": "CORRIDOR",
                        "charInstIds": [],
                        "completeConstructTime": -1
                    },
                    "slot_16": {
                        "level": 3,
                        "state": 2,
                        "roomId": "POWER",
                        "charInstIds": [
                            -1
                        ],
                        "completeConstructTime": 1586514436
                    },
                    "slot_15": {
                        "level": 3,
                        "state": 2,
                        "roomId": "MANUFACTURE",
                        "charInstIds": [
                            53,
                            5,
                            3
                        ],
                        "completeConstructTime": 1585714535
                    },
                    "slot_14": {
                        "level": 2,
                        "state": 2,
                        "roomId": "MANUFACTURE",
                        "charInstIds": [
                            9,
                            44
                        ],
                        "completeConstructTime": 1586514442
                    },
                    "slot_21": {
                        "level": 1,
                        "state": 2,
                        "roomId": "ELEVATOR",
                        "charInstIds": [],
                        "completeConstructTime": -1
                    },
                    "slot_22": {
                        "level": 1,
                        "state": 2,
                        "roomId": "CORRIDOR",
                        "charInstIds": [],
                        "completeConstructTime": -1
                    },
                    "slot_23": {
                        "level": 3,
                        "state": 2,
                        "roomId": "HIRE",
                        "charInstIds": [
                            68
                        ],
                        "completeConstructTime": 1585341273
                    },
                    "slot_8": {
                        "level": 1,
                        "state": 2,
                        "roomId": "ELEVATOR",
                        "charInstIds": [],
                        "completeConstructTime": -1
                    },
                    "slot_7": {
                        "level": 3,
                        "state": 2,
                        "roomId": "MANUFACTURE",
                        "charInstIds": [
                            20,
                            38,
                            40
                        ],
                        "completeConstructTime": 1585795459
                    },
                    "slot_11": {
                        "level": 1,
                        "state": 2,
                        "roomId": "ELEVATOR",
                        "charInstIds": [],
                        "completeConstructTime": -1
                    },
                    "slot_12": {
                        "level": 1,
                        "state": 2,
                        "roomId": "CORRIDOR",
                        "charInstIds": [],
                        "completeConstructTime": -1
                    },
                    "slot_13": {
                        "level": 2,
                        "state": 2,
                        "roomId": "TRAINING",
                        "charInstIds": [
                            75,
                            59
                        ],
                        "completeConstructTime": 1586629258
                    },
                    "slot_6": {
                        "level": 2,
                        "state": 2,
                        "roomId": "POWER",
                        "charInstIds": [
                            -1
                        ],
                        "completeConstructTime": 1585327248
                    },
                    "slot_5": {
                        "level": 3,
                        "state": 2,
                        "roomId": "TRADING",
                        "charInstIds": [
                            60,
                            18,
                            70
                        ],
                        "completeConstructTime": 1586751334
                    },
                    "slot_9": {
                        "level": 4,
                        "state": 2,
                        "roomId": "DORMITORY",
                        "charInstIds": [
                            62,
                            12,
                            48,
                            49,
                            37
                        ],
                        "completeConstructTime": 1591144136
                    },
                    "slot_10": {
                        "level": 1,
                        "state": 2,
                        "roomId": "CORRIDOR",
                        "charInstIds": [],
                        "completeConstructTime": -1
                    },
                    "slot_1": {
                        "level": 1,
                        "state": 2,
                        "roomId": "ELEVATOR",
                        "charInstIds": [],
                        "completeConstructTime": -1
                    },
                    "slot_2": {
                        "level": 1,
                        "state": 2,
                        "roomId": "CORRIDOR",
                        "charInstIds": [],
                        "completeConstructTime": -1
                    },
                    "slot_3": {
                        "level": 3,
                        "state": 2,
                        "roomId": "DORMITORY",
                        "charInstIds": [
                            67,
                            55,
                            6,
                            36,
                            11
                        ],
                        "completeConstructTime": 1586367582
                    },
                    "slot_4": {
                        "level": 1,
                        "state": 2,
                        "roomId": "ELEVATOR",
                        "charInstIds": [],
                        "completeConstructTime": -1
                    }
                },
                "rooms": {
                    "CONTROL": {
                        "slot_34": {
                            "buff": {
                                "global": {
                                    "apCost": 0
                                },
                                "manufacture": {
                                    "speed": 0
                                },
                                "trading": {
                                    "speed": 0
                                },
                                "apCost": {},
                                "meeting": {
                                    "clue": 0
                                }
                            },
                            "apCost": -100
                        }
                    },
                    "ELEVATOR": {
                        "slot_37": {},
                        "slot_38": {},
                        "slot_33": {},
                        "slot_27": {},
                        "slot_30": {},
                        "slot_35": {},
                        "slot_18": {},
                        "slot_21": {},
                        "slot_8": {},
                        "slot_11": {},
                        "slot_1": {},
                        "slot_4": {}
                    },
                    "POWER": {
                        "slot_26": {
                            "buff": {
                                "laborSpeed": 0
                            }
                        },
                        "slot_16": {
                            "buff": {
                                "laborSpeed": 0
                            }
                        },
                        "slot_6": {
                            "buff": {
                                "laborSpeed": 0
                            }
                        }
                    },
                    "MANUFACTURE": {
                        "slot_25": {
                            "buff": {
                                "apCost": {
                                    "self": {}
                                },
                                "speed": 0.45,
                                "capacity": 0
                            },
                            "state": 1,
                            "formulaId": "3",
                            "remainSolutionCnt": 13,
                            "outputSolutionCnt": 0,
                            "lastUpdateTime": 1591376654,
                            "saveTime": 2019,
                            "tailTime": 4706,
                            "apCost": -90,
                            "completeWorkTime": 1591444597,
                            "capacity": 54,
                            "processPoint": 9483.3
                        },
                        "slot_15": {
                            "buff": {
                                "apCost": {
                                    "self": {
                                        "53": 25
                                    }
                                },
                                "speed": 0.23000000000000004,
                                "capacity": 28
                            },
                            "state": 1,
                            "formulaId": "3",
                            "remainSolutionCnt": 10,
                            "outputSolutionCnt": 0,
                            "lastUpdateTime": 1591376654,
                            "saveTime": 1140,
                            "tailTime": 4711,
                            "apCost": -90,
                            "completeWorkTime": 1591457400,
                            "capacity": 82,
                            "processPoint": 8683.18
                        },
                        "slot_7": {
                            "buff": {
                                "apCost": {
                                    "self": {}
                                },
                                "speed": 0.78,
                                "capacity": 0
                            },
                            "state": 1,
                            "formulaId": "4",
                            "remainSolutionCnt": 25,
                            "outputSolutionCnt": 2,
                            "lastUpdateTime": 1591376654,
                            "saveTime": 3676,
                            "tailTime": 1756.08427,
                            "apCost": -90,
                            "completeWorkTime": 1591435573,
                            "capacity": 54,
                            "processPoint": 3125.83
                        },
                        "slot_14": {
                            "buff": {
                                "apCost": {
                                    "self": {}
                                },
                                "speed": 0.52,
                                "capacity": 0
                            },
                            "state": 1,
                            "formulaId": "3",
                            "remainSolutionCnt": 7,
                            "outputSolutionCnt": 0,
                            "lastUpdateTime": 1591376654,
                            "saveTime": 2447,
                            "tailTime": 4725,
                            "apCost": -95,
                            "completeWorkTime": 1591421666,
                            "capacity": 36,
                            "processPoint": 7182
                        }
                    },
                    "TRADING": {
                        "slot_24": {
                            "buff": {
                                "speed": 0.98,
                                "limit": 0,
                                "apCost": {
                                    "all": 0,
                                    "single": {},
                                    "self": {
                                        "27": 25
                                    }
                                },
                                "rate": {},
                                "tgw": []
                            },
                            "state": 1,
                            "lastUpdateTime": 1591376654,
                            "strategy": "O_GOLD",
                            "stockLimit": 10,
                            "apCost": -90,
                            "stock": [{
                                "instId": 2086,
                                "delivery": [{
                                    "id": "3003",
                                    "type": "MATERIAL",
                                    "count": 4
                                }],
                                "type": "O_GOLD",
                                "gain": {
                                    "type": "GOLD",
                                    "id": "4001",
                                    "count": 2000
                                }
                            }],
                            "next": {
                                "order": 2088,
                                "processPoint": 13712.76,
                                "maxPoint": 16560,
                                "speed": 1.98
                            },
                            "completeWorkTime": 1591383579
                        },
                        "slot_5": {
                            "buff": {
                                "speed": 0.48,
                                "limit": 4,
                                "apCost": {
                                    "all": 0,
                                    "single": {},
                                    "self": {
                                        "60": 25
                                    }
                                },
                                "rate": {},
                                "tgw": []
                            },
                            "state": 1,
                            "lastUpdateTime": 1591376654,
                            "strategy": "O_GOLD",
                            "stockLimit": 14,
                            "apCost": -90,
                            "stock": [{
                                "instId": 2085,
                                "delivery": [{
                                    "id": "3003",
                                    "type": "MATERIAL",
                                    "count": 3
                                }],
                                "type": "O_GOLD",
                                "gain": {
                                    "type": "GOLD",
                                    "id": "4001",
                                    "count": 1500
                                }
                            }],
                            "next": {
                                "order": 2087,
                                "processPoint": 8282.84,
                                "maxPoint": 12600,
                                "speed": 1.48
                            },
                            "completeWorkTime": 1591382250
                        }
                    },
                    "CORRIDOR": {
                        "slot_29": {},
                        "slot_31": {},
                        "slot_19": {},
                        "slot_17": {},
                        "slot_22": {},
                        "slot_12": {},
                        "slot_10": {},
                        "slot_2": {}
                    },
                    "DORMITORY": {
                        "slot_28": {
                            "buff": {
                                "apCost": {
                                    "all": 0,
                                    "single": {
                                        "target": null,
                                        "value": 0
                                    },
                                    "self": {}
                                }
                            },
                            "comfort": 4000,
                            "diySolution": {
                                "wallPaper": "furni_beach_wallpaper_01",
                                "floor": "furni_beach_floor_01",
                                "carpet": [{
                                        "id": "furni_beach_carpet_01",
                                        "coordinate": {
                                            "x": 11,
                                            "y": 0
                                        }
                                    },
                                    {
                                        "id": "furni_beach_doorMat_01",
                                        "coordinate": {
                                            "x": 0,
                                            "y": 5
                                        }
                                    },
                                    {
                                        "id": "furni_beach_doorMat_01",
                                        "coordinate": {
                                            "x": 32,
                                            "y": 5
                                        }
                                    }
                                ],
                                "other": [{
                                        "id": "furni_beach_cabinet_01",
                                        "coordinate": {
                                            "x": 0,
                                            "y": 1
                                        }
                                    },
                                    {
                                        "id": "furni_beach_tableChairSets_01",
                                        "coordinate": {
                                            "x": 4,
                                            "y": 1
                                        }
                                    },
                                    {
                                        "id": "furni_beach_calendar_01",
                                        "coordinate": {
                                            "x": 10,
                                            "y": 3
                                        }
                                    },
                                    {
                                        "id": "furni_beach_floorLamp_01",
                                        "coordinate": {
                                            "x": 11,
                                            "y": 1
                                        }
                                    },
                                    {
                                        "id": "furni_beach_anchor_01",
                                        "coordinate": {
                                            "x": 15,
                                            "y": 2
                                        }
                                    },
                                    {
                                        "id": "furni_beach_sail_01",
                                        "coordinate": {
                                            "x": 23,
                                            "y": 5
                                        }
                                    },
                                    {
                                        "id": "furni_beach_chair_01",
                                        "coordinate": {
                                            "x": 20,
                                            "y": 0
                                        }
                                    },
                                    {
                                        "id": "furni_beach_coffeeTable_01",
                                        "coordinate": {
                                            "x": 20,
                                            "y": 4
                                        }
                                    },
                                    {
                                        "id": "furni_beach_drinkTable_01",
                                        "coordinate": {
                                            "x": 26,
                                            "y": 3
                                        }
                                    },
                                    {
                                        "id": "furni_beach_surfboard_01",
                                        "coordinate": {
                                            "x": 26,
                                            "y": 1
                                        }
                                    },
                                    {
                                        "id": "furni_beach_deckChair_01",
                                        "coordinate": {
                                            "x": 28,
                                            "y": 3
                                        }
                                    },
                                    {
                                        "id": "furni_beach_curtain_L_01",
                                        "coordinate": {
                                            "x": 0,
                                            "y": 0
                                        }
                                    },
                                    {
                                        "id": "furni_beach_curtain_R_01",
                                        "coordinate": {
                                            "x": 28,
                                            "y": 0
                                        }
                                    },
                                    {
                                        "id": "furni_beach_slopedCeiling_01",
                                        "coordinate": {
                                            "x": 0,
                                            "y": 0
                                        }
                                    }
                                ]
                            }
                        },
                        "slot_20": {
                            "buff": {
                                "apCost": {
                                    "all": 0,
                                    "single": {
                                        "target": null,
                                        "value": 0
                                    },
                                    "self": {}
                                }
                            },
                            "comfort": 4000,
                            "diySolution": {
                                "wallPaper": "furni_safetyZone_wallpaper_01",
                                "floor": "furni_safetyZone_floor_01",
                                "carpet": [{
                                    "id": "furni_safetyZone_carpet_01",
                                    "coordinate": {
                                        "x": 6,
                                        "y": 0
                                    }
                                }],
                                "other": [{
                                        "id": "furni_safetyZone_gate_01",
                                        "coordinate": {
                                            "x": 2,
                                            "y": 5
                                        }
                                    },
                                    {
                                        "id": "furni_safetyZone_UVLamp_01",
                                        "coordinate": {
                                            "x": 6,
                                            "y": 9
                                        }
                                    },
                                    {
                                        "id": "furni_safetyZone_oxygenTank_01",
                                        "coordinate": {
                                            "x": 4,
                                            "y": 0
                                        }
                                    },
                                    {
                                        "id": "furni_safetyZone_stretcher_01",
                                        "coordinate": {
                                            "x": 9,
                                            "y": 2
                                        }
                                    },
                                    {
                                        "id": "furni_safetyZone_hazmatSuit_01",
                                        "coordinate": {
                                            "x": 11,
                                            "y": 2
                                        }
                                    },
                                    {
                                        "id": "furni_safetyZone_hazmatCoat_01",
                                        "coordinate": {
                                            "x": 13,
                                            "y": 2
                                        }
                                    },
                                    {
                                        "id": "furni_safetyZone_shovel_01",
                                        "coordinate": {
                                            "x": 15,
                                            "y": 3
                                        }
                                    },
                                    {
                                        "id": "furni_safetyZone_box_01",
                                        "coordinate": {
                                            "x": 16,
                                            "y": 3
                                        }
                                    },
                                    {
                                        "id": "furni_safetyZone_partitionWall_01",
                                        "coordinate": {
                                            "x": 20,
                                            "y": 0
                                        }
                                    },
                                    {
                                        "id": "furni_safetyZone_roboticArmVehicle_01",
                                        "coordinate": {
                                            "x": 21,
                                            "y": 3
                                        }
                                    },
                                    {
                                        "id": "furni_safetyZone_virusFilter_01",
                                        "coordinate": {
                                            "x": 26,
                                            "y": 0
                                        }
                                    },
                                    {
                                        "id": "furni_safetyZone_pipeline1_01",
                                        "coordinate": {
                                            "x": 0,
                                            "y": 8
                                        }
                                    },
                                    {
                                        "id": "furni_safetyZone_pipeline2_01",
                                        "coordinate": {
                                            "x": 4,
                                            "y": 6
                                        }
                                    },
                                    {
                                        "id": "furni_safetyZone_PipelineValve_01",
                                        "coordinate": {
                                            "x": 18,
                                            "y": 0
                                        }
                                    },
                                    {
                                        "id": "furni_safetyZone_ceilingLight_01",
                                        "coordinate": {
                                            "x": 11,
                                            "y": 5
                                        }
                                    },
                                    {
                                        "id": "furni_safetyZone_ceiling_01",
                                        "coordinate": {
                                            "x": 0,
                                            "y": 0
                                        }
                                    },
                                    {
                                        "id": "furni_safetyZone_downlight_01",
                                        "coordinate": {
                                            "x": 7,
                                            "y": 5
                                        }
                                    },
                                    {
                                        "id": "furni_safetyZone_downlight_01",
                                        "coordinate": {
                                            "x": 20,
                                            "y": 5
                                        }
                                    }
                                ]
                            }
                        },
                        "slot_9": {
                            "buff": {
                                "apCost": {
                                    "all": 0,
                                    "single": {
                                        "target": null,
                                        "value": 0
                                    },
                                    "self": {}
                                }
                            },
                            "comfort": 2285,
                            "diySolution": {
                                "wallPaper": "furni_artdeco_wallpaper_01",
                                "floor": "furni_artdeco_floor_01",
                                "carpet": [],
                                "other": [{
                                        "id": "furni_artdeco_barCeiling_01",
                                        "coordinate": {
                                            "x": 0,
                                            "y": 3
                                        }
                                    },
                                    {
                                        "id": "furni_artdeco_framedArt_01",
                                        "coordinate": {
                                            "x": 3,
                                            "y": 3
                                        }
                                    },
                                    {
                                        "id": "furni_artdeco_wallLamp_01",
                                        "coordinate": {
                                            "x": 9,
                                            "y": 4
                                        }
                                    },
                                    {
                                        "id": "furni_artdeco_wallLamp_01",
                                        "coordinate": {
                                            "x": 24,
                                            "y": 4
                                        }
                                    },
                                    {
                                        "id": "furni_artdeco_bar_01",
                                        "coordinate": {
                                            "x": 0,
                                            "y": 3
                                        }
                                    },
                                    {
                                        "id": "furni_artdeco_sofa_01",
                                        "coordinate": {
                                            "x": 22,
                                            "y": 0
                                        }
                                    },
                                    {
                                        "id": "furni_artdeco_pianoKit_01",
                                        "coordinate": {
                                            "x": 12,
                                            "y": 1
                                        }
                                    },
                                    {
                                        "id": "furni_artdeco_floorLamp_01",
                                        "coordinate": {
                                            "x": 32,
                                            "y": 4
                                        }
                                    },
                                    {
                                        "id": "furni_artdeco_framedArt2_01",
                                        "coordinate": {
                                            "x": 27,
                                            "y": 3
                                        }
                                    }
                                ]
                            }
                        },
                        "slot_3": {
                            "buff": {
                                "apCost": {
                                    "all": 20,
                                    "single": {
                                        "target": null,
                                        "value": 0
                                    },
                                    "self": {
                                        "11": -10,
                                        "55": 70,
                                        "67": 70
                                    }
                                }
                            },
                            "comfort": 2925,
                            "diySolution": {
                                "wallPaper": "furni_wooden_wallpaper_01",
                                "floor": null,
                                "carpet": [{
                                    "id": "furni_guitar_carpet_01",
                                    "coordinate": {
                                        "x": 0,
                                        "y": 0
                                    }
                                }],
                                "other": [{
                                        "id": "furni_guitar_guitar1_01",
                                        "coordinate": {
                                            "x": 5,
                                            "y": 2
                                        }
                                    },
                                    {
                                        "id": "furni_guitar_guitar2_01",
                                        "coordinate": {
                                            "x": 6,
                                            "y": 2
                                        }
                                    },
                                    {
                                        "id": "furni_guitar_guitar3_01",
                                        "coordinate": {
                                            "x": 7,
                                            "y": 2
                                        }
                                    },
                                    {
                                        "id": "furni_guitar_guitar4_01",
                                        "coordinate": {
                                            "x": 8,
                                            "y": 2
                                        }
                                    },
                                    {
                                        "id": "furni_guitar_guitar5_01",
                                        "coordinate": {
                                            "x": 9,
                                            "y": 2
                                        }
                                    },
                                    {
                                        "id": "furni_guitar_guitar6_01",
                                        "coordinate": {
                                            "x": 11,
                                            "y": 2
                                        }
                                    },
                                    {
                                        "id": "furni_guitar_guitar7_01",
                                        "coordinate": {
                                            "x": 12,
                                            "y": 2
                                        }
                                    },
                                    {
                                        "id": "furni_guitar_guitar8_01",
                                        "coordinate": {
                                            "x": 13,
                                            "y": 2
                                        }
                                    },
                                    {
                                        "id": "furni_guitar_guitar10_01",
                                        "coordinate": {
                                            "x": 15,
                                            "y": 2
                                        }
                                    },
                                    {
                                        "id": "furni_guitar_guitarCases_01",
                                        "coordinate": {
                                            "x": 14,
                                            "y": 3
                                        }
                                    },
                                    {
                                        "id": "furni_guitar_drumKit_01",
                                        "coordinate": {
                                            "x": 2,
                                            "y": 4
                                        }
                                    },
                                    {
                                        "id": "furni_guitar_longBench_01",
                                        "coordinate": {
                                            "x": 8,
                                            "y": 2
                                        }
                                    },
                                    {
                                        "id": "furni_guitar_reception_01",
                                        "coordinate": {
                                            "x": 26,
                                            "y": 2
                                        }
                                    },
                                    {
                                        "id": "furni_guitar_stool_01",
                                        "coordinate": {
                                            "x": 28,
                                            "y": 5
                                        }
                                    },
                                    {
                                        "id": "furni_guitar_display_01",
                                        "coordinate": {
                                            "x": 25,
                                            "y": 6
                                        }
                                    },
                                    {
                                        "id": "furni_guitar_pegboard_01",
                                        "coordinate": {
                                            "x": 28,
                                            "y": 2
                                        }
                                    },
                                    {
                                        "id": "furni_guitar_pegboard2_01",
                                        "coordinate": {
                                            "x": 31,
                                            "y": 2
                                        }
                                    },
                                    {
                                        "id": "furni_obsidianFestival_DJBooth_01",
                                        "coordinate": {
                                            "x": 14,
                                            "y": 7
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "WORKSHOP": {
                        "slot_32": {
                            "buff": {
                                "rate": {
                                    "all": 1,
                                    "W_BUILDING": 1,
                                    "W_EVOLVE": 1
                                },
                                "cost": {
                                    "type": "",
                                    "limit": 0,
                                    "reduction": 0
                                },
                                "costRe": {
                                    "type": "",
                                    "from": 0,
                                    "change": 0
                                }
                            }
                        }
                    },
                    "MEETING": {
                        "slot_36": {
                            "buff": {
                                "speed": 0.5,
                                "weight": {
                                    "RHINE": 0,
                                    "PENGUIN": 0,
                                    "BLACKSTEEL": 0,
                                    "URSUS": 0,
                                    "GLASGOW": 0,
                                    "KJERAG": 0,
                                    "RHODES": 0
                                }
                            },
                            "state": 1,
                            "speed": 180,
                            "processPoint": 4106278,
                            "ownStock": [{
                                    "id": "-1#246#1590663428",
                                    "type": "RHINE",
                                    "number": 2,
                                    "uid": "-1",
                                    "name": "Towa-sama",
                                    "nickNum": "-1",
                                    "chars": [{
                                            "charId": "char_009_12fce",
                                            "level": 30,
                                            "skin": "char_009_12fce#1",
                                            "evolvePhase": 0
                                        },
                                        {
                                            "charId": "char_274_astesi",
                                            "level": 50,
                                            "skin": "char_274_astesi#1",
                                            "evolvePhase": 0
                                        }
                                    ],
                                    "inUse": 1
                                },
                                {
                                    "id": "-1#248#1590710145",
                                    "type": "PENGUIN",
                                    "number": 6,
                                    "uid": "-1",
                                    "name": "Towa-sama",
                                    "nickNum": "-1",
                                    "chars": [{
                                            "charId": "char_009_12fce",
                                            "level": 30,
                                            "skin": "char_009_12fce#1",
                                            "evolvePhase": 0
                                        },
                                        {
                                            "charId": "char_274_astesi",
                                            "level": 50,
                                            "skin": "char_274_astesi#1",
                                            "evolvePhase": 0
                                        }
                                    ],
                                    "inUse": 1
                                },
                                {
                                    "id": "-1#250#1590802142",
                                    "type": "BLACKSTEEL",
                                    "number": 2,
                                    "uid": "-1",
                                    "name": "Towa-sama",
                                    "nickNum": "-1",
                                    "chars": [{
                                            "charId": "char_133_mm",
                                            "level": 1,
                                            "skin": "char_133_mm#1",
                                            "evolvePhase": 0
                                        },
                                        {
                                            "charId": "char_236_rope",
                                            "level": 1,
                                            "skin": "char_236_rope@witch#1",
                                            "evolvePhase": 0
                                        }
                                    ],
                                    "inUse": 1
                                },
                                {
                                    "id": "-1#251#1590843082",
                                    "type": "GLASGOW",
                                    "number": 1,
                                    "uid": "-1",
                                    "name": "Towa-sama",
                                    "nickNum": "-1",
                                    "chars": [{
                                            "charId": "char_133_mm",
                                            "level": 1,
                                            "skin": "char_133_mm#1",
                                            "evolvePhase": 0
                                        },
                                        {
                                            "charId": "char_236_rope",
                                            "level": 1,
                                            "skin": "char_236_rope@witch#1",
                                            "evolvePhase": 0
                                        }
                                    ],
                                    "inUse": 1
                                },
                                {
                                    "id": "-1#253#1590892606",
                                    "type": "RHODES",
                                    "number": 3,
                                    "uid": "-1",
                                    "name": "Towa-sama",
                                    "nickNum": "-1",
                                    "chars": [{
                                            "charId": "char_009_12fce",
                                            "level": 30,
                                            "skin": "char_009_12fce#1",
                                            "evolvePhase": 0
                                        },
                                        {
                                            "charId": "char_274_astesi",
                                            "level": 50,
                                            "skin": "char_274_astesi#1",
                                            "evolvePhase": 0
                                        }
                                    ],
                                    "inUse": 1
                                },
                                {
                                    "id": "-1#255#1590939075",
                                    "type": "GLASGOW",
                                    "number": 5,
                                    "uid": "-1",
                                    "name": "Towa-sama",
                                    "nickNum": "-1",
                                    "chars": [{
                                            "charId": "char_009_12fce",
                                            "level": 30,
                                            "skin": "char_009_12fce#1",
                                            "evolvePhase": 0
                                        },
                                        {
                                            "charId": "char_274_astesi",
                                            "level": 50,
                                            "skin": "char_274_astesi#1",
                                            "evolvePhase": 0
                                        }
                                    ],
                                    "inUse": 0
                                },
                                {
                                    "id": "-1#258#1591098496",
                                    "type": "GLASGOW",
                                    "number": 2,
                                    "uid": "-1",
                                    "name": "Towa-sama",
                                    "nickNum": "-1",
                                    "chars": [{
                                            "charId": "char_009_12fce",
                                            "level": 30,
                                            "skin": "char_009_12fce#1",
                                            "evolvePhase": 0
                                        },
                                        {
                                            "charId": "char_274_astesi",
                                            "level": 50,
                                            "skin": "char_274_astesi#1",
                                            "evolvePhase": 0
                                        }
                                    ],
                                    "inUse": 0
                                },
                                {
                                    "id": "-1#261#1591213452",
                                    "type": "KJERAG",
                                    "number": 3,
                                    "uid": "-1",
                                    "name": "Towa-sama",
                                    "nickNum": "-1",
                                    "chars": [{
                                            "charId": "char_133_mm",
                                            "level": 1,
                                            "skin": "char_133_mm#1",
                                            "evolvePhase": 0
                                        },
                                        {
                                            "charId": "char_236_rope",
                                            "level": 1,
                                            "skin": "char_236_rope@witch#1",
                                            "evolvePhase": 0
                                        }
                                    ],
                                    "inUse": 1
                                },
                                {
                                    "id": "-1#263#1591316433",
                                    "type": "RHODES",
                                    "number": 3,
                                    "uid": "-1",
                                    "name": "Towa-sama",
                                    "nickNum": "-1",
                                    "chars": [{
                                            "charId": "char_009_12fce",
                                            "level": 30,
                                            "skin": "char_009_12fce#1",
                                            "evolvePhase": 0
                                        },
                                        {
                                            "charId": "char_274_astesi",
                                            "level": 30,
                                            "skin": "char_274_astesi#1",
                                            "evolvePhase": 1
                                        }
                                    ],
                                    "inUse": 0
                                },
                                {
                                    "id": "-1#264#1591356882",
                                    "type": "RHINE",
                                    "number": 4,
                                    "uid": "-1",
                                    "name": "Towa-sama",
                                    "nickNum": "-1",
                                    "chars": [{
                                            "charId": "char_009_12fce",
                                            "level": 30,
                                            "skin": "char_009_12fce#1",
                                            "evolvePhase": 0
                                        },
                                        {
                                            "charId": "char_274_astesi",
                                            "level": 30,
                                            "skin": "char_274_astesi#1",
                                            "evolvePhase": 1
                                        }
                                    ],
                                    "inUse": 0
                                }
                            ],
                            "receiveStock": [{
                                "id": "24310789#408#1591165560",
                                "type": "PENGUIN",
                                "number": 4,
                                "uid": "-1",
                                "name": "censored",
                                "nickNum": "-1",
                                "chars": [{
                                        "charId": "char_236_rope",
                                        "level": 45,
                                        "skin": "char_236_rope#1",
                                        "evolvePhase": 0
                                    },
                                    {
                                        "charId": "char_010_chen",
                                        "level": 60,
                                        "skin": "char_010_chen#2",
                                        "evolvePhase": 2
                                    }
                                ],
                                "inUse": 0,
                                "ts": 1592132399
                            }],
                            "board": {
                                "RHINE": "-1#246#1590663428",
                                "BLACKSTEEL": "-1#250#1590802142",
                                "GLASGOW": "-1#251#1590843082",
                                "RHODES": "-1#253#1590892606",
                                "KJERAG": "-1#261#1591213452",
                                "PENGUIN": "-1#248#1590710145"
                            },
                            "socialReward": {
                                "daily": 0,
                                "search": 0
                            },
                            "dailyReward": {
                                "id": "-1#260#1591189828",
                                "type": "PENGUIN",
                                "number": 6,
                                "uid": "-1",
                                "name": "Towa-sama",
                                "nickNum": "-1",
                                "chars": [{
                                        "charId": "char_133_mm",
                                        "level": 1,
                                        "skin": "char_133_mm#1",
                                        "evolvePhase": 0
                                    },
                                    {
                                        "charId": "char_236_rope",
                                        "level": 1,
                                        "skin": "char_236_rope@witch#1",
                                        "evolvePhase": 0
                                    }
                                ],
                                "inUse": 0
                            },
                            "expiredReward": 0,
                            "received": 0,
                            "infoShare": {
                                "ts": 1590959974,
                                "reward": 0
                            },
                            "lastUpdateTime": 1591376654,
                            "completeWorkTime": 1591399466
                        }
                    },
                    "HIRE": {
                        "slot_23": {
                            "buff": {
                                "speed": 0.45
                            },
                            "state": 1,
                            "refreshCount": 0,
                            "lastUpdateTime": 1591376654,
                            "processPoint": 2745515,
                            "speed": 145,
                            "completeWorkTime": 1591395588
                        }
                    },
                    "TRAINING": {
                        "slot_13": {
                            "buff": {
                                "speed": 0.05
                            },
                            "state": 0,
                            "lastUpdateTime": 1591376654,
                            "trainee": {
                                "charInstId": 59,
                                "state": 3,
                                "targetSkill": -1,
                                "processPoint": -1,
                                "speed": 1.05
                            },
                            "trainer": {
                                "charInstId": 75,
                                "state": 3
                            }
                        }
                    }
                },
                "furniture": {
                    "furni_warehouse_cardboard_01": {
                        "count": 4,
                        "inUse": 0
                    },
                    "furni_warehouse_storageshelf_01": {
                        "count": 4,
                        "inUse": 0
                    },
                    "furni_warehouse_boxes_01": {
                        "count": 4,
                        "inUse": 0
                    },
                    "furni_warehouse_boxes_02": {
                        "count": 4,
                        "inUse": 0
                    },
                    "furni_warehouse_boxes_03": {
                        "count": 4,
                        "inUse": 0
                    },
                    "furni_warehouse_chair_01": {
                        "count": 4,
                        "inUse": 0
                    },
                    "furni_warehouse_bed_01": {
                        "count": 4,
                        "inUse": 0
                    },
                    "furni_warehouse_laptop_01": {
                        "count": 4,
                        "inUse": 0
                    },
                    "furni_warehouse_trolley_01": {
                        "count": 4,
                        "inUse": 0
                    },
                    "furni_warehouse_attendance_01": {
                        "count": 4,
                        "inUse": 0
                    },
                    "furni_warehouse_note_01": {
                        "count": 4,
                        "inUse": 0
                    },
                    "furni_warehouse_graffiti_01": {
                        "count": 4,
                        "inUse": 0
                    },
                    "furni_dropN001_generator_02": {
                        "count": 1,
                        "inUse": 0
                    },
                    "furni_wooden_rockingChair_01": {
                        "count": 1,
                        "inUse": 0
                    },
                    "furni_artdeco_pianoKit_01": {
                        "count": 3,
                        "inUse": 1
                    },
                    "furni_artdeco_barCeiling_01": {
                        "count": 2,
                        "inUse": 1
                    },
                    "furni_artdeco_bar_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_artdeco_framedArt2_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_wooden_loftBed_01": {
                        "count": 1,
                        "inUse": 0
                    },
                    "furni_artdeco_wallLamp_01": {
                        "count": 3,
                        "inUse": 2
                    },
                    "furni_artdeco_wallpaper_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_dropS001_snowWhite_01": {
                        "count": 1,
                        "inUse": 0
                    },
                    "furni_dropS001_cinderella_01": {
                        "count": 1,
                        "inUse": 0
                    },
                    "furni_dropS001_theHonestWoodcutter_01": {
                        "count": 1,
                        "inUse": 0
                    },
                    "furni_safetyZone_gate_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_safetyZone_roboticArmVehicle_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_safetyZone_virusFilter_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_safetyZone_pipeline1_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_safetyZone_pipeline2_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_safetyZone_PipelineValve_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_safetyZone_ceilingLight_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_safetyZone_ceiling_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_safetyZone_downlight_01": {
                        "count": 2,
                        "inUse": 2
                    },
                    "furni_safetyZone_carpet_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_safetyZone_wallpaper_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_safetyZone_UVLamp_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_safetyZone_floor_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_safetyZone_oxygenTank_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_safetyZone_stretcher_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_safetyZone_hazmatSuit_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_safetyZone_hazmatCoat_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_safetyZone_shovel_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_safetyZone_box_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_safetyZone_partitionWall_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_dropS001_theLittleMermaid_01": {
                        "count": 1,
                        "inUse": 0
                    },
                    "furni_dropS001_peterPan_01": {
                        "count": 1,
                        "inUse": 0
                    },
                    "furni_team001_lungmen_diningCar_01": {
                        "count": 1,
                        "inUse": 0
                    },
                    "furni_dropS001_matchGirl_01": {
                        "count": 1,
                        "inUse": 0
                    },
                    "furni_dropS001_hanselAndGretel_01": {
                        "count": 1,
                        "inUse": 0
                    },
                    "furni_dropS001_sleepingBeauty_01": {
                        "count": 1,
                        "inUse": 0
                    },
                    "furni_wooden_cabinet_01": {
                        "count": 1,
                        "inUse": 0
                    },
                    "furni_dropS001_theTallowCandle_01": {
                        "count": 1,
                        "inUse": 0
                    },
                    "furni_dropS001_theUglyDuckling_01": {
                        "count": 1,
                        "inUse": 0
                    },
                    "furni_single001_letterLight_0_01": {
                        "count": 1,
                        "inUse": 0
                    },
                    "furni_wooden_deerHeads_01": {
                        "count": 2,
                        "inUse": 0
                    },
                    "furni_wooden_violin_01": {
                        "count": 1,
                        "inUse": 0
                    },
                    "furni_artdeco_floorLamp_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_wooden_chair_L_01": {
                        "count": 1,
                        "inUse": 0
                    },
                    "furni_dropS004_daftPunk_01": {
                        "count": 1,
                        "inUse": 0
                    },
                    "furni_guitar_poster1_01": {
                        "count": 1,
                        "inUse": 0
                    },
                    "furni_guitar_poster2_01": {
                        "count": 1,
                        "inUse": 0
                    },
                    "furni_guitar_display_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_guitar_longBench_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_guitar_guitarCases_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_guitar_carpet_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_guitar_drumKit_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_dropS004_kraftwerk_01": {
                        "count": 1,
                        "inUse": 0
                    },
                    "furni_guitar_pegboard_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_guitar_guitar1_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_guitar_guitar2_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_guitar_pegboard2_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_guitar_guitar5_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_guitar_guitar7_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_guitar_guitar8_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_guitar_stool_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_guitar_guitar3_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_guitar_reception_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_guitar_guitar4_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_guitar_guitar6_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_guitar_guitar10_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_artdeco_sofa_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_obsidianFestival_DJBooth_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_beach_cabinet_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_beach_surfboard_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_beach_deckChair_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_beach_curtain_L_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_beach_curtain_R_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_beach_carpet_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_beach_doorMat_01": {
                        "count": 2,
                        "inUse": 2
                    },
                    "furni_beach_slopedCeiling_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_beach_wallpaper_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_beach_floor_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_beach_tableChairSets_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_beach_calendar_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_beach_floorLamp_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_beach_anchor_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_beach_sail_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_beach_chair_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_beach_coffeeTable_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_beach_drinkTable_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_artdeco_floor_01": {
                        "count": 2,
                        "inUse": 1
                    },
                    "furni_dropS001_trinity_01": {
                        "count": 1,
                        "inUse": 0
                    },
                    "furni_artdeco_framedArt_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_wooden_wallpaper_01": {
                        "count": 1,
                        "inUse": 1
                    },
                    "furni_penguin_recordPlayer_01": {
                        "count": 1,
                        "inUse": 0
                    },
                    "furni_penguin_bulletinboard_01": {
                        "count": 1,
                        "inUse": 0
                    },
                    "furni_penguin_boxes_01": {
                        "count": 1,
                        "inUse": 0
                    },
                    "furni_penguin_oilDrumSink_01": {
                        "count": 1,
                        "inUse": 0
                    },
                    "furni_penguin_sofa_01": {
                        "count": 1,
                        "inUse": 0
                    },
                    "furni_penguin_shelf_01": {
                        "count": 1,
                        "inUse": 0
                    },
                    "furni_penguin_table_01": {
                        "count": 1,
                        "inUse": 0
                    },
                    "furni_dropS001_piedPiper_01": {
                        "count": 1,
                        "inUse": 0
                    },
                    "furni_dropS001_theFrogPrince_01": {
                        "count": 1,
                        "inUse": 0
                    },
                    "furni_dropS003_fabric_01": {
                        "count": 1,
                        "inUse": 0
                    },
                    "furni_dropS003_zero_01": {
                        "count": 1,
                        "inUse": 0
                    },
                    "furni_dropS003_asLongAsFar_01": {
                        "count": 1,
                        "inUse": 0
                    },
                    "furni_artdeco_refrigerator_01": {
                        "count": 1,
                        "inUse": 0
                    }
                },
                "diyPresetSolutions": {},
                "assist": [
                    1,
                    46,
                    65,
                    43,
                    73
                ]
            },
            "troop": {
                "curCharInstId": 112,
                "curSquadCount": 4,
                "squads": {
                    "0": {
                        "squadId": "0",
                        "name": "53",
                        "slots": [{
                                "charInstId": 46,
                                "skillIndex": 2
                            },
                            {
                                "charInstId": 43,
                                "skillIndex": 1
                            },
                            {
                                "charInstId": 25,
                                "skillIndex": 0
                            },
                            {
                                "charInstId": 61,
                                "skillIndex": 0
                            },
                            {
                                "charInstId": 38,
                                "skillIndex": 1
                            },
                            {
                                "charInstId": 28,
                                "skillIndex": 1
                            },
                            {
                                "charInstId": 37,
                                "skillIndex": 0
                            },
                            {
                                "charInstId": 16,
                                "skillIndex": 0
                            },
                            {
                                "charInstId": 60,
                                "skillIndex": 0
                            },
                            {
                                "charInstId": 56,
                                "skillIndex": 0
                            },
                            {
                                "charInstId": 62,
                                "skillIndex": 0
                            },
                            {
                                "charInstId": 5,
                                "skillIndex": 1
                            }
                        ]
                    },
                    "1": {
                        "squadId": "1",
                        "name": "ann3",
                        "slots": [{
                                "charInstId": 46,
                                "skillIndex": 1
                            },
                            {
                                "charInstId": 43,
                                "skillIndex": 1
                            },
                            {
                                "charInstId": 65,
                                "skillIndex": 1
                            },
                            {
                                "charInstId": 59,
                                "skillIndex": 1
                            },
                            {
                                "charInstId": 72,
                                "skillIndex": 1
                            },
                            {
                                "charInstId": 61,
                                "skillIndex": 0
                            },
                            {
                                "charInstId": 1,
                                "skillIndex": 0
                            },
                            {
                                "charInstId": 5,
                                "skillIndex": 1
                            },
                            {
                                "charInstId": 19,
                                "skillIndex": 1
                            },
                            {
                                "charInstId": 37,
                                "skillIndex": 0
                            },
                            {
                                "charInstId": 51,
                                "skillIndex": 0
                            },
                            {
                                "charInstId": 14,
                                "skillIndex": 0
                            }
                        ]
                    },
                    "2": {
                        "squadId": "2",
                        "name": "Annihilation",
                        "slots": [{
                                "charInstId": 46,
                                "skillIndex": 2
                            },
                            {
                                "charInstId": 39,
                                "skillIndex": 1
                            },
                            {
                                "charInstId": 43,
                                "skillIndex": 1
                            },
                            {
                                "charInstId": 65,
                                "skillIndex": 1
                            },
                            {
                                "charInstId": 66,
                                "skillIndex": 1
                            },
                            {
                                "charInstId": 37,
                                "skillIndex": 0
                            },
                            {
                                "charInstId": 26,
                                "skillIndex": -1
                            },
                            {
                                "charInstId": 61,
                                "skillIndex": 0
                            },
                            {
                                "charInstId": 33,
                                "skillIndex": 1
                            },
                            {
                                "charInstId": 1,
                                "skillIndex": 0
                            },
                            {
                                "charInstId": 62,
                                "skillIndex": 1
                            },
                            {
                                "charInstId": 59,
                                "skillIndex": 2
                            }
                        ]
                    },
                    "3": {
                        "squadId": "3",
                        "name": "mephistoo",
                        "slots": [{
                                "charInstId": 46,
                                "skillIndex": 2
                            },
                            {
                                "charInstId": 5,
                                "skillIndex": 1
                            },
                            {
                                "charInstId": 60,
                                "skillIndex": 0
                            },
                            {
                                "charInstId": 72,
                                "skillIndex": 1
                            },
                            {
                                "charInstId": 43,
                                "skillIndex": 2
                            },
                            {
                                "charInstId": 65,
                                "skillIndex": 1
                            },
                            {
                                "charInstId": 61,
                                "skillIndex": 0
                            },
                            {
                                "charInstId": 59,
                                "skillIndex": 1
                            },
                            {
                                "charInstId": 62,
                                "skillIndex": 1
                            },
                            {
                                "charInstId": 20,
                                "skillIndex": 0
                            },
                            {
                                "charInstId": 1,
                                "skillIndex": 0
                            },
                            {
                                "charInstId": 37,
                                "skillIndex": 0
                            }
                        ]
                    }
                },
                "chars": {
                    "1": {
                        "instId": 1,
                        "charId": "char_285_medic2",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_285_medic2#1",
                        "level": 30,
                        "exp": 0,
                        "evolvePhase": 0,
                        "defaultSkillIndex": -1,
                        "gainTime": 1591254258,
                        "skills": []
                    },
                    "2": {
                        "instId": 2,
                        "charId": "char_286_cast3",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_286_cast3#1",
                        "level": 30,
                        "exp": 0,
                        "evolvePhase": 0,
                        "defaultSkillIndex": -1,
                        "gainTime": 1591254258,
                        "skills": []
                    },
                    "3": {
                        "instId": 3,
                        "charId": "char_502_nblade",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_502_nblade#1",
                        "level": 30,
                        "exp": 0,
                        "evolvePhase": 0,
                        "defaultSkillIndex": -1,
                        "gainTime": 1591254258,
                        "skills": []
                    },
                    "4": {
                        "instId": 4,
                        "charId": "char_500_noirc",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_500_noirc#1",
                        "level": 30,
                        "exp": 0,
                        "evolvePhase": 0,
                        "defaultSkillIndex": -1,
                        "gainTime": 1591254258,
                        "skills": []
                    },
                    "5": {
                        "instId": 5,
                        "charId": "char_503_rang",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_503_rang#1",
                        "level": 30,
                        "exp": 0,
                        "evolvePhase": 0,
                        "defaultSkillIndex": -1,
                        "gainTime": 1591254258,
                        "skills": []
                    },
                    "6": {
                        "instId": 6,
                        "charId": "char_501_durin",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_501_durin#1",
                        "level": 30,
                        "exp": 0,
                        "evolvePhase": 0,
                        "defaultSkillIndex": -1,
                        "gainTime": 1591254258,
                        "skills": []
                    },
                    "7": {
                        "instId": 7,
                        "charId": "char_009_12fce",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_009_12fce#1",
                        "level": 30,
                        "exp": 0,
                        "evolvePhase": 0,
                        "defaultSkillIndex": -1,
                        "gainTime": 1591254258,
                        "skills": []
                    },
                    "8": {
                        "instId": 8,
                        "charId": "char_123_fang",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_123_fang#1",
                        "level": 55,
                        "exp": 0,
                        "evolvePhase": 1,
                        "defaultSkillIndex": 0,
                        "gainTime": 1591254258,
                        "skills": [{
                            "skillId": "skcom_charge_cost[1]",
                            "unlock": 1,
                            "state": 0,
                            "specializeLevel": 0,
                            "completeUpgradeTime": -1
                        }]
                    },
                    "9": {
                        "instId": 9,
                        "charId": "char_240_wyvern",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_240_wyvern#1",
                        "level": 55,
                        "exp": 0,
                        "evolvePhase": 1,
                        "defaultSkillIndex": 0,
                        "gainTime": 1591254258,
                        "skills": [{
                            "skillId": "skchr_wyvern_1",
                            "unlock": 1,
                            "state": 0,
                            "specializeLevel": 0,
                            "completeUpgradeTime": -1
                        }]
                    },
                    "10": {
                        "instId": 10,
                        "charId": "char_192_falco",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_192_falco#1",
                        "level": 55,
                        "exp": 0,
                        "evolvePhase": 1,
                        "defaultSkillIndex": 0,
                        "gainTime": 1591254258,
                        "skills": [{
                            "skillId": "skcom_quickattack[1]",
                            "unlock": 1,
                            "state": 0,
                            "specializeLevel": 0,
                            "completeUpgradeTime": -1
                        }]
                    },
                    "11": {
                        "instId": 11,
                        "charId": "char_208_melan",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_208_melan#1",
                        "level": 55,
                        "exp": 0,
                        "evolvePhase": 1,
                        "defaultSkillIndex": 0,
                        "gainTime": 1591254258,
                        "skills": [{
                            "skillId": "skcom_atk_up[1]",
                            "unlock": 1,
                            "state": 0,
                            "specializeLevel": 0,
                            "completeUpgradeTime": -1
                        }]
                    },
                    "12": {
                        "instId": 12,
                        "charId": "char_281_popka",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_281_popka#1",
                        "level": 55,
                        "exp": 0,
                        "evolvePhase": 1,
                        "defaultSkillIndex": 0,
                        "gainTime": 1591254258,
                        "skills": [{
                            "skillId": "skcom_atk_up[1]",
                            "unlock": 1,
                            "state": 0,
                            "specializeLevel": 0,
                            "completeUpgradeTime": -1
                        }]
                    },
                    "13": {
                        "instId": 13,
                        "charId": "char_209_ardign",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_209_ardign#1",
                        "level": 55,
                        "exp": 0,
                        "evolvePhase": 1,
                        "defaultSkillIndex": 0,
                        "gainTime": 1591254258,
                        "skills": [{
                            "skillId": "skcom_heal_self[1]",
                            "unlock": 1,
                            "state": 0,
                            "specializeLevel": 0,
                            "completeUpgradeTime": -1
                        }]
                    },
                    "14": {
                        "instId": 14,
                        "charId": "char_122_beagle",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_122_beagle#1",
                        "level": 55,
                        "exp": 0,
                        "evolvePhase": 1,
                        "defaultSkillIndex": 0,
                        "gainTime": 1591254258,
                        "skills": [{
                            "skillId": "skcom_def_up[1]",
                            "unlock": 1,
                            "state": 0,
                            "specializeLevel": 0,
                            "completeUpgradeTime": -1
                        }]
                    },
                    "15": {
                        "instId": 15,
                        "charId": "char_284_spot",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_284_spot#1",
                        "level": 55,
                        "exp": 0,
                        "evolvePhase": 1,
                        "defaultSkillIndex": 0,
                        "gainTime": 1591254258,
                        "skills": [{
                            "skillId": "skchr_spot_1",
                            "unlock": 1,
                            "state": 0,
                            "specializeLevel": 0,
                            "completeUpgradeTime": -1
                        }]
                    },
                    "16": {
                        "instId": 16,
                        "charId": "char_124_kroos",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_124_kroos#1",
                        "level": 55,
                        "exp": 0,
                        "evolvePhase": 1,
                        "defaultSkillIndex": 0,
                        "gainTime": 1591254258,
                        "skills": [{
                            "skillId": "skchr_kroos_1",
                            "unlock": 1,
                            "state": 0,
                            "specializeLevel": 0,
                            "completeUpgradeTime": -1
                        }]
                    },
                    "17": {
                        "instId": 17,
                        "charId": "char_211_adnach",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_211_adnach#1",
                        "level": 55,
                        "exp": 0,
                        "evolvePhase": 1,
                        "defaultSkillIndex": 0,
                        "gainTime": 1591254258,
                        "skills": [{
                            "skillId": "skcom_atk_up[1]",
                            "unlock": 1,
                            "state": 0,
                            "specializeLevel": 0,
                            "completeUpgradeTime": -1
                        }]
                    },
                    "18": {
                        "instId": 18,
                        "charId": "char_121_lava",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_121_lava#1",
                        "level": 55,
                        "exp": 0,
                        "evolvePhase": 1,
                        "defaultSkillIndex": 0,
                        "gainTime": 1591254258,
                        "skills": [{
                            "skillId": "skcom_magic_rage[1]",
                            "unlock": 1,
                            "state": 0,
                            "specializeLevel": 0,
                            "completeUpgradeTime": -1
                        }]
                    },
                    "19": {
                        "instId": 19,
                        "charId": "char_120_hibisc",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_120_hibisc#1",
                        "level": 55,
                        "exp": 0,
                        "evolvePhase": 1,
                        "defaultSkillIndex": 0,
                        "gainTime": 1591254258,
                        "skills": [{
                            "skillId": "skcom_heal_up[1]",
                            "unlock": 1,
                            "state": 0,
                            "specializeLevel": 0,
                            "completeUpgradeTime": -1
                        }]
                    },
                    "20": {
                        "instId": 20,
                        "charId": "char_212_ansel",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_212_ansel#1",
                        "level": 55,
                        "exp": 0,
                        "evolvePhase": 1,
                        "defaultSkillIndex": 0,
                        "gainTime": 1591254258,
                        "skills": [{
                            "skillId": "skcom_range_extend",
                            "unlock": 1,
                            "state": 0,
                            "specializeLevel": 0,
                            "completeUpgradeTime": -1
                        }]
                    },
                    "21": {
                        "instId": 21,
                        "charId": "char_210_stward",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_210_stward#1",
                        "level": 55,
                        "exp": 0,
                        "evolvePhase": 1,
                        "defaultSkillIndex": 0,
                        "gainTime": 1591254258,
                        "skills": [{
                            "skillId": "skchr_stward_1",
                            "unlock": 1,
                            "state": 0,
                            "specializeLevel": 0,
                            "completeUpgradeTime": -1
                        }]
                    },
                    "22": {
                        "instId": 22,
                        "charId": "char_278_orchid",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_278_orchid#1",
                        "level": 55,
                        "exp": 0,
                        "evolvePhase": 1,
                        "defaultSkillIndex": 0,
                        "gainTime": 1591254258,
                        "skills": [{
                            "skillId": "skcom_quickattack[1]",
                            "unlock": 1,
                            "state": 0,
                            "specializeLevel": 0,
                            "completeUpgradeTime": -1
                        }]
                    },
                    "23": {
                        "instId": 23,
                        "charId": "char_141_nights",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_141_nights#2",
                        "level": 70,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skcom_atk_up[2]",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_nights_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "24": {
                        "instId": 24,
                        "charId": "char_109_fmout",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_109_fmout#2",
                        "level": 70,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skcom_magic_rage[2]",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_fmout_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "25": {
                        "instId": 25,
                        "charId": "char_253_greyy",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_253_greyy#2",
                        "level": 70,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skcom_magic_rage[2]",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_greyy_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "26": {
                        "instId": 26,
                        "charId": "char_235_jesica",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_235_jesica#2",
                        "level": 70,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_jesica_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_jesica_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "27": {
                        "instId": 27,
                        "charId": "char_126_shotst",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_126_shotst#2",
                        "level": 70,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_shotst_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_shotst_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "28": {
                        "instId": 28,
                        "charId": "char_190_clour",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_190_clour#2",
                        "level": 70,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skcom_atk_up[2]",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_clour_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "29": {
                        "instId": 29,
                        "charId": "char_133_mm",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_133_mm#2",
                        "level": 70,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_mm_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_mm_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "30": {
                        "instId": 30,
                        "charId": "char_118_yuki",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_118_yuki#2",
                        "level": 70,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_yuki_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_yuki_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "31": {
                        "instId": 31,
                        "charId": "char_198_blackd",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_198_blackd#2",
                        "level": 70,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skcom_charge_cost[2]",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_blackd_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "32": {
                        "instId": 32,
                        "charId": "char_149_scave",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_149_scave#2",
                        "level": 70,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skcom_charge_cost[2]",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_scave_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "33": {
                        "instId": 33,
                        "charId": "char_290_vigna",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_290_vigna#2",
                        "level": 70,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_vigna_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_vigna_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "34": {
                        "instId": 34,
                        "charId": "char_151_myrtle",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_151_myrtle#2",
                        "level": 70,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skcom_assist_cost[2]",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_myrtle_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "35": {
                        "instId": 35,
                        "charId": "char_130_doberm",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_130_doberm#2",
                        "level": 70,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_doberm_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_doberm_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "36": {
                        "instId": 36,
                        "charId": "char_289_gyuki",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_289_gyuki#2",
                        "level": 70,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skcom_heal_self[2]",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_gyuki_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "37": {
                        "instId": 37,
                        "charId": "char_193_frostl",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_193_frostl#2",
                        "level": 70,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_frostl_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_frostl_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "38": {
                        "instId": 38,
                        "charId": "char_127_estell",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_127_estell#2",
                        "level": 70,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skcom_atk_up[2]",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_estell_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "39": {
                        "instId": 39,
                        "charId": "char_185_frncat",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_185_frncat#2",
                        "level": 70,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_frncat_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_frncat_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "40": {
                        "instId": 40,
                        "charId": "char_237_gravel",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_237_gravel#2",
                        "level": 70,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_gravel_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_gravel_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "41": {
                        "instId": 41,
                        "charId": "char_236_rope",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_236_rope#2",
                        "level": 70,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_rope_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_rope_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "42": {
                        "instId": 42,
                        "charId": "char_117_myrrh",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_117_myrrh#2",
                        "level": 70,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_myrrh_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_myrrh_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "43": {
                        "instId": 43,
                        "charId": "char_187_ccheal",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_187_ccheal#2",
                        "level": 70,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_ccheal_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_ccheal_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "44": {
                        "instId": 44,
                        "charId": "char_298_susuro",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_298_susuro#2",
                        "level": 70,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skcom_heal_up[2]",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_susuro_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "45": {
                        "instId": 45,
                        "charId": "char_181_flower",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_181_flower#2",
                        "level": 70,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skcom_heal_up[2]",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_flower_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "46": {
                        "instId": 46,
                        "charId": "char_199_yak",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_199_yak#2",
                        "level": 70,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_yak_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_yak_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "47": {
                        "instId": 47,
                        "charId": "char_150_snakek",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_150_snakek#2",
                        "level": 70,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skcom_def_up[2]",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_snakek_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "48": {
                        "instId": 48,
                        "charId": "char_196_sunbr",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_196_sunbr#2",
                        "level": 70,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_sunbr_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_sunbr_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "49": {
                        "instId": 49,
                        "charId": "char_260_durnar",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_260_durnar#2",
                        "level": 70,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skcom_atk_up[2]",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_durnar_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "50": {
                        "instId": 50,
                        "charId": "char_110_deepcl",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_110_deepcl#2",
                        "level": 70,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_deepcl_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_deepcl_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "51": {
                        "instId": 51,
                        "charId": "char_183_skgoat",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_183_skgoat#2",
                        "level": 70,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skcom_atk_up[2]",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_skgoat_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "52": {
                        "instId": 52,
                        "charId": "char_355_ethan",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_355_ethan#2",
                        "level": 70,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_ethan_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_ethan_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "53": {
                        "instId": 53,
                        "charId": "char_277_sqrrel",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_277_sqrrel#2",
                        "level": 70,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_sqrrel_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_sqrrel_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "54": {
                        "instId": 54,
                        "charId": "char_128_plosis",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_128_plosis#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skcom_heal_up[3]",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_plosis_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "55": {
                        "instId": 55,
                        "charId": "char_275_breeze",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_275_breeze#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_breeze_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_breeze_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "56": {
                        "instId": 56,
                        "charId": "char_115_headbr",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_115_headbr#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skcom_charge_cost[3]",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_headbr_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "57": {
                        "instId": 57,
                        "charId": "char_102_texas",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_102_texas#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skcom_charge_cost[3]",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_texas_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "58": {
                        "instId": 58,
                        "charId": "char_308_swire",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_308_swire#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_swire_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_swire_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "59": {
                        "instId": 59,
                        "charId": "char_106_franka",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_106_franka#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skcom_quickattack[3]",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_franka_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "60": {
                        "instId": 60,
                        "charId": "char_131_flameb",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_131_flameb#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_flameb_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_flameb_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "61": {
                        "instId": 61,
                        "charId": "char_155_tiger",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_155_tiger#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_tiger_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_tiger_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "62": {
                        "instId": 62,
                        "charId": "char_140_whitew",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_140_whitew#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_whitew_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_whitew_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "63": {
                        "instId": 63,
                        "charId": "char_143_ghost",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_143_ghost#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skcom_atk_up[3]",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_ghost_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "64": {
                        "instId": 64,
                        "charId": "char_274_astesi",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_274_astesi#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_astesi_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_astesi_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "65": {
                        "instId": 65,
                        "charId": "char_129_bluep",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_129_bluep#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_bluep_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_bluep_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "66": {
                        "instId": 66,
                        "charId": "char_204_platnm",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_204_platnm#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skcom_atk_up[3]",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_platnm_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "67": {
                        "instId": 67,
                        "charId": "char_219_meteo",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_219_meteo#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_meteo_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_meteo_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "68": {
                        "instId": 68,
                        "charId": "char_279_excu",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_279_excu#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_excu_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_excu_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "69": {
                        "instId": 69,
                        "charId": "char_002_amiya",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_002_amiya#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 2,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skcom_magic_rage[3]",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_amiya_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_amiya_3",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "70": {
                        "instId": 70,
                        "charId": "char_166_skfire",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_166_skfire#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skcom_atk_up[3]",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_skfire_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "71": {
                        "instId": 71,
                        "charId": "char_242_otter",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_242_otter#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_otter_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_otter_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "72": {
                        "instId": 72,
                        "charId": "char_108_silent",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_108_silent#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skcom_heal_up[3]",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_silent_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "73": {
                        "instId": 73,
                        "charId": "char_171_bldsk",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_171_bldsk#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_bldsk_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_bldsk_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "74": {
                        "instId": 74,
                        "charId": "char_348_ceylon",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_348_ceylon#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_ceylon_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_ceylon_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "75": {
                        "instId": 75,
                        "charId": "char_148_nearl",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_148_nearl#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_nearl_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_nearl_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "76": {
                        "instId": 76,
                        "charId": "char_144_red",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_144_red#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_red_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_red_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "77": {
                        "instId": 77,
                        "charId": "char_243_waaifu",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_243_waaifu#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_waaifu_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_waaifu_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "78": {
                        "instId": 78,
                        "charId": "char_107_liskam",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_107_liskam#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_liskam_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_liskam_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "79": {
                        "instId": 79,
                        "charId": "char_201_moeshd",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_201_moeshd#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_moeshd_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_moeshd_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "80": {
                        "instId": 80,
                        "charId": "char_325_bison",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_325_bison#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skcom_def_up[3]",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_bison_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "81": {
                        "instId": 81,
                        "charId": "char_163_hpsts",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_163_hpsts#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_hpsts_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_hpsts_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "82": {
                        "instId": 82,
                        "charId": "char_145_prove",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_145_prove#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_prove_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_prove_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "83": {
                        "instId": 83,
                        "charId": "char_158_milu",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_158_milu#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_milu_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_milu_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "84": {
                        "instId": 84,
                        "charId": "char_173_slchan",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_173_slchan#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_slchan_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_slchan_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "85": {
                        "instId": 85,
                        "charId": "char_174_slbell",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_174_slbell#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_slbell_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_slbell_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "86": {
                        "instId": 86,
                        "charId": "char_195_glassb",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_195_glassb#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_glassb_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_glassb_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "87": {
                        "instId": 87,
                        "charId": "char_326_glacus",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_326_glacus#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_glacus_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_glacus_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "88": {
                        "instId": 88,
                        "charId": "char_101_sora",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_101_sora#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_sora_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_sora_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "89": {
                        "instId": 89,
                        "charId": "char_215_mantic",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_215_mantic#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_mantic_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_mantic_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "90": {
                        "instId": 90,
                        "charId": "char_241_panda",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_241_panda#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_panda_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_panda_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "91": {
                        "instId": 91,
                        "charId": "char_103_angel",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_103_angel#2",
                        "level": 90,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 2,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_angel_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_angel_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_angel_3",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "92": {
                        "instId": 92,
                        "charId": "char_340_shwaz",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_340_shwaz#2",
                        "level": 90,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 2,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_shwaz_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_shwaz_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_shwaz_3",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "93": {
                        "instId": 93,
                        "charId": "char_112_siege",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_112_siege#2",
                        "level": 90,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 2,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skcom_charge_cost[3]",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_siege_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_siege_3",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "94": {
                        "instId": 94,
                        "charId": "char_134_ifrit",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_134_ifrit#2",
                        "level": 90,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 2,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_ifrit_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_ifrit_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_ifrit_3",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "95": {
                        "instId": 95,
                        "charId": "char_213_mostma",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_213_mostma#2",
                        "level": 90,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 2,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skcom_atk_up[3]",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_mostma_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_mostma_3",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "96": {
                        "instId": 96,
                        "charId": "char_180_amgoat",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_180_amgoat#2",
                        "level": 90,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 2,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_amgoat_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_amgoat_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_amgoat_3",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "97": {
                        "instId": 97,
                        "charId": "char_291_aglina",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_291_aglina#2",
                        "level": 90,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 2,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_aglina_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_aglina_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_aglina_3",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "98": {
                        "instId": 98,
                        "charId": "char_248_mgllan",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_248_mgllan#2",
                        "level": 90,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 2,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_mgllan_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_mgllan_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_mgllan_3",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "99": {
                        "instId": 99,
                        "charId": "char_147_shining",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_147_shining#2",
                        "level": 90,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 2,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_shining_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_shining_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_shining_3",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "100": {
                        "instId": 100,
                        "charId": "char_179_cgbird",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_179_cgbird#2",
                        "level": 90,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 2,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skcom_heal_up[3]",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_cgbird_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_cgbird_3",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "101": {
                        "instId": 101,
                        "charId": "char_136_hsguma",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_136_hsguma#2",
                        "level": 90,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 2,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_hsguma_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_hsguma_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_hsguma_3",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "102": {
                        "instId": 102,
                        "charId": "char_202_demkni",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_202_demkni#2",
                        "level": 90,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 2,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_demkni_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_demkni_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_demkni_3",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "103": {
                        "instId": 103,
                        "charId": "char_172_svrash",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_172_svrash#2",
                        "level": 90,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 2,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_svrash_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_svrash_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_svrash_3",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "104": {
                        "instId": 104,
                        "charId": "char_010_chen",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_010_chen#2",
                        "level": 90,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 2,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_chen_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_chen_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_chen_3",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "105": {
                        "instId": 105,
                        "charId": "char_188_helage",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_188_helage#2",
                        "level": 90,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 2,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_helage_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_helage_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_helage_3",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "106": {
                        "instId": 106,
                        "charId": "char_230_savage",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_230_savage#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_savage_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_savage_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "107": {
                        "instId": 107,
                        "charId": "char_282_catap",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_282_catap#1",
                        "level": 55,
                        "exp": 0,
                        "evolvePhase": 1,
                        "defaultSkillIndex": 0,
                        "gainTime": 1591254258,
                        "skills": [{
                            "skillId": "skchr_catap_1",
                            "unlock": 1,
                            "state": 0,
                            "specializeLevel": 0,
                            "completeUpgradeTime": -1
                        }]
                    },
                    "108": {
                        "instId": 108,
                        "charId": "char_283_midn",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_283_midn#1",
                        "level": 55,
                        "exp": 0,
                        "evolvePhase": 1,
                        "defaultSkillIndex": 0,
                        "gainTime": 1591254258,
                        "skills": [{
                            "skillId": "skchr_midn_1",
                            "unlock": 1,
                            "state": 0,
                            "specializeLevel": 0,
                            "completeUpgradeTime": -1
                        }]
                    },
                    "109": {
                        "instId": 109,
                        "charId": "char_137_brownb",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_137_brownb#2",
                        "level": 70,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_brownb_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_brownb_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "110": {
                        "instId": 110,
                        "charId": "char_164_nightm",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_164_nightm#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skchr_nightm_1",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_nightm_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "111": {
                        "instId": 111,
                        "charId": "char_220_grani",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_220_grani#2",
                        "level": 80,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 1,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skcom_def_up[3]",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_grani_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    },
                    "112": {
                        "instId": 112,
                        "charId": "char_263_skadi",
                        "favorPoint": 12312312,
                        "potentialRank": 5,
                        "mainSkillLvl": 7,
                        "skin": "char_263_skadi#2",
                        "level": 90,
                        "exp": 0,
                        "evolvePhase": 2,
                        "defaultSkillIndex": 2,
                        "gainTime": 1591254258,
                        "skills": [{
                                "skillId": "skcom_quickattack[3]",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_skadi_2",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            },
                            {
                                "skillId": "skchr_skadi_3",
                                "unlock": 1,
                                "state": 0,
                                "specializeLevel": 3,
                                "completeUpgradeTime": -1
                            }
                        ]
                    }
                }
            },
            "dexNav": {
                "character": {
                    "char_285_medic2": {
                        "charInstId": 1,
                        "count": 1
                    },
                    "char_286_cast3": {
                        "charInstId": 2,
                        "count": 1
                    },
                    "char_502_nblade": {
                        "charInstId": 3,
                        "count": 1
                    },
                    "char_500_noirc": {
                        "charInstId": 4,
                        "count": 1
                    },
                    "char_503_rang": {
                        "charInstId": 5,
                        "count": 1
                    },
                    "char_501_durin": {
                        "charInstId": 6,
                        "count": 1
                    },
                    "char_009_12fce": {
                        "charInstId": 7,
                        "count": 1
                    },
                    "char_123_fang": {
                        "charInstId": 8,
                        "count": 1
                    },
                    "char_240_wyvern": {
                        "charInstId": 9,
                        "count": 1
                    },
                    "char_192_falco": {
                        "charInstId": 10,
                        "count": 1
                    },
                    "char_208_melan": {
                        "charInstId": 11,
                        "count": 1
                    },
                    "char_281_popka": {
                        "charInstId": 12,
                        "count": 1
                    },
                    "char_209_ardign": {
                        "charInstId": 13,
                        "count": 1
                    },
                    "char_122_beagle": {
                        "charInstId": 14,
                        "count": 1
                    },
                    "char_284_spot": {
                        "charInstId": 15,
                        "count": 1
                    },
                    "char_124_kroos": {
                        "charInstId": 16,
                        "count": 1
                    },
                    "char_211_adnach": {
                        "charInstId": 17,
                        "count": 1
                    },
                    "char_121_lava": {
                        "charInstId": 18,
                        "count": 1
                    },
                    "char_120_hibisc": {
                        "charInstId": 19,
                        "count": 1
                    },
                    "char_212_ansel": {
                        "charInstId": 20,
                        "count": 1
                    },
                    "char_210_stward": {
                        "charInstId": 21,
                        "count": 1
                    },
                    "char_278_orchid": {
                        "charInstId": 22,
                        "count": 1
                    },
                    "char_141_nights": {
                        "charInstId": 23,
                        "count": 1
                    },
                    "char_109_fmout": {
                        "charInstId": 24,
                        "count": 1
                    },
                    "char_253_greyy": {
                        "charInstId": 25,
                        "count": 1
                    },
                    "char_235_jesica": {
                        "charInstId": 26,
                        "count": 1
                    },
                    "char_126_shotst": {
                        "charInstId": 27,
                        "count": 1
                    },
                    "char_190_clour": {
                        "charInstId": 28,
                        "count": 1
                    },
                    "char_133_mm": {
                        "charInstId": 29,
                        "count": 1
                    },
                    "char_118_yuki": {
                        "charInstId": 30,
                        "count": 1
                    },
                    "char_198_blackd": {
                        "charInstId": 31,
                        "count": 1
                    },
                    "char_149_scave": {
                        "charInstId": 32,
                        "count": 1
                    },
                    "char_290_vigna": {
                        "charInstId": 33,
                        "count": 1
                    },
                    "char_151_myrtle": {
                        "charInstId": 34,
                        "count": 1
                    },
                    "char_130_doberm": {
                        "charInstId": 35,
                        "count": 1
                    },
                    "char_289_gyuki": {
                        "charInstId": 36,
                        "count": 1
                    },
                    "char_193_frostl": {
                        "charInstId": 37,
                        "count": 1
                    },
                    "char_127_estell": {
                        "charInstId": 38,
                        "count": 1
                    },
                    "char_185_frncat": {
                        "charInstId": 39,
                        "count": 1
                    },
                    "char_237_gravel": {
                        "charInstId": 40,
                        "count": 1
                    },
                    "char_236_rope": {
                        "charInstId": 41,
                        "count": 1
                    },
                    "char_117_myrrh": {
                        "charInstId": 42,
                        "count": 1
                    },
                    "char_187_ccheal": {
                        "charInstId": 43,
                        "count": 1
                    },
                    "char_298_susuro": {
                        "charInstId": 44,
                        "count": 1
                    },
                    "char_181_flower": {
                        "charInstId": 45,
                        "count": 1
                    },
                    "char_199_yak": {
                        "charInstId": 46,
                        "count": 1
                    },
                    "char_150_snakek": {
                        "charInstId": 47,
                        "count": 1
                    },
                    "char_196_sunbr": {
                        "charInstId": 48,
                        "count": 1
                    },
                    "char_260_durnar": {
                        "charInstId": 49,
                        "count": 1
                    },
                    "char_110_deepcl": {
                        "charInstId": 50,
                        "count": 1
                    },
                    "char_183_skgoat": {
                        "charInstId": 51,
                        "count": 1
                    },
                    "char_355_ethan": {
                        "charInstId": 52,
                        "count": 1
                    },
                    "char_277_sqrrel": {
                        "charInstId": 53,
                        "count": 1
                    },
                    "char_128_plosis": {
                        "charInstId": 54,
                        "count": 1
                    },
                    "char_275_breeze": {
                        "charInstId": 55,
                        "count": 1
                    },
                    "char_115_headbr": {
                        "charInstId": 56,
                        "count": 1
                    },
                    "char_102_texas": {
                        "charInstId": 57,
                        "count": 1
                    },
                    "char_308_swire": {
                        "charInstId": 58,
                        "count": 1
                    },
                    "char_106_franka": {
                        "charInstId": 59,
                        "count": 1
                    },
                    "char_131_flameb": {
                        "charInstId": 60,
                        "count": 1
                    },
                    "char_155_tiger": {
                        "charInstId": 61,
                        "count": 1
                    },
                    "char_140_whitew": {
                        "charInstId": 62,
                        "count": 1
                    },
                    "char_143_ghost": {
                        "charInstId": 63,
                        "count": 1
                    },
                    "char_274_astesi": {
                        "charInstId": 64,
                        "count": 1
                    },
                    "char_129_bluep": {
                        "charInstId": 65,
                        "count": 1
                    },
                    "char_204_platnm": {
                        "charInstId": 66,
                        "count": 1
                    },
                    "char_219_meteo": {
                        "charInstId": 67,
                        "count": 1
                    },
                    "char_279_excu": {
                        "charInstId": 68,
                        "count": 1
                    },
                    "char_002_amiya": {
                        "charInstId": 69,
                        "count": 1
                    },
                    "char_166_skfire": {
                        "charInstId": 70,
                        "count": 1
                    },
                    "char_242_otter": {
                        "charInstId": 71,
                        "count": 1
                    },
                    "char_108_silent": {
                        "charInstId": 72,
                        "count": 1
                    },
                    "char_171_bldsk": {
                        "charInstId": 73,
                        "count": 1
                    },
                    "char_348_ceylon": {
                        "charInstId": 74,
                        "count": 1
                    },
                    "char_148_nearl": {
                        "charInstId": 75,
                        "count": 1
                    },
                    "char_144_red": {
                        "charInstId": 76,
                        "count": 1
                    },
                    "char_243_waaifu": {
                        "charInstId": 77,
                        "count": 1
                    },
                    "char_107_liskam": {
                        "charInstId": 78,
                        "count": 1
                    },
                    "char_201_moeshd": {
                        "charInstId": 79,
                        "count": 1
                    },
                    "char_325_bison": {
                        "charInstId": 80,
                        "count": 1
                    },
                    "char_163_hpsts": {
                        "charInstId": 81,
                        "count": 1
                    },
                    "char_145_prove": {
                        "charInstId": 82,
                        "count": 1
                    },
                    "char_158_milu": {
                        "charInstId": 83,
                        "count": 1
                    },
                    "char_173_slchan": {
                        "charInstId": 84,
                        "count": 1
                    },
                    "char_174_slbell": {
                        "charInstId": 85,
                        "count": 1
                    },
                    "char_195_glassb": {
                        "charInstId": 86,
                        "count": 1
                    },
                    "char_326_glacus": {
                        "charInstId": 87,
                        "count": 1
                    },
                    "char_101_sora": {
                        "charInstId": 88,
                        "count": 1
                    },
                    "char_215_mantic": {
                        "charInstId": 89,
                        "count": 1
                    },
                    "char_241_panda": {
                        "charInstId": 90,
                        "count": 1
                    },
                    "char_103_angel": {
                        "charInstId": 91,
                        "count": 1
                    },
                    "char_340_shwaz": {
                        "charInstId": 92,
                        "count": 1
                    },
                    "char_112_siege": {
                        "charInstId": 93,
                        "count": 1
                    },
                    "char_134_ifrit": {
                        "charInstId": 94,
                        "count": 1
                    },
                    "char_213_mostma": {
                        "charInstId": 95,
                        "count": 1
                    },
                    "char_180_amgoat": {
                        "charInstId": 96,
                        "count": 1
                    },
                    "char_291_aglina": {
                        "charInstId": 97,
                        "count": 1
                    },
                    "char_248_mgllan": {
                        "charInstId": 98,
                        "count": 1
                    },
                    "char_147_shining": {
                        "charInstId": 99,
                        "count": 1
                    },
                    "char_179_cgbird": {
                        "charInstId": 100,
                        "count": 1
                    },
                    "char_136_hsguma": {
                        "charInstId": 101,
                        "count": 1
                    },
                    "char_202_demkni": {
                        "charInstId": 102,
                        "count": 1
                    },
                    "char_172_svrash": {
                        "charInstId": 103,
                        "count": 1
                    },
                    "char_010_chen": {
                        "charInstId": 104,
                        "count": 1
                    },
                    "char_188_helage": {
                        "charInstId": 105,
                        "count": 1
                    },
                    "char_230_savage": {
                        "charInstId": 106,
                        "count": 1
                    },
                    "char_282_catap": {
                        "charInstId": 107,
                        "count": 1
                    },
                    "char_283_midn": {
                        "charInstId": 108,
                        "count": 1
                    },
                    "char_137_brownb": {
                        "charInstId": 109,
                        "count": 1
                    },
                    "char_164_nightm": {
                        "charInstId": 110,
                        "count": 1
                    },
                    "char_220_grani": {
                        "charInstId": 111,
                        "count": 1
                    },
                    "char_263_skadi": {
                        "charInstId": 112,
                        "count": 1
                    }
                },
                "formula": {
                    "shop": {},
                    "manufacture": {
                        "1": 1,
                        "2": 1,
                        "3": 1,
                        "4": 1,
                        "5": 1,
                        "6": 1,
                        "7": 1,
                        "8": 1,
                        "9": 1,
                        "10": 1,
                        "11": 1,
                        "12": 1,
                        "13": 1,
                        "14": 1
                    },
                    "workshop": {
                        "1": 1,
                        "2": 1,
                        "3": 1,
                        "4": 1,
                        "5": 1,
                        "6": 1,
                        "7": 1,
                        "8": 1,
                        "9": 1,
                        "10": 1,
                        "11": 1,
                        "12": 1,
                        "13": 1,
                        "14": 1,
                        "15": 1,
                        "16": 1,
                        "17": 1,
                        "18": 1,
                        "19": 1,
                        "20": 1,
                        "21": 1,
                        "22": 1,
                        "23": 1,
                        "24": 1,
                        "25": 1,
                        "26": 1,
                        "27": 1,
                        "28": 1,
                        "29": 1,
                        "30": 1,
                        "31": 1,
                        "32": 1,
                        "33": 1,
                        "34": 1,
                        "35": 1,
                        "36": 1,
                        "37": 1,
                        "38": 1,
                        "39": 1,
                        "40": 1,
                        "41": 1,
                        "42": 1,
                        "43": 1,
                        "44": 1,
                        "45": 1,
                        "46": 1,
                        "47": 1,
                        "48": 1,
                        "49": 1,
                        "50": 1,
                        "51": 1,
                        "52": 1,
                        "53": 1,
                        "54": 1
                    }
                },
                "team": {
                    "1": {
                        "2": 1,
                        "3": 1,
                        "4": 1,
                        "11": 1
                    },
                    "2": {
                        "6": 1,
                        "9": 1,
                        "13": 1,
                        "14": 1,
                        "25": 1
                    },
                    "3": {
                        "7": 1,
                        "15": 1,
                        "16": 1,
                        "21": 1,
                        "31": 1
                    },
                    "4": {
                        "59": 1,
                        "65": 1,
                        "72": 1,
                        "76": 1
                    },
                    "5": {
                        "42": 1
                    },
                    "6": {
                        "22": 1,
                        "36": 1,
                        "37": 1
                    },
                    "8": {
                        "32": 1
                    },
                    "11": {
                        "46": 1
                    },
                    "12": {
                        "43": 1,
                        "54": 1,
                        "73": 1
                    },
                    "13": {
                        "8": 1,
                        "23": 1,
                        "44": 1
                    },
                    "15": {
                        "67": 1
                    },
                    "19": {
                        "17": 1,
                        "24": 1,
                        "27": 1,
                        "30": 1,
                        "50": 1
                    },
                    "-1": {
                        "1": 1,
                        "5": 1,
                        "10": 1,
                        "12": 1,
                        "18": 1,
                        "19": 1,
                        "20": 1,
                        "26": 1,
                        "28": 1,
                        "29": 1,
                        "33": 1,
                        "34": 1,
                        "35": 1,
                        "38": 1,
                        "39": 1,
                        "40": 1,
                        "41": 1,
                        "45": 1,
                        "47": 1,
                        "48": 1,
                        "49": 1,
                        "51": 1,
                        "52": 1,
                        "53": 1,
                        "55": 1,
                        "56": 1,
                        "57": 1,
                        "58": 1,
                        "60": 1,
                        "61": 1,
                        "62": 1,
                        "63": 1,
                        "64": 1,
                        "66": 1,
                        "68": 1,
                        "69": 1,
                        "70": 1,
                        "71": 1,
                        "74": 1,
                        "75": 1
                    }
                },
                "enemy": {
                    "enemies": {
                        "enemy_1002_nsabr": 1,
                        "enemy_1006_shield": 1,
                        "enemy_1033_handax": 1,
                        "enemy_1007_slime": 1,
                        "enemy_1005_yokai": 1,
                        "enemy_1027_mob": 1,
                        "enemy_1000_gopro": 1,
                        "enemy_1029_shdsbr": 1,
                        "enemy_1007_slime_2": 1,
                        "enemy_1030_wteeth": 1,
                        "enemy_1000_gopro_2": 1,
                        "enemy_1028_mocock": 1,
                        "enemy_1014_rogue": 1,
                        "enemy_1502_crowns": 1,
                        "enemy_1011_wizard": 1,
                        "enemy_1028_mocock_2": 1,
                        "enemy_1504_cqbw": 1,
                        "enemy_1027_mob_2": 1,
                        "enemy_1003_ncbow": 1,
                        "enemy_1003_ncbow_2": 1,
                        "enemy_1018_aoemag": 1,
                        "enemy_1029_shdsbr_2": 1,
                        "enemy_1035_haxe": 1,
                        "enemy_1017_defdrn": 1,
                        "enemy_1005_yokai_2": 1,
                        "enemy_1007_slime_3": 1,
                        "enemy_1030_wteeth_2": 1,
                        "enemy_1014_rogue_2": 1,
                        "enemy_1013_airdrp": 1,
                        "enemy_1016_diaman": 1,
                        "enemy_1008_ghost": 1,
                        "enemy_1011_wizard_2": 1,
                        "enemy_1013_airdrp_2": 1,
                        "enemy_1000_gopro_3": 1,
                        "enemy_1015_litamr": 1,
                        "enemy_1500_skulsr": 1,
                        "enemy_1009_lurker": 1,
                        "enemy_1020_obsv": 1,
                        "enemy_1019_jshoot": 1,
                        "enemy_1033_handax_2": 1,
                        "enemy_1034_laxe": 1,
                        "enemy_1501_demonk": 1,
                        "enemy_1023_jmage": 1,
                        "enemy_1034_laxe_2": 1,
                        "enemy_1024_mortar": 1,
                        "enemy_1006_shield_2": 1,
                        "enemy_1032_katar": 1,
                        "enemy_1010_demon": 1,
                        "enemy_1015_litamr_2": 1,
                        "enemy_1012_dcross": 1,
                        "enemy_1031_mrogue": 1,
                        "enemy_1021_bslime": 1,
                        "enemy_1022_dmage": 1,
                        "enemy_1005_yokai_3": 1,
                        "enemy_1036_amraoe": 1,
                        "enemy_1031_mrogue_2": 1,
                        "enemy_1026_aghost": 1,
                        "enemy_1025_reveng": 1,
                        "enemy_1025_reveng_2": 1,
                        "enemy_1010_demon_2": 1,
                        "enemy_1505_frstar": 1,
                        "enemy_1038_lunmag": 1,
                        "enemy_1037_lunsbr": 1,
                        "enemy_1039_breakr": 1,
                        "enemy_1032_katar_2": 1,
                        "enemy_1038_lunmag_2": 1,
                        "enemy_1042_frostd": 1,
                        "enemy_1045_hammer": 1,
                        "enemy_1043_zomsbr": 1,
                        "enemy_1044_zomstr": 1,
                        "enemy_1044_zomstr_2": 1,
                        "enemy_1039_breakr_2": 1,
                        "enemy_1018_aoemag_2": 1,
                        "enemy_1023_jmage_2": 1,
                        "enemy_1041_lazerd": 1,
                        "enemy_1040_bombd": 1,
                        "enemy_1041_lazerd_2": 1,
                        "enemy_1043_zomsbr_2": 1,
                        "enemy_1040_bombd_2": 1,
                        "enemy_1507_mephi": 1,
                        "enemy_1508_faust": 1,
                        "enemy_1004_mslime": 1,
                        "enemy_1046_agent": 1,
                        "enemy_1052_noramr": 1,
                        "enemy_1047_sagent": 1,
                        "enemy_1051_norwiz": 1,
                        "enemy_1048_hirman": 1,
                        "enemy_1053_norgst": 1,
                        "enemy_1049_eagent": 1,
                        "enemy_1050_lslime": 1,
                        "enemy_1053_norgst_2": 1,
                        "enemy_1047_sagent_2": 1,
                        "enemy_1048_hirman_2": 1,
                        "enemy_1004_mslime_2": 1,
                        "enemy_1046_agent_2": 1,
                        "enemy_1051_norwiz_2": 1,
                        "enemy_1052_noramr_2": 1,
                        "enemy_1054_norshd": 1,
                        "enemy_1054_norshd_2": 1,
                        "enemy_1049_eagent_2": 1,
                        "enemy_1019_jshoot_2": 1,
                        "enemy_1045_hammer_2": 1,
                        "enemy_1024_mortar_2": 1,
                        "enemy_1055_ganman": 1,
                        "enemy_1057_gansho": 1,
                        "enemy_1055_ganman_2": 1,
                        "enemy_1056_ganwar": 1,
                        "enemy_1058_traink": 1,
                        "enemy_1059_buster": 1,
                        "enemy_1060_emouse": 1,
                        "enemy_1057_gansho_2": 1,
                        "enemy_1056_ganwar_2": 1,
                        "enemy_1509_mousek": 1,
                        "enemy_1021_bslime_2": 1,
                        "enemy_1059_buster_2": 1,
                        "enemy_1060_emouse_2": 1,
                        "enemy_1058_traink_2": 1
                    },
                    "stage": {
                        "camp_01": [
                            "enemy_1007_slime",
                            "enemy_1000_gopro",
                            "enemy_1007_slime_2",
                            "enemy_1002_nsabr",
                            "enemy_1030_wteeth",
                            "enemy_1000_gopro_2",
                            "enemy_1028_mocock",
                            "enemy_1005_yokai",
                            "enemy_1029_shdsbr",
                            "enemy_1011_wizard",
                            "enemy_1003_ncbow",
                            "enemy_1003_ncbow_2",
                            "enemy_1027_mob_2",
                            "enemy_1028_mocock_2",
                            "enemy_1018_aoemag",
                            "enemy_1006_shield",
                            "enemy_1033_handax",
                            "enemy_1011_wizard_2",
                            "enemy_1502_crowns"
                        ],
                        "camp_02": [
                            "enemy_1027_mob",
                            "enemy_1027_mob_2",
                            "enemy_1002_nsabr",
                            "enemy_1030_wteeth",
                            "enemy_1028_mocock",
                            "enemy_1033_handax",
                            "enemy_1028_mocock_2",
                            "enemy_1005_yokai",
                            "enemy_1034_laxe",
                            "enemy_1019_jshoot",
                            "enemy_1008_ghost",
                            "enemy_1015_litamr",
                            "enemy_1026_aghost",
                            "enemy_1025_reveng",
                            "enemy_1025_reveng_2",
                            "enemy_1005_yokai_2",
                            "enemy_1011_wizard_2",
                            "enemy_1011_wizard"
                        ],
                        "act4d0_05#f#": [
                            "enemy_1042_frostd",
                            "enemy_1045_hammer",
                            "enemy_1043_zomsbr",
                            "enemy_1044_zomstr",
                            "enemy_1038_lunmag"
                        ],
                        "camp_03": [
                            "enemy_1000_gopro",
                            "enemy_1002_nsabr",
                            "enemy_1037_lunsbr",
                            "enemy_1003_ncbow",
                            "enemy_1013_airdrp_2",
                            "enemy_1013_airdrp",
                            "enemy_1030_wteeth_2",
                            "enemy_1000_gopro_2",
                            "enemy_1023_jmage_2",
                            "enemy_1009_lurker",
                            "enemy_1041_lazerd",
                            "enemy_1039_breakr",
                            "enemy_1039_breakr_2",
                            "enemy_1040_bombd",
                            "enemy_1038_lunmag",
                            "enemy_1038_lunmag_2",
                            "enemy_1041_lazerd_2",
                            "enemy_1044_zomstr_2",
                            "enemy_1043_zomsbr",
                            "enemy_1043_zomsbr_2",
                            "enemy_1034_laxe_2",
                            "enemy_1045_hammer",
                            "enemy_1045_hammer_2"
                        ],
                        "main_05-03#f#": [
                            "enemy_1038_lunmag_2",
                            "enemy_1039_breakr"
                        ]
                    }
                }
            },
            "crisis": {
                "current": "",
                "lst": 1591376654,
                "nst": -1,
                "map": {},
                "shop": {
                    "coin": 0,
                    "info": [],
                    "progressInfo": {}
                },
                "training": {
                    "currentStage": [],
                    "stage": {}
                },
                "season": {},
                "box": []
            },
            "activity": {
                "CHECKIN_ONLY": {},
                "DEFAULT": {},
                "MISSION_ONLY": {},
                "TYPE_ACT4D0": {},
                "COLLECTION": {},
                "TYPE_ACT3D0": {},
                "TYPE_ACT5D0": {
                    "act5d0": {
                        "point_reward": {
                            "points": {
                                "act5d0_point_medal": 33
                            },
                            "got": {
                                "mileStone_01": {
                                    "ts": 1590624268
                                },
                                "mileStone_02": {
                                    "ts": 1590624270
                                },
                                "mileStone_03": {
                                    "ts": 1590624273
                                },
                                "mileStone_04": {
                                    "ts": 1590624275
                                },
                                "mileStone_05": {
                                    "ts": 1590624278
                                },
                                "mileStone_06": {
                                    "ts": 1590624281
                                },
                                "mileStone_07": {
                                    "ts": 1590624284
                                },
                                "mileStone_08": {
                                    "ts": 1590624286
                                },
                                "mileStone_09": {
                                    "ts": 1590624288
                                },
                                "mileStone_10": {
                                    "ts": 1590624291
                                },
                                "mileStone_11": {
                                    "ts": 1590624294
                                },
                                "mileStone_12": {
                                    "ts": 1590624296
                                },
                                "mileStone_13": {
                                    "ts": 1590624300
                                },
                                "mileStone_14": {
                                    "ts": 1590624302
                                },
                                "mileStone_15": {
                                    "ts": 1590624305
                                },
                                "mileStone_16": {
                                    "ts": 1590624308
                                },
                                "mileStone_17": {
                                    "ts": 1590624310
                                },
                                "mileStone_18": {
                                    "ts": 1590624312
                                },
                                "mileStone_19": {
                                    "ts": 1590624316
                                },
                                "mileStone_20": {
                                    "ts": 1590624318
                                },
                                "mileStone_21": {
                                    "ts": 1590624321
                                },
                                "mileStone_22": {
                                    "ts": 1590624324
                                },
                                "mileStone_23": {
                                    "ts": 1590624326
                                },
                                "mileStone_24": {
                                    "ts": 1590624329
                                },
                                "mileStone_25": {
                                    "ts": 1590624332
                                },
                                "mileStone_26": {
                                    "ts": 1590624334
                                },
                                "mileStone_27": {
                                    "ts": 1590624337
                                },
                                "mileStone_28": {
                                    "ts": 1590624340
                                },
                                "mileStone_29": {
                                    "ts": 1590624343
                                },
                                "mileStone_30": {
                                    "ts": 1590624345
                                },
                                "mileStone_31": {
                                    "ts": 1591236773
                                },
                                "mileStone_32": {
                                    "ts": 1591305204
                                },
                                "mileStone_33": {
                                    "ts": 1591378945
                                }
                            }
                        }
                    }
                }
            },
            "checkIn": {
                "canCheckIn": 0,
                "checkInGroupId": "signin6",
                "checkInRewardIndex": 4,
                "checkInHistory": [
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            "recruit": {
                "normal": {
                    "slots": {
                        "0": {
                            "state": 1,
                            "tags": [
                                5,
                                9,
                                17,
                                18,
                                22
                            ],
                            "selectTags": [],
                            "startTs": -1,
                            "durationInSec": -1,
                            "maxFinishTs": -1,
                            "realFinishTs": -1
                        },
                        "1": {
                            "state": 1,
                            "tags": [
                                1,
                                6,
                                10,
                                18,
                                19
                            ],
                            "selectTags": [],
                            "startTs": -1,
                            "durationInSec": -1,
                            "maxFinishTs": -1,
                            "realFinishTs": -1
                        },
                        "2": {
                            "state": 1,
                            "tags": [
                                6,
                                15,
                                17,
                                20,
                                23
                            ],
                            "selectTags": [],
                            "startTs": -1,
                            "durationInSec": -1,
                            "maxFinishTs": -1,
                            "realFinishTs": -1
                        },
                        "3": {
                            "state": 1,
                            "tags": [
                                1,
                                3,
                                4,
                                17,
                                22
                            ],
                            "selectTags": [],
                            "startTs": -1,
                            "durationInSec": -1,
                            "maxFinishTs": -1,
                            "realFinishTs": -1
                        }
                    }
                }
            },
            "openServer": {
                "checkIn": {
                    "isAvailable": false,
                    "history": [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                "chainLogin": {
                    "isAvailable": false,
                    "nowIndex": 6,
                    "history": [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                }
            },
            "event": {
                "building": 1591379260
            },
            "collectionReward": {
                "team": {
                    "reward12_1": 1
                }
            },
            "ticket": {},
            "consumable": {
                "ap_supply_lt_100": {
                    "21": {
                        "ts": 1591613999,
                        "count": 16
                    },
                    "22": {
                        "ts": 1592218799,
                        "count": 2
                    }
                }
            },
            "inventory": {
                "2001": 999,
                "2002": 999,
                "2003": 999,
                "2004": 999,
                "3003": 999,
                "3105": 999,
                "3112": 999,
                "3113": 999,
                "3114": 999,
                "3131": 999,
                "3132": 999,
                "3133": 999,
                "3211": 999,
                "3212": 999,
                "3221": 999,
                "3222": 999,
                "3231": 999,
                "3232": 999,
                "3233": 999,
                "3241": 999,
                "3242": 999,
                "3243": 999,
                "3251": 999,
                "3252": 999,
                "3253": 999,
                "3261": 999,
                "3262": 999,
                "3271": 999,
                "3272": 999,
                "3281": 999,
                "3282": 999,
                "3301": 999,
                "3302": 999,
                "3303": 999,
                "3401": 9999,
                "4006": 9999,
                "30011": 999,
                "30012": 999,
                "30013": 999,
                "30014": 999,
                "30021": 999,
                "30022": 999,
                "30023": 999,
                "30024": 999,
                "30031": 999,
                "30032": 999,
                "30033": 999,
                "30034": 999,
                "30041": 999,
                "30042": 999,
                "30043": 999,
                "30044": 999,
                "30051": 999,
                "30052": 999,
                "30053": 999,
                "30054": 999,
                "30061": 999,
                "30062": 999,
                "30063": 999,
                "30064": 999,
                "30073": 999,
                "30074": 999,
                "30083": 999,
                "30084": 999,
                "30093": 999,
                "30094": 999,
                "30103": 999,
                "30104": 999,
                "30115": 999,
                "30125": 999,
                "30135": 999,
                "32001": 999,
                "p_char_192_falco": 999,
                "p_char_208_melan": 999,
                "p_char_121_lava": 999,
                "p_char_237_gravel": 999,
                "p_char_278_orchid": 999,
                "p_char_210_stward": 999,
                "p_char_277_sqrrel": 999,
                "p_char_123_fang": 999,
                "p_char_211_adnach": 999,
                "p_char_212_ansel": 999,
                "p_char_124_kroos": 999,
                "p_char_122_beagle": 999,
                "p_char_120_hibisc": 999,
                "p_char_196_sunbr": 999,
                "p_char_109_fmout": 999,
                "p_char_117_myrrh": 999,
                "p_char_290_vigna": 999,
                "p_char_130_doberm": 999,
                "p_char_150_snakek": 999,
                "p_char_126_shotst": 999,
                "p_char_198_blackd": 999,
                "p_char_002_amiya": 999,
                "p_char_240_wyvern": 999,
                "p_char_199_yak": 999,
                "p_char_187_ccheal": 999,
                "p_char_253_greyy": 999,
                "p_char_283_midn": 999,
                "p_char_209_ardign": 999,
                "p_char_282_catap": 9999,
                "p_char_009_12fce": 999,
                "p_char_502_nblade": 999,
                "p_char_285_medic2": 999,
                "p_char_181_flower": 999,
                "p_char_118_yuki": 999,
                "p_char_501_durin": 999,
                "p_char_107_liskam": 999,
                "p_char_183_skgoat": 999,
                "p_char_236_rope": 999,
                "p_char_127_estell": 999,
                "p_char_500_noirc": 999,
                "p_char_503_rang": 999,
                "p_char_131_flameb": 999,
                "p_char_193_frostl": 999,
                "p_char_137_brownb": 999,
                "p_char_141_nights": 999,
                "p_char_235_jesica": 999,
                "p_char_134_ifrit": 999,
                "p_char_219_meteo": 999,
                "p_char_284_spot": 999,
                "p_char_151_myrtle": 999,
                "tier5_supporter": 999,
                "p_char_298_susuro": 999,
                "p_char_129_bluep": 999,
                "p_char_348_ceylon": 999,
                "p_char_241_panda": 999,
                "p_char_149_scave": 999,
                "p_char_260_durnar": 999,
                "p_char_325_bison": 999,
                "p_char_243_waaifu": 999,
                "p_char_133_mm": 999
            },
            "gacha": {
                "newbee": {
                    "openFlag": 1,
                    "cnt": 10
                },
                "normal": {
                    "NORM_EN_1_0_3": {
                        "cnt": 16,
                        "maxCnt": 10,
                        "rarity": 4,
                        "avail": false
                    },
                    "NORM_EN_2_0_1": {
                        "cnt": 10,
                        "maxCnt": 10,
                        "rarity": 4,
                        "avail": false
                    },
                    "NORM_EN_2_0_2": {
                        "cnt": 10,
                        "maxCnt": 10,
                        "rarity": 4,
                        "avail": false
                    },
                    "NORM_EN_2_0_3": {
                        "cnt": 10,
                        "maxCnt": 10,
                        "rarity": 4,
                        "avail": false
                    },
                    "NORM_EN_3_0_1": {
                        "cnt": 16,
                        "maxCnt": 10,
                        "rarity": 4,
                        "avail": false
                    },
                    "NORM_EN_2_0_4": {
                        "cnt": 1,
                        "maxCnt": 10,
                        "rarity": 4,
                        "avail": true
                    },
                    "NORM_EN_3_0_2": {
                        "cnt": 10,
                        "maxCnt": 10,
                        "rarity": 4,
                        "avail": false
                    },
                    "NORM_EN_4_0_1": {
                        "cnt": 13,
                        "maxCnt": 10,
                        "rarity": 4,
                        "avail": false
                    },
                    "NORM_EN_4_0_3": {
                        "cnt": 10,
                        "maxCnt": 10,
                        "rarity": 4,
                        "avail": false
                    },
                    "NORM_EN_4_0_5": {
                        "cnt": 7,
                        "maxCnt": 10,
                        "rarity": 4,
                        "avail": false
                    },
                    "NORM_EN_5_0_1": {
                        "cnt": 43,
                        "maxCnt": 10,
                        "rarity": 4,
                        "avail": false
                    },
                    "NORM_EN_5_0_2": {
                        "cnt": 1,
                        "maxCnt": 10,
                        "rarity": 4,
                        "avail": false
                    }
                }
            },
            "skin": {
                "characterSkins": {
                    "char_002_amiya@winter#1": 1,
                    "char_181_flower@daily#1": 1,
                    "char_208_melan@epoque#1": 1,
                    "char_120_hibisc@nian#1": 1,
                    "char_147_shining@summer#1": 1,
                    "char_166_skfire@summer#1": 1,
                    "char_290_vigna@summer#1": 1,
                    "char_212_ansel@summer#1": 1,
                    "char_134_ifrit@summer#1": 1,
                    "char_101_sora@summer#1": 1,
                    "char_196_sunbr@summer#1": 1,
                    "char_199_yak@summer#1": 1,
                    "char_286_cast3@summer#1": 1,
                    "char_179_cgbird@witch#1": 1,
                    "char_171_bldsk@witch#1": 1,
                    "char_236_rope@witch#1": 1,
                    "char_124_kroos@witch#1": 1,
                    "char_102_texas@winter#1": 1,
                    "char_143_ghost@winter#1": 1,
                    "char_198_blackd@winter#1": 1,
                    "char_123_fang@winter#1": 1,
                    "char_103_angel@wild#1": 1,
                    "char_173_slchan@wild#1": 1,
                    "char_117_myrrh@wild#1": 1,
                    "char_150_snakek@wild#1": 1,
                    "char_158_milu@wild#2": 1,
                    "char_235_jesica@wild#2": 1,
                    "char_219_meteo@sweep#1": 1,
                    "char_108_silent@sweep#1": 1,
                    "char_235_jesica@sweep#1": 1
                }
            }
        },
        "ts": Date.now()
    };
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data));
})
app.get('charBuild/setDefaultSkill', function(req, res) {
	let charInstId = req.body.charInstId;
	let defaultSkillIndex = req.body.defaultSkillIndex;
	if(charInstId && defaultSkillIndex) {
		let data = {
			"playerDataDelta":{
				"modified":{
					"troop":{
						"chars":{
							charInstId:{
								"defaultSkillIndex":defaultSkillIndex
							}
						}
					}
				},
				"deleted":{}
			}
		}
		res.setHeader('Content-Type', 'application/json');
    	res.send(JSON.stringify(data));
	}
});
app.get('charBuild/changeCharSkill', function(req, res) {

})
app.get('quest/squadFormation', function(req, res) {
    var url = req.url;
});
app.get('user/changeSecretary', function(req, res) {
    var url = req.url;
});
app.get('quest/battleStart', function(req, res) {
    var url = req.url;
});
app.get('quest/battleFinish', function(req, res) {
    var url = req.url;
});
app.get('gacha/tenAdvancedGacha', function(req, res) {
    var url = req.url;
});
app.get('user/exhcangeDiamondShard', function(req, res) {
    var url = req.url;
});
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + "/public/index.html"));

});

