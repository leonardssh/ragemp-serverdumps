var currentJailTime = 0;਍瘀愀爀 氀愀猀琀䨀愀椀氀唀瀀搀愀琀攀 㴀 ㄀　㬀ഀഀ
਍瘀愀爀 挀栀愀猀攀刀甀渀渀椀渀最 㴀 昀愀氀猀攀㬀ഀഀ
var chaseTimeCur = 0;਍瘀愀爀 挀栀愀猀攀吀椀洀攀䴀愀砀 㴀 ㌀㤀　㬀ഀഀ
var chaseMode = 0; // 0= STANDARD | 1= BUSTED | and others as in SCRIPT਍瘀愀爀 挀漀氀氀椀猀椀漀渀吀椀洀攀 㴀 ⴀ㄀㬀ഀഀ
var updateRate = 200;਍ഀഀ
var radioToggle = 0;਍ഀഀ
var chatStatus = false;਍瘀愀爀 挀栀愀琀匀琀愀琀甀猀䰀愀琀攀 㴀 昀愀氀猀攀㬀ഀഀ
var menuToggledLate = false;਍瘀愀爀 氀愀猀琀䌀栀愀琀吀漀最最氀攀 㴀 䐀愀琀攀⸀渀漀眀⠀⤀㬀ഀഀ
var streetName = null;਍瘀愀爀 稀漀渀攀一愀洀攀 㴀 渀甀氀氀㬀ഀഀ
var showHud = true;਍瘀愀爀 爀攀渀搀攀爀一愀洀攀琀愀最猀 㴀 琀爀甀攀㬀ഀഀ
var currentMuteTime = 0;਍瘀愀爀 氀愀猀琀䴀甀琀攀唀瀀搀愀琀攀 㴀 ㄀　㬀ഀഀ
var lastFunc = "Init";਍ഀഀ
var curMDCBind = 0x4B;਍瘀愀爀 氀愀猀琀䴀䐀䌀䈀椀渀搀 㴀 　砀㐀䈀㬀ഀഀ
var curActionMenuBind = 0x59;਍瘀愀爀 氀愀猀琀䄀挀琀椀漀渀䴀攀渀甀䈀椀渀搀 㴀 　砀㔀㤀㬀ഀഀ
਍瘀愀爀 䈀愀渀欀刀漀戀戀攀爀礀伀渀 㴀 昀愀氀猀攀㬀ഀഀ
਍瘀愀爀 匀栀漀眀嘀攀栀椀挀氀攀䐀䰀 㴀 昀愀氀猀攀㬀ഀഀ
var specState = false;਍瘀愀爀 猀瀀攀挀吀愀爀最攀琀 㴀 渀甀氀氀㬀ഀഀ
var isNoClip = false;਍ഀഀ
var LastKeyPress = 0;਍瘀愀爀 䄀䘀䬀匀琀愀最攀 㴀 　㬀ഀഀ
var SecondsSinceLastKeyPress = 0; // using this for nametags਍瘀愀爀 愀渀琀椀䄀䘀䬀䄀挀琀椀瘀攀 㴀 昀愀氀猀攀㬀ഀഀ
਍瘀愀爀 猀栀漀眀刀攀琀椀挀甀氀攀 㴀 琀爀甀攀㬀ഀഀ
var showCustomCrosshair = false;਍瘀愀爀 猀栀漀眀䌀甀猀琀漀洀䌀爀漀猀猀栀愀椀爀䤀渀匀渀椀瀀攀爀 㴀 昀愀氀猀攀㬀ഀഀ
var alwaysShowCustomCrosshair = false;਍瘀愀爀 挀甀猀琀漀洀䌀爀漀猀猀栀愀椀爀伀渀 㴀 昀愀氀猀攀㬀ഀഀ
਍瘀愀爀 匀攀爀瘀攀爀唀䤀 㴀 渀甀氀氀㬀ഀഀ
var menuToggled = false;਍瘀愀爀 猀挀漀爀攀戀漀愀爀搀吀漀最最氀攀搀 㴀 昀愀氀猀攀㬀ഀഀ
var scoreboardCursor = false;਍ഀഀ
var MDC_DOM = null;਍瘀愀爀 䴀䐀䌀䄀挀琀椀瘀攀 㴀 昀愀氀猀攀㬀ഀഀ
var isLockpicking = false;਍ഀഀ
var isHotwiring = false;਍瘀愀爀 䠀漀琀眀椀爀攀䐀伀䴀 㴀 昀愀氀猀攀㬀ഀഀ
਍瘀愀爀 䌀氀漀琀栀椀渀最䔀搀椀琀漀爀䐀伀䴀 㴀 渀甀氀氀㬀ഀഀ
var ClothingEditorActive = false;਍ഀഀ
var ActionMenuActive = false;਍瘀愀爀 嘀攀栀椀挀氀攀匀瀀愀眀渀攀爀䄀挀琀椀瘀攀 㴀 昀愀氀猀攀㬀ഀഀ
var WeaponEditorActive = false;਍ഀഀ
var cuffTarget = null;਍瘀愀爀 挀甀昀昀䤀渀琀攀爀瘀愀氀 㴀 渀甀氀氀㬀ഀഀ
਍瘀愀爀 䤀猀䤀渀吀甀琀漀爀椀愀氀 㴀 昀愀氀猀攀㬀ഀഀ
਍瘀愀爀 搀椀猀愀戀氀攀匀瀀爀椀渀琀 㴀 昀愀氀猀攀㬀ഀഀ
਍瘀愀爀 䘀倀匀 㴀 　㬀 ⼀⼀ 吀栀椀猀 椀猀 琀栀攀 愀挀琀甀愀氀 昀瀀猀⸀ഀഀ
var FPS_Frames = 0;਍瘀愀爀 䘀倀匀开䌀愀氀挀 㴀 䐀愀琀攀⸀渀漀眀⠀⤀㬀ഀഀ
਍洀瀀⸀瀀氀愀礀攀爀猀⸀氀漀挀愀氀⸀吀攀愀洀 㴀 ⴀ㄀㬀ഀഀ
mp.game.vehicle.defaultEngineBehaviour = false;਍洀瀀⸀最愀洀攀⸀最愀洀攀瀀氀愀礀⸀攀渀愀戀氀攀䴀瀀䐀氀挀䴀愀瀀猀⠀琀爀甀攀⤀㬀ഀഀ
mp.game.player.disableVehicleRewards();਍洀瀀⸀最愀洀攀⸀瀀氀愀礀攀爀⸀猀攀琀䠀攀愀氀琀栀刀攀挀栀愀爀最攀䴀甀氀琀椀瀀氀椀攀爀⠀　⸀　⤀㬀ഀഀ
mp.game.vehicle.setExperimentalAttachmentSyncEnabled(true);਍洀瀀⸀最愀洀攀⸀最愀洀攀瀀氀愀礀⸀猀攀琀䘀愀搀攀伀甀琀䄀昀琀攀爀䐀攀愀琀栀⠀昀愀氀猀攀⤀㬀ഀഀ
mp.players.local.setConfigFlag(429, false);਍洀瀀⸀瀀氀愀礀攀爀猀⸀氀漀挀愀氀⸀猀攀琀刀愀最搀漀氀氀䘀氀愀最⠀㈀⤀㬀ഀഀ
਍昀甀渀挀琀椀漀渀 琀爀愀挀攀䰀愀猀琀䘀甀渀挀⠀椀匀琀爀⤀ഀഀ
{਍    洀瀀⸀猀琀漀爀愀最攀⸀搀愀琀愀⸀氀愀猀琀䘀渀 㴀 椀匀琀爀㬀ഀഀ
    mp.storage.flush();਍紀ഀഀ
਍琀爀愀挀攀䰀愀猀琀䘀甀渀挀⠀∀䴀愀椀渀㨀㨀䰀漀愀搀䤀倀䰀猀⠀⤀∀⤀㬀ഀഀ
// where IPL names name of your .ymap file in dlc -> mapping.rpf਍椀昀⠀℀洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀椀猀䤀瀀氀䄀挀琀椀瘀攀⠀∀戀氀漀挀欀栀攀椀猀琀琀甀渀渀攀氀∀⤀ 簀簀 ℀洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀椀猀䤀瀀氀䄀挀琀椀瘀攀⠀∀搀攀爀戀礀∀⤀ 簀簀 ഀഀ
    !mp.game.streaming.isIplActive("floydsapt") || !mp.game.streaming.isIplActive("whbig") || ਍    ℀洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀椀猀䤀瀀氀䄀挀琀椀瘀攀⠀∀眀栀洀攀搀∀⤀ 簀簀 ℀洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀椀猀䤀瀀氀䄀挀琀椀瘀攀⠀∀眀栀猀洀愀氀氀∀⤀⤀ഀഀ
{਍ऀ洀瀀⸀最愀洀攀⸀椀渀瘀漀欀攀⠀∀　砀䐀㜀䌀㄀　䌀㐀䄀㘀㌀㜀㤀㤀㈀䌀㤀∀⤀㬀 ⼀⼀ 开䰀伀䄀䐀开匀倀开䐀䰀䌀开䴀䄀倀匀ഀഀ
	mp.game.invoke("0x0888C3502DBBEEF5"); // _LOAD_MP_DLC_MAPS਍紀ഀഀ
਍洀瀀⸀瀀氀愀礀攀爀猀⸀氀漀挀愀氀⸀瀀漀猀椀琀椀漀渀 㴀 渀攀眀 洀瀀⸀嘀攀挀琀漀爀㌀⠀ⴀ㄀　㄀㠀⸀㔀㔀㌀　　　　　Ⰰ ⴀ㈀㜀㌀㄀⸀㤀㔀㘀　　　　　Ⰰ ㄀㔀⸀㜀　　　　　　　⤀㬀ഀഀ
਍琀爀愀挀攀䰀愀猀琀䘀甀渀挀⠀∀刀攀焀甀椀爀攀䤀渀椀琀∀⤀㬀ഀഀ
require('mp-commands');਍爀攀焀甀椀爀攀⠀✀⸀⼀匀攀爀瘀攀爀唀䤀⼀䌀漀洀洀愀渀搀猀䰀椀猀琀⸀樀猀✀⤀㬀ഀഀ
require("./nativeui/index.js");਍ഀഀ
require('./Player/Player.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀倀氀愀礀攀爀⼀匀瀀椀欀攀猀刀漀愀搀戀氀漀挀欀猀⸀樀猀✀⤀㬀ഀഀ
require('./Player/Achievements.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀倀氀愀礀攀爀⼀䈀愀渀欀刀漀戀戀攀爀礀⸀樀猀✀⤀㬀ഀഀ
require('./Player/Actions.js');਍爀攀焀甀椀爀攀⠀∀⸀⼀倀氀愀礀攀爀⼀一愀洀攀琀愀最猀⸀樀猀∀⤀㬀ഀഀ
require("./ServerUI/HUD.js");਍爀攀焀甀椀爀攀⠀∀⸀⼀匀攀爀瘀攀爀唀䤀⼀䴀攀渀甀⸀樀猀∀⤀㬀ഀഀ
require("./ServerUI/Logs.js");਍爀攀焀甀椀爀攀⠀∀⸀⼀匀攀爀瘀攀爀唀䤀⼀吀甀琀漀爀椀愀氀⸀樀猀∀⤀㬀ഀഀ
require("./charcreator/clotheditor.js")਍爀攀焀甀椀爀攀⠀∀⸀⼀挀栀愀爀挀爀攀愀琀漀爀⼀椀渀搀攀砀⸀樀猀∀⤀㬀ഀഀ
require("./charcreator/outfitslots.js");਍爀攀焀甀椀爀攀⠀✀⸀⼀洀搀挀开猀挀爀攀攀渀⼀椀渀搀攀砀⸀樀猀✀⤀㬀ഀഀ
require('./hotwire_game/index.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀眀攀愀瀀漀渀攀搀椀琀漀爀⼀椀渀搀攀砀⸀樀猀✀⤀㬀ഀഀ
require('./clothing_editor/index.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀琀椀瀀猀开琀攀猀琀⼀椀渀搀攀砀⸀樀猀✀⤀㬀ഀഀ
require('./Player/Fuel.js');਍ഀഀ
require('./camerasManager.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀挀攀昀䈀爀漀眀猀攀爀⸀樀猀✀⤀㬀ഀഀ
require("./rappel/index.js");਍爀攀焀甀椀爀攀⠀∀⸀⼀倀氀愀礀攀爀⼀匀礀渀挀⸀樀猀∀⤀㬀ഀഀ
require("./Player/LightsMenu.js");਍爀攀焀甀椀爀攀⠀✀⸀⼀倀氀愀礀攀爀⼀伀琀栀攀爀匀琀甀昀昀⸀樀猀✀⤀㬀ഀഀ
require("./Player/Busted.js");਍爀攀焀甀椀爀攀⠀∀⸀⼀倀氀愀礀攀爀⼀嘀漀椀挀攀⸀樀猀∀⤀㬀ഀഀ
require("./Player/VehicleTuner.js");਍ഀഀ
traceLastFunc("Main::Init()");਍ഀഀ
var loginSceneEntities = [];਍愀猀礀渀挀 昀甀渀挀琀椀漀渀 琀漀最最氀攀䰀漀最椀渀匀挀攀渀攀⠀琀漀最最氀攀⤀笀ഀഀ
    if(toggle){਍  ഀഀ
        /* CREATING THE VEHICLES */਍        氀漀最椀渀匀挀攀渀攀䔀渀琀椀琀椀攀猀嬀　崀 㴀 洀瀀⸀瘀攀栀椀挀氀攀猀⸀渀攀眀⠀洀瀀⸀最愀洀攀⸀樀漀愀愀琀⠀∀挀愀瘀愀氀挀愀搀攀∀⤀Ⰰ 渀攀眀 洀瀀⸀嘀攀挀琀漀爀㌀⠀ⴀ㘀㤀㐀⸀㈀㘀　㔀㘀Ⰰ ⴀ㄀　㐀㐀⸀㌀㤀㄀㜀Ⰰ ㄀㔀⸀㜀㈀㠀㤀㤀㄀⤀Ⰰഀഀ
            {਍                栀攀愀搀椀渀最㨀 ⴀ㐀⸀㤀㜀㄀㠀㄀Ⰰഀഀ
                numberPlate: 'RNC123',਍                挀漀氀漀爀㨀 嬀嬀㈀㔀㔀Ⰰ 　Ⰰ 　崀Ⰰ 嬀㈀㔀㔀Ⰰ ㈀㔀㔀Ⰰ ㈀㔀㔀崀崀Ⰰഀഀ
                alpha: 255,਍                攀渀最椀渀攀㨀 昀愀氀猀攀Ⰰഀഀ
                dimension: mp.players.local.dimension਍            紀⤀㬀ഀഀ
        loginSceneEntities[1] = mp.vehicles.new(mp.game.joaat("police2"), new mp.Vector3(-688.26843, -1044.1389, 15.873694),਍        笀ഀഀ
            heading: 103.21785,਍            渀甀洀戀攀爀倀氀愀琀攀㨀 ✀刀一䌀㄀㈀㌀✀Ⰰഀഀ
            color: [[0,0,0], [255, 255, 255]],਍            愀氀瀀栀愀㨀 ㈀㔀㔀Ⰰഀഀ
            engine: false,਍            搀椀洀攀渀猀椀漀渀㨀 洀瀀⸀瀀氀愀礀攀爀猀⸀氀漀挀愀氀⸀搀椀洀攀渀猀椀漀渀ഀഀ
        });਍        氀漀最椀渀匀挀攀渀攀䔀渀琀椀琀椀攀猀嬀㈀崀 㴀 洀瀀⸀瘀攀栀椀挀氀攀猀⸀渀攀眀⠀洀瀀⸀最愀洀攀⸀樀漀愀愀琀⠀∀瀀漀氀椀挀攀∀⤀Ⰰ 渀攀眀 洀瀀⸀嘀攀挀琀漀爀㌀⠀ⴀ㘀㤀㘀⸀㈀㘀㠀㜀Ⰰ ⴀ㄀　㔀　⸀㌀㈀㐀㔀Ⰰ ㄀㔀⸀㄀㈀㘀㘀㌀⤀Ⰰഀഀ
        {਍            栀攀愀搀椀渀最㨀 ⴀ㈀㤀⸀㔀㈀㄀㄀㌀㜀Ⰰഀഀ
            numberPlate: 'RNC123',਍            挀漀氀漀爀㨀 嬀嬀　Ⰰ　Ⰰ　崀Ⰰ 嬀㈀㔀㔀Ⰰ ㈀㔀㔀Ⰰ ㈀㔀㔀崀崀Ⰰഀഀ
            alpha: 255,਍            攀渀最椀渀攀㨀 昀愀氀猀攀Ⰰഀഀ
            dimension: mp.players.local.dimension਍        紀⤀㬀ഀഀ
        ਍        ⼀⨀ 䜀䔀一䔀刀䄀䰀 匀吀唀䘀䘀 ⴀ 吀䤀䴀䔀 伀䘀 䐀䄀夀Ⰰ 䄀一䤀䴀 䐀䤀䌀吀匀⸀⸀⸀ ⨀⼀ഀഀ
਍        洀瀀⸀最愀洀攀⸀愀甀搀椀漀⸀猀琀愀爀琀䄀甀搀椀漀匀挀攀渀攀⠀∀䌀䠀䄀刀䄀䌀吀䔀刀开䌀䠀䄀一䜀䔀开䤀一开匀䬀夀开匀䌀䔀一䔀∀⤀㬀ഀഀ
        mp.game.time.setClockTime(21, 0, 0);਍        洀瀀⸀最愀洀攀⸀最愀洀攀瀀氀愀礀⸀猀攀琀圀攀愀琀栀攀爀吀礀瀀攀一漀眀⠀✀䌀䰀䔀䄀刀✀⤀㬀ഀഀ
਍        洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䄀渀椀洀䐀椀挀琀⠀∀愀爀爀攀猀琀∀⤀㬀ഀഀ
        for(let i = 0; mp.game.streaming.hasAnimDictLoaded("arrest") === 0 && i < 15; i++){਍            愀眀愀椀琀 洀瀀⸀最愀洀攀⸀眀愀椀琀䄀猀礀渀挀⠀㄀　　⤀㬀ഀഀ
        }਍        洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䄀渀椀洀䐀椀挀琀⠀∀愀洀戀䀀洀攀搀椀挀䀀猀琀愀渀搀椀渀最䀀欀渀攀攀氀䀀戀愀猀攀∀⤀㬀ഀഀ
        for(let i = 0; mp.game.streaming.hasAnimDictLoaded("amb@medic@standing@kneel@base") === 0 && i < 15; i++){਍            愀眀愀椀琀 洀瀀⸀最愀洀攀⸀眀愀椀琀䄀猀礀渀挀⠀㄀　　⤀㬀ഀഀ
        }਍        洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䄀渀椀洀䐀椀挀琀⠀∀爀愀渀搀漀洀䀀愀爀爀攀猀琀猀䀀戀甀猀琀攀搀∀⤀㬀ഀഀ
        for(let i = 0; mp.game.streaming.hasAnimDictLoaded("random@arrests@busted") === 0 && i < 15; i++){਍            愀眀愀椀琀 洀瀀⸀最愀洀攀⸀眀愀椀琀䄀猀礀渀挀⠀㄀　　⤀㬀ഀഀ
        }਍        洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䄀渀椀洀䐀椀挀琀⠀∀挀漀洀戀愀琀䀀搀愀洀愀最攀䀀眀爀椀琀栀攀∀⤀㬀ഀഀ
        for(let i = 0; mp.game.streaming.hasAnimDictLoaded("combat@damage@writhe") === 0 && i < 15; i++){਍            愀眀愀椀琀 洀瀀⸀最愀洀攀⸀眀愀椀琀䄀猀礀渀挀⠀㄀　　⤀㬀ഀഀ
        }਍ഀഀ
        /* CREATING THE PEDS */਍        猀攀琀吀椀洀攀漀甀琀⠀⠀⤀ 㴀㸀 笀ഀഀ
            loginSceneEntities[3] = mp.peds.new( // gangster 1 - dead਍                洀瀀⸀最愀洀攀⸀樀漀愀愀琀⠀✀挀猀戀开最爀漀瘀攀开猀琀爀开搀氀爀✀⤀Ⰰ ഀഀ
                new mp.Vector3(-697.9484, -1043.4353, 15.86826),਍                ⴀ㐀㜀⸀㄀㄀㌀㤀　㌀Ⰰഀഀ
                mp.players.local.dimension਍            ⤀㬀ഀഀ
            loginSceneEntities[4] = mp.peds.new( // gangster 2 - surrendering਍                洀瀀⸀最愀洀攀⸀樀漀愀愀琀⠀✀愀开洀开洀开猀愀氀琀漀渀开　㈀✀⤀Ⰰ ഀഀ
                new mp.Vector3(-693.20276, -1047.7367, 15.804193),਍                ㌀㐀⸀㈀㠀　㐀㠀㜀Ⰰഀഀ
                mp.players.local.dimension਍            ⤀㬀ഀഀ
            loginSceneEntities[5] = mp.peds.new( // cop speaking into radio, aiming at gangster 2਍                洀瀀⸀最愀洀攀⸀樀漀愀愀琀⠀✀猀开洀开礀开挀漀瀀开　㄀✀⤀Ⰰ ഀഀ
                new mp.Vector3(-692.4914, -1048.5272, 15.750268),਍                ㌀㔀⸀㤀㌀㘀㌀㌀Ⰰഀഀ
                mp.players.local.dimension਍            ⤀㬀ഀഀ
            loginSceneEntities[6] = mp.peds.new( // cop 2 - kneeling next to ded guy਍                洀瀀⸀最愀洀攀⸀樀漀愀愀琀⠀✀猀开昀开礀开挀漀瀀开　㄀✀⤀Ⰰ ഀഀ
                new mp.Vector3(-696.91583, -1044.7444, 15.767713),਍                㘀㜀⸀㔀㈀㌀㐀㜀㘀Ⰰഀഀ
                mp.players.local.dimension਍            ⤀㬀ഀഀ
            loginSceneEntities[7] = mp.peds.new( // cop 3 - idling next to them਍                洀瀀⸀最愀洀攀⸀樀漀愀愀琀⠀✀猀开洀开礀开挀漀瀀开　㄀✀⤀Ⰰ ഀഀ
                new mp.Vector3(-689.9278, -1046.8384, 15.976717),਍                ㄀　㐀⸀㈀㐀㐀㌀㔀Ⰰഀഀ
                mp.players.local.dimension਍            ⤀㬀ഀഀ
਍        紀Ⰰ 㔀㔀　⤀㬀ഀഀ
    }਍    攀氀猀攀笀ഀഀ
        mp.game.audio.stopAudioScene("CHARACTER_CHANGE_IN_SKY_SCENE");਍        昀漀爀⠀氀攀琀 椀 㴀 　 㬀 椀 㰀 氀漀最椀渀匀挀攀渀攀䔀渀琀椀琀椀攀猀⸀氀攀渀最琀栀 㬀 椀⬀⬀⤀笀ഀഀ
            loginSceneEntities[i].destroy();਍        紀ഀഀ
        loginSceneEntities = [];਍    紀ഀഀ
}਍洀瀀⸀攀瘀攀渀琀猀⸀愀搀搀⠀∀䐀攀猀琀爀漀礀䰀漀最椀渀匀挀攀渀攀∀Ⰰ ⠀⤀ 㴀㸀 琀漀最最氀攀䰀漀最椀渀匀挀攀渀攀⠀昀愀氀猀攀⤀⤀㬀ഀഀ
਍洀瀀⸀攀瘀攀渀琀猀⸀愀搀搀⠀✀猀栀漀眀䰀漀最椀渀䈀爀漀眀猀攀爀✀Ⰰ ⠀猀琀愀琀攀⤀ 㴀㸀 笀ഀഀ
    setTimeout(() => {਍        椀昀⠀匀攀爀瘀攀爀唀䤀 ℀㴀 渀甀氀氀⤀ഀഀ
        {਍            椀昀⠀℀匀攀爀瘀攀爀唀䤀⸀愀挀琀椀瘀攀⤀ 匀攀爀瘀攀爀唀䤀⸀愀挀琀椀瘀攀 㴀 琀爀甀攀㬀ഀഀ
            ServerUI.execute(`gm.$refs.hud.enabled = false;`);਍            匀攀爀瘀攀爀唀䤀⸀攀砀攀挀甀琀攀⠀怀最洀⸀␀爀攀昀猀⸀洀愀椀渀䴀攀渀甀⸀攀渀愀戀氀攀搀 㴀 昀愀氀猀攀㬀怀⤀㬀ഀഀ
            ServerUI.execute(`gm.$refs.mainMenu.enabled = false;`);਍            椀昀⠀猀琀愀琀攀⤀笀ഀഀ
                ServerUI.execute(`gm.$refs.auth.startLoading(5);`); // initiate the fake loading screen to allow CEF sounds and shit duhh਍                琀漀最最氀攀䰀漀最椀渀匀挀攀渀攀⠀琀爀甀攀⤀㬀ഀഀ
                mp.events.callRemote("requestQuickLoginForgotUsernameData"); // yes਍                匀攀爀瘀攀爀唀䤀⸀攀砀攀挀甀琀攀⠀怀最洀⸀␀爀攀昀猀⸀洀愀椀渀䴀攀渀甀⸀␀爀攀昀猀⸀椀渀瘀攀渀琀漀爀礀吀愀戀⸀椀琀攀洀猀 㴀 嬀崀㬀怀⤀㬀ഀഀ
                mp.events.callLocal("actionMenu:removeAllItems");਍            紀ഀഀ
            else{਍                匀攀爀瘀攀爀唀䤀⸀攀砀攀挀甀琀攀⠀怀最洀⸀␀爀攀昀猀⸀愀甀琀栀⸀␀爀攀昀猀⸀瀀愀渀攀氀⸀愀甀琀栀匀甀挀挀攀猀猀 㴀 琀爀甀攀㬀怀⤀㬀ഀഀ
                setTimeout(() => {਍                    椀昀⠀℀洀瀀⸀瀀氀愀礀攀爀猀⸀氀漀挀愀氀 簀簀 ℀洀瀀⸀瀀氀愀礀攀爀猀⸀攀砀椀猀琀猀⠀洀瀀⸀瀀氀愀礀攀爀猀⸀氀漀挀愀氀⤀⤀ 爀攀琀甀爀渀㬀ഀഀ
਍                    匀攀爀瘀攀爀唀䤀⸀攀砀攀挀甀琀攀⠀怀最洀⸀␀爀攀昀猀⸀愀甀琀栀⸀愀甀琀栀倀愀渀攀氀 㴀 昀愀氀猀攀㬀怀⤀㬀ഀഀ
                    if(!IsInTutorial)਍                        匀攀爀瘀攀爀唀䤀⸀攀砀攀挀甀琀攀⠀怀最洀⸀␀爀攀昀猀⸀栀甀搀⸀攀渀愀戀氀攀搀 㴀 琀爀甀攀㬀怀⤀㬀ഀഀ
                }, 1000);਍            紀ഀഀ
            if(!IsInTutorial)਍                洀瀀⸀最甀椀⸀挀甀爀猀漀爀⸀猀栀漀眀⠀猀琀愀琀攀Ⰰ 猀琀愀琀攀⤀㬀ഀഀ
        }਍        攀氀猀攀笀ഀഀ
            mp.events.callRemote("ServerConsoleOutput", `Attempted to show login browser to ${mp.players.local.name} while it's null! Trying again...`);਍            匀攀爀瘀攀爀唀䤀 㴀 洀瀀⸀戀爀漀眀猀攀爀猀⸀渀攀眀⠀∀瀀愀挀欀愀最攀㨀⼀⼀匀攀爀瘀攀爀唀䤀⼀椀渀搀攀砀⸀栀琀洀氀∀⤀㬀ഀഀ
            ServerUI.active = true;਍            猀攀琀吀椀洀攀漀甀琀⠀⠀⤀ 㴀㸀 笀ഀഀ
                mp.events.callLocal("showLoginBrowser", state);਍            紀Ⰰ ㄀　　　⤀㬀ഀഀ
        }਍ഀഀ
    }, 500);਍紀⤀㬀ഀഀ
਍洀瀀⸀攀瘀攀渀琀猀⸀愀搀搀⠀∀氀漀最椀渀开匀栀漀眀䤀渀瘀愀氀椀搀䤀渀昀漀∀Ⰰ ⠀琀漀最最氀攀⤀ 㴀㸀 笀ഀഀ
    if(ServerUI && ServerUI.active){਍        匀攀爀瘀攀爀唀䤀⸀攀砀攀挀甀琀攀⠀怀最洀⸀␀爀攀昀猀⸀愀甀琀栀⸀␀爀攀昀猀⸀瀀愀渀攀氀⸀愀甀琀栀䰀漀愀搀椀渀最 㴀 昀愀氀猀攀㬀怀⤀㬀ഀഀ
        ServerUI.execute(`gm.$refs.auth.$refs.panel.$refs.login.loginError = ${toggle.toString()}`);਍    紀ഀഀ
});਍洀瀀⸀攀瘀攀渀琀猀⸀愀搀搀⠀∀氀漀最椀渀开匀栀漀眀䄀挀挀漀甀渀琀䔀砀椀猀琀猀∀Ⰰ ⠀琀漀最最氀攀⤀ 㴀㸀 笀ഀഀ
    if(ServerUI && ServerUI.active){਍        匀攀爀瘀攀爀唀䤀⸀攀砀攀挀甀琀攀⠀怀最洀⸀␀爀攀昀猀⸀愀甀琀栀⸀␀爀攀昀猀⸀瀀愀渀攀氀⸀愀甀琀栀䰀漀愀搀椀渀最 㴀 昀愀氀猀攀㬀怀⤀㬀ഀഀ
        ServerUI.execute(`gm.$refs.auth.$refs.panel.$refs.register.usernameAlreadyExists = ${toggle.toString()}`);਍    紀ഀഀ
});਍洀瀀⸀攀瘀攀渀琀猀⸀愀搀搀⠀∀氀漀最椀渀开䴀愀砀䄀挀挀漀甀渀琀䰀椀洀椀琀∀Ⰰ ⠀琀漀最最氀攀⤀ 㴀㸀 笀ഀഀ
    if(ServerUI && ServerUI.active){਍        匀攀爀瘀攀爀唀䤀⸀攀砀攀挀甀琀攀⠀怀最洀⸀␀爀攀昀猀⸀愀甀琀栀⸀␀爀攀昀猀⸀瀀愀渀攀氀⸀愀甀琀栀䰀漀愀搀椀渀最 㴀 昀愀氀猀攀㬀怀⤀㬀ഀഀ
        //ServerUI.execute(`gm.$refs.auth.$refs.panel.$refs.register.usernameAlreadyExists = ${toggle.toString()}`);਍        ⼀⼀ 吀伀ⴀ䐀伀㨀 䄀搀搀 愀 洀攀猀猀愀最攀 琀栀愀琀 洀愀砀 愀挀挀漀甀渀琀 氀椀洀椀琀 栀愀猀 戀攀攀渀 爀攀愀挀栀攀搀℀ഀഀ
    }਍紀⤀㬀ഀഀ
਍洀瀀⸀攀瘀攀渀琀猀⸀愀搀搀⠀∀戀爀漀眀猀攀爀开匀攀爀瘀攀爀䌀漀渀猀漀氀攀∀Ⰰ ⠀洀猀最⤀ 㴀㸀 洀瀀⸀攀瘀攀渀琀猀⸀挀愀氀氀刀攀洀漀琀攀⠀∀匀攀爀瘀攀爀䌀漀渀猀漀氀攀伀甀琀瀀甀琀∀Ⰰ 洀猀最⤀⤀㬀ഀഀ
਍氀攀琀 挀栀愀琀匀琀愀琀甀猀吀椀洀攀漀甀琀 㴀 渀甀氀氀㬀ഀഀ
mp.events.add("onOpenChatbox", (toggle) =>਍笀ഀഀ
    if((VehicleSpawnerActive !== undefined && VehicleSpawnerActive == true) ||਍    ⠀圀攀愀瀀漀渀䔀搀椀琀漀爀䄀挀琀椀瘀攀 ℀㴀㴀 甀渀搀攀昀椀渀攀搀 ☀☀ 圀攀愀瀀漀渀䔀搀椀琀漀爀䄀挀琀椀瘀攀 㴀㴀 琀爀甀攀⤀ 簀簀ഀഀ
    (ActionMenuActive !== undefined && ActionMenuActive == true)){਍        爀攀琀甀爀渀㬀ഀഀ
    }਍    椀昀⠀洀瀀⸀瀀氀愀礀攀爀猀⸀氀漀挀愀氀⸀最攀琀嘀愀爀椀愀戀氀攀⠀∀瀀䰀漀最最攀搀∀⤀ 㴀㴀 甀渀搀攀昀椀渀攀搀 簀簀 洀瀀⸀瀀氀愀礀攀爀猀⸀氀漀挀愀氀⸀最攀琀嘀愀爀椀愀戀氀攀⠀∀瀀䰀漀最最攀搀∀⤀ 㴀㴀 昀愀氀猀攀 ☀☀ 琀漀最最氀攀⤀ഀഀ
    {਍        愀挀琀椀瘀愀琀攀䌀栀愀琀⠀昀愀氀猀攀⤀㬀ഀഀ
        return;਍    紀ഀഀ
    clearTimeout(chatStatusTimeout);਍    挀栀愀琀匀琀愀琀甀猀 㴀 琀漀最最氀攀㬀ഀഀ
    lastChatToggle = Date.now();਍    昀漀挀甀猀䌀栀愀琀⠀琀漀最最氀攀⤀㬀ഀഀ
    mp.events.callRemote("UpdateChatState", toggle);਍    琀爀愀挀攀䰀愀猀琀䘀甀渀挀⠀怀嬀倀氀愀礀攀爀猀崀 䌀栀愀琀䈀漀砀 吀漀最最氀攀搀 ␀笀琀漀最最氀攀紀怀⤀㬀ഀഀ
਍    洀瀀⸀最甀椀⸀挀甀爀猀漀爀⸀猀栀漀眀⠀琀漀最最氀攀Ⰰ 昀愀氀猀攀⤀㬀ഀഀ
    if(toggle == true){਍        挀栀愀琀匀琀愀琀甀猀䰀愀琀攀 㴀 琀爀甀攀㬀ഀഀ
    }਍    攀氀猀攀笀ഀഀ
        chatStatusTimeout = setTimeout(() =>{਍            挀栀愀琀匀琀愀琀甀猀䰀愀琀攀 㴀 昀愀氀猀攀㬀ഀഀ
        }, 500);਍    紀ഀഀ
਍紀⤀㬀ഀഀ
਍洀瀀⸀攀瘀攀渀琀猀⸀愀搀搀⠀✀氀漀最椀渀䤀渀昀漀爀洀愀琀椀漀渀吀漀匀攀爀瘀攀爀✀Ⰰ ⠀甀猀攀爀渀愀洀攀Ⰰ 瀀愀猀猀眀漀爀搀⤀ 㴀㸀 笀ഀഀ
਍    洀瀀⸀攀瘀攀渀琀猀⸀挀愀氀氀刀攀洀漀琀攀⠀✀伀渀倀氀愀礀攀爀䰀漀最椀渀䄀琀琀攀洀瀀琀✀Ⰰ 甀猀攀爀渀愀洀攀Ⰰ 瀀愀猀猀眀漀爀搀⤀㬀ഀഀ
});਍ഀഀ
mp.events.add('registerInformationToServer', (email, username, password) => {਍ഀഀ
    mp.events.callRemote('OnPlayerRegisterAttempt', email, username, password);਍紀⤀㬀ഀഀ
਍洀瀀⸀攀瘀攀渀琀猀⸀愀搀搀⠀✀爀攀焀甀攀猀琀䄀甀琀漀䰀漀最椀渀䐀愀琀愀✀Ⰰ ⠀⤀ 㴀㸀 笀ഀഀ
    mp.events.callRemote("OnRequestAutoLoginData");਍紀⤀㬀ഀഀ
਍洀瀀⸀攀瘀攀渀琀猀⸀愀搀搀⠀✀猀攀渀搀䄀甀琀漀䰀漀最椀渀䐀愀琀愀吀漀䈀爀漀眀猀攀爀✀Ⰰ ⠀搀愀琀愀⤀ 㴀㸀 笀ഀഀ
    setTimeout(() => {਍        椀昀⠀搀愀琀愀⸀氀攀渀最琀栀 㸀 ㈀⤀ഀഀ
            ServerUI.execute(`gm.$refs.auth.$refs.panel.$refs.login.quickLoginUsername = "${data}"`);਍    紀Ⰰ 㔀　　⤀㬀ഀഀ
});਍洀瀀⸀攀瘀攀渀琀猀⸀愀搀搀⠀✀猀攀渀搀䘀漀爀最漀琀唀猀攀爀渀愀洀攀吀漀䈀爀漀眀猀攀爀✀Ⰰ ⠀搀愀琀愀⤀ 㴀㸀 笀ഀഀ
    setTimeout(() => {਍        匀攀爀瘀攀爀唀䤀⸀攀砀攀挀甀琀攀⠀怀最洀⸀␀爀攀昀猀⸀愀甀琀栀⸀␀爀攀昀猀⸀瀀愀渀攀氀⸀␀爀攀昀猀⸀氀漀最椀渀⸀昀漀甀渀搀唀猀攀爀渀愀洀攀猀 㴀 ␀笀搀愀琀愀紀怀⤀㬀ഀഀ
    }, 500);਍ഀഀ
});਍ഀഀ
mp.events.add('autologinToServer', (username) => {਍    匀攀爀瘀攀爀唀䤀⸀攀砀攀挀甀琀攀⠀怀最洀⸀␀爀攀昀猀⸀愀甀琀栀⸀␀爀攀昀猀⸀瀀愀渀攀氀⸀愀甀琀栀䰀漀愀搀椀渀最 㴀 琀爀甀攀㬀怀⤀㬀ഀഀ
    mp.events.callRemote("OnAutoLoginAttempt", username);਍紀⤀㬀ഀഀ
਍洀瀀⸀攀瘀攀渀琀猀⸀愀搀搀⠀✀爀攀焀甀攀猀琀䘀漀爀最漀琀唀猀攀爀渀愀洀攀匀攀爀瘀攀爀✀Ⰰ ⠀⤀ 㴀㸀 笀ഀഀ
    mp.events.callRemote("OnRequestForgotUsername");਍紀⤀㬀ഀഀ
਍ഀഀ
// When 'E' key is held down, open the menu਍昀甀渀挀琀椀漀渀 愀挀琀椀漀渀䴀攀渀甀伀瀀攀渀⠀⤀笀ഀഀ
    mp.events.callLocal("actionMenu:open"); ਍紀ഀഀ
// When 'E' key is let go, close the menu - toggleable though.਍昀甀渀挀琀椀漀渀 愀挀琀椀漀渀䴀攀渀甀䌀氀漀猀攀⠀⤀笀ഀഀ
    if(chatStatus == true || menuToggled == true || MDCActive == true || scoreboardToggled == true਍        簀簀 嘀攀栀椀挀氀攀匀瀀愀眀渀攀爀䄀挀琀椀瘀攀 㴀㴀 琀爀甀攀 簀簀 圀攀愀瀀漀渀䔀搀椀琀漀爀䄀挀琀椀瘀攀 㴀㴀 琀爀甀攀 簀簀 椀猀䠀漀琀眀椀爀椀渀最 㴀㴀 琀爀甀攀 簀簀 䌀氀漀琀栀椀渀最䔀搀椀琀漀爀䄀挀琀椀瘀攀 㴀㴀 琀爀甀攀⤀ 爀攀琀甀爀渀㬀ഀഀ
਍    洀瀀⸀攀瘀攀渀琀猀⸀挀愀氀氀䰀漀挀愀氀⠀∀愀挀琀椀漀渀䴀攀渀甀㨀挀氀漀猀攀∀⤀㬀 ഀഀ
}਍昀甀渀挀琀椀漀渀 吀漀最最氀攀䴀䐀䌀⠀⤀笀ഀഀ
    if(mp.players.local.getVariable("Team") != 1 || mp.players.local.getVariable("Wounded") > 0) return;਍    椀昀⠀洀攀渀甀吀漀最最氀攀搀 㴀㴀 琀爀甀攀 簀簀 挀栀愀琀匀琀愀琀甀猀 㴀㴀 琀爀甀攀 簀簀 䄀挀琀椀漀渀䴀攀渀甀䄀挀琀椀瘀攀 㴀㴀 琀爀甀攀 簀簀 椀猀䠀漀琀眀椀爀椀渀最 㴀㴀 琀爀甀攀 簀簀 䌀氀漀琀栀椀渀最䔀搀椀琀漀爀䄀挀琀椀瘀攀 㴀㴀 琀爀甀攀⤀ 爀攀琀甀爀渀㬀ഀഀ
਍    椀昀⠀猀挀漀爀攀戀漀愀爀搀吀漀最最氀攀搀⤀ഀഀ
    {਍        吀漀最最氀攀匀挀漀爀攀戀漀愀爀搀⠀⤀㬀ഀഀ
    }਍    䴀䐀䌀䄀挀琀椀瘀攀 㴀 ℀䴀䐀䌀䄀挀琀椀瘀攀㬀ഀഀ
    MDC_DOM.active = MDCActive;਍ഀഀ
    if(MDCActive){਍        洀瀀⸀攀瘀攀渀琀猀⸀挀愀氀氀䰀漀挀愀氀⠀∀䴀䐀䌀㨀唀瀀搀愀琀攀䴀椀渀椀猀挀爀攀攀渀∀Ⰰ ∀渀愀洀攀∀Ⰰ 洀瀀⸀瀀氀愀礀攀爀猀⸀氀漀挀愀氀⸀渀愀洀攀⤀㬀ഀഀ
    }਍    ഀഀ
}਍洀瀀⸀攀瘀攀渀琀猀⸀愀搀搀⠀∀栀椀搀攀䴀䐀䌀∀Ⰰ ⠀⤀ 㴀㸀 笀ഀഀ
    if(MDC_DOM == null) return;਍    䴀䐀䌀䄀挀琀椀瘀攀 㴀 昀愀氀猀攀㬀ഀഀ
    MDC_DOM.active = false;਍紀⤀㬀ഀഀ
਍洀瀀⸀攀瘀攀渀琀猀⸀愀搀搀⠀∀氀漀最椀渀开匀琀漀瀀䴀甀猀椀挀∀Ⰰ ⠀⤀ 㴀㸀 笀ഀഀ
    ServerUI.execute(`gm.$refs.auth.$refs.panel.stop();`);਍紀⤀㬀ഀഀ
਍ഀഀ
// haha hex no export਍挀漀渀猀琀 眀攀愀瀀漀渀䐀愀琀愀 㴀 嬀ഀഀ
    {਍      ∀椀搀∀㨀 ∀眀攀愀瀀漀渀开搀愀最最攀爀∀Ⰰഀഀ
      "Name": "Antique Cavalry Dagger",਍      ∀吀礀瀀攀∀㨀 ∀䴀攀氀攀攀∀Ⰰഀഀ
      "ImageSrc": "https://assets.gm.miami/gtav/weapons/Antique-cavalry-dagger-icon.png",਍      ∀䠀愀猀栀∀㨀 ∀　砀㤀㈀䄀㈀㜀㐀㠀㜀∀ഀഀ
    },਍    笀ഀഀ
      "id": "weapon_bat",਍      ∀一愀洀攀∀㨀 ∀䈀愀猀攀戀愀氀氀 䈀愀琀∀Ⰰഀഀ
      "Type": "Melee",਍      ∀䤀洀愀最攀匀爀挀∀㨀 ∀栀琀琀瀀猀㨀⼀⼀愀猀猀攀琀猀⸀最洀⸀洀椀愀洀椀⼀最琀愀瘀⼀眀攀愀瀀漀渀猀⼀䈀愀猀攀戀愀氀氀ⴀ戀愀琀ⴀ椀挀漀渀⸀瀀渀最∀Ⰰഀഀ
      "Hash": "0x958A4A8F"਍    紀Ⰰഀഀ
    {਍      ∀椀搀∀㨀 ∀眀攀愀瀀漀渀开戀漀琀琀氀攀∀Ⰰഀഀ
      "Name": "Broken Bottle",਍      ∀吀礀瀀攀∀㨀 ∀䴀攀氀攀攀∀Ⰰഀഀ
      "ImageSrc": "https://assets.gm.miami/gtav/weapons/Broken-bottle-icon.png",਍      ∀䠀愀猀栀∀㨀 ∀　砀䘀㤀䔀㘀䄀䄀㐀䈀∀ഀഀ
    },਍    笀ഀഀ
      "id": "weapon_crowbar",਍      ∀一愀洀攀∀㨀 ∀䌀爀漀眀戀愀爀∀Ⰰഀഀ
      "Type": "Melee",਍      ∀䤀洀愀最攀匀爀挀∀㨀 ∀栀琀琀瀀猀㨀⼀⼀愀猀猀攀琀猀⸀最洀⸀洀椀愀洀椀⼀最琀愀瘀⼀眀攀愀瀀漀渀猀⼀䌀爀漀眀戀愀爀ⴀ椀挀漀渀⸀瀀渀最∀Ⰰഀഀ
      "Hash": "0x84BD7BFD"਍    紀Ⰰഀഀ
    {਍      ∀椀搀∀㨀 ∀眀攀愀瀀漀渀开甀渀愀爀洀攀搀∀Ⰰഀഀ
      "Name": "Fist",਍      ∀吀礀瀀攀∀㨀 ∀䴀攀氀攀攀∀Ⰰഀഀ
      "ImageSrc": "https://assets.gm.miami/gtav/weapons/Fist-icon.png",਍      ∀䠀愀猀栀∀㨀 ∀　砀䄀㈀㜀㄀㤀㈀㘀㌀∀ഀഀ
    },਍    笀ഀഀ
      "id": "weapon_flashlight",਍      ∀一愀洀攀∀㨀 ∀䘀氀愀猀栀氀椀最栀琀∀Ⰰഀഀ
      "Type": "Melee",਍      ∀䤀洀愀最攀匀爀挀∀㨀 ∀栀琀琀瀀猀㨀⼀⼀愀猀猀攀琀猀⸀最洀⸀洀椀愀洀椀⼀最琀愀瘀⼀眀攀愀瀀漀渀猀⼀䘀氀愀猀栀氀椀最栀琀ⴀ椀挀漀渀⸀瀀渀最∀Ⰰഀഀ
      "Hash": "0x8BB05FD7"਍    紀Ⰰഀഀ
    {਍      ∀椀搀∀㨀 ∀眀攀愀瀀漀渀开最漀氀昀挀氀甀戀∀Ⰰഀഀ
      "Name": "Golf Club",਍      ∀吀礀瀀攀∀㨀 ∀䴀攀氀攀攀∀Ⰰഀഀ
      "ImageSrc": "https://assets.gm.miami/gtav/weapons/Golf-club-icon.png",਍      ∀䠀愀猀栀∀㨀 ∀　砀㐀㐀　䔀㐀㜀㠀㠀∀ഀഀ
    },਍    笀ഀഀ
      "id": "weapon_hammer",਍      ∀一愀洀攀∀㨀 ∀䠀愀洀洀攀爀∀Ⰰഀഀ
      "Type": "Melee",਍      ∀䤀洀愀最攀匀爀挀∀㨀 ∀栀琀琀瀀猀㨀⼀⼀愀猀猀攀琀猀⸀最洀⸀洀椀愀洀椀⼀最琀愀瘀⼀眀攀愀瀀漀渀猀⼀䠀愀洀洀攀爀ⴀ椀挀漀渀⸀瀀渀最∀Ⰰഀഀ
      "Hash": "0x4E875F73"਍    紀Ⰰഀഀ
    {਍      ∀椀搀∀㨀 ∀眀攀愀瀀漀渀开栀愀琀挀栀攀琀∀Ⰰഀഀ
      "Name": "Hatchet",਍      ∀吀礀瀀攀∀㨀 ∀䴀攀氀攀攀∀Ⰰഀഀ
      "ImageSrc": "https://assets.gm.miami/gtav/weapons/Hatchet-icon.png",਍      ∀䠀愀猀栀∀㨀 ∀　砀䘀㤀䐀䌀䈀䘀㈀䐀∀ഀഀ
    },਍    笀ഀഀ
      "id": "weapon_knuckle",਍      ∀一愀洀攀∀㨀 ∀䈀爀愀猀猀 䬀渀甀挀欀氀攀猀∀Ⰰഀഀ
      "Type": "Melee",਍      ∀䤀洀愀最攀匀爀挀∀㨀 ∀栀琀琀瀀猀㨀⼀⼀愀猀猀攀琀猀⸀最洀⸀洀椀愀洀椀⼀最琀愀瘀⼀眀攀愀瀀漀渀猀⼀䬀渀甀挀欀氀攀猀ⴀ椀挀漀渀⸀瀀渀最∀Ⰰഀഀ
      "Hash": "0xD8DF3C3C"਍    紀Ⰰഀഀ
    {਍      ∀椀搀∀㨀 ∀眀攀愀瀀漀渀开欀渀椀昀攀∀Ⰰഀഀ
      "Name": "Knife",਍      ∀吀礀瀀攀∀㨀 ∀䴀攀氀攀攀∀Ⰰഀഀ
      "ImageSrc": "https://assets.gm.miami/gtav/weapons/Knife-icon.png",਍      ∀䠀愀猀栀∀㨀 ∀　砀㤀㤀䈀㔀　㜀䔀䄀∀ഀഀ
    },਍    笀ഀഀ
      "id": "weapon_machete",਍      ∀一愀洀攀∀㨀 ∀䴀愀挀栀攀琀攀∀Ⰰഀഀ
      "Type": "Melee",਍      ∀䤀洀愀最攀匀爀挀∀㨀 ∀栀琀琀瀀猀㨀⼀⼀愀猀猀攀琀猀⸀最洀⸀洀椀愀洀椀⼀最琀愀瘀⼀眀攀愀瀀漀渀猀⼀䴀愀挀栀攀琀攀ⴀ椀挀漀渀⸀瀀渀最∀Ⰰഀഀ
      "Hash": "0xDD5DF8D9"਍    紀Ⰰഀഀ
    {਍      ∀椀搀∀㨀 ∀眀攀愀瀀漀渀开猀眀椀琀挀栀戀氀愀搀攀∀Ⰰഀഀ
      "Name": "Switchblade",਍      ∀吀礀瀀攀∀㨀 ∀䴀攀氀攀攀∀Ⰰഀഀ
      "ImageSrc": "https://assets.gm.miami/gtav/weapons/Switch-blade-icon.png",਍      ∀䠀愀猀栀∀㨀 ∀　砀䐀䘀䔀㌀㜀㘀㐀　∀ഀഀ
    },਍    笀ഀഀ
      "id": "weapon_nightstick",਍      ∀一愀洀攀∀㨀 ∀一椀最栀琀猀琀椀挀欀∀Ⰰഀഀ
      "Type": "Melee",਍      ∀䤀洀愀最攀匀爀挀∀㨀 ∀栀琀琀瀀猀㨀⼀⼀愀猀猀攀琀猀⸀最洀⸀洀椀愀洀椀⼀最琀愀瘀⼀眀攀愀瀀漀渀猀⼀一椀最栀琀猀琀椀挀欀ⴀ椀挀漀渀⸀瀀渀最∀Ⰰഀഀ
      "Hash": "0x678B81B1"਍    紀Ⰰഀഀ
    {਍      ∀椀搀∀㨀 ∀眀攀愀瀀漀渀开眀爀攀渀挀栀∀Ⰰഀഀ
      "Name": "Pipe Wrench",਍      ∀吀礀瀀攀∀㨀 ∀䴀攀氀攀攀∀Ⰰഀഀ
      "ImageSrc": "https://assets.gm.miami/gtav/weapons/Pipe-wrench-icon.png",਍      ∀䠀愀猀栀∀㨀 ∀　砀㄀㤀　㐀㐀䔀䔀　∀ഀഀ
    },਍    笀ഀഀ
      "id": "weapon_battleaxe",਍      ∀一愀洀攀∀㨀 ∀䈀愀琀琀氀攀 䄀砀攀∀Ⰰഀഀ
      "Type": "Melee",਍      ∀䤀洀愀最攀匀爀挀∀㨀 ∀栀琀琀瀀猀㨀⼀⼀愀猀猀攀琀猀⸀最洀⸀洀椀愀洀椀⼀最琀愀瘀⼀眀攀愀瀀漀渀猀⼀䈀愀琀琀氀攀ⴀ愀砀攀ⴀ椀挀漀渀⸀瀀渀最∀Ⰰഀഀ
      "Hash": "0xCD274149"਍    紀Ⰰഀഀ
    {਍      ∀椀搀∀㨀 ∀眀攀愀瀀漀渀开瀀漀漀氀挀甀攀∀Ⰰഀഀ
      "Name": "Pool Cue",਍      ∀吀礀瀀攀∀㨀 ∀䴀攀氀攀攀∀Ⰰഀഀ
      "ImageSrc": "https://assets.gm.miami/gtav/weapons/Pool-cue-icon.png",਍      ∀䠀愀猀栀∀㨀 ∀　砀㤀㐀㄀㄀㜀㌀　㔀∀ഀഀ
    },਍    笀ഀഀ
      "id": "weapon_stone_hatchet",਍      ∀一愀洀攀∀㨀 ∀匀琀漀渀攀 䠀愀琀挀栀攀琀∀Ⰰഀഀ
      "Type": "Melee",਍      ∀䤀洀愀最攀匀爀挀∀㨀 ∀栀琀琀瀀猀㨀⼀⼀愀猀猀攀琀猀⸀最洀⸀洀椀愀洀椀⼀最琀愀瘀⼀眀攀愀瀀漀渀猀⼀匀琀漀渀攀ⴀ栀愀琀挀栀攀琀ⴀ椀挀漀渀⸀瀀渀最∀Ⰰഀഀ
      "Hash": "0x3813FC08"਍    紀Ⰰഀഀ
    {਍      ∀椀搀∀㨀 ∀眀攀愀瀀漀渀开瀀椀猀琀漀氀∀Ⰰഀഀ
      "Name": "Pistol",਍      ∀吀礀瀀攀∀㨀 ∀䠀愀渀搀最甀渀猀∀Ⰰഀഀ
      "ImageSrc": "https://assets.gm.miami/gtav/weapons/Pistol-icon.png",਍      ∀䠀愀猀栀∀㨀 ∀　砀㄀䈀　㘀䐀㔀㜀㄀∀ഀഀ
    },਍    笀ഀഀ
      "id": "weapon_pistol_mk2",਍      ∀一愀洀攀∀㨀 ∀倀椀猀琀漀氀 䴀欀 䤀䤀∀Ⰰഀഀ
      "Type": "Handguns",਍      ∀䤀洀愀最攀匀爀挀∀㨀 ∀栀琀琀瀀猀㨀⼀⼀愀猀猀攀琀猀⸀最洀⸀洀椀愀洀椀⼀最琀愀瘀⼀眀攀愀瀀漀渀猀⼀倀椀猀琀漀氀ⴀ洀