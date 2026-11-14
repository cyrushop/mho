// 彌多律火太刀配裝指南（繁體中文，表格版）。
// 資料搜集於 2026-11-14（GameWith、Game8、Fextralife、巴哈姆特、Ludens 等）。
// 可信程度 c：ok＝兩個或以上來源一致；one＝單一來源；diff＝來源矛盾；none＝搵唔到資料（冇估）。
// 名稱寫法：遊戲繁中譯名未核實嘅寫成「中文〔暫譯：英文原名〕」，畫面顯示「中文＊」，撳該行先見英文。
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
    g8midori: ['Game8 彌多律', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/602026'],
    g8dawn: ['Game8 光稜火太刀', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/637150'],
    fxAnja: ['Fextralife 蠻顎龍套裝Ⅰ', 'https://monsterhunteroutlanders.wiki.fextralife.com/Anjanath_Set_I'],
    fxOdo: ['Fextralife 防具頁（Odogaron Set III）', 'https://monsterhunteroutlanders.wiki.fextralife.com/Odogaron_Set_III'],
    fxItems: ['Fextralife 道具', 'https://monsterhunteroutlanders.wiki.fextralife.com/Items'],
    fxShop: ['Fextralife 商店', 'https://monsterhunteroutlanders.wiki.fextralife.com/Shop'],
    gwRath: ['GameWith 火龍套裝', 'https://gamewith.ai/monster-hunter-outlanders/en/armor/rathalos'],
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
    gwApex: ['GameWith 主宰武器', 'https://gamewith.ai/monster-hunter-outlanders/en/articles/apex-weapons'],
    gwZhAnja: ['GameWith 繁中 蠻顎龍偃月刀', 'https://gamewith.ai/monster-hunter-outlanders/zh-hant/weapons/anja-scimitar'],
    gwZhGirros: ['GameWith 繁中 大凶顎龍套裝', 'https://gamewith.ai/monster-hunter-outlanders/zh-hant/armor/great-girros'],
    bahaMidori: ['巴哈姆特 彌多律教學（1.0.1）', 'https://forum.gamer.com.tw/C.php?bsn=81450&snA=642'],
    bahaMidori2: ['巴哈姆特 彌多律心得', 'https://forum.gamer.com.tw/C.php?bsn=81450&snA=278'],
    ludMats: ['Ludens 素材取得一覽', 'https://www.ludens.com.tw/monster-hunter-outlanders-monster-materials/'],
    ludRuger: ['Ludens 光稜龍攻略', 'https://www.ludens.com.tw/monster-hunter-outlanders-ruger-aidal/'],
    pigAnja: ['piglife 蠻顎龍的鱗Ⅳ', 'https://piglife.tw/monster-hunter-outlanders/items/640071/'],
    ldMidori: ['LDPlayer 彌多律攻略', 'https://www.ldplayer.tw/blog/monster-hunter-outlanders-midori-guide.html'],
    ldBuddy: ['LDPlayer 隨從強度榜', 'https://www.ldplayer.tw/blog/monster-hunter-outlanders-buddy-tier-list.html'],
    ldTeam: ['LDPlayer 陣容懶人包', 'https://www.ldplayer.tw/blog/monster-hunter-outlanders-team-guide.html'],
    ldTier: ['LDPlayer 角色強度排行', 'https://www.ldplayer.tw/blog/monster-hunter-outlanders-adventurers-tier-list.html'],
    ytCombo: ['YouTube 彌多律小教室', 'https://www.youtube.com/shorts/kTNeL_p55dA'],
  };

  // 冒險等級 → 升級上限（稀有度）。只收錄攻略寫明嘅點。
  const AR_CAPS = [
    { ar: 16, r: 3 }, { ar: 21, r: 5 }, { ar: 34, r: 8 }, { ar: 41, r: 9 }, { ar: 44, r: 10 }, { ar: 47, r: 11 },
  ];
  const AR_SRC = ['gwLimit', 'gwCraft'];

  function capFor(ar) {
    if (!Number.isFinite(ar)) return { cap: null };
    let i = -1;
    AR_CAPS.forEach((c, k) => { if (ar >= c.ar) i = k; });
    if (i < 0) return { cap: null, below: AR_CAPS[0] };
    const cur = AR_CAPS[i], next = AR_CAPS[i + 1];
    return { cap: cur.r, exact: !next || next.r === cur.r + 1, next };
  }
  function arFor(r) {
    const e = AR_CAPS.find(c => c.r >= r);
    if (!e) return null;
    return { ar: e.ar, exact: e.r === r };
  }

  // ---------- 資料 ----------
  const MIDORI = [
    { k: '武器・首選', v: '光稜火太刀（光稜龍主宰武器，打造時揀火屬性）', c: 'ok', src: ['g8midori', 'g8dawn', 'bahaMidori', 'ludRuger'], needAR: 40,
      note: '英文名 Dawnlit Joyeuse。火屬性版本嘅屬性值同物理值係所有火太刀最高。解鎖：冒險等級 40 ＋ 完成主線任務〔暫譯：Sound the Horn Here〕，之後喺主宰挑戰打光稜龍。打造素材：融光結晶〔暫譯：Radiant Crystal〕×12 ＋ 融光寶玉〔暫譯：Radiant Gem〕×1（普通、主宰難度首次通關各送一粒寶玉）。注意：有網站轉述 GameWith 指主宰武器只喺主宰挑戰等指定挑戰先發揮全力。' },
    { k: '武器・平時用', v: '火龍太刀Ⅳ〔暫譯：Wyvern Blade "Blood" IV〕', c: 'ok', src: ['g8ls', 'gwMidori', 'bahaMidori'],
      note: '由火龍太刀Ⅱ〔暫譯：Wyvern Blade "Fall" II〕升到稀有度 10。Game8：可以鍛造同升級嘅最強火太刀。升級素材見下面「升級素材」。' },
    { k: '繪影套裝', v: '灼焰 ×4', c: 'ok', src: ['g8midori', 'ldMidori', 'bahaMidori'],
      note: '2 件：火屬性傷害 +5%。4 件：命中弱點後自身火屬性傷害 +24%，持續 20 秒。太刀段數多，4 件效果幾乎常駐。' },
    { k: '核心繪影', v: '融光種雌火龍（亦可用光稜龍）', c: 'ok', src: ['g8midori', 'bahaMidori'] },
    { k: '隨從', v: '小次郎', c: 'ok', src: ['g8midori', 'gwMidori', 'ldBuddy'],
      note: '彌多律專屬搭配，觸發裂破時提升火屬性同傷害。' },
    { k: '隊友', v: '菈雅、御谷龍之介、光赫', c: 'ok', src: ['g8midori', 'bahaMidori', 'ldTeam'],
      note: '菈雅：火屬性控場、減益。御谷龍之介：火屬性支援、全隊火傷增益。光赫：控場、閃光。另一配法：主角（拎火屬性武器）＋ 御谷龍之介 ＋ 菈雅。' },
    { k: '命座 1', v: '單人：剎那餘音／組隊：清音不息', c: 'ok', src: ['bahaMidori', 'bahaMidori2'],
      note: '剎那餘音：完美閃避判定放大，擦邊都觸發，之後招式二可以取消前搖。命座可以隨時重置。' },
    { k: '命座 2', v: '楓時雅致', c: 'one', src: ['bahaMidori2'], note: '招式二或者完美閃避命中可以疊傷害。' },
    { k: '命座 3', v: '楓時殘響', c: 'one', src: ['bahaMidori2', 'bahaMidori'],
      note: '用雅致嘅疊傷強化招式三。3 命參考：單人＝剎那餘音＋清音不息＋楓時雅致；極限輸出＝清音不息＋楓時雅致＋楓時殘響。' },
  ];

  const SKILLS = [
    { name: '火屬性傷害提升〔暫譯：Fire Damage Up〕', lv: 'Lv7', eff: '屬性攻擊 +50、火屬性傷害 +28%（對融光種 +70%）', c: 'ok', src: ['g8hbg', 'g8db', 'g8bow', 'bahaMidori'],
      note: '巴哈姆特攻略：目前版本屬性強化收益好高，優先疊滿。' },
    { name: '練氣增傷技能〔暫譯：Spirit Bind Blade〕', lv: 'Lv4', eff: '練氣升階後短時間內傷害 +16%、屬性攻擊 +25', c: 'one', src: ['g8sbb', 'gwls'],
      note: '已知只有大凶豺龍腕甲提供 Lv2，其餘 2 級喺邊件未有資料。' },
    { name: '防彈刀技能〔暫譯：Instinct〕', lv: 'Lv1', eff: '攻擊唔會彈刀', c: 'one', src: ['gwls'] },
  ];

  const ARMOR = [
    { part: '頭', main: '櫻火龍頭盔Ⅳ〔暫譯：Rath Heart Helm IV〕', skill: '火屬性傷害提升＊', early: '火龍', c: 'ok', src: ['bahaMidori', 'gwBest', 'g8ryu'] },
    { part: '身', main: '火龍鎧甲Ⅳ〔暫譯：Rathalos Mail IV〕', skill: '火屬性傷害提升＊ Lv3', early: '火龍', c: 'ok', src: ['bahaMidori', 'gwBest', 'g8ryu', 'gwRath'],
      note: '火屬性傷害提升等級：GameWith 寫稀有度 6–9 係 Lv2、10 係 Lv3；Game8 寫稀有度 6–8 係 Lv1。' },
    { part: '手', main: '大凶豺龍腕甲Ⅳ〔暫譯：Jagras Vambraces IV〕', skill: '練氣增傷＊ Lv2、威懾＊', early: '蠻顎龍', c: 'ok', src: ['bahaMidori', 'gwBest', 'gwArmor'],
      note: '技能英文原名：Spirit Bind Blade、Deterrence。' },
    { part: '腰', main: '蠻顎龍腰甲Ⅳ〔暫譯：Anja Coil IV〕', skill: '火屬性傷害提升＊', early: '蠻顎龍', c: 'ok', src: ['bahaMidori', 'gwBest', 'fxAnja'] },
    { part: '腿', main: '櫻火龍護腿Ⅳ〔暫譯：Rath Heart Greaves IV〕', skill: '技能未有資料', early: '蠻顎龍', c: 'ok', src: ['bahaMidori', 'gwBest'] },
  ];

  // 升級素材：r＝稀有度（數字或 [由, 至]）；m＝素材（null＝未有資料）
  const MATS = [
    { id: 'weapon', label: '武器', steps: [
      { r: [6, 8], m: null, c: 'none' },
      { r: 9, m: '狩玉Ⅳ ×2、火龍的鱗Ⅲ ×3、火龍的甲殼Ⅲ ×3', c: 'one', src: ['gwWBB'] },
      { r: 10, m: '火龍的鱗Ⅳ ×3（其餘素材未有資料）', c: 'one', src: ['gwRS4'] },
    ] },
    { id: 'head', label: '頭', steps: [
      { r: [6, 9], m: null, c: 'none' },
      { r: 10, m: '狩玉Ⅳ ×2、櫻火龍的堅殼Ⅳ ×3、櫻火龍的上鱗Ⅳ ×3、雌火龍的紅玉Ⅳ〔暫譯：Rathian Plate IV〕×3', c: 'one', src: ['g8pink'],
        note: 'Game8 標題寫「鍛造素材」，冇寫明係邊一級，但同稀有度 10 嘅規律吻合。' },
    ] },
    { id: 'body', label: '身', steps: [
      { r: 6, m: '（製作）狩玉Ⅱ ×1、火龍的甲殼Ⅱ ×2', c: 'diff', src: ['gwRath', 'g8rath'], note: 'Game8 寫製作要多 火龍的鱗Ⅱ ×2。' },
      { r: 7, m: '狩玉Ⅲ ×2、火龍的鱗Ⅱ ×3、火龍的甲殼Ⅱ ×3', c: 'one', src: ['gwRath'], note: 'GameWith 頁面標題重複，未能 100% 確定呢個表係身甲。' },
      { r: 8, m: null, c: 'none' },
      { r: 9, m: null, c: 'none' },
      { r: 10, m: '狩玉Ⅳ ×2、火龍的鱗Ⅳ ×3、火龍的甲殼Ⅳ ×3', c: 'one', src: ['gwRath'] },
    ] },
    { id: 'arms', label: '手', steps: [{ r: [1, 10], m: null, c: 'none' }] },
    { id: 'waist', label: '腰', steps: [
      { r: 3, m: '（製作）狩玉Ⅰ ×1、蠻顎龍的鱗Ⅰ ×1、蠻顎龍的牙Ⅰ ×1、蠻顎龍的鼻骨Ⅰ〔暫譯：Nosebone〕×1、蠻顎龍的尾巴Ⅰ ×1', c: 'ok', src: ['fxAnja', 'g8anja'] },
      { r: [4, 10], m: null, c: 'none' },
    ] },
    { id: 'legs', label: '腿', steps: [{ r: [1, 10], m: null, c: 'none' }] },
  ];

  // 每件每升一級要嘅狩玉
  const JADE = [
    { r: 6, each: '狩玉Ⅱ ×1', n: 1, kind: 'Ⅱ', c: 'one', src: ['gwPukei'] },
    { r: 7, each: '狩玉Ⅲ ×2', n: 2, kind: 'Ⅲ', c: 'ok', src: ['fxOdo', 'gwKB', 'gwRGJ'] },
    { r: 8, each: null, c: 'none' },
    { r: 9, each: '狩玉Ⅳ ×2', n: 2, kind: 'Ⅳ', c: 'ok', src: ['gwPukei', 'gwKB'] },
    { r: 10, each: '狩玉Ⅳ ×2', n: 2, kind: 'Ⅳ', c: 'ok', src: ['gwKB', 'gwRHB'] },
    { r: 11, each: null, c: 'none' },
  ];

  const DROPS = [
    { mon: '火龍', t2: '★8–9', t3: '★10–11', t4: '★12–13', c: 'ok', src: ['ludMats', 'g8rathDrop'] },
    { mon: '櫻火龍', t2: '—', t3: '—', t4: '★11–13', c: 'ok', src: ['ludMats'],
      note: '櫻火龍的上鱗：剝取、捕獲或任務報酬。櫻火龍的堅殼：要捕獲，或者破壞身體同頭部。' },
    { mon: '蠻顎龍', t2: '★7–9', t3: '★10–11', t4: '★12–13', c: 'ok', src: ['ludMats', 'pigAnja'],
      note: '破壞後腳一定掉 蠻顎龍的鱗Ⅳ。' },
    { mon: '大凶豺龍', t2: '?', t3: '?', t4: '★11–12', c: 'one', src: ['ludMats'] },
  ];

  const COMBO = [
    { k: '開場 1', v: '長按招式一（氣刃大迴旋）', c: 'one', src: ['ytCombo'] },
    { k: '開場 2', v: '閃吼', c: 'one', src: ['ytCombo'] },
    { k: '開場 3', v: '普攻三下（無雙氣刃斬）', c: 'one', src: ['ytCombo'] },
    { k: '開場 4', v: '招式二（櫻花氣刃斬）→ 快速紅刃', c: 'one', src: ['ytCombo'] },
    { k: '循環', v: '普攻／閃避反擊補練氣 → 招式二升黃刃、紅刃 → 招式一集氣斬補傷 → 倒地或暈時招式三爆發', c: 'one', src: ['ldMidori'] },
  ];

  const OTHER = [
    { el: '🔥 火', core: '蠻顎龍腕／腰／腿 ＋ 火龍或櫻火龍頭 ＋ 火龍身', set: '蠻顎龍套裝＊：3 件 → 火傷 +1', c: 'diff', src: ['g8bow', 'g8cb', 'g8db', 'g8hbg', 'g8ember'],
      note: '頭盔用火龍定櫻火龍，各攻略寫法唔同。套裝英文名 Anjanath Ember。' },
    { el: '💧 水', core: '泥魚龍＊ 3 件 ＋ 融光種泥魚龍＊ 腕、腿', set: '泥魚龍套裝＊：3 件 → 水傷 +1', c: 'one', src: ['g8hbg', 'g8bow', 'g8cb'],
      note: '英文原名：Jyuratodus、Radiant Jyuratodus、Jyuratodus Aquaguard。其餘部位可用眩鳥（Tzitzi-Ya-Ku）或融光種土砂龍（Radiant Barroth）。' },
    { el: '⚡ 雷', core: '大凶顎龍 ＋ 融光種大凶顎龍（稀有度 10 疊滿）', set: '大凶顎龍套裝＊：3 件 → 雷傷 +1', c: 'one', src: ['g8cb', 'gwZhGirros'],
      note: '套裝英文名 Great Girros Ambush。其他配法：融光種大凶顎龍＋Ingot 系列；飛雷龍（Tobi-Kadachi）＋融光種大凶顎龍。' },
    { el: '❄️ 冰', core: '鎖鏈＊ ＋ 風漂龍＊ ＋ 高級金屬＊', set: '未有資料', c: 'one', src: ['g8db'],
      note: '英文原名：Chainmail、Legiana、High Metal。攻略冇寫明部位。' },
    { el: '🐉 龍', core: '骨＊ ＋ 角龍＊ ＋ 甲蟲＊', set: '龍屬性套裝＊：3 件 → 龍傷 +1', c: 'one', src: ['g8bow'],
      note: '英文原名：Bone、Diablos、Hornetaur、Sepulcros Divinity。攻略冇寫明部位。' },
  ];

  // ---------- 小工具 ----------
  const CONF = { ok: '已核實', one: '單一來源', diff: '來源矛盾', none: '未有資料' };

  function el(tag, attrs, ...kids) {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v == null || v === false) continue;
      if (k === 'class') n.className = v;
      else if (k.startsWith('on')) n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v === true ? '' : v);
    }
    for (const c of kids.flat(Infinity)) if (c != null && c !== false) n.append(c.nodeType ? c : String(c));
    return n;
  }
  // 「中文〔暫譯：EN〕」→「中文＊」；英文收埋喺 ens
  function plain(text, ens) {
    if (text == null) return '';
    return String(text).replace(/〔暫譯：(.*?)〕/g, (_, en) => { if (ens) ens.push(en); return '＊'; });
  }
  function dot(c) { return el('span', { class: 'dot dot-' + c, title: CONF[c], 'aria-label': CONF[c] }); }

  // rows: [{ cells: [...], c, src, note, texts: [用嚟收集暫譯嘅原文], cls }]
  function table(headers, rows, opts) {
    const cols = headers.length + 1;
    const tbody = el('tbody');
    for (const r of rows) {
      const ens = [];
      (r.texts || []).forEach(t => plain(t, ens));
      if (r.note) plain(r.note, ens);
      const hasDetail = !!(r.note || (r.src && r.src.length) || ens.length);
      const detail = hasDetail ? el('tr', { class: 'detail', hidden: true },
        el('td', { colspan: cols },
          r.note ? el('div', {}, plain(r.note)) : null,
          ens.length ? el('div', { class: 'muted' }, '＊暫譯，英文原名：', ens.join('、')) : null,
          el('div', { class: 'muted' }, CONF[r.c] || '', r.src && r.src.length ? '・來源：' : '',
            (r.src || []).map((k, i) => [i ? '、' : '', el('a', { href: SRC[k][1], target: '_blank', rel: 'noopener noreferrer' }, SRC[k][0])])))) : null;
      const row = el('tr', { class: 'gr' + (hasDetail ? ' has-detail' : '') + (r.cls ? ' ' + r.cls : ''),
        onclick: hasDetail ? () => { detail.hidden = !detail.hidden; row.classList.toggle('open', !detail.hidden); } : null },
        r.cells.map((c, i) => el('td', { class: (opts && opts.colClass && opts.colClass[i]) || null }, c)),
        el('td', { class: 'dot-cell' }, dot(r.c || 'none')));
      tbody.append(row);
      if (detail) tbody.append(detail);
    }
    return el('table', { class: 'gt' },
      el('thead', {}, el('tr', {}, headers.map(h => el('th', {}, h)), el('th', { class: 'dot-cell' }, ''))),
      tbody);
  }
  function card(title, ...kids) { return el('section', { class: 'card' }, el('h2', {}, title), kids); }
  function rLabel(r) { return Array.isArray(r) ? `${r[0]}–${r[1]}` : String(r); }
  function rMin(r) { return Array.isArray(r) ? r[0] : r; }

  // ---------- 畫面 ----------
  function render(root) {
    let ar = NaN, matSel = 'weapon';
    try {
      ar = parseInt(localStorage.getItem('mho-guide-ar'), 10);
      matSel = localStorage.getItem('mho-guide-mat') || 'weapon';
    } catch { /* ignore */ }
    if (!Number.isFinite(ar)) ar = 46;

    const input = el('input', { id: 'guideAr', type: 'number', min: 1, max: 99, inputmode: 'numeric', value: ar, 'aria-label': '冒險等級' });
    const capOut = el('div', { class: 'cap-out' });
    const body = el('div');
    const step = d => () => { input.value = Math.max(1, (parseInt(input.value, 10) || 0) + d); update(); };

    const settings = el('section', { class: 'card' },
      el('div', { class: 'ar-row' },
        el('label', { for: 'guideAr' }, '我嘅冒險等級'),
        el('div', { class: 'stepper' },
          el('button', { class: 'small', 'aria-label': '減一級', onclick: step(-1) }, '−'),
          input,
          el('button', { class: 'small', 'aria-label': '加一級', onclick: step(1) }, '＋'))),
      capOut,
      el('div', { class: 'legend' },
        dot('ok'), ' 已核實　', dot('one'), ' 單一來源　', dot('diff'), ' 來源矛盾　', dot('none'), ' 未有資料',
        el('br'), '＊＝遊戲繁中譯名未核實。撳任何一行睇來源同英文原名。資料截至 2026-11-14。'));

    input.addEventListener('input', update);

    function update() {
      ar = parseInt(input.value, 10);
      try { localStorage.setItem('mho-guide-ar', String(ar)); } catch { /* ignore */ }
      const info = capFor(ar);
      capOut.replaceChildren();
      if (!Number.isFinite(ar)) capOut.append('請輸入冒險等級');
      else if (info.cap == null) capOut.append(el('b', {}, '升級上限：未有資料'), el('span', { class: 'muted' }, `（已知最低：冒險等級 ${info.below.ar} → 稀有度 ${info.below.r}）`));
      else {
        capOut.append(el('b', {}, `升級上限：稀有度 ${info.cap}`));
        if (!info.exact && info.next) capOut.append(el('span', { class: 'muted' }, `（可能更高；已知冒險等級 ${info.next.ar} → 稀有度 ${info.next.r}）`));
        else if (info.next) capOut.append(el('span', { class: 'muted' }, `（冒險等級 ${info.next.ar} → 稀有度 ${info.next.r}）`));
      }
      renderBody(info.cap);
    }

    function renderBody(cap) {
      const over = r => cap != null && rMin(r) > cap;
      const needTxt = r => { const a = arFor(rMin(r)); return a ? (a.exact ? `要冒險等級 ${a.ar}` : `最遲冒險等級 ${a.ar}`) : '要更高冒險等級'; };

      // 1. 彌多律
      const midori = card('🌸 彌多律配置',
        table(['項目', '推薦'], MIDORI.map(x => ({
          cells: [x.k, [plain(x.v), x.needAR && ar < x.needAR ? el('div', { class: 'warn-text' }, `要冒險等級 ${x.needAR}`) : null]],
          c: x.c, src: x.src, note: x.note, texts: [x.v],
        })), { colClass: ['k'] }));

      // 2. 技能
      const skills = card('🎯 目標技能',
        table(['技能', '目標', '效果'], SKILLS.map(x => ({
          cells: [plain(x.name), x.lv, x.eff], c: x.c, src: x.src, note: x.note, texts: [x.name],
        })), { colClass: ['k', 'lv'] }));

      // 3. 防具
      const armor = card('🛡️ 防具 5 件',
        table(['部位', '推薦（開咗櫻火龍）', '過渡'], ARMOR.map(x => ({
          cells: [x.part, [el('div', {}, plain(x.main)), el('div', { class: 'sub-text' }, x.skill)], x.early],
          c: x.c, src: x.src, note: x.note, texts: [x.main],
        })), { colClass: ['part', null, 'early'] }),
        el('p', { class: 'foot' }, '「過渡」＝未解鎖櫻火龍之前用邊隻魔物嘅防具（巴哈姆特）。Game8 另建議打普通魔物可改用居合拔刀＊配裝；GameWith 彌多律配裝主打反擊強化＊（＊英文：Flash Draw、Counter Boost）。'));

      // 4. 升級素材
      const segs = el('div', { class: 'seg', role: 'tablist' });
      const matBox = el('div');
      function showMat(id) {
        matSel = id;
        try { localStorage.setItem('mho-guide-mat', id); } catch { /* ignore */ }
        segs.querySelectorAll('button').forEach(b => b.setAttribute('aria-selected', String(b.dataset.id === id)));
        const item = MATS.find(m => m.id === id) || MATS[0];
        matBox.replaceChildren(table(['稀有度', '素材'], item.steps.map(st => ({
          cells: [rLabel(st.r), over(st.r) ? [plain(st.m) || '未有資料', el('div', { class: 'warn-text' }, needTxt(st.r))] : (plain(st.m) || '未有資料')],
          c: st.c, src: st.src, note: st.note, texts: [st.m], cls: over(st.r) ? 'locked' : null,
        })), { colClass: ['lv'] }));
      }
      MATS.forEach(m => segs.append(el('button', { 'data-id': m.id, role: 'tab', onclick: () => showMat(m.id) }, m.label)));
      const mats = card('🧱 升級素材（每件）', segs, matBox,
        el('p', { class: 'foot' }, '灰色＝超過你而家嘅升級上限。手、腿兩件嘅逐級素材暫時搵唔到資料。'));
      showMat(MATS.some(m => m.id === matSel) ? matSel : 'weapon');

      // 5. 狩玉
      const jadeRows = JADE.map(j => ({
        cells: [String(j.r), j.each || '未有資料', j.each ? `狩玉${j.kind} ×${j.n * 6}` : '—'],
        c: j.c, src: j.src, cls: over(j.r) ? 'locked' : null,
      }));
      let total = null;
      if (cap != null) {
        const steps = JADE.filter(j => j.kind === 'Ⅳ' && j.r <= cap);
        const iv = steps.reduce((s, j) => s + j.n * 6, 0);
        if (iv) {
          const ex = Math.ceil(iv / 3);
          const top = steps[steps.length - 1].r;
          total = el('div', { class: 'total' },
            el('b', {}, `由稀有度 8 升到 ${top}：狩玉Ⅳ 共 ${iv} 粒（6 件）`),
            cap > top ? el('div', { class: 'warn-text' }, `稀有度 ${top + 1}${cap > top + 1 ? `–${cap}` : ''} 要幾多狩玉未有資料，未計入。`) : null,
            el('div', { class: 'muted' }, `研究點數商店：400 點換 3 粒 → 換 ${ex} 次、${(ex * 400).toLocaleString()} 點；每週限 8 次 → 最少 ${Math.ceil(ex / 8)} 星期`),
            el('div', { class: 'muted' }, '推算：假設 6 件（5 件防具＋火龍太刀）都跟已知規律，每件稀有度 9、10 各要 2 粒。用光稜火太刀就減 1 件。'));
        }
      }
      const jade = card('💎 狩玉',
        table(['稀有度', '每件', '6 件合共'], jadeRows, { colClass: ['lv'] }),
        total,
        el('p', { class: 'foot' }, '狩玉Ⅲ：自由狩獵＊（難度Ⅲ）、野外狩獵＊、研究點數商店（200 點換 3 粒，每週 8 次）。狩玉Ⅳ：研究點數商店（400 點換 3 粒，每週 8 次）。＊英文：Free Hunt、Field Hunt。'));

      // 6. 素材掉落
      const drops = card('📍 素材喺邊度打',
        table(['魔物', 'Ⅱ級', 'Ⅲ級', 'Ⅳ級'], DROPS.map(d => ({
          cells: [d.mon, d.t2, d.t3, d.t4], c: d.c, src: d.src, note: d.note,
        })), { colClass: ['k'] }),
        el('p', { class: 'foot' }, '★＝魔物星級：打幾多星嘅魔物會掉嗰一級素材。'));

      // 7. 操作
      const combo = card('⚔️ 操作',
        table(['步驟', '動作'], COMBO.map(x => ({ cells: [x.k, x.v], c: x.c, src: x.src })), { colClass: ['k'] }));

      // 8. 其他屬性（收埋）
      const other = el('details', { class: 'card other' },
        el('summary', {}, '其他屬性配裝（參考）'),
        table(['屬性', '核心配法', '3 件套裝效果'], OTHER.map(o => ({
          cells: [o.el, o.core, o.set], c: o.c, src: o.src, note: o.note,
        })), { colClass: ['k'] }),
        el('p', { class: 'foot' }, '各屬性傷害提升 Lv7：屬性攻擊 +50、屬性傷害 +28%（對融光種 +70%）。'));

      body.replaceChildren(midori, skills, armor, mats, jade, drops, combo, other);
    }

    root.replaceChildren(settings, body);
    update();
  }

  window.MHO_GUIDE = { render, capFor };
})();
