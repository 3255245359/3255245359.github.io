
oS.Init({
    PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine,ograss],
    ZName: [oZombie, oZombie2, oZombie3, oConeheadZombie],
    PicArr: ["images/interface/background1.jpg", "images/interface/ZombieNoteSmall.png", "images/interface/ZombieNote1.png"],
    backgroundImage: "images/interface/background1.jpg",
	//LF: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1],
	LF : [0,2,2,2,2,2],
	LF2 :[0,1,1,1,1,1,1,1,0,1,4],//[[0,0,0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,1,1,1]],
    CanSelectCard: 1,
    LevelName: "旋风谷1-1",
    LvlEName: 1,
    LargeWaveFlag: {
        10 : $("imgFlag1"),
        // 20 : $("imgFlag2"),
        // 30 : $("imgFlag1")
    }
},
{
    AZ: [[oZombie, 2, 1], [oZombie2, 2, 1], [oZombie3, 2, 1], [oConeheadZombie, 2, 1]],
    FlagNum: 10,
    FlagToSumNum: {
        a1: [3, 5, 9, 10, 13, 15, 19, 20, 23, 25, 29],
        a2: [1, 2, 3, 10, 4, 5, 6, 15, 7, 8, 9, 25]
    },
    FlagToMonitor: {
        // 9 : [ShowLargeWave, 0]
        // 19 : [ShowLargeWave, 0],
         9 : [ShowFinalWave, 0]
    },
    FlagToEnd: function() {
        NewImg("imgSF", "images/interface/ZombieNoteSmall.png", "left:667px;top:220px", EDAll, {
            onclick: function() {
                PlayAudio("winmusic");
                SetHidden($("PointerUD")); (SetStyle(this, {
                    width: "613px",
                    height: "399px",
                    left: "193px",
                    top: "100px"
                })).src = "images/interface/ZombieNote1.png";
                this.onclick = function() {
                    SelectModal(2)
                }
            }
        });
        NewImg("PointerUD", "images/interface/PointerDown.gif", "top:185px;left:676px", EDAll)
    }
});