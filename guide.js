// 等級 46 屬性配裝指南（繁體中文）。
// 資料搜集於 2026-11-14（GameWith、Game8、Fextralife、巴哈姆特、Ludens 等）。
// 可信程度：ok＝兩個或以上來源一致；one＝單一來源；diff＝來源矛盾；none＝搵唔到資料（冇估）。
// 名稱寫法：遊戲繁中譯名有核實就直接用；未核實嘅寫成「中文〔暫譯：英文原名〕」，畫面會標「暫譯」。
(function () {
  'use strict';

  const SRC = {
    g8bow: ['Game8 弓', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/635378'],
    g8cb: ['Game8 充能斧', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/634645'],
    g8db: ['Game8 雙劍', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/634604'],
    g8hbg: ['Game8 重弩', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/618476'],
    g8ham: ['Game8 大錘', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/635685'],
    g8ls: ['Game8 太刀', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/618475'],
    g8anja: ['Game8 蠻顎龍套裝', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/636202'],
    g8ember: ['Game8 蠻顎龍套裝效果', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/637238'],
    g8rath: ['Game8 火龍套裝', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/636227'],
    g8pink: ['Game8 櫻火龍套裝', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/636428'],
    g8ryu: ['Game8 御谷龍之介', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/635035'],
    g8sbb: ['Game8 練氣技能', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/636336'],
    g8rathDrop: ['Game8 火龍掉落', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/635396'],
    fxAnja: ['Fextralife 蠻顎龍套裝Ⅰ', 'https://monsterhunteroutlanders.wiki.fextralife.com/Anjanath_Set_I'],
    fxOdo: ['Fextralife 防具頁（Odogaron Set III）', 'https://monsterhunteroutlanders.wiki.fextralife.com/Odogaron_Set_III'],
    fxItems: ['Fextralife 道具', 'https://monsterhunteroutlanders.wiki.fextralife.com/Items'],
    fxShop: ['Fextralife 商店', 'https://monsterhunteroutlanders.wiki.fextralife.com/Shop'],
    gwRath: ['GameWith 火龍套裝', 'https://gamewith.ai/monster-hunter-outlanders/en/armor/rathalos'],
    gwJyura: ['GameWith 防具頁（Jyuratodus）', 'https://gamewith.ai/monster-hunter-outlanders/en/armor/jyuratodus'],
    gwLimit: ['GameWith 升級上限', 'https://gamewith.ai/monster-hunter-outlanders/en/articles/upgrade-limit-and-dismantle'],
    gwCraft: ['GameWith 武器製作', 'https://gamewith.ai/monster-hunter-outlanders/en/articles/weapon-crafting-guide'],
    gwKB: ['GameWith 防具頁（King Beetle）', 'https://gamewith.ai/monster-hunter-outlanders/en/armor/king-beetle'],
    gwRGJ: ['GameWith 融光種大凶豺龍套裝', 'https://gamewith.ai/monster-hunter-outlanders/en/armor/radiant-great-jagras'],
    gwPukei: ['GameWith 防具頁（Radiant Pukei Hood）', 'https://gamewith.ai/monster-hunter-outlanders/en/armor/radiant-pukei-pukei/head'],
    gwRHB: ['GameWith 櫻火龍腕甲', 'https://gamewith.ai/monster-hunter-outlanders/en/armor/pink-rathian/arms'],
    gwls: ['GameWith 太刀', 'https://gamewith.ai/monster-hunter-outlanders/en/articles/best-long-sword-builds'],
    gwBest: ['GameWith 全武器配裝', 'https://gamewith.ai/monster-hunter-outlanders/en/articles/best-builds'],
    gwMidori: ['GameWith 彌多律', 'https://gamewith.ai/monster-hunter-outlanders/en/adventurers/midori'],
    gwArmor: ['GameWith 防具表', 'https://gamewith.ai/monster-hunter-outlanders/en/armor'],
    gwWBB: ['GameWith 火龍太刀', 'https://gamewith.ai/monster-hunter-outlanders/en/weapons/wyvern-blade-blood'],
    gwRS4: ['GameWith 火龍的鱗Ⅳ', 'https://gamewith.ai/monster-hunter-outlanders/en/items/rathalos-scale-4'],
    gwZhRR: ['GameWith 繁中 融光種雌火龍套裝', 'https://gamewith.ai/monster-hunter-outlanders/zh-hant/armor/radiant-rathian'],
    gwZhAnja: ['GameWith 繁中 蠻顎龍偃月刀', 'https://gamewith.ai/monster-hunter-outlanders/zh-hant/weapons/anja-scimitar'],
    gwZhGirros: ['GameWith 繁中 大凶顎龍套裝', 'https://gamewith.ai/monster-hunter-outlanders/zh-hant/armor/great-girros'],
    bahaMidori: ['巴哈姆特 彌多律教學（1.0.1）', 'https://forum.gamer.com.tw/C.php?bsn=81450&snA=642'],
    ludMats: ['Ludens 素材取得一覽', 'https://www.ludens.com.tw/monster-hunter-outlanders-monster-materials/'],
    ludRuger: ['Ludens 光稜龍攻略', 'https://www.ludens.com.tw/monster-hunter-outlanders-ruger-aidal/'],
    pigAnja: ['piglife 蠻顎龍的鱗Ⅳ', 'https://piglife.tw/monster-hunter-outlanders/items/640071/'],
    ldMidori: ['LDPlayer 彌多律攻略', 'https://www.ldplayer.tw/blog/monster-hunter-outlanders-midori-guide.html'],
    qbnews: ['QBNews 新手指南', 'https://www.qbnews.tw/monster-hunter-outlanders-beginner-tips/'],
    g8midori: ['Game8 彌多律', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/602026'],
    g8dawn: ['Game8 光稜火太刀', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/637150'],
    g8apex: ['Game8 主宰武器一覽', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/636621'],
    gwApex: ['GameWith 主宰武器', 'https://gamewith.ai/monster-hunter-outlanders/en/articles/apex-weapons'],
    gwTeam: ['GameWith 隊伍', 'https://gamewith.ai/monster-hunter-outlanders/en/articles/best-team'],
    bahaMidori2: ['巴哈姆特 彌多律心得', 'https://forum.gamer.com.tw/C.php?bsn=81450&snA=278'],
    ldBuddy: ['LDPlayer 隨從強度榜', 'https://www.ldplayer.tw/blog/monster-hunter-outlanders-buddy-tier-list.html'],
    ldTeam: ['LDPlayer 陣容懶人包', 'https://www.ldplayer.tw/blog/monster-hunter-outlanders-team-guide.html'],
    ldTier: ['LDPlayer 角色強度排行', 'https://www.ldplayer.tw/blog/monster-hunter-outlanders-adventurers-tier-list.html'],
    ytCombo: ['YouTube 彌多律小教室', 'https://www.youtube.com/shorts/kTNeL_p55dA'],
  };

  const AR = { level: 46, cap: 10, conf: 'one', src: ['gwCraft', 'gwLimit', 'qbnews'],
    note: '冒險等級 44 解鎖稀有度 10、47 解鎖稀有度 11，所以 46 級嘅升級上限係稀有度 10。「44 級→稀有度 10」只得 GameWith 一個來源。' };

  const DU = '火屬性傷害提升〔暫譯：Fire Damage Up〕';
  const SBB = '練氣增傷技能〔暫譯：Spirit Bind Blade〕';

  // 彌多律專用（火屬性太刀、SSR 進擊型）
  const MIDORI = {
    title: '🌸 彌多律 · 火屬性太刀',
    role: { text: 'SSR 進擊型、全火特化：用其他屬性太刀傷害出唔到。多數攻略列為 T0；弱點係缺少對空招式，打飛行魔物輸出會打折扣', conf: 'ok', src: ['bahaMidori2', 'ldTier', 'ldMidori'] },
    weapon: [
      { text: '首選：光稜火太刀〔暫譯：Dawnlit Joyeuse〕＝光稜龍主宰武器（打造時揀火屬性）。火屬性版本嘅屬性值同物理值係所有火太刀之中最高', conf: 'ok', src: ['g8midori', 'g8dawn', 'bahaMidori', 'gwApex'] },
      { text: '解鎖條件：冒險等級 40 ＋ 完成主線任務〔暫譯：Sound the Horn Here〕，之後喺主宰挑戰打光稜龍。你 46 級已經夠', conf: 'one', src: ['g8dawn'] },
      { text: '打造素材：融光結晶〔暫譯：Radiant Crystal〕×12 ＋ 融光寶玉〔暫譯：Radiant Gem〕×1。普通同主宰難度首次通關各送一粒寶玉', conf: 'one', src: ['g8dawn'] },
      { text: '注意：主宰武器可能只係喺主宰挑戰、魔物挑戰同限時野外挑戰先發揮全力，平時狩獵未必最強，所以火龍太刀Ⅳ都值得做', conf: 'one', src: ['gwApex'], note: '呢點係另一個網站轉述 GameWith 嘅講法，未直接睇到原文。' },
    ],
    visage: [
      { text: '繪影套裝：「灼焰」湊 4 件。2 件：火屬性傷害 +5%；4 件：命中弱點後自身火屬性傷害 +24%，持續 20 秒。太刀段數多，4 件效果幾乎常駐', conf: 'ok', src: ['g8midori', 'ldMidori', 'bahaMidori'] },
      { text: '核心繪影：融光種雌火龍（首選）；巴哈姆特攻略亦推薦光稜龍', conf: 'ok', src: ['g8midori', 'bahaMidori'] },
    ],
    buddy: { text: '隨從：小次郎（彌多律專屬搭配，觸發裂破時提升火屬性同傷害）', conf: 'ok', src: ['g8midori', 'gwMidori', 'ldBuddy'] },
    team: [
      { text: '隊友：菈雅（火屬性控場、減益）＋ 御谷龍之介（火屬性支援、全隊火傷增益）＋ 光赫（控場、閃光）', conf: 'ok', src: ['g8midori', 'bahaMidori'] },
      { text: '另一個配法：彌多律 ＋ 主角（拎火屬性武器）＋ 御谷龍之介 ＋ 菈雅，全火隊', conf: 'one', src: ['ldTeam'], note: '主角係全屬性專精，拎火屬性武器就會啟用加成。' },
    ],
    insight: [
      { text: '命座 1：單人揀「剎那餘音」（完美閃避判定放大，擦邊都觸發，之後招式二可以取消前搖）；組隊要控場或者拚傷害揀「清音不息」', conf: 'ok', src: ['bahaMidori', 'bahaMidori2'] },
      { text: '命座 2：「楓時雅致」（招式二或者完美閃避命中可以疊傷害）；命座 3：「楓時殘響」（用雅致嘅疊傷強化招式三）', conf: 'one', src: ['bahaMidori2'] },
      { text: '3 命參考搭配：單人＝剎那餘音＋清音不息＋楓時雅致；極限輸出＝清音不息＋楓時雅致＋楓時殘響。命座可以隨時重置', conf: 'one', src: ['bahaMidori'] },
    ],
    combo: [
      { text: '開場快速紅刃：長按招式一（氣刃大迴旋）→ 閃吼 → 普攻三下（無雙氣刃斬）→ 招式二（櫻花氣刃斬）', conf: 'one', src: ['ytCombo', 'bahaMidori'] },
      { text: '基本循環：普攻或閃避反擊補滿練氣 → 招式二升階到黃刃、紅刃 → 有空檔用招式一集氣斬補傷害 → 魔物倒地或者暈嗰陣用招式三爆發收尾', conf: 'one', src: ['ldMidori'] },
    ],
    armorNote: { text: '防具：用下面嗰套火屬性太刀 5 件（出自巴哈姆特彌多律專用攻略）', conf: 'ok', src: ['bahaMidori'],
      note: 'Game8 另外建議：打融光種用火屬性配裝；打普通魔物可以考慮居合拔刀〔暫譯：Flash Draw〕配裝。GameWith 嘅彌多律配裝就主打反擊強化〔暫譯：Counter Boost〕＋ 練氣增傷技能。' },
  };

  // 火屬性太刀・冒險等級 46（稀有度 10）。名稱帶「Ⅳ」嘅係稀有度 10 階段。
  const LS_FIRE = {
    title: '🔥 防具配裝 · 冒險等級 46（稀有度 10）',
    skills: { text: `目標技能：${DU} Lv7 ＋ ${SBB} Lv4，另加防彈刀技能〔暫譯：Instinct〕`, conf: 'ok', src: ['gwls', 'g8ls', 'bahaMidori'],
      note: '巴哈姆特攻略：目前版本屬性強化收益好高，建議優先將火屬性強化疊滿。' },
    du: { text: `${DU} Lv7（滿級）：屬性攻擊 +50、火屬性傷害 +28%（對融光種 +70%）`, conf: 'ok', src: ['g8hbg', 'g8db', 'g8bow'] },
    sbb: { text: `${SBB} Lv4：練氣計量表升階後短時間內，傷害 +16%、屬性攻擊 +25`, conf: 'one', src: ['g8sbb'] },
    weapon: {
      name: '首選：光稜火太刀（光稜龍主宰武器，詳情見上面彌多律部分）',
      conf: 'ok', src: ['bahaMidori', 'ludRuger', 'g8ls'],
      note: '主宰武器可以自選火、水、雷、冰、龍其中一種屬性打造。',
      alt: '冇主宰武器就用：火龍太刀Ⅳ〔暫譯：Wyvern Blade "Blood" IV〕（由火龍太刀Ⅱ〔暫譯：Wyvern Blade "Fall" II〕升到稀有度 10）',
      altConf: 'ok', altSrc: ['g8ls', 'gwMidori', 'bahaMidori'],
      altNote: 'Game8：可以鍛造同升級嘅最強火太刀。巴哈姆特攻略推薦嘅武器同樣係「光稜火太刀」同「火龍太刀」。',
      steps: [
        { r: '稀有度 9', mats: '狩玉Ⅳ ×2、火龍的鱗Ⅲ ×3、火龍的甲殼Ⅲ ×3', conf: 'one', src: ['gwWBB'] },
        { r: '稀有度 10', mats: '火龍的鱗Ⅳ ×3（其餘素材搵唔到）', conf: 'one', src: ['gwRS4'] },
      ],
    },
    pieces: [
      { part: '頭', name: '櫻火龍頭盔Ⅳ〔暫譯：Rath Heart Helm IV〕', from: '櫻火龍', skill: DU, conf: 'ok', src: ['bahaMidori', 'gwBest', 'g8ryu'],
        steps: [
          { r: '稀有度 10', mats: '狩玉Ⅳ ×2、櫻火龍的堅殼Ⅳ ×3、櫻火龍的上鱗Ⅳ ×3、雌火龍的紅玉Ⅳ〔暫譯：Rathian Plate IV〕 ×3', conf: 'one', src: ['g8pink'],
            note: 'Game8 標題寫「鍛造素材」，冇寫明係邊一級，但同稀有度 10 嘅規律吻合。' },
        ] },
      { part: '身', name: '火龍鎧甲Ⅳ〔暫譯：Rathalos Mail IV〕', from: '火龍', skill: `${DU} Lv3（稀有度 10）`, conf: 'ok', src: ['bahaMidori', 'gwBest', 'g8ryu', 'gwRath'],
        steps: [
          { r: '稀有度 6 製作', mats: '狩玉Ⅱ ×1、火龍的甲殼Ⅱ ×2（Game8 另加 火龍的鱗Ⅱ ×2）', conf: 'diff', src: ['gwRath', 'g8rath'] },
          { r: '稀有度 7', mats: '狩玉Ⅲ ×2、火龍的鱗Ⅱ ×3、火龍的甲殼Ⅱ ×3', conf: 'one', src: ['gwRath'], note: 'GameWith 頁面標題重複，未能 100% 確定呢個表係身甲。' },
          { r: '稀有度 8', mats: null, conf: 'none', src: [] },
          { r: '稀有度 9', mats: null, conf: 'none', src: [] },
          { r: '稀有度 10', mats: '狩玉Ⅳ ×2、火龍的鱗Ⅳ ×3、火龍的甲殼Ⅳ ×3', conf: 'one', src: ['gwRath'] },
        ] },
      { part: '手', name: '大凶豺龍腕甲Ⅳ〔暫譯：Jagras Vambraces IV〕', from: '大凶豺龍', skill: `${SBB} Lv2、威懾〔暫譯：Deterrence〕 Lv1`, conf: 'ok', src: ['bahaMidori', 'gwBest', 'gwArmor'],
        steps: [] },
      { part: '腰', name: '蠻顎龍腰甲Ⅳ〔暫譯：Anja Coil IV〕', from: '蠻顎龍', skill: DU, conf: 'ok', src: ['bahaMidori', 'gwBest', 'fxAnja'],
        steps: [
          { r: '稀有度 3 製作', mats: '狩玉Ⅰ ×1、蠻顎龍的鱗Ⅰ ×1、蠻顎龍的牙Ⅰ ×1、蠻顎龍的鼻骨Ⅰ〔暫譯：Nosebone〕 ×1、蠻顎龍的尾巴Ⅰ ×1', conf: 'ok', src: ['fxAnja', 'g8anja'] },
          { r: '稀有度 4–10', mats: null, conf: 'none', src: [] },
        ] },
      { part: '腿', name: '櫻火龍護腿Ⅳ〔暫譯：Rath Heart Greaves IV〕', from: '櫻火龍', skill: '技能未核實', conf: 'ok', src: ['bahaMidori', 'gwBest'],
        steps: [] },
    ],
    early: { text: '未解鎖櫻火龍之前嘅過渡配裝：頭、身用火龍；手、腰、腿用蠻顎龍', conf: 'one', src: ['bahaMidori'] },
    caveats: [
      { text: '呢套 5 件嘅部位分配，巴哈姆特繁中攻略（頭櫻火龍、身火龍、手大凶豺龍、腰蠻顎龍、腿櫻火龍）同 GameWith 英文版完全一致，頭同身亦同 Game8 御谷龍之介火太刀一致。', conf: 'ok', src: ['bahaMidori', 'gwBest', 'g8ryu'] },
      { text: `${SBB} 已知只有大凶豺龍腕甲提供 Lv2，其餘 2 級喺邊件搵唔到資料。`, conf: 'none', src: ['gwArmor'] },
    ],
    visage: { text: '繪影建議：「灼焰」套裝。2 件：火屬性傷害 +5%；4 件：命中弱點後自身火屬性傷害 +24%，持續 20 秒。太刀段數多，4 件效果幾乎可以常駐', conf: 'one', src: ['ldMidori'] },
    drops: [
      { text: '火龍嘅素材等級：魔物 ★8–9 掉Ⅱ、★10–11 掉Ⅲ、★12–13 掉Ⅳ', conf: 'ok', src: ['ludMats', 'g8rathDrop'] },
      { text: '櫻火龍嘅素材等級：魔物 ★11–13 掉Ⅳ。櫻火龍的上鱗可以剝取、捕獲或者做任務報酬；櫻火龍的堅殼要捕獲，或者破壞身體同頭部', conf: 'ok', src: ['ludMats'] },
      { text: '蠻顎龍嘅素材等級：魔物 ★12–13 掉Ⅳ；破壞後腳一定掉蠻顎龍的鱗Ⅳ', conf: 'ok', src: ['ludMats', 'pigAnja'] },
      { text: '大凶豺龍嘅素材等級：魔物 ★11–12 掉Ⅳ', conf: 'one', src: ['ludMats'] },
    ],
    jadeEstimate: '推算：假設每件都跟另外兩套防具〔暫譯：King Beetle、Radiant Pukei-Pukei〕嘅規律（稀有度 9、10 各要狩玉Ⅳ ×2），5 件防具由稀有度 8 升到 10 共要 20 粒狩玉Ⅳ，加武器稀有度 9 嗰 2 粒，總共 22 粒。研究點數〔暫譯：Research Points〕商店 400 點換 3 粒、每週限 8 次（最多 24 粒），即大約換 8 次、用 3,200 點。武器升稀有度 10 要幾多狩玉未有資料。',
  };

  const MAX_EFFECT = { text: '各屬性傷害提升技能 Lv7（滿級）：屬性攻擊 +50、屬性傷害 +28%（對融光種 +70%）', conf: 'ok', src: ['g8hbg', 'g8db', 'g8bow'] };

  const ELEMENTS = [
    {
      id: 'fire', icon: '🔥', name: '火', skill: DU,
      core: { text: `蠻顎龍腕甲／腰甲／護腿 ＋ 頭盔（櫻火龍或火龍）＋ 火龍鎧甲 → ${DU} Lv7`, conf: 'diff', src: ['g8bow', 'g8cb', 'g8db', 'g8hbg'],
        note: '頭盔來源唔一致：Game8 重弩攻略寫火龍頭盔，弓攻略寫櫻火龍頭盔。太刀專用配裝見上面。' },
      pieces: [
        { part: '頭', name: '櫻火龍頭盔〔暫譯：Rath Heart Helm〕或火龍頭盔', conf: 'diff', src: ['g8bow', 'g8hbg', 'g8cb'] },
        { part: '身', name: `火龍鎧甲：稀有度 10 有 ${DU} Lv3`, conf: 'diff', src: ['gwRath', 'g8rath'],
          note: 'GameWith 寫稀有度 6–9 係 Lv2、10 係 Lv3；Game8 寫稀有度 6–8 係 Lv1。' },
        { part: '手', name: '蠻顎龍腕甲〔暫譯：Anja Vambraces〕', conf: 'ok', src: ['g8anja', 'fxAnja'] },
        { part: '腰', name: `蠻顎龍腰甲〔暫譯：Anja Coil〕（${DU}）`, conf: 'one', src: ['fxAnja'] },
        { part: '腿', name: `蠻顎龍護腿〔暫譯：Anja Greaves〕（${DU}）`, conf: 'one', src: ['fxAnja'] },
      ],
      setBonus: { text: `蠻顎龍套裝效果〔暫譯：Anjanath Ember〕：任何品質嘅 3 件 → ${DU} +1`, conf: 'ok', src: ['g8ember', 'g8cb'] },
      mats: [
        { item: '蠻顎龍腕甲／護腿（製作）', need: '狩玉Ⅰ、蠻顎龍的鱗Ⅰ、蠻顎龍的毛皮Ⅰ（數量未核實）', conf: 'ok', src: ['fxAnja', 'g8anja'] },
        { item: '蠻顎龍腰甲（製作）', need: '狩玉Ⅰ、蠻顎龍的鱗Ⅰ、蠻顎龍的牙Ⅰ、蠻顎龍的鼻骨Ⅰ〔暫譯：Nosebone〕、蠻顎龍的尾巴Ⅰ（數量未核實）', conf: 'ok', src: ['fxAnja', 'g8anja'] },
        { item: '火龍鎧甲（稀有度 6 製作）', need: '狩玉Ⅱ ×1、火龍的甲殼Ⅱ ×2（Game8 另加 火龍的鱗Ⅱ ×2）', conf: 'diff', src: ['gwRath', 'g8rath'] },
        { item: '櫻火龍腕甲〔暫譯：Rath Heart Braces〕（升稀有度 10）', need: '狩玉Ⅳ ×2、櫻火龍的上鱗Ⅳ ×3、雌火龍的翼膜Ⅳ〔暫譯：Rathian Webbing IV〕 ×3', conf: 'one', src: ['gwRHB'] },
      ],
    },
    {
      id: 'water', icon: '💧', name: '水', skill: '水屬性傷害提升〔暫譯：Water Damage Up〕',
      core: { text: '泥魚龍〔暫譯：Jyuratodus〕3 件（2 點；稀有度 5 起 3 點）＋ 融光種泥魚龍腕甲＋護腿（+2 點），其餘部位用眩鳥〔暫譯：Tzitzi-Ya-Ku〕或融光種土砂龍〔暫譯：Radiant Barroth〕補到 Lv7', conf: 'one', src: ['g8hbg', 'g8bow', 'g8cb'],
        note: '各攻略冇列出統一嘅 5 件清單。充能斧攻略建議眩鳥 ＋ 融光種泥魚龍。' },
      pieces: [
        { part: '手', name: '融光種泥魚龍腕甲〔暫譯：Radiant Jyura Vambraces〕', conf: 'one', src: ['g8hbg'] },
        { part: '腿', name: '融光種泥魚龍護腿〔暫譯：Radiant Jyura Greaves〕', conf: 'one', src: ['g8hbg'] },
        { part: '其餘 3 件', name: '泥魚龍套裝（邊 3 個部位未核實）', conf: 'none', src: ['gwJyura'] },
      ],
      setBonus: { text: '泥魚龍套裝效果〔暫譯：Jyuratodus Aquaguard〕：3 件 → 水屬性傷害提升 +1', conf: 'one', src: ['g8db', 'g8ham', 'g8bow', 'g8cb'] },
      mats: [],
    },
    {
      id: 'thunder', icon: '⚡', name: '雷', skill: '雷屬性傷害提升〔暫譯：Thunder Damage Up〕',
      core: { text: '大凶顎龍 ＋ 融光種大凶顎龍 → 稀有度 10 時雷屬性傷害提升 Lv7', conf: 'one', src: ['g8cb', 'gwZhGirros'],
        note: '其他攻略嘅配法：雙劍、大錘用融光種大凶顎龍 ＋ 鋼錠系列〔暫譯：Ingot〕；重弩用飛雷龍〔暫譯：Tobi-Kadachi〕＋ 融光種大凶顎龍。' },
      pieces: [
        { part: '過渡期', name: '飛雷龍頭盔Ⅱ、飛雷龍腰甲Ⅱ〔暫譯：Kadachi Helm II、Kadachi Coil II〕（冒險等級 22 打完飛雷龍之後）', conf: 'one', src: ['g8cb'] },
      ],
      setBonus: { text: '大凶顎龍套裝效果〔暫譯：Great Girros Ambush〕：3 件 → 雷屬性傷害提升 +1', conf: 'one', src: ['g8db', 'g8ham', 'g8bow', 'g8cb'] },
      mats: [],
    },
    {
      id: 'ice', icon: '❄️', name: '冰', skill: '冰屬性傷害提升〔暫譯：Ice Damage Up〕',
      core: { text: '鎖鏈系列〔暫譯：Chainmail〕＋ 風漂龍〔暫譯：Legiana〕＋ 高級金屬系列〔暫譯：High Metal〕→ 疊滿冰屬性傷害提升', conf: 'one', src: ['g8db', 'g8ham', 'g8bow', 'g8cb'],
        note: '攻略冇寫明用邊幾個部位。' },
      pieces: [],
      setBonus: null,
      mats: [],
    },
    {
      id: 'dragon', icon: '🐉', name: '龍', skill: '龍屬性傷害提升〔暫譯：Dragon Damage Up〕',
      core: { text: '骨系列〔暫譯：Bone〕＋ 角龍〔暫譯：Diablos〕＋ 甲蟲系列〔暫譯：Hornetaur〕→ 龍屬性傷害提升 Lv7', conf: 'one', src: ['g8bow'],
        note: '攻略冇寫明用邊幾個部位。' },
      pieces: [],
      setBonus: { text: '龍屬性套裝效果〔暫譯：Sepulcros Divinity〕：3 件 → 龍屬性傷害提升 +1', conf: 'one', src: ['g8db', 'g8ham', 'g8bow', 'g8cb'] },
      mats: [],
    },
  ];

  // 每件每升一級要嘅狩玉。另外仲要嗰隻魔物嘅素材，逐件唔同。
  const JADE = [
    { to: '稀有度 5–6', jade: '狩玉Ⅱ（稀有度 6：×1）', conf: 'one', src: ['gwPukei'] },
    { to: '稀有度 7', jade: '狩玉Ⅲ ×2', conf: 'ok', src: ['fxOdo', 'gwKB', 'gwRGJ'] },
    { to: '稀有度 8', jade: null, conf: 'none', src: [] },
    { to: '稀有度 9', jade: '狩玉Ⅳ ×2', conf: 'ok', src: ['gwPukei', 'gwKB'] },
    { to: '稀有度 10', jade: '狩玉Ⅳ ×2', conf: 'ok', src: ['gwKB', 'gwRHB'] },
  ];
  const JADE_SOURCES = [
    { text: '狩玉Ⅲ：自由狩獵〔暫譯：Free Hunt〕（難度Ⅲ）、野外狩獵〔暫譯：Field Hunt〕、研究點數商店（200 點換 3 粒，每週限 8 次）', conf: 'one', src: ['fxItems', 'fxShop'] },
    { text: '狩玉Ⅳ：研究點數商店（400 點換 3 粒，每週限 8 次）', conf: 'one', src: ['fxShop'] },
    { text: '「狩玉」呢個繁中譯名出自 GameWith 繁中版（例如蠻顎龍偃月刀稀有度 8 要狩玉Ⅲ ×2）', conf: 'ok', src: ['gwZhAnja', 'gwZhRR'] },
  ];

  const CONF = {
    ok: ['已核實', 'ok', '兩個或以上來源一致'],
    one: ['單一來源', 'one', '只得一個來源'],
    diff: ['來源矛盾', 'diff', '來源之間唔一致'],
    none: ['未有資料', 'none', '搵唔到資料，冇估'],
  };

  function el(tag, attrs, ...kids) {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v == null) continue;
      if (k === 'class') n.className = v;
      else if (k.startsWith('on')) n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v);
    }
    for (const c of kids.flat(Infinity)) if (c != null && c !== false) n.append(c.nodeType ? c : String(c));
    return n;
  }
  // 「中文〔暫譯：English〕」→ 中文 + 暫譯標籤 + 細字英文原名
  function rich(text) {
    if (text == null) return null;
    const out = [];
    const re = /〔暫譯：(.*?)〕/g;
    let last = 0, m;
    while ((m = re.exec(text))) {
      out.push(text.slice(last, m.index));
      out.push(el('span', { class: 'tr', title: '遊戲繁中譯名未核實，英文原名：' + m[1] }, '暫譯'),
        el('span', { class: 'en' }, m[1]));
      last = re.lastIndex;
    }
    out.push(text.slice(last));
    return out;
  }
  function badge(c) {
    const [label, cls, title] = CONF[c] || CONF.none;
    return el('span', { class: 'conf conf-' + cls, title }, label);
  }
  function srcLinks(keys) {
    if (!keys || !keys.length) return null;
    return el('span', { class: 'srcs' }, keys.map((k, i) => [i ? '、' : '', el('a', { href: SRC[k][1], target: '_blank', rel: 'noopener noreferrer' }, SRC[k][0])]));
  }
  function fact(f) {
    return el('div', { class: 'fact' },
      el('div', {}, badge(f.conf), ' ', rich(f.text || f.name)),
      f.note ? el('div', { class: 'small-text muted' }, rich(f.note)) : null,
      el('div', { class: 'small-text' }, srcLinks(f.src)));
  }

  function stepTable(steps) {
    if (!steps.length) return el('div', { class: 'small-text muted' }, badge('none'), ' 逐級素材搵唔到資料。');
    return el('table', { class: 'steps' }, el('tbody', {}, steps.map(st => el('tr', {},
      el('td', { class: 'part', style: 'width:72px' }, st.r),
      el('td', {}, badge(st.conf), ' ', st.mats ? rich(st.mats) : '搵唔到資料',
        st.note ? el('div', { class: 'small-text muted' }, rich(st.note)) : null,
        el('div', { class: 'small-text' }, srcLinks(st.src)))))));
  }

  function renderMidori() {
    const m = MIDORI;
    return el('div', { class: 'card result full' },
      el('h2', {}, m.title),
      fact(m.role),
      el('h3', {}, '武器'), m.weapon.map(fact),
      el('h3', {}, '防具'), fact(m.armorNote),
      el('h3', {}, '繪影'), m.visage.map(fact),
      el('h3', {}, '隨從'), fact(m.buddy),
      el('h3', {}, '隊伍'), m.team.map(fact),
      el('h3', {}, '命座（心得）'), m.insight.map(fact),
      el('h3', {}, '操作'), m.combo.map(fact),
    );
  }

  function renderBuild() {
    const b = LS_FIRE;
    const w = b.weapon;
    return el('div', { class: 'card result full' },
      el('h2', {}, b.title),
      fact(b.skills), fact(b.du), fact(b.sbb),
      el('h3', {}, '武器'),
      el('div', {}, badge(w.conf), ' ', el('b', {}, rich(w.name))),
      el('div', { class: 'small-text muted' }, rich(w.note)),
      el('div', { class: 'small-text' }, srcLinks(w.src)),
      el('div', { style: 'margin-top:8px' }, badge(w.altConf), ' ', el('b', {}, rich(w.alt))),
      el('div', { class: 'small-text muted' }, rich(w.altNote)),
      el('div', { class: 'small-text' }, srcLinks(w.altSrc)),
      stepTable(w.steps),
      el('h3', {}, '防具 5 件'),
      el('table', {}, el('tbody', {}, b.pieces.map(p => el('tr', {},
        el('td', { class: 'part' }, p.part),
        el('td', {}, badge(p.conf), ' ', el('b', {}, rich(p.name)),
          el('div', { class: 'small-text muted' }, p.from, ' · ', rich(p.skill)),
          el('div', { class: 'small-text' }, srcLinks(p.src))))))),
      b.caveats.map(fact),
      fact(b.early),
      el('h3', {}, '逐件逐級素材'),
      b.pieces.map(p => el('details', {},
        el('summary', {}, p.part, '：', rich(p.name)),
        stepTable(p.steps))),
      el('h3', {}, '素材喺邊度打'),
      b.drops.map(fact),
      el('h3', {}, '狩玉Ⅳ 總數'),
      el('div', { class: 'note', style: 'margin:0' }, el('span', { class: 'conf conf-none' }, '推算'), ' ', rich(b.jadeEstimate)),
    );
  }

  function render(root) {
    let current = 'fire';
    try { current = localStorage.getItem('mho-guide-el') || 'fire'; } catch { /* ignore */ }

    const head = el('div', { class: 'card' },
      el('h2', {}, `冒險等級 ${AR.level} · 升級上限稀有度 ${AR.cap}`),
      el('div', {}, badge(AR.conf), ' ', AR.note),
      el('div', { class: 'small-text' }, srcLinks(AR.src)),
      el('div', { class: 'note', style: 'margin-bottom:0' },
        '資料來自 2026-11-14 嘅網上搜尋，遊戲上線先兩星期，數值隨時會改。可信程度：',
        badge('ok'), ' ', badge('one'), ' ', badge('diff'), ' ', badge('none'),
        '。名稱標「', el('span', { class: 'tr' }, '暫譯'), '」嘅係遊戲繁中譯名未核實，後面細字係英文原名，請喺遊戲內對照。製作或升級之前，以遊戲內鍛造畫面為準。'),
    );

    const tabs = el('div', { class: 'el-tabs', role: 'tablist' });
    const body = el('div');
    function show(id) {
      current = id;
      try { localStorage.setItem('mho-guide-el', id); } catch { /* ignore */ }
      tabs.querySelectorAll('button').forEach(b => b.setAttribute('aria-selected', String(b.dataset.id === id)));
      const e = ELEMENTS.find(x => x.id === id);
      body.replaceChildren(
        el('div', { class: 'card' },
          el('h2', {}, e.icon, ' ', e.name, '屬性 · ', rich(e.skill)),
          fact(MAX_EFFECT),
          el('h3', {}, '核心配法'), fact(e.core),
          el('h3', {}, '部位'),
          e.pieces.length
            ? el('table', {}, el('tbody', {}, e.pieces.map(p => el('tr', {},
                el('td', { class: 'part' }, p.part),
                el('td', {}, badge(p.conf), ' ', rich(p.name),
                  p.note ? el('div', { class: 'small-text muted' }, rich(p.note)) : null,
                  el('div', { class: 'small-text' }, srcLinks(p.src)))))))
            : el('div', { class: 'small-text muted' }, badge('none'), ' 搜尋結果冇逐個部位嘅清單。'),
          el('h3', {}, '套裝效果'),
          e.setBonus ? fact(e.setBonus) : el('div', { class: 'small-text muted' }, badge('none'), ' 搵唔到資料。'),
          el('h3', {}, '已知素材'),
          e.mats.length
            ? el('table', {}, el('tbody', {}, e.mats.map(m => el('tr', {},
                el('td', {}, el('b', {}, rich(m.item)), el('div', {}, badge(m.conf), ' ', rich(m.need)), el('div', { class: 'small-text' }, srcLinks(m.src)))))))
            : el('div', { class: 'small-text muted' }, badge('none'), ' 呢個屬性嘅魔物素材搵唔到可靠資料。每級都要嘅狩玉見下面。'),
        ),
      );
    }
    for (const e of ELEMENTS) {
      tabs.append(el('button', { role: 'tab', 'data-id': e.id, onclick: () => show(e.id) }, `${e.icon} ${e.name}`));
    }

    const jade = el('div', { class: 'card' },
      el('h2', {}, '每件每升一級要嘅狩玉'),
      el('table', {},
        el('thead', {}, el('tr', {}, el('th', {}, '升到'), el('th', {}, '狩玉'))),
        el('tbody', {}, JADE.map(j => el('tr', {},
          el('td', { class: 'part', style: 'width:84px' }, j.to),
          el('td', {}, badge(j.conf), ' ', j.jade || '搵唔到資料', el('div', { class: 'small-text' }, srcLinks(j.src))))))),
      el('div', { class: 'small-text muted', style: 'margin-top:6px' }, '每件仲要另外加嗰隻魔物嘅素材，種類同數量逐件唔同。'),
      el('h3', {}, '狩玉點樣攞'),
      JADE_SOURCES.map(fact),
    );

    root.replaceChildren(head, renderMidori(), renderBuild(), el('h2', { class: 'section-title' }, '其他屬性'), el('div', { class: 'card', style: 'padding:8px' }, tabs), body, jade);
    show(ELEMENTS.some(e => e.id === current) ? current : 'fire');
  }

  window.MHO_GUIDE = { render, AR };
})();
