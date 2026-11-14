// 屬性 × 武器 配裝資料（繁體中文）。資料搜集於 2026-11-14。
// c：ok＝兩個或以上來源一致；one＝單一來源；diff＝來源矛盾；none＝搵唔到資料（冇估）。
// 名稱：遊戲繁中譯名未核實嘅寫成「中文〔暫譯：英文原名〕」。
// src：guide.js 入面 SRC 嘅 key，或者 [標籤, 網址]。
(function () {
  'use strict';

  const ELEMENTS = {
    fire: {
      name: '火', icon: '🔥',
      skill: { name: '火屬性傷害提升〔暫譯：Fire Damage Up〕', lv: 'Lv7', eff: '屬性攻擊 +50、火屬性傷害 +28%（對融光種 +70%）', c: 'ok', src: ['g8hbg', 'g8db', 'g8bow'] },
      core: { text: '蠻顎龍 腕／腰／腿 ＋ 櫻火龍或火龍 頭 ＋ 火龍 身', c: 'diff', src: ['g8bow', 'g8cb', 'g8db', 'g8hbg'],
        note: '頭盔用火龍定櫻火龍，各攻略寫法唔同。' },
      set: { text: '蠻顎龍套裝＊：任何品質 3 件 → 火屬性傷害提升 +1', c: 'ok', src: ['g8ember', 'g8cb'], note: '套裝英文名 Anjanath Ember。', ens: ['Anjanath Ember'] },
      drops: [
        { mon: '火龍', t: ['★8–9', '★10–11', '★12–13', '★14–15'], c: 'ok', src: ['ludMats', 'g8rathDrop'] },
        { mon: '櫻火龍', t: ['—', '—', '★11–13', '★14–15'], c: 'ok', src: ['ludMats'],
          note: '櫻火龍的上鱗：剝取、捕獲或任務報酬。櫻火龍的堅殼：要捕獲，或者破壞身體同頭部。' },
        { mon: '蠻顎龍', t: ['★7–9', '★10–11', '★12–13', '★14–15'], c: 'ok', src: ['ludMats', 'pigAnja'], note: '破壞後腳一定掉 蠻顎龍的鱗Ⅳ。' },
        { mon: '大凶豺龍', t: ['?', '?', '★11–12', '?'], c: 'one', src: ['ludMats'] },
      ],
      later: { text: '冒險等級 47（稀有度 11）之後：有一套火屬性嘅融光種火龍套裝Ⅴ〔暫譯：Radiant Rathalos Set V〕係稀有度 11，但未有攻略用佢配裝，素材亦未有資料', c: 'one', src: ['fxArmor'] },
    },
    water: {
      name: '水', icon: '💧',
      skill: { name: '水屬性傷害提升〔暫譯：Water Damage Up〕', lv: 'Lv7', eff: '屬性攻擊 +50、水屬性傷害 +28%（對融光種 +70%）', c: 'ok', src: ['g8hbg', 'g8db'] },
      core: { text: '泥魚龍＊ 3 件 ＋ 融光種泥魚龍＊ 腕、腿；其餘用眩鳥＊或融光種土砂龍＊', c: 'one', src: ['g8hbg', 'g8bow', 'g8cb'],
        note: '泥魚龍 3 件 2 點（稀有度 5 起 3 點），融光種泥魚龍腕＋腿再加 2 點。', ens: ['Jyuratodus', 'Radiant Jyuratodus', 'Tzitzi-Ya-Ku', 'Radiant Barroth'] },
      set: { text: '泥魚龍套裝＊：3 件 → 水屬性傷害提升 +1', c: 'one', src: ['g8db', 'g8ham', 'g8bow', 'g8cb'], ens: ['Jyuratodus Aquaguard'] },
    },
    thunder: {
      name: '雷', icon: '⚡',
      skill: { name: '雷屬性傷害提升', lv: 'Lv7', eff: '屬性攻擊 +50、雷屬性傷害 +28%（對融光種 +70%）', c: 'ok', src: ['g8ham', 'g8db', 'gwZhGirros'], note: '繁中技能名出自 GameWith 繁中版大凶顎龍套裝頁。' },
      core: { text: '大凶顎龍 ＋ 融光種大凶顎龍（稀有度 10 疊滿）', c: 'one', src: ['g8cb', 'gwZhGirros'],
        note: '其他配法：融光種大凶顎龍＋Ingot 系列；飛雷龍＊＋融光種大凶顎龍。', ens: ['Tobi-Kadachi'] },
      set: { text: '大凶顎龍套裝＊：3 件 → 雷屬性傷害提升 +1', c: 'one', src: ['g8db', 'g8ham', 'g8bow', 'g8cb'], ens: ['Great Girros Ambush'] },
    },
    ice: {
      name: '冰', icon: '❄️',
      skill: { name: '冰屬性傷害提升〔暫譯：Ice Damage Up〕', lv: 'Lv7', eff: '屬性攻擊 +50、冰屬性傷害 +28%（對融光種 +70%）', c: 'one', src: ['g8db'] },
      core: { text: '鎖鏈＊ ＋ 風漂龍＊ ＋ 高級金屬＊', c: 'one', src: ['g8db'], note: '攻略冇寫明部位。', ens: ['Chainmail', 'Legiana', 'High Metal'] },
      set: null,
    },
    dragon: {
      name: '龍', icon: '🐉',
      skill: { name: '龍屬性傷害提升〔暫譯：Dragon Damage Up〕', lv: 'Lv7', eff: '屬性攻擊 +50、龍屬性傷害 +28%（對融光種 +70%）', c: 'ok', src: ['g8bow', 'g8db'] },
      core: { text: '骨＊ ＋ 角龍＊ ＋ 甲蟲＊', c: 'one', src: ['g8bow'], note: '攻略冇寫明部位。', ens: ['Bone', 'Diablos', 'Hornetaur'] },
      set: { text: '龍屬性套裝＊：3 件 → 龍屬性傷害提升 +1', c: 'one', src: ['g8db', 'g8ham', 'g8bow', 'g8cb'], ens: ['Sepulcros Divinity'] },
    },
  };

  // 每個「屬性/武器」組合。未有嘅組合會顯示該屬性嘅通用配法。
  const COMBOS = {
    'fire/long-sword': {
      weapon: [
        { k: '首選', v: '光稜火太刀（光稜龍主宰武器，打造時揀火屬性）', c: 'ok', src: ['g8midori', 'g8dawn', 'bahaMidori', 'ludRuger'], needAR: 40,
          note: '英文名 Dawnlit Joyeuse。火屬性版本嘅屬性值同物理值係所有火太刀最高。解鎖：冒險等級 40 ＋ 完成主線任務〔暫譯：Sound the Horn Here〕，之後喺主宰挑戰打光稜龍。打造素材：融光結晶〔暫譯：Radiant Crystal〕×12 ＋ 融光寶玉〔暫譯：Radiant Gem〕×1。有網站轉述 GameWith 指主宰武器只喺主宰挑戰等指定挑戰先發揮全力。' },
        { k: '平時用', v: '火龍太刀Ⅳ〔暫譯：Wyvern Blade "Blood" IV〕', c: 'ok', src: ['g8ls', 'gwMidori', 'bahaMidori'],
          note: '由火龍太刀Ⅱ〔暫譯：Wyvern Blade "Fall" II〕升到稀有度 10。Game8：可以鍛造同升級嘅最強火太刀。' },
      ],
      skills: [
        { name: '練氣增傷技能〔暫譯：Spirit Bind Blade〕', lv: 'Lv4', eff: '練氣升階後短時間內傷害 +16%、屬性攻擊 +25', c: 'one', src: ['g8sbb', 'gwls'],
          note: '已知只有大凶豺龍腕甲提供 Lv2，其餘 2 級喺邊件未有資料。' },
        { name: '防彈刀技能〔暫譯：Instinct〕', lv: 'Lv1', eff: '攻擊唔會彈刀', c: 'one', src: ['gwls'] },
      ],
      armor: [
        { part: '頭', main: '櫻火龍頭盔Ⅳ〔暫譯：Rath Heart Helm IV〕', skill: '火屬性傷害提升＊', early: '火龍', c: 'ok', src: ['bahaMidori', 'gwBest', 'g8ryu'] },
        { part: '身', main: '火龍鎧甲Ⅳ〔暫譯：Rathalos Mail IV〕', skill: '火屬性傷害提升＊ Lv3', early: '火龍', c: 'ok', src: ['bahaMidori', 'gwBest', 'g8ryu', 'gwRath'],
          note: '火屬性傷害提升等級：GameWith 寫稀有度 6–9 係 Lv2、10 係 Lv3；Game8 寫稀有度 6–8 係 Lv1。' },
        { part: '手', main: '大凶豺龍腕甲Ⅳ〔暫譯：Jagras Vambraces IV〕', skill: '練氣增傷＊ Lv2、威懾＊', early: '蠻顎龍', c: 'ok', src: ['bahaMidori', 'gwBest', 'gwArmor'],
          note: '技能英文原名：Spirit Bind Blade、Deterrence。' },
        { part: '腰', main: '蠻顎龍腰甲Ⅳ〔暫譯：Anja Coil IV〕', skill: '火屬性傷害提升＊', early: '蠻顎龍', c: 'ok', src: ['bahaMidori', 'gwBest', 'fxAnja'] },
        { part: '腿', main: '櫻火龍護腿Ⅳ〔暫譯：Rath Heart Greaves IV〕', skill: '技能未有資料', early: '蠻顎龍', c: 'ok', src: ['bahaMidori', 'gwBest'] },
      ],
      armorFoot: '「過渡」＝未解鎖櫻火龍之前用邊隻魔物嘅防具（巴哈姆特）。',
      mats: [
        { id: 'weapon', label: '武器', steps: [
          { r: [6, 8], m: null, c: 'none' },
          { r: 9, m: '狩玉Ⅳ ×2、火龍的鱗Ⅲ ×3、火龍的甲殼Ⅲ ×3', c: 'one', src: ['gwWBB'] },
          { r: 10, m: '火龍的鱗Ⅳ ×3（其餘素材未有資料）', c: 'one', src: ['gwRS4'] },
          { r: 11, m: null, c: 'none' },
        ] },
        { id: 'head', label: '頭', steps: [
          { r: [6, 9], m: null, c: 'none' },
          { r: 10, m: '狩玉Ⅳ ×2、櫻火龍的堅殼Ⅳ ×3、櫻火龍的上鱗Ⅳ ×3、雌火龍的紅玉Ⅳ〔暫譯：Rathian Plate IV〕×3', c: 'one', src: ['g8pink'],
            note: 'Game8 標題寫「鍛造素材」，冇寫明係邊一級，但同稀有度 10 嘅規律吻合。' },
          { r: 11, m: null, c: 'none' },
        ] },
        { id: 'body', label: '身', steps: [
          { r: 6, m: '（製作）狩玉Ⅱ ×1、火龍的甲殼Ⅱ ×2', c: 'diff', src: ['gwRath', 'g8rath'], note: 'Game8 寫製作要多 火龍的鱗Ⅱ ×2。' },
          { r: 7, m: '狩玉Ⅲ ×2、火龍的鱗Ⅱ ×3、火龍的甲殼Ⅱ ×3', c: 'one', src: ['gwRath'], note: 'GameWith 頁面標題重複，未能 100% 確定呢個表係身甲。' },
          { r: 8, m: null, c: 'none' },
          { r: 9, m: null, c: 'none' },
          { r: 10, m: '狩玉Ⅳ ×2、火龍的鱗Ⅳ ×3、火龍的甲殼Ⅳ ×3', c: 'one', src: ['gwRath'] },
          { r: 11, m: null, c: 'none' },
        ] },
        { id: 'arms', label: '手', steps: [{ r: [1, 11], m: null, c: 'none' }] },
        { id: 'waist', label: '腰', steps: [
          { r: 3, m: '（製作）狩玉Ⅰ ×1、蠻顎龍的鱗Ⅰ ×1、蠻顎龍的牙Ⅰ ×1、蠻顎龍的鼻骨Ⅰ〔暫譯：Nosebone〕×1、蠻顎龍的尾巴Ⅰ ×1', c: 'ok', src: ['fxAnja', 'g8anja'] },
          { r: [4, 11], m: null, c: 'none' },
        ] },
        { id: 'legs', label: '腿', steps: [{ r: [1, 11], m: null, c: 'none' }] },
      ],
      midori: true,
    },
  };

  // 彌多律（只喺 火/太刀 顯示）
  const MIDORI = [
    { k: '定位', v: 'SSR 進擊型、全火特化；弱點：缺少對空招式', c: 'ok', src: ['bahaMidori2', 'ldTier', 'ldMidori'] },
    { k: '武器', v: '光稜火太刀；冇就用火龍太刀Ⅳ＊', c: 'ok', src: ['g8midori', 'bahaMidori'], ens: ['Wyvern Blade "Blood" IV'] },
    { k: '防具', v: '用上面嗰套 5 件', c: 'ok', src: ['bahaMidori'],
      note: 'Game8 另建議打普通魔物可改用居合拔刀〔暫譯：Flash Draw〕配裝；GameWith 彌多律配裝主打反擊強化〔暫譯：Counter Boost〕＋練氣增傷。' },
    { k: '繪影套裝', v: '灼焰 ×4', c: 'ok', src: ['g8midori', 'ldMidori', 'bahaMidori'],
      note: '2 件：火屬性傷害 +5%。4 件：命中弱點後自身火屬性傷害 +24%，持續 20 秒。太刀段數多，4 件效果幾乎常駐。' },
    { k: '核心繪影', v: '融光種雌火龍（亦可用光稜龍）', c: 'ok', src: ['g8midori', 'bahaMidori'] },
    { k: '隨從', v: '小次郎', c: 'ok', src: ['g8midori', 'gwMidori', 'ldBuddy'], note: '彌多律專屬搭配，觸發裂破時提升火屬性同傷害。' },
    { k: '隊友', v: '菈雅、御谷龍之介、光赫', c: 'ok', src: ['g8midori', 'bahaMidori', 'ldTeam'],
      note: '菈雅：火屬性控場、減益。御谷龍之介：火屬性支援、全隊火傷增益。光赫：控場、閃光。另一配法：主角（拎火屬性武器）＋ 御谷龍之介 ＋ 菈雅。' },
    { k: '命座 1', v: '單人：剎那餘音／組隊：清音不息', c: 'ok', src: ['bahaMidori', 'bahaMidori2'],
      note: '剎那餘音：完美閃避判定放大，擦邊都觸發，之後招式二可以取消前搖。命座可以隨時重置。' },
    { k: '命座 2', v: '楓時雅致', c: 'one', src: ['bahaMidori2'], note: '招式二或者完美閃避命中可以疊傷害。' },
    { k: '命座 3', v: '楓時殘響', c: 'one', src: ['bahaMidori2', 'bahaMidori'],
      note: '用雅致嘅疊傷強化招式三。3 命參考：單人＝剎那餘音＋清音不息＋楓時雅致；極限輸出＝清音不息＋楓時雅致＋楓時殘響。' },
    { k: '開場', v: '長按招式一 → 閃吼 → 普攻三下 → 招式二（快速紅刃）', c: 'one', src: ['ytCombo'],
      note: '招式一＝氣刃大迴旋；普攻三下＝無雙氣刃斬；招式二＝櫻花氣刃斬。' },
    { k: '循環', v: '補練氣 → 招式二升黃刃、紅刃 → 招式一集氣斬 → 倒地／暈時招式三', c: 'one', src: ['ldMidori'] },
  ];


  // ---------- 生成其他武器組合 ----------
  const MON = [
    ['Rath Heart', '櫻火龍'], ['Rathalos', '火龍'], ['Rathian', '雌火龍'], ['Anja', '蠻顎龍'], ['Jagras', '大凶豺龍'],
    ['Girros', '大凶顎龍'], ['Jyura', '泥魚龍'], ['Tzitzi', '眩鳥'], ['Legiana', '風漂龍'], ['Diablos', '角龍'],
    ['Hornetaur', '甲蟲'], ['Bone', '骨'], ['High Metal', '高級金屬'], ['Chainmail', '鎖鏈'], ['Ingot', '鋼錠'],
    ['Kadachi', '飛雷龍'], ['Kulu', '搔鳥'], ['Barroth', '土砂龍'], ['Baan', '骨鎚龍'], ['Pukei', '毒妖鳥'],
    ['Lumu', '浮空龍'], ['Alloy', '合金'], ['King Beetle', '王者甲蟲'], ['Odogaron', '慘爪龍'], ['Paolumu', '浮空龍'], ['Ruger Aidal', '光稜龍'],
  ];
  const PARTS = [[/Helm|Hood|Mask|Headpiece/, '頭盔'], [/Mail/, '鎧甲'], [/Vambraces|Braces/, '腕甲'], [/Coil|Belt/, '腰甲'], [/Greaves|Crura|Trousers/, '護腿']];
  const SLOT = ['頭盔', '鎧甲', '腕甲', '腰甲', '護腿'];
  const ROMAN = { I: 'Ⅰ', II: 'Ⅱ', III: 'Ⅲ', IV: 'Ⅳ', V: 'Ⅴ' };
  // 英文防具名 → 「融光種泥魚龍腕甲Ⅳ〔暫譯：Radiant Jyura Vambraces IV〕」
  function A(en, slot) {
    const m = MON.find(([k]) => en.includes(k));
    const p = PARTS.find(([re]) => re.test(en));
    const part = p ? p[1] : SLOT[slot];
    const t = (en.match(/\b(IV|V|III|II|I)$/) || [])[1];
    if (!m || !part) return `${en}〔暫譯：${en}〕`;
    return `${en.startsWith('Radiant ') ? '融光種' : ''}${m[1]}${part}${t ? ROMAN[t] : ''}〔暫譯：${en}〕`;
  }
  const SK = {
    wrecker: '破壞強化〔暫譯：Wrecker〕', sbb: '練氣增傷技能〔暫譯：Spirit Bind Blade〕', instinct: '防彈刀技能〔暫譯：Instinct〕',
    cap: '裝填強化〔暫譯：Capacity Boost〕', od: '攻勢防禦〔暫譯：Offensive Defense〕', bsb: '弓技強化〔暫譯：Bow Skill Boost〕',
    counter: '反擊強化〔暫譯：Counter Boost〕', morph: '變形強化〔暫譯：Morph Boost〕', charge: '蓄力強化〔暫譯：Charge Enhancement〕',
    intim: '威嚇〔暫譯：Intimidation〕', demonic: '鬼人強化〔暫譯：Demonic Strength〕', comboE: '連擊強化〔暫譯：Combo Enhancement〕',
    pierce: '穿刺強化〔暫譯：Pierce〕', health: '體力增強〔暫譯：Health Boost〕', breaker: '破壞部位強化〔暫譯：Breaker〕',
  };
  const EN = { fire: '火', water: '水', thunder: '雷', ice: '冰', dragon: '龍' };
  const WN = { 'great-sword': '大劍', 'long-sword': '太刀', 'dual-blades': '雙劍', hammer: '大錘', lance: '長槍', 'charge-blade': '充能斧', 'heavy-bowgun': '重弩', bow: '弓' };
  const APEX_NOTE = '光稜龍主宰武器：冒險等級 40 ＋ 完成第 6 章主線後，喺主宰挑戰打光稜龍取得。打造時揀屬性，揀邊個屬性基礎數值都一樣；對融光種傷害 +8%。有網站轉述 GameWith 指主宰武器只喺主宰挑戰等指定挑戰先發揮全力，未能確認。';
  const S = {
    G8GS: ['Game8 大劍', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/616993'],
    GWGS: ['GameWith 大劍', 'https://gamewith.ai/monster-hunter-outlanders/en/articles/best-great-sword-builds'],
    G8LS: 'g8ls', GWLS: 'gwls', GWALL: 'gwBest', G8H: 'g8hbg', G8B: 'g8bow', GWAPEX: 'gwApex',
    G8PYRO: ['Game8 炎囂', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/635030'],
    G8LUX: ['Game8 光赫', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/635036'],
    G8WLS: ['Game8 水太刀', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/637051'],
    MHOCC: ['monsterhunteroutlanders.cc 武器', 'https://monsterhunteroutlanders.cc/weapons/'],
    CODEX: ['MHO Codex 光稜龍', 'https://monsterhunteroutlanderscodex.com/ruger-aidal'],
    GWH: ['GameWith 重弩', 'https://gamewith.ai/monster-hunter-outlanders/en/articles/best-heavy-bowgun-builds'],
    GWB: ['GameWith 弓', 'https://gamewith.ai/monster-hunter-outlanders/en/articles/best-bow-builds'],
    GWFH: ['GameWith 主角重弩', 'https://gamewith.ai/monster-hunter-outlanders/en/adventurers/fated-adventurer-heavy-bowgun'],
    GWFB: ['GameWith 主角弓', 'https://gamewith.ai/monster-hunter-outlanders/en/adventurers/fated-adventurer-bow'],
    GWBG: ['GameWith 弓攻略', 'https://gamewith.ai/monster-hunter-outlanders/en/articles/bow-guide'],
    G8RA: ['Game8 光稜龍', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/635386'],
    G8LUKA: ['Game8 路加', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/618286'],
    G8MAD: ['Game8 瑪德琳', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/635032'],
    BAHA574: ['巴哈姆特 主角配裝', 'https://forum.gamer.com.tw/C.php?bsn=81450&snA=574'],
    G8DB: 'g8db', G8HAM: 'g8ham', G8C: 'g8cb',
    G8L: ['Game8 長槍', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/618563'],
    GWDB: ['GameWith 雙劍', 'https://gamewith.ai/monster-hunter-outlanders/en/articles/best-dual-blades-builds'],
    GWHAM: ['GameWith 大錘', 'https://gamewith.ai/monster-hunter-outlanders/en/articles/best-hammer-builds'],
    GWC: ['GameWith 充能斧', 'https://gamewith.ai/monster-hunter-outlanders/en/articles/best-charge-blade-builds'],
    GWL: ['GameWith 長槍', 'https://gamewith.ai/monster-hunter-outlanders/en/articles/best-lance-builds'],
    GWFL: ['GameWith 主角長槍', 'https://gamewith.ai/monster-hunter-outlanders/en/adventurers/fated-adventurer-lance'],
    G8APEX: ['Game8 主宰武器一覽', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/636621'],
    G8RM: ['Game8 充能斧主宰武器', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/637157'],
    FXL: ['Fextralife 長槍', 'https://monsterhunteroutlanders.wiki.fextralife.com/Lance'],
    G8RAYA: ['Game8 菈雅', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/635034'],
    G8HAZE: ['Game8 Haze', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/635038'],
    G8KERES: ['Game8 克蕾絲', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/635029'],
    G8RHODES: ['Game8 羅德', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/635037'],
  };
  const src = keys => keys.map(k => S[k] || k);

  // 參數：apex＝[英文名, c, 來源]；craft＝[英文名(或陣列＝來源矛盾), c, 來源, 備註]
  // armor＝[頭, 身, 手, 腰, 腿]，每件＝[英文名(或陣列), c, 來源, 備註] 或 null（未有資料）
  // skills＝[[技能, 等級, 效果, c, 來源, 備註]]
  function mk(el, wp, o) {
    const e = EN[el], w = WN[wp];
    const weapon = [];
    if (o.apex) weapon.push({ k: '首選', v: `光稜龍主宰武器（打造時揀${e}屬性）`, sub: o.apex[0], c: o.apex[1], src: src(o.apex[2]), needAR: 40, note: APEX_NOTE });
    if (o.craft) {
      const names = [].concat(o.craft[0]);
      weapon.push({ k: '可鍛造', v: `${e}屬性${w}${names.length > 1 ? '（攻略寫法唔同）' : ''}`, sub: names.join(' 或 '), c: o.craft[1], src: src(o.craft[2]), note: o.craft[3] });
    } else weapon.push({ k: '可鍛造', v: '未有資料', c: 'none' });
    const partNames = ['頭', '身', '手', '腰', '腿'];
    const armor = o.armor ? o.armor.map((x, i) => x
      ? { part: partNames[i], main: [].concat(x[0]).map(n => A(n, i)).join(' 或 '), c: x[1], src: src(x[2]), note: x[3] }
      : { part: partNames[i], main: '未有資料', c: 'none' }) : null;
    const skills = (o.skills || []).map(x => ({ name: x[0], lv: x[1], eff: x[2] || '', c: x[3], src: src(x[4]), note: x[5] }));
    COMBOS[`${el}/${wp}`] = { weapon, skills, armor, armorFoot: o.foot, generated: true };
  }

  const G = ['G8GS', 'GWGS'];
  mk('fire', 'great-sword', { apex: ['Luminous Durandal', 'one', ['G8GS', 'MHOCC']], craft: ['Red Wing IV', 'ok', G],
    skills: [[SK.wrecker, 'Lv4', '大劍專用', 'ok', G]],
    armor: [['Rath Heart Helm IV', 'ok', G], ['Rathalos Mail IV', 'ok', G], ['Radiant Anja Vambraces IV', 'ok', G], ['Anja Coil IV', 'ok', G], ['Rathalos Greaves IV', 'ok', G]],
    foot: '最適合打弱火嘅融光種。' });
  mk('water', 'great-sword', { apex: ['Luminous Durandal', 'one', ['G8GS', 'MHOCC']], craft: ['Radiant Water Golem IV', 'ok', G],
    skills: [[SK.wrecker, 'Lv4', '大劍專用', 'ok', G]],
    armor: [['Anja Helm IV', 'one', ['G8GS']], ['Tzitzi Mail IV', 'one', ['G8GS']], ['Radiant Jyura Vambraces IV', 'one', ['G8GS']], ['Tzitzi Coil IV', 'one', ['G8GS']], ['Rathalos Greaves IV', 'one', ['G8GS']]],
    foot: 'Game8：冒險等級 27 起用融光種泥魚龍防具，34 級左右加眩鳥防具疊滿水屬性傷害。' });
  mk('thunder', 'great-sword', { apex: ['Luminous Durandal', 'one', ['G8GS', 'MHOCC']], craft: ['Radiant Lightning Punisher IV', 'ok', G],
    skills: [[SK.wrecker, 'Lv4', '大劍專用', 'ok', G]],
    armor: [[['Anja Helm IV', 'Kadachi Helm IV'], 'diff', G], ['Radiant Girros Mail IV', 'ok', G], ['Radiant Anja Vambraces IV', 'one', G, '搜尋摘要唔清楚，可信度較低。'], ['Radiant Girros Coil IV', 'ok', G], [['Ingot Greaves IV', 'Rathalos Greaves IV'], 'diff', G]],
    foot: '光赫專用版本：土砂龍頭盔Ⅳ、融光種大凶顎龍鎧甲Ⅳ、骨鎚龍腕甲Ⅳ、融光種大凶顎龍腰甲Ⅳ、鋼錠護腿Ⅳ（＊暫譯），雷屬性傷害 7 ＋ 蓄力強化＊ 3（Game8 光赫）。' });
  mk('ice', 'great-sword', { apex: ['Luminous Durandal', 'one', ['G8GS', 'MHOCC']], craft: [['Freeze Blade IV', 'Frost Blaze IV'], 'diff', G, '可能係同一條升級路線嘅唔同譯名。'],
    skills: [[SK.wrecker, 'Lv4', '大劍專用', 'ok', G]],
    armor: [['Anja Helm IV', 'ok', G], ['High Metal Mail IV', 'ok', G], ['Legiana Vambraces IV', 'ok', G], ['Rathalos Coil IV', 'ok', G], ['High Metal Greaves IV', 'ok', G]],
    foot: '光稜龍弱火同冰。' });
  mk('dragon', 'great-sword', { apex: ['Luminous Durandal', 'one', ['G8GS', 'MHOCC']], craft: [['Blacksteel Chopper IV', 'Dragonbone Cleaver IV'], 'diff', G],
    skills: [[SK.wrecker, 'Lv4', '大劍專用', 'ok', G]],
    armor: [['Anja Helm IV', 'ok', G], ['Diablos Mail IV', 'ok', G], ['Hornetaur Vambraces IV', 'ok', G], ['Rathalos Coil IV', 'ok', G], ['Bone Greaves IV', 'ok', G]] });

  const L = ['G8LS', 'GWLS'];
  const lsSkills = [[SK.sbb, 'Lv4', '練氣升階後傷害 +16%、屬性攻擊 +25', 'ok', L], [SK.instinct, 'Lv1', '攻擊唔會彈刀', 'one', ['GWLS']]];
  mk('water', 'long-sword', { apex: ['Dawnlit Joyeuse', 'ok', ['g8dawn', 'CODEX']], craft: ['Radiant Dipterus IV', 'ok', L],
    skills: lsSkills,
    armor: [['Rathian Helm IV', 'ok', L], ['Tzitzi Mail IV', 'ok', L], ['Radiant Jyura Vambraces IV', 'ok', L], ['Tzitzi Coil IV', 'ok', L], ['Rath Heart Greaves IV', 'ok', L]],
    foot: '眩鳥＋泥魚龍疊滿水屬性傷害；雌火龍＋櫻火龍疊滿練氣增傷。' });
  mk('thunder', 'long-sword', { apex: ['Dawnlit Joyeuse', 'ok', ['g8dawn', 'CODEX']], craft: ['Dazzling Flash IV', 'ok', L, '由 Flickering Glow III 升到稀有度 10。'],
    skills: lsSkills,
    armor: [['Rathian Helm IV', 'ok', L], ['Radiant Girros Mail IV', 'ok', L], [['Jagras Vambraces IV', 'Girros Vambraces IV'], 'diff', L], ['Radiant Girros Coil IV', 'ok', L], [['Ingot Greaves IV', 'Rath Heart Greaves IV'], 'diff', L]] });
  mk('ice', 'long-sword', { apex: ['Dawnlit Joyeuse', 'ok', ['g8dawn', 'CODEX']], craft: [['Glacial Shotel IV', 'Stealer IV'], 'diff', L],
    skills: [[SK.sbb, 'Lv4', '練氣升階後傷害 +16%、屬性攻擊 +25', 'one', ['G8LS']]],
    armor: [['Rathian Helm IV', 'ok', ['G8LS', 'GWALL']], ['High Metal Mail IV', 'ok', ['G8LS', 'GWALL']], [['Legiana Vambraces IV', 'Jagras Vambraces IV'], 'diff', ['G8LS', 'GWALL']], [['Rathian Coil IV', 'Chainmail Belt IV'], 'diff', ['G8LS', 'GWALL']], ['High Metal Greaves IV', 'ok', ['G8LS', 'GWALL']]],
    foot: '風漂龍防具大約冒險等級 36 解鎖。光稜龍弱冰。' });
  mk('dragon', 'long-sword', { apex: ['Dawnlit Joyeuse', 'ok', ['g8dawn', 'CODEX']], craft: ['Blacksteel Long Sword IV', 'ok', L],
    skills: [[SK.sbb + ' 或 ' + SK.counter, 'Lv4', 'Game8 用練氣增傷；GameWith 用反擊強化（太刀反擊容易觸發）', 'diff', ['G8LS', 'GWLS', 'GWALL']]],
    armor: [[['Rathian Helm IV', 'Radiant Kadachi Helm IV'], 'diff', L], ['Diablos Mail IV', 'ok', L], ['Hornetaur Vambraces IV', 'ok', L], [['Rathian Coil IV', 'Radiant Kulu Coil IV'], 'diff', L], ['Bone Greaves IV', 'ok', L]] });

  const H = ['G8H', 'GWH'];
  mk('fire', 'heavy-bowgun', { apex: ['Scintillant Bayard', 'ok', ['G8H', 'G8RA', 'GWAPEX']], craft: ['Power Shooter IV', 'one', ['GWFH'], 'Game8 冇寫後期可鍛造嘅火重弩。'],
    skills: [[SK.cap, 'Lv2–3', 'Game8 寫 2、GameWith 寫 3', 'diff', ['G8H', 'GWFH']]],
    armor: [['Rath Heart Helm IV', 'ok', ['G8H', 'GWFH']], ['Rathalos Mail IV', 'ok', ['G8H', 'GWFH']], ['Rath Heart Braces IV', 'one', ['GWFH']], ['Anja Coil IV', 'one', ['GWFH']], ['King Beetle Crura IV', 'one', ['GWFH']]],
    foot: '巴哈姆特主角配裝：頭、身用火龍；手、腰、腿用蠻顎龍（主角揀火屬性因為火嘅增傷最多）。' });
  mk('water', 'heavy-bowgun', { apex: ['Scintillant Bayard', 'ok', ['G8H', 'G8RA', 'GWAPEX']], craft: [['Radiant Water Cannon IV', 'Radiant Aqua Assault III'], 'diff', H, '應該係同一條升級路線；融光種泥魚龍武器，冒險等級 27 起。'],
    armor: [[['Radiant Barroth Helm IV', 'Alloy Helm IV'], 'diff', H], ['Tzitzi Mail IV', 'ok', H], ['Radiant Jyura Vambraces IV', 'ok', H], ['Tzitzi Coil IV', 'ok', H], ['Lumu Greaves IV', 'ok', H]] });
  mk('thunder', 'heavy-bowgun', { apex: ['Scintillant Bayard', 'ok', ['G8H', 'G8RA', 'GWAPEX']], craft: [['Arma Destroyer IV', 'Radiant Kadachi Lion III'], 'diff', H],
    skills: [[SK.cap + ' 或 ' + SK.od, '', 'Game8：裝填強化 5；GameWith：攻勢防禦 4', 'diff', H]],
    armor: null,
    foot: '防具：飛雷龍 ＋ 融光種大凶顎龍（Game8），逐件清單未搵到；GameWith 用大凶顎龍套裝效果。' });
  mk('ice', 'heavy-bowgun', { apex: ['Scintillant Bayard', 'ok', ['G8H', 'G8RA', 'GWAPEX']], craft: ['Shattercryst+ IV', 'ok', H, '風漂龍武器，冒險等級 36 起。'],
    skills: [[SK.cap, 'Lv4', '', 'one', ['G8H']]],
    armor: [['Alloy Helm IV', 'one', ['GWH']], ['High Metal Mail IV', 'one', ['GWH']], ['Legiana Vambraces IV', 'one', ['GWH']], ['Ingot Coil IV', 'one', ['GWH']], ['High Metal Greaves IV', 'one', ['GWH']]],
    foot: 'Game8 都係用風漂龍＋高級金屬防具，但逐件清單未見到。光稜龍弱冰。' });
  mk('dragon', 'heavy-bowgun', { apex: ['Scintillant Bayard', 'ok', ['G8H', 'G8RA', 'GWAPEX']], craft: ['Blacksteel Cannon IV', 'one', ['GWALL', 'GWH']],
    skills: [[SK.cap, 'Lv4', '', 'ok', ['GWALL', 'G8H']]],
    armor: [['Radiant Barroth Helm IV', 'ok', ['G8H', 'GWALL']], ['Diablos Mail IV', 'ok', ['G8H', 'GWALL']], ['Hornetaur Vambraces IV', 'one', ['GWALL']], ['Rath Heart Coil IV', 'one', ['GWALL']], ['Bone Greaves IV', 'one', ['GWALL']]],
    foot: 'GameWith 全武器配裝嘅主角重弩代表配裝。' });

  const B = ['G8B', 'GWB'];
  const bsb = [SK.bsb, 'Lv4', '', 'ok', ['G8B', 'GWALL']];
  mk('fire', 'bow', { apex: ['Brilliant Hippogriff', 'ok', ['G8B', 'G8RA', 'GWAPEX']], craft: ['Rathslinger IV', 'ok', ['G8B', 'GWALL', 'GWBG'], '大約冒險等級 38 可以升級。'],
    skills: [bsb],
    armor: [['Rath Heart Helm IV', 'ok', B], ['Rathalos Mail IV', 'ok', B], ['Radiant Kadachi Vambraces IV', 'one', ['GWB']], ['Anja Coil IV', 'one', ['GWB']], ['Radiant Pukei Greaves IV', 'one', ['GWB']]] });
  mk('water', 'bow', { apex: ['Brilliant Hippogriff', 'ok', ['G8B', 'G8RA', 'GWAPEX']], craft: ['Radiant Water Shot IV', 'ok', ['G8B', 'GWBG', 'GWB'], '融光種泥魚龍弓，由 Radiant Aqua Arrow II 升上嚟，冒險等級 28 起。'],
    skills: [bsb],
    armor: [['Jyura Helm IV', 'one', ['G8B']], ['Tzitzi Mail IV', 'ok', B], [['Radiant Kadachi Vambraces IV', 'Radiant Jyura Vambraces IV'], 'diff', B], ['Tzitzi Coil IV', 'ok', B], ['Radiant Pukei Greaves IV', 'ok', B]] });
  mk('thunder', 'bow', { apex: ['Brilliant Hippogriff', 'ok', ['G8B', 'G8RA', 'GWAPEX']], craft: ['Radiant Kadachi Strikebow IV', 'ok', ['G8B', 'G8LUKA', 'GWBG'], '融光種飛雷龍弓，大約冒險等級 38。'],
    skills: [bsb],
    armor: [['Kadachi Helm IV', 'one', ['G8B']], ['Radiant Girros Mail IV', 'one', ['G8B']], null, null, null],
    foot: '其餘部位用融光種飛雷龍／融光種毒妖鳥（Game8），或者融光種大凶顎龍＋鋼錠（Game8 路加）；逐件清單未搵到。' });
  mk('ice', 'bow', { apex: ['Brilliant Hippogriff', 'ok', ['G8B', 'G8RA', 'GWAPEX']], craft: null,
    skills: [[SK.bsb, 'Lv4', '', 'ok', ['G8B', 'GWALL', 'GWFB']]],
    armor: [['Pukei Hood IV', 'ok', ['G8B', 'GWALL']], ['High Metal Mail IV', 'ok', ['G8B', 'GWALL']], ['Legiana Vambraces IV', 'ok', ['G8B', 'GWALL']], ['Chainmail Belt IV', 'ok', ['G8B', 'GWALL']], ['Radiant Pukei Greaves IV', 'ok', ['G8B', 'GWALL']]],
    foot: 'Game8、GameWith 都冇寫可鍛造嘅冰弓；只有主宰武器。光稜龍弱冰。' });
  mk('dragon', 'bow', { apex: ['Brilliant Hippogriff', 'ok', ['G8B', 'G8RA', 'GWAPEX']], craft: ['Blacksteel Bow IV', 'one', ['GWALL', 'GWBG']],
    skills: [[SK.bsb, 'Lv2–4', 'Game8 寫 2、GameWith 寫 4', 'diff', ['G8B', 'GWALL']]],
    armor: [['Pukei Hood IV', 'ok', ['G8B', 'GWALL']], ['Diablos Mail IV', 'ok', ['G8B', 'GWALL']], ['Hornetaur Vambraces IV', 'ok', ['G8B', 'GWALL']], [['Hornetaur Coil IV', 'Radiant Kadachi Coil IV'], 'diff', ['G8B', 'GWALL']], ['Bone Greaves IV', 'ok', ['G8B', 'GWALL']]] });


  // 雙劍
  const DBs = ['G8DB', 'GWALL'];
  const dbApex = ['Lucent Hauteclaire', 'one', ['G8APEX', 'CODEX']];
  mk('fire', 'dual-blades', { apex: dbApex, craft: [['Radiant Blood-drinker Chainblade IV', 'Blood-drinker Chainblade IV'], 'diff', DBs, '同一條升級路線，融光種版本同普通版本嘅寫法唔同。'],
    skills: [[SK.demonic + ' 或 ' + SK.comboE, '', 'Game8：鬼人強化 4；GameWith：連擊強化 5', 'diff', DBs]],
    armor: [['Rath Heart Helm IV', 'ok', DBs], ['Rathalos Mail IV', 'ok', DBs], ['Radiant Girros Vambraces IV', 'one', ['GWALL']], ['Anja Coil IV', 'one', ['GWALL']], ['Radiant Kulu Greaves IV', 'one', ['GWALL']]],
    foot: 'Game8：櫻火龍＋火龍＋蠻顎龍疊滿火屬性傷害。菈雅專用版本：火屬性傷害 7＋連擊強化＊ 5（Game8 菈雅）。' });
  mk('water', 'dual-blades', { apex: dbApex, craft: ['Radiant Jyura Hatchets IV', 'ok', DBs, '融光種泥魚龍雙劍；Game8 寫Ⅲ喺冒險等級 38 左右最好用。'],
    skills: [[SK.demonic, 'Lv4', '', 'ok', DBs]],
    armor: [['Radiant Kulu Headpiece IV', 'one', ['G8DB']], ['Tzitzi Mail IV', 'one', ['G8DB']], ['Radiant Jyura Vambraces IV', 'ok', DBs], ['Tzitzi Coil IV', 'one', ['G8DB']], ['Kulu Greaves IV', 'one', ['G8DB']]],
    foot: '融光種泥魚龍防具冒險等級 27 之後先有。' });
  mk('thunder', 'dual-blades', { apex: dbApex, craft: [['Radiant Dual Destroyers IV', 'Dual Destroyers IV', 'Radiant Kadachi Claws III'], 'diff', ['G8DB', 'GWALL', 'G8HAZE', 'GWDB']],
    skills: [[SK.demonic + ' 或 ' + SK.comboE, '', 'Game8：鬼人強化 4；GameWith 有一處寫連擊強化 7', 'diff', DBs]],
    armor: [['Radiant Girros Mask IV', 'one', ['G8DB']], ['Radiant Girros Mail IV', 'ok', DBs], null, ['Girros Coil IV', 'one', ['GWALL']], null],
    foot: 'GameWith 用大凶顎龍套裝效果。Haze 專用版本：雷屬性傷害 7＋反擊強化＊（Game8 Haze）。' });
  mk('ice', 'dual-blades', { apex: dbApex, craft: [['Freeze Daggers IV', 'Freeze Chain IV'], 'diff', ['G8DB', 'GWALL', 'MHOCC'], '風漂龍雙劍，冒險等級 36 起；Freeze Chain 可能係 Freeze Daggers Ⅲ 嘅升級。'],
    skills: [[SK.demonic, 'Lv4', '', 'ok', DBs]],
    armor: [['Radiant Kulu Headpiece IV', 'one', ['G8DB']], ['High Metal Mail III', 'one', ['G8DB']], ['Legiana Vambraces IV', 'one', ['G8DB']], ['Radiant Odogaron Coil IV', 'one', ['G8DB']], ['High Metal Greaves IV', 'one', ['G8DB']]],
    foot: '冒險等級 20 之前：鎖鏈套裝＋冒險團冰屬性武器（冰屬性傷害 3）。' });
  mk('dragon', 'dual-blades', { apex: dbApex, craft: ['Blacksteel Twins IV', 'ok', ['G8KERES', 'GWALL'], 'Game8 寫Ⅲ喺冒險等級 38 左右最好用。'],
    skills: [[SK.comboE, 'Lv4', '', 'one', ['GWALL']]],
    armor: [[['Radiant Girros Mask IV', 'Bone Helm IV'], 'diff', ['GWALL', 'G8KERES']], ['Diablos Mail IV', 'ok', ['GWALL', 'G8KERES']], ['Hornetaur Vambraces IV', 'ok', ['GWALL', 'G8KERES']], [['Kulu Coil IV', 'Hornetaur Coil III'], 'diff', ['GWALL', 'G8KERES']], ['Bone Greaves IV', 'ok', ['GWALL', 'G8KERES']]],
    foot: 'Game8 嘅版本係克蕾絲專用。龍屬性隊：克蕾絲＋Arkaya。' });

  // 大錘
  const HM = ['G8HAM', 'GWALL'];
  const hmApex = ['Sonorous Olifant', 'one', ['G8APEX', 'CODEX']];
  mk('fire', 'hammer', { apex: hmApex, craft: [['Radiant Anja Striker IV', 'Anja Striker IV'], 'diff', HM],
    skills: [[SK.charge, 'Lv5', '', 'ok', HM]],
    armor: [['Rath Heart Helm IV', 'one', ['G8HAM']], ['Rathalos Mail IV', 'one', ['G8HAM']], ['Baan Vambraces IV', 'one', ['G8HAM']], ['Anja Coil IV', 'one', ['G8HAM']], ['Radiant Anja Greaves IV', 'one', ['G8HAM']]],
    foot: '繪影：光稜龍核心＋灼焰。' });
  mk('water', 'hammer', { apex: hmApex, craft: ['Radiant Water Basher IV', 'ok', HM],
    skills: [[SK.intim, 'Lv4', '部位暈眩累積後傷害 +16%、屬性攻擊 +25', 'ok', HM]],
    armor: null,
    foot: '防具逐件清單搵唔到可靠資料（GameWith 嘅摘要似係抄咗龍屬性配裝）。Game8 過渡期：鋼錠頭盔Ⅳ＋眩鳥鎧甲Ⅲ。' });
  mk('thunder', 'hammer', { apex: hmApex, craft: [['Radiant Lightning Bash IV', 'Lightning Bash IV'], 'diff', HM],
    skills: [[SK.intim, 'Lv4', '部位暈眩累積後傷害 +16%、屬性攻擊 +25', 'ok', HM]],
    armor: [['Ingot Helm IV', 'one', ['GWALL']], ['Radiant Girros Mail IV', 'one', ['GWALL']], ['Girros Vambraces IV', 'one', ['GWALL']], ['Radiant Girros Coil IV', 'one', ['GWALL']], ['Chainmail Trousers IV', 'one', ['GWALL']]],
    foot: '多個攻略認為雷係大錘最強屬性。Game8 都係用融光種大凶顎龍＋鋼錠，但逐件清單未見到。隊友：路加、光赫、Haze。' });
  mk('ice', 'hammer', { apex: hmApex, craft: ['Diablos Sledge IV', 'ok', HM, '角龍大錘，冒險等級 30 起。'],
    skills: [[SK.intim + ' 或 ' + SK.charge, '', 'Game8：威嚇 4；GameWith：蓄力強化 5', 'diff', HM]],
    armor: [['Ingot Helm IV', 'one', ['G8HAM']], ['High Metal Mail IV', 'one', ['G8HAM']], ['Legiana Vambraces IV', 'one', ['G8HAM']], ['Chainmail Belt IV', 'one', ['G8HAM']], ['Chainmail Trousers IV', 'one', ['G8HAM']]],
    foot: '羅德係唯一冰屬性冒險者；威嚇同蓄力強化唔可以同時疊滿（Game8 羅德）。' });
  mk('dragon', 'hammer', { apex: hmApex, craft: ['Blacksteel Hammer IV', 'ok', HM],
    skills: [[SK.charge, 'Lv3', '', 'ok', HM], [SK.breaker, '', 'GameWith 建議破壞部位', 'one', ['GWALL']]],
    armor: [['Baan Helm IV', 'ok', HM], ['Diablos Mail IV', 'ok', HM], ['Hornetaur Vambraces IV', 'one', ['GWALL']], ['Radiant Anja Coil IV', 'one', ['GWALL']], null] });

  // 長槍
  const LC = ['G8L', 'GWALL'];
  const lcApex = ['Gleaming Curtana', 'ok', ['G8L', 'FXL', 'GWL']];
  mk('fire', 'lance', { apex: lcApex, craft: ['Garon Dhara IV', 'ok', ['G8L', 'GWALL', 'GWFL']],
    skills: [[SK.charge, 'Lv3–5', 'Game8 寫 3、GameWith 寫 5', 'diff', LC]],
    armor: [['Rath Heart Helm IV', 'ok', ['GWALL', 'GWFL', 'G8L']], ['Rathalos Mail IV', 'ok', ['GWALL', 'GWFL', 'G8L']], ['Baan Vambraces IV', 'one', ['GWALL']], ['Anja Coil IV', 'one', ['GWALL']], ['Radiant Anja Greaves IV', 'one', ['GWALL']]],
    foot: 'GameWith 嘅係主角配裝。繪影：灼焰＋雌火龍核心（Fextralife）。' });
  mk('water', 'lance', { apex: lcApex, craft: ['Radiant Water Spire IV', 'ok', LC, 'GameWith 寫 Radiant Water Spike IV；Game8 過渡期：Radiant Aqua Horn III，大約冒險等級 38。'],
    skills: [[SK.pierce, 'Lv4', '', 'ok', LC]],
    armor: [['Jyura Helm IV', 'ok', LC], ['Tzitzi Mail IV', 'ok', LC], ['Radiant Jyura Vambraces IV', 'ok', LC], ['Diablos Coil IV', 'ok', LC], ['Radiant Barroth Greaves IV', 'ok', LC]],
    foot: 'Game8：心得優先揀反擊專家〔暫譯：Counter Expert〕。' });
  mk('thunder', 'lance', { apex: lcApex, craft: ['Radiant Lightning Spire IV', 'ok', LC],
    skills: [[SK.pierce, 'Lv4', '', 'ok', LC]],
    armor: [['Kadachi Helm IV', 'ok', LC], [['Barroth Mail IV', 'Radiant Girros Mail IV'], 'diff', LC], ['Girros Vambraces IV', 'ok', LC], ['Diablos Coil IV', 'ok', LC], [['Ingot Greaves IV', 'Radiant Barroth Greaves IV'], 'diff', LC]],
    foot: 'Game8 隊伍：路加＋光赫＋Haze。' });
  mk('ice', 'lance', { apex: lcApex, craft: [['Glacial Lance IV', 'Legiana Halberd IV'], 'diff', LC],
    skills: [[SK.charge, 'Lv3–5', 'Game8 寫 3、GameWith 寫 5', 'diff', LC]],
    armor: [[['Alloy Helm IV', 'Baan Helm IV'], 'diff', LC], ['High Metal Mail IV', 'ok', LC], ['Baan Vambraces IV', 'ok', LC], ['Chainmail Belt IV', 'ok', LC], ['High Metal Greaves IV', 'ok', LC]] });
  mk('dragon', 'lance', { apex: lcApex, craft: ['Blacksteel Lance IV', 'ok', LC, 'Game8 過渡期：Blacksteel Lance II，大約冒險等級 28。'],
    skills: [[SK.charge + ' 或 ' + SK.od, '', 'Game8：蓄力強化 2；GameWith：攻勢防禦 4', 'diff', LC]],
    armor: [[['Baan Helm IV', 'Alloy Helm IV'], 'diff', LC], ['Diablos Mail IV', 'ok', LC], ['Hornetaur Vambraces IV', 'ok', LC], [['Diablos Coil IV', 'Ingot Coil IV'], 'diff', LC], ['Bone Greaves IV', 'ok', LC]] });

  // 充能斧
  const CB = ['G8C', 'GWALL'];
  const cbApex = ['Resplendent Montauban', 'one', ['G8C', 'G8RM']];
  const morph = [SK.morph, 'Lv4', '發動期間屬性攻擊 +25', 'ok', ['GWC', 'G8C']];
  mk('fire', 'charge-blade', { apex: cbApex, craft: ['Axelion Blade IV', 'one', ['GWALL', 'GWC', 'MHOCC'], '火龍系，由 Rathsblade II（冒險等級 27）升上嚟。'],
    skills: [morph],
    armor: [['Rath Heart Helm IV', 'ok', ['GWC', 'G8C']], ['Rathalos Mail IV', 'ok', ['GWC', 'G8C']], ['High Metal Braces IV', 'one', ['GWC']], ['Anja Coil IV', 'one', ['GWC']], ['Ruger Aidal Resolve IV', 'one', ['GWC']]],
    foot: 'GameWith 嘅係主角配裝；Game8 只寫櫻火龍＋火龍＋蠻顎龍。' });
  mk('water', 'charge-blade', { apex: cbApex, craft: ['Radiant Jyura Depth IV', 'one', ['GWALL', 'GWC'], 'Game8 過渡期：融光種泥魚龍充能斧Ⅱ，冒險等級 27。'],
    skills: [morph],
    armor: [['Bone Helm IV', 'ok', ['GWC', 'G8C']], ['Tzitzi Mail IV', 'ok', ['GWC', 'G8C']], ['Radiant Jyura Vambraces IV', 'ok', ['GWC', 'G8C']], ['Tzitzi Coil IV', 'ok', ['GWC', 'G8C']], ['Ruger Aidal Resolve IV', 'ok', ['GWC', 'G8C']]] });
  mk('thunder', 'charge-blade', { apex: cbApex, craft: ['Radiant Kadachi Kaina IV', 'ok', ['GWALL', 'GWC', 'G8C'], 'Game8：冒險等級 32 打完融光種飛雷龍可以做Ⅲ。'],
    skills: [morph],
    armor: [['Bone Helm IV', 'one', ['GWC']], ['Radiant Girros Mail IV', 'one', ['GWC']], ['Girros Vambraces IV', 'one', ['GWC']], ['Radiant Girros Coil IV', 'one', ['GWC']], ['Ruger Aidal Resolve IV', 'one', ['GWC']]],
    foot: 'Game8 確認用大凶顎龍＋融光種大凶顎龍，稀有度 10 雷屬性傷害最高；逐件清單出自 GameWith。' });
  mk('ice', 'charge-blade', { apex: cbApex, craft: ['Gigafrost IV', 'one', ['GWALL', 'MHOCC'], '風漂龍系。Game8 過渡期：Diablos Wall III，冒險等級 34。'],
    skills: [morph],
    armor: [['Bone Helm IV', 'one', ['GWALL']], ['High Metal Mail IV', 'one', ['GWALL']], ['Legiana Vambraces IV', 'ok', CB], [['High Metal Coil IV', 'Chainmail Belt IV'], 'diff', CB], [['High Metal Greaves IV', 'Ruger Aidal Resolve IV'], 'diff', CB]],
    foot: 'GameWith 嗰個防具表夾喺兩個配裝中間，對應唔係 100% 肯定。' });
  mk('dragon', 'charge-blade', { apex: null, craft: [['Blacksteel Charger IV', 'Blacksteel Charger III'], 'diff', CB, '同一條路線，Game8 寫到Ⅲ。'],
    skills: [[SK.morph + ' 或 ' + SK.health, '', 'GameWith：變形強化 4；Game8：體力增強 2', 'diff', CB]],
    armor: [['Bone Helm IV', 'ok', CB], ['Diablos Mail IV', 'ok', CB], ['Hornetaur Vambraces IV', 'ok', CB], ['High Metal Coil IV', 'one', ['G8C']], ['Bone Greaves IV', 'ok', CB]],
    foot: '未確認 Game8 係咪推薦龍屬性用主宰武器。' });

  window.MHO_BUILDS = { ELEMENTS, COMBOS, MIDORI, A, mk };
})();
