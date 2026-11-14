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
      skill: { name: '雷屬性傷害提升〔暫譯：Thunder Damage Up〕', lv: 'Lv7', eff: '屬性攻擊 +50、雷屬性傷害 +28%（對融光種 +70%）', c: 'ok', src: ['g8ham', 'g8db'] },
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

  window.MHO_BUILDS = { ELEMENTS, COMBOS, MIDORI };
})();
