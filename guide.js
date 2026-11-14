// AR46 element build guide.
// Everything here comes from web search results gathered on 2026-11-14 (Game8,
// GameWith, Fextralife). Each fact carries a confidence level:
//   ok   = two or more sources agree
//   one  = only one source
//   diff = sources disagree
//   none = not found, so left blank (not guessed)
(function () {
  'use strict';

  const SRC = {
    g8bow: ['Game8 弓', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/635378'],
    g8cb: ['Game8 盾斧', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/634645'],
    g8db: ['Game8 雙劍', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/634604'],
    g8hbg: ['Game8 重弩', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/618476'],
    g8ham: ['Game8 大錘', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/635685'],
    g8lance: ['Game8 長槍', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/618563'],
    g8anja: ['Game8 Anjanath 套裝', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/636202'],
    g8ember: ['Game8 Anjanath Ember 套裝效果', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/637238'],
    g8rath: ['Game8 Rathalos 套裝', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/636227'],
    g8pink: ['Game8 Pink Rathian 套裝', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/636428'],
    fxAnja: ['Fextralife Anjanath Set I', 'https://monsterhunteroutlanders.wiki.fextralife.com/Anjanath_Set_I'],
    fxOdo: ['Fextralife Odogaron Set III', 'https://monsterhunteroutlanders.wiki.fextralife.com/Odogaron_Set_III'],
    fxItems: ['Fextralife 道具', 'https://monsterhunteroutlanders.wiki.fextralife.com/Items'],
    fxShop: ['Fextralife 商店', 'https://monsterhunteroutlanders.wiki.fextralife.com/Shop'],
    gwRath: ['GameWith Rathalos', 'https://gamewith.ai/monster-hunter-outlanders/en/armor/rathalos'],
    gwJyura: ['GameWith Jyuratodus', 'https://gamewith.ai/monster-hunter-outlanders/en/armor/jyuratodus'],
    gwLimit: ['GameWith 升級上限', 'https://gamewith.ai/monster-hunter-outlanders/en/articles/upgrade-limit-and-dismantle'],
    gwCraft: ['GameWith 武器製作', 'https://gamewith.ai/monster-hunter-outlanders/en/articles/weapon-crafting-guide'],
    gwKB: ['GameWith King Beetle', 'https://gamewith.ai/monster-hunter-outlanders/en/armor/king-beetle'],
    gwKBlegs: ['GameWith King Beetle Crura', 'https://gamewith.ai/monster-hunter-outlanders/en/armor/king-beetle/legs'],
    gwRGJ: ['GameWith Radiant Great Jagras', 'https://gamewith.ai/monster-hunter-outlanders/en/armor/radiant-great-jagras'],
    gwPukei: ['GameWith Radiant Pukei Hood', 'https://gamewith.ai/monster-hunter-outlanders/en/armor/radiant-pukei-pukei/head'],
    gwRHB: ['GameWith Rath Heart Braces', 'https://gamewith.ai/monster-hunter-outlanders/en/armor/pink-rathian/arms'],
    g8ls: ['Game8 太刀', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/618475'],
    g8ryu: ['Game8 Ryunosuke', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/635035'],
    g8sbb: ['Game8 Spirit Bind Blade', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/636336'],
    g8rathDrop: ['Game8 Rathalos 掉落', 'https://game8.co/games/Monster-Hunter-Outlanders/archives/635396'],
    gwls: ['GameWith 太刀', 'https://gamewith.ai/monster-hunter-outlanders/en/articles/best-long-sword-builds'],
    gwBest: ['GameWith 全武器配裝', 'https://gamewith.ai/monster-hunter-outlanders/en/articles/best-builds'],
    gwMidori: ['GameWith Midori', 'https://gamewith.ai/monster-hunter-outlanders/en/adventurers/midori'],
    gwArmor: ['GameWith 防具表', 'https://gamewith.ai/monster-hunter-outlanders/en/armor'],
    gwWBB: ['GameWith Wyvern Blade Blood', 'https://gamewith.ai/monster-hunter-outlanders/en/weapons/wyvern-blade-blood'],
    gwRS4: ['GameWith Rathalos Scale IV', 'https://gamewith.ai/monster-hunter-outlanders/en/items/rathalos-scale-4'],
  };

  const AR = { level: 46, cap: 10, conf: 'one', src: ['gwCraft', 'gwLimit'],
    note: 'AR44 解鎖 ★10、AR47 解鎖 ★11，所以 AR46 嘅升級上限係 ★10。AR44 呢個點只得 GameWith 武器製作攻略一個來源。' };

  // Fire Long Sword at AR46 (★10). Pieces named "IV" are the ★10 tier.
  const LS_FIRE = {
    title: '🔥 火屬性太刀 · AR46（★10）',
    skills: { text: '目標技能：Fire Damage Up Lv7 ＋ Spirit Bind Blade Lv4，另加 Instinct 防彈刀', conf: 'ok', src: ['gwls', 'g8ls'] },
    sbb: { text: 'Spirit Bind Blade Lv4：氣刃量表升級後短時間內傷害 +16%、屬性攻擊 +25', conf: 'one', src: ['g8sbb'] },
    weapon: {
      name: 'Wyvern Blade "Blood" IV（★10，由 Wyvern Blade "Fall" II 升上嚟）',
      conf: 'ok', src: ['g8ls', 'gwMidori', 'g8ryu'],
      note: 'Game8：未有 Apex 武器嘅話，係可以鍛造同升級嘅最強火太刀。',
      steps: [
        { r: '★9', mats: "Hunter's Jade IV ×2、Rathalos Scale III ×3、Rathalos Shell III ×3", conf: 'one', src: ['gwWBB'] },
        { r: '★10', mats: 'Rathalos Scale IV ×3（其餘素材搵唔到）', conf: 'one', src: ['gwRS4'] },
      ],
    },
    pieces: [
      { part: '頭', name: 'Rath Heart Helm IV', from: 'Pink Rathian', skill: 'Fire Damage Up', conf: 'ok', src: ['gwBest', 'g8ryu'],
        steps: [
          { r: '★10', mats: "Hunter's Jade IV ×2、Pink Rathian Carapace IV ×3、Pink Rathian Scale+ IV ×3、Rathian Plate IV ×3", conf: 'one', src: ['g8pink'],
            note: 'Game8 標題係「鍛造素材」，冇寫明係邊一級，但同 ★10 嘅規律吻合。' },
        ] },
      { part: '胸', name: 'Rathalos Mail IV', from: 'Rathalos', skill: 'Fire Damage Up Lv3（★10）', conf: 'ok', src: ['gwBest', 'g8ryu', 'gwRath', 'g8rath'],
        steps: [
          { r: '★6 製作', mats: "Hunter's Jade II ×1、Rathalos Shell II ×2（Game8 另加 Rathalos Scale II ×2）", conf: 'diff', src: ['gwRath', 'g8rath'] },
          { r: '★7', mats: "Hunter's Jade III ×2、Rathalos Scale II ×3、Rathalos Shell II ×3", conf: 'one', src: ['gwRath'], note: 'GameWith 頁面標題重複，未能 100% 確定呢個表係胸甲。' },
          { r: '★8', mats: null, conf: 'none', src: [] },
          { r: '★9', mats: null, conf: 'none', src: [] },
          { r: '★10', mats: "Hunter's Jade IV ×2、Rathalos Scale IV ×3、Rathalos Shell IV ×3", conf: 'one', src: ['gwRath'] },
        ] },
      { part: '腕', name: 'Jagras Vambraces IV', from: 'Great Jagras', skill: 'Spirit Bind Blade Lv2、Deterrence Lv1', conf: 'one', src: ['gwBest', 'gwMidori', 'gwArmor'],
        steps: [] },
      { part: '腰', name: 'Anja Coil IV', from: 'Anjanath', skill: 'Fire Damage Up', conf: 'one', src: ['gwBest', 'fxAnja'],
        steps: [
          { r: '★3 製作', mats: "Hunter's Jade I ×1、Anjanath Scale I ×1、Fang I ×1、Nosebone I ×1、Tail I ×1", conf: 'ok', src: ['fxAnja', 'g8anja'] },
          { r: '★4–10', mats: null, conf: 'none', src: [] },
        ] },
      { part: '腳', name: 'Rath Heart Greaves IV', from: 'Pink Rathian', skill: '未核實', conf: 'one', src: ['gwBest'],
        steps: [] },
    ],
    caveats: [
      { text: '呢 5 件嘅組合出自 GameWith「全武器配裝」嘅太刀推介。頭、胸同 Game8 Ryunosuke 火太刀一致；腕、腰、腳只有 GameWith 一個來源。搜尋摘要冇寫明呢套係專為火屬性而配，係按件數技能推斷。', conf: 'one', src: ['gwBest', 'g8ryu'] },
      { text: 'Spirit Bind Blade 已知只有 Jagras Vambraces 提供 Lv2，其餘 2 點喺邊件搵唔到資料。', conf: 'none', src: ['gwArmor'] },
    ],
    drops: [
      { text: 'Rathalos Shell II：8–9★ Rathalos 掉落；Rathalos Shell III：10–11★ Rathalos 掉落', conf: 'one', src: ['g8rathDrop'] },
    ],
    jadeEstimate: '推算：假設每件都跟 King Beetle、Radiant Pukei 嘅規律（★9、★10 各要 Jade IV ×2），5 件防具由 ★8 升到 ★10 共需 20 粒 Hunter\'s Jade IV，連武器 ★9 嗰 2 粒就係 22 粒。研究點數商店 400 RP 換 3 粒、每週限 8 次（最多 24 粒），即大約 8 次、3,200 RP。武器 ★10 要幾多粒 Jade 未有資料。',
  };

  const MAX_EFFECT = { text: '屬性傷害提升 Lv7（滿級）：屬性攻擊 +50、屬性傷害 +28%（對 Radiant 怪物 +70%）', conf: 'ok', src: ['g8hbg', 'g8db', 'g8bow'] };

  const ELEMENTS = [
    {
      id: 'fire', icon: '🔥', name: '火', skill: 'Fire Damage Up',
      core: { text: 'Anjanath 腕／腰／腳 ＋ 頭（Pink Rathian 嘅 Rath Heart Helm）＋ 胸（Rathalos Mail）→ Fire Damage Up 7/7', conf: 'diff', src: ['g8bow', 'g8cb', 'g8db', 'g8hbg'],
        note: '頭盔來源唔一致：Game8 重弩攻略寫 Rathalos 頭盔，弓攻略寫 Pink Rathian 頭盔，盾斧同雙劍攻略寫 Rath Heart Helm IV。' },
      pieces: [
        { part: '頭', name: 'Rath Heart Helm（Pink Rathian）或 Rathalos Helm', conf: 'diff', src: ['g8bow', 'g8hbg', 'g8cb'] },
        { part: '胸', name: 'Rathalos Mail：★10（Mail IV）有 Fire Damage Up Lv3', conf: 'diff', src: ['gwRath', 'g8rath'],
          note: 'GameWith 寫 ★6–9 Lv2、★10 Lv3；Game8 寫 ★6–8 Lv1。' },
        { part: '腕', name: 'Anja Vambraces', conf: 'ok', src: ['g8anja', 'fxAnja'] },
        { part: '腰', name: 'Anja Coil（Fire Damage Up）', conf: 'one', src: ['fxAnja'] },
        { part: '腳', name: 'Anja Greaves（Fire Damage Up）', conf: 'one', src: ['fxAnja'] },
      ],
      setBonus: { text: 'Anjanath Ember：任何品質嘅 3 件 → Fire Damage Up +1', conf: 'ok', src: ['g8ember', 'g8cb'] },
      mats: [
        { item: 'Anja Vambraces／Greaves（製作）', need: "Hunter's Jade I、Anjanath Scale I、Anjanath Pelt I（數量未核實）", conf: 'ok', src: ['fxAnja', 'g8anja'] },
        { item: 'Anja Coil（製作）', need: "Hunter's Jade I、Anjanath Scale I、Fang I、Nosebone I、Tail I（數量未核實）", conf: 'ok', src: ['fxAnja', 'g8anja'] },
        { item: 'Rathalos Mail（★6 製作）', need: "Hunter's Jade II ×1、Rathalos Shell II ×2（Game8 另加 Rathalos Scale II ×2）", conf: 'diff', src: ['gwRath', 'g8rath'] },
        { item: 'Rath Heart Braces（★10 升級）', need: "Hunter's Jade IV ×2、Pink Rathian Scale+ IV ×3、Rathian Webbing IV ×3", conf: 'one', src: ['gwRHB'] },
      ],
    },
    {
      id: 'water', icon: '💧', name: '水', skill: 'Water Damage Up',
      core: { text: 'Jyuratodus 3 件（2 點；★5 起 3 點）＋ Radiant Jyuratodus 腕＋腳（+2 點），其餘位用 Tzitzi-Ya-Ku 或 Radiant Barroth 補到 7/7', conf: 'one', src: ['g8hbg', 'g8bow', 'g8cb'],
        note: '各攻略冇列出統一嘅 5 件清單。盾斧攻略建議 Tzitzi-Ya-Ku ＋ Radiant Jyuratodus。' },
      pieces: [
        { part: '腕', name: 'Radiant Jyura Vambraces', conf: 'one', src: ['g8hbg'] },
        { part: '腳', name: 'Radiant Jyura Greaves', conf: 'one', src: ['g8hbg'] },
        { part: '其餘 3 件', name: 'Jyuratodus 套裝（邊 3 個部位未核實）', conf: 'none', src: ['gwJyura'] },
      ],
      setBonus: { text: 'Jyuratodus Aquaguard：3 件 → Water Damage Up +1', conf: 'one', src: ['g8db', 'g8ham', 'g8bow', 'g8cb'] },
      mats: [],
    },
    {
      id: 'thunder', icon: '⚡', name: '雷', skill: 'Thunder Damage Up',
      core: { text: 'Great Girros ＋ Radiant Great Girros → ★10 時 Thunder Damage Up 7/7', conf: 'one', src: ['g8cb'],
        note: '其他攻略嘅配法：雙劍、大錘用 Radiant Girros ＋ Ingot；重弩用 Tobi-Kadachi ＋ Radiant Great Girros。' },
      pieces: [
        { part: '過渡期', name: 'Kadachi Helm II、Kadachi Coil II（AR22 打完 Tobi-Kadachi 之後）', conf: 'one', src: ['g8cb'] },
      ],
      setBonus: { text: 'Great Girros Ambush：3 件 → Thunder Damage Up +1', conf: 'one', src: ['g8db', 'g8ham', 'g8bow', 'g8cb'] },
      mats: [],
    },
    {
      id: 'ice', icon: '❄️', name: '冰', skill: 'Ice Damage Up',
      core: { text: 'Chainmail ＋ Legiana ＋ High Metal 防具 → 疊滿 Ice Damage Up', conf: 'one', src: ['g8db', 'g8ham', 'g8bow', 'g8cb'],
        note: '攻略冇寫明用邊幾個部位。' },
      pieces: [],
      setBonus: null,
      mats: [],
    },
    {
      id: 'dragon', icon: '🐉', name: '龍', skill: 'Dragon Damage Up',
      core: { text: 'Bone ＋ Diablos ＋ Hornetaur 防具 → Dragon Damage Up 7/7', conf: 'one', src: ['g8bow'],
        note: '攻略冇寫明用邊幾個部位。' },
      pieces: [],
      setBonus: { text: 'Sepulcros Divinity：3 件 → Dragon Damage Up +1', conf: 'one', src: ['g8db', 'g8ham', 'g8bow', 'g8cb'] },
      mats: [],
    },
  ];

  // Hunter's Jade per upgrade step (per piece). Monster parts differ per piece.
  const JADE = [
    { to: '★5–6', jade: "Hunter's Jade II（★6：×1）", conf: 'one', src: ['gwPukei'] },
    { to: '★7', jade: "Hunter's Jade III ×2", conf: 'ok', src: ['fxOdo', 'gwKB', 'gwRGJ'] },
    { to: '★8', jade: null, conf: 'none', src: [] },
    { to: '★9', jade: "Hunter's Jade IV ×2", conf: 'ok', src: ['gwPukei', 'gwKB'] },
    { to: '★10', jade: "Hunter's Jade IV ×2", conf: 'ok', src: ['gwKB', 'gwRHB'] },
  ];
  const JADE_SOURCES = [
    { text: "Hunter's Jade III：Free Hunt（難度 III）、Field Hunt、研究點數商店（200 RP 換 3 粒，每週限 8 次）", conf: 'one', src: ['fxItems', 'fxShop'] },
    { text: "Hunter's Jade IV：研究點數商店（400 RP 換 3 粒，每週限 8 次）", conf: 'one', src: ['fxShop'] },
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
      el('div', {}, badge(f.conf), ' ', f.text || f.name),
      f.note ? el('div', { class: 'small-text muted' }, f.note) : null,
      el('div', { class: 'small-text' }, srcLinks(f.src)));
  }

  function stepTable(steps) {
    if (!steps.length) return el('div', { class: 'small-text muted' }, badge('none'), ' 逐級素材搵唔到資料。');
    return el('table', { class: 'steps' }, el('tbody', {}, steps.map(st => el('tr', {},
      el('td', { class: 'part', style: 'width:64px' }, st.r),
      el('td', {}, badge(st.conf), ' ', st.mats || '搵唔到資料',
        st.note ? el('div', { class: 'small-text muted' }, st.note) : null,
        el('div', { class: 'small-text' }, srcLinks(st.src)))))));
  }

  function renderBuild() {
    const b = LS_FIRE;
    return el('div', { class: 'card result full' },
      el('h2', {}, b.title),
      fact(b.skills), fact(b.sbb),
      el('h3', {}, '武器'),
      el('div', {}, badge(b.weapon.conf), ' ', el('b', {}, b.weapon.name)),
      el('div', { class: 'small-text muted' }, b.weapon.note),
      el('div', { class: 'small-text' }, srcLinks(b.weapon.src)),
      stepTable(b.weapon.steps),
      el('h3', {}, '防具 5 件'),
      el('table', {}, el('tbody', {}, b.pieces.map(p => el('tr', {},
        el('td', { class: 'part' }, p.part),
        el('td', {}, badge(p.conf), ' ', el('b', {}, p.name),
          el('div', { class: 'small-text muted' }, `${p.from} · ${p.skill}`),
          el('div', { class: 'small-text' }, srcLinks(p.src))))))),
      b.caveats.map(fact),
      el('h3', {}, '逐件逐級素材'),
      b.pieces.map(p => el('details', {},
        el('summary', {}, `${p.part}：${p.name}`),
        stepTable(p.steps))),
      el('h3', {}, '素材喺邊度打'),
      b.drops.map(fact),
      el('h3', {}, "Hunter's Jade IV 總數"),
      el('div', { class: 'note', style: 'margin:0' }, el('span', { class: 'conf conf-none' }, '推算'), ' ', b.jadeEstimate),
    );
  }

  function render(root) {
    let current = 'fire';
    try { current = localStorage.getItem('mho-guide-el') || 'fire'; } catch { /* ignore */ }

    const head = el('div', { class: 'card' },
      el('h2', {}, `AR ${AR.level} · 升級上限 ★${AR.cap}`),
      el('div', {}, badge(AR.conf), ' ', AR.note),
      el('div', { class: 'small-text' }, srcLinks(AR.src)),
      el('div', { class: 'fact', style: 'margin-top:8px' }, badge(MAX_EFFECT.conf), ' ', MAX_EFFECT.text, el('div', { class: 'small-text' }, srcLinks(MAX_EFFECT.src))),
      el('div', { class: 'note', style: 'margin-bottom:0' },
        '資料來自 2026-11-14 嘅網上搜尋結果，遊戲上線先兩星期，數值可能隨時改。標籤：',
        badge('ok'), ' ', badge('one'), ' ', badge('diff'), ' ', badge('none'),
        '。製作或升級之前，請以遊戲內鍛造畫面為準。'),
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
          el('h2', {}, `${e.icon} ${e.name}屬性 · ${e.skill}`),
          el('h3', {}, '核心配法'), fact(e.core),
          el('h3', {}, '部位'),
          e.pieces.length
            ? el('table', {}, el('tbody', {}, e.pieces.map(p => el('tr', {},
                el('td', { class: 'part' }, p.part),
                el('td', {}, badge(p.conf), ' ', p.name,
                  p.note ? el('div', { class: 'small-text muted' }, p.note) : null,
                  el('div', { class: 'small-text' }, srcLinks(p.src)))))))
            : el('div', { class: 'small-text muted' }, badge('none'), ' 搜尋結果冇逐個部位嘅清單。'),
          el('h3', {}, '套裝效果'),
          e.setBonus ? fact(e.setBonus) : el('div', { class: 'small-text muted' }, badge('none'), ' 搵唔到資料。'),
          el('h3', {}, '已知素材'),
          e.mats.length
            ? el('table', {}, el('tbody', {}, e.mats.map(m => el('tr', {},
                el('td', {}, el('b', {}, m.item), el('div', {}, badge(m.conf), ' ', m.need), el('div', { class: 'small-text' }, srcLinks(m.src)))))))
            : el('div', { class: 'small-text muted' }, badge('none'), ' 呢個屬性嘅怪物素材搵唔到可靠資料。每級都要嘅獵人玉見下面。'),
        ),
      );
    }
    for (const e of ELEMENTS) {
      tabs.append(el('button', { role: 'tab', 'data-id': e.id, onclick: () => show(e.id) }, `${e.icon} ${e.name}`));
    }

    const jade = el('div', { class: 'card' },
      el('h2', {}, '每升一級要嘅獵人玉（每件）'),
      el('table', {},
        el('thead', {}, el('tr', {}, el('th', {}, '升到'), el('th', {}, '獵人玉'))),
        el('tbody', {}, JADE.map(j => el('tr', {},
          el('td', { class: 'part', style: 'width:56px' }, j.to),
          el('td', {}, badge(j.conf), ' ', j.jade || '搵唔到資料', el('div', { class: 'small-text' }, srcLinks(j.src))))))),
      el('div', { class: 'small-text muted', style: 'margin-top:6px' }, '每件仲要另外加嗰隻怪物嘅素材，種類同數量逐件唔同。'),
      el('h3', {}, '獵人玉點樣攞'),
      JADE_SOURCES.map(fact),
    );

    root.replaceChildren(head, renderBuild(), el('h2', { class: 'section-title' }, '其他屬性'), el('div', { class: 'card', style: 'padding:8px' }, tabs), body, jade);
    show(ELEMENTS.some(e => e.id === current) ? current : 'fire');
  }

  window.MHO_GUIDE = { render, AR };
})();
