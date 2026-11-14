// 屬性配裝指南（繁體中文，表格版）：頂部 5 個屬性分頁，再揀武器。
// 配裝資料喺 builds.js；呢度係畫面同通用資料（來源、冒險等級上限、狩玉）。
// 可信程度 c：ok＝兩個或以上來源一致；one＝單一來源；diff＝來源矛盾；none＝搵唔到資料（冇估）。
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
    fxArmor: ['Fextralife 防具一覽', 'https://monsterhunteroutlanders.wiki.fextralife.com/Armor'],
    fxPinkV: ['Fextralife 防具頁（Radiant Pink Rathian Set V）', 'https://monsterhunteroutlanders.wiki.fextralife.com/Radiant_Pink_Rathian_Set_V'],
  };

  // 冒險等級 → 升級上限（稀有度）。只收錄攻略寫明嘅點。
  const AR_CAPS = [
    { ar: 16, r: 3 }, { ar: 21, r: 5 }, { ar: 34, r: 8 }, { ar: 41, r: 9 }, { ar: 44, r: 10 }, { ar: 47, r: 11 },
  ];

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

  // 每件每升一級要嘅狩玉（所有配裝通用）
  const JADE = [
    { r: 6, each: '狩玉Ⅱ ×1', n: 1, kind: 'Ⅱ', c: 'one', src: ['gwPukei'] },
    { r: 7, each: '狩玉Ⅲ ×2', n: 2, kind: 'Ⅲ', c: 'ok', src: ['fxOdo', 'gwKB', 'gwRGJ'] },
    { r: 8, each: null, c: 'none' },
    { r: 9, each: '狩玉Ⅳ ×2', n: 2, kind: 'Ⅳ', c: 'ok', src: ['gwPukei', 'gwKB'] },
    { r: 10, each: '狩玉Ⅳ ×2', n: 2, kind: 'Ⅳ', c: 'ok', src: ['gwKB', 'gwRHB'] },
    { r: 11, each: null, c: 'none', note: '已知有狩玉Ⅴ（用喺稀有度 12 防具），稀有度 11 要咩未有資料。', src: ['fxPinkV'] },
  ];

  const WEAPONS = [
    { id: 'great-sword', name: '大劍' }, { id: 'long-sword', name: '太刀' },
    { id: 'dual-blades', name: '雙劍' }, { id: 'hammer', name: '大錘' },
    { id: 'lance', name: '長槍' }, { id: 'charge-blade', name: '充能斧' },
    { id: 'heavy-bowgun', name: '重弩' }, { id: 'bow', name: '弓' },
  ];
  const EL_ORDER = ['fire', 'water', 'thunder', 'ice', 'dragon'];

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
  function plain(text, ens) {
    if (text == null) return '';
    return String(text).replace(/〔暫譯：(.*?)〕/g, (_, en) => { if (ens) ens.push(en); return '＊'; });
  }
  function footText(t) { return String(t).replace(/〔暫譯：(.*?)〕/g, '＊（$1）'); }
  function dot(c) { return el('span', { class: 'dot dot-' + c, title: CONF[c], 'aria-label': CONF[c] }); }
  function srcLink(s) {
    const [label, url] = Array.isArray(s) ? s : (SRC[s] || [s, null]);
    return url ? el('a', { href: url, target: '_blank', rel: 'noopener noreferrer' }, label) : label;
  }

  // rows: [{ cells, c, src, note, texts, ens, cls }]
  function table(headers, rows, colClass) {
    const cols = headers.length + 1;
    const tbody = el('tbody');
    for (const r of rows) {
      const ens = [...(r.ens || [])];
      (r.texts || []).forEach(t => plain(t, ens));
      if (r.note) plain(r.note, ens);
      const hasDetail = !!(r.note || (r.src && r.src.length) || ens.length);
      const detail = hasDetail ? el('tr', { class: 'detail', hidden: true },
        el('td', { colspan: cols },
          r.note ? el('div', {}, plain(r.note)) : null,
          ens.length ? el('div', { class: 'muted' }, '＊暫譯，英文原名：', [...new Set(ens)].join('、')) : null,
          el('div', { class: 'muted' }, CONF[r.c] || '', r.src && r.src.length ? '・來源：' : '',
            (r.src || []).map((s, i) => [i ? '、' : '', srcLink(s)])))) : null;
      const row = el('tr', { class: 'gr' + (hasDetail ? ' has-detail' : '') + (r.cls ? ' ' + r.cls : ''),
        onclick: hasDetail ? () => { detail.hidden = !detail.hidden; row.classList.toggle('open', !detail.hidden); } : null },
        r.cells.map((c, i) => el('td', { class: (colClass && colClass[i]) || null }, c)),
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
  function load(k, d) { try { return localStorage.getItem(k) ?? d; } catch { return d; } }
  function store(k, v) { try { localStorage.setItem(k, v); } catch { /* ignore */ } }

  // ---------- 畫面 ----------
  function render(root) {
    const B = window.MHO_BUILDS;
    let ar = parseInt(load('mho-guide-ar', '46'), 10);
    if (!Number.isFinite(ar)) ar = 46;
    let elId = load('mho-guide-el2', 'fire');
    if (!B.ELEMENTS[elId]) elId = 'fire';
    let wp = load('mho-guide-wp', 'long-sword');
    if (!WEAPONS.some(w => w.id === wp)) wp = 'long-sword';
    let matSel = load('mho-guide-mat', 'weapon');

    // 屬性分頁（頂部）
    const elTabs = el('nav', { class: 'el-top', role: 'tablist', 'aria-label': '屬性' },
      EL_ORDER.map(id => el('button', { role: 'tab', 'data-id': id, onclick: () => { elId = id; store('mho-guide-el2', id); draw(); window.scrollTo(0, 0); } },
        el('span', { class: 'ico' }, B.ELEMENTS[id].icon), el('span', {}, B.ELEMENTS[id].name))));

    // 設定：冒險等級 + 武器
    const input = el('input', { id: 'guideAr', type: 'number', min: 1, max: 99, inputmode: 'numeric', value: ar, 'aria-label': '冒險等級' });
    const capOut = el('div', { class: 'cap-out' });
    const stepBy = d => () => { input.value = Math.max(1, (parseInt(input.value, 10) || 0) + d); onAr(); };
    input.addEventListener('input', onAr);
    const wpGrid = el('div', { class: 'wp-grid', role: 'tablist', 'aria-label': '武器' },
      WEAPONS.map(w => el('button', { role: 'tab', 'data-id': w.id, onclick: () => { wp = w.id; store('mho-guide-wp', w.id); draw(); } }, w.name)));
    const settings = el('section', { class: 'card' },
      el('div', { class: 'ar-row' },
        el('label', { for: 'guideAr' }, '我嘅冒險等級'),
        el('div', { class: 'stepper' },
          el('button', { class: 'small', 'aria-label': '減一級', onclick: stepBy(-1) }, '−'),
          input,
          el('button', { class: 'small', 'aria-label': '加一級', onclick: stepBy(1) }, '＋'))),
      capOut,
      el('div', { class: 'wp-label' }, '武器'),
      wpGrid,
      el('div', { class: 'legend' },
        dot('ok'), ' 已核實　', dot('one'), ' 單一來源　', dot('diff'), ' 來源矛盾　', dot('none'), ' 未有資料',
        el('br'), '＊＝遊戲繁中譯名未核實。撳任何一行睇來源同英文原名。資料截至 2026-11-14。'));

    const body = el('div');

    function onAr() {
      ar = parseInt(input.value, 10);
      store('mho-guide-ar', String(ar));
      drawCap();
      drawBody();
    }
    function drawCap() {
      const info = capFor(ar);
      capOut.replaceChildren();
      if (!Number.isFinite(ar)) capOut.append('請輸入冒險等級');
      else if (info.cap == null) capOut.append(el('b', {}, '升級上限：未有資料'), el('span', { class: 'muted' }, `（已知最低：冒險等級 ${info.below.ar} → 稀有度 ${info.below.r}）`));
      else {
        capOut.append(el('b', {}, `升級上限：稀有度 ${info.cap}`));
        if (info.next) capOut.append(el('span', { class: 'muted' }, info.exact
          ? `（冒險等級 ${info.next.ar} → 稀有度 ${info.next.r}）`
          : `（可能更高；已知冒險等級 ${info.next.ar} → 稀有度 ${info.next.r}）`));
      }
    }
    function draw() {
      elTabs.querySelectorAll('button').forEach(b => b.setAttribute('aria-selected', String(b.dataset.id === elId)));
      wpGrid.querySelectorAll('button').forEach(b => b.setAttribute('aria-selected', String(b.dataset.id === wp)));
      drawCap();
      drawBody();
    }

    function drawBody() {
      const cap = capFor(ar).cap;
      const E = B.ELEMENTS[elId];
      const W = WEAPONS.find(w => w.id === wp);
      const combo = B.COMBOS[`${elId}/${wp}`];
      const over = r => cap != null && rMin(r) > cap;
      const needTxt = r => { const a = arFor(rMin(r)); return a ? (a.exact ? `要冒險等級 ${a.ar}` : `最遲冒險等級 ${a.ar}`) : '要更高冒險等級'; };
      const out = [];

      out.push(el('h2', { class: 'page-title' }, `${E.icon} ${E.name}屬性 · ${W.name}`));

      if (!combo) {
        out.push(el('div', { class: 'card notice' },
          el('b', {}, `未搵到「${E.name}屬性${W.name}」嘅專用攻略配裝。`),
          el('div', { class: 'muted' }, '下面係呢個屬性嘅通用防具配法，所有武器都適用；武器專用技能同武器推薦未有資料。')));
      }

      // 武器
      if (combo && combo.weapon) {
        out.push(card('🗡️ 武器', table(['用途', '推薦'], combo.weapon.map(x => ({
          cells: [x.k, [plain(x.v), x.sub ? el('div', { class: 'sub-text' }, x.sub) : null, x.needAR && ar < x.needAR ? el('div', { class: 'warn-text' }, `要冒險等級 ${x.needAR}`) : null]],
          c: x.c, src: x.src, note: x.note, texts: [x.v], ens: x.ens,
        })), ['k'])));
      }

      // 技能
      const skillRows = [E.skill].concat((combo && combo.skills) || []);
      out.push(card('🎯 目標技能', table(['技能', '目標', '效果'], skillRows.map(x => ({
        cells: [plain(x.name), x.lv, x.eff], c: x.c, src: x.src, note: x.note, texts: [x.name], ens: x.ens,
      })), ['k', 'lv'])));

      // 防具
      if (combo && combo.armor) {
        const hasEarly = combo.armor.some(a => a.early);
        const headers = hasEarly ? ['部位', '推薦', '過渡'] : ['部位', '推薦'];
        out.push(card('🛡️ 防具 5 件',
          table(headers, combo.armor.map(x => ({
            cells: [x.part, [el('div', {}, plain(x.main)), x.skill ? el('div', { class: 'sub-text' }, plain(x.skill)) : null]].concat(hasEarly ? [x.early || ''] : []),
            c: x.c, src: x.src, note: x.note, texts: [x.main, x.skill], ens: x.ens,
          })), ['part', null, 'early']),
          combo.armorFoot ? el('p', { class: 'foot' }, footText(combo.armorFoot)) : null));
      } else {
        out.push(card('🛡️ 防具（通用配法）', table(['項目', '內容'], [
          { cells: ['核心', plain(E.core.text)], c: E.core.c, src: E.core.src, note: E.core.note, texts: [E.core.text], ens: E.core.ens },
        ], ['k']), combo && combo.armorFoot ? el('p', { class: 'foot' }, footText(combo.armorFoot)) : null));
      }

      // 套裝效果 + 其後
      const extra = [];
      if (E.set) extra.push({ cells: ['3 件套裝', plain(E.set.text)], c: E.set.c, src: E.set.src, note: E.set.note, texts: [E.set.text], ens: E.set.ens });
      else extra.push({ cells: ['3 件套裝', '未有資料'], c: 'none' });
      if (combo && combo.armor) extra.push({ cells: ['通用配法', plain(E.core.text)], c: E.core.c, src: E.core.src, note: E.core.note, texts: [E.core.text], ens: E.core.ens });
      if (E.later) extra.push({ cells: ['稀有度 11', plain(E.later.text)], c: E.later.c, src: E.later.src, texts: [E.later.text], ens: E.later.ens });
      out.push(card('🧩 套裝同補充', table(['項目', '內容'], extra, ['k'])));

      // 彌多律（只喺 火/太刀）
      if (combo && combo.midori) {
        out.push(card('🌸 彌多律（火太刀專用）', table(['項目', '推薦'], B.MIDORI.map(x => ({
          cells: [x.k, plain(x.v)], c: x.c, src: x.src, note: x.note, texts: [x.v], ens: x.ens,
        })), ['k'])));
      }

      // 升級素材
      if (combo && combo.mats) {
        const segs = el('div', { class: 'seg', role: 'tablist' });
        const box = el('div');
        const showMat = id => {
          matSel = id; store('mho-guide-mat', id);
          segs.querySelectorAll('button').forEach(b => b.setAttribute('aria-selected', String(b.dataset.id === id)));
          const item = combo.mats.find(m => m.id === id) || combo.mats[0];
          box.replaceChildren(table(['稀有度', '素材'], item.steps.map(st => ({
            cells: [rLabel(st.r), over(st.r) ? [plain(st.m) || '未有資料', el('div', { class: 'warn-text' }, needTxt(st.r))] : (plain(st.m) || '未有資料')],
            c: st.c, src: st.src, note: st.note, texts: [st.m], cls: over(st.r) ? 'locked' : null,
          })), ['lv']));
        };
        combo.mats.forEach(m => segs.append(el('button', { 'data-id': m.id, role: 'tab', onclick: () => showMat(m.id) }, m.label)));
        out.push(card('🧱 升級素材（每件）', segs, box, el('p', { class: 'foot' }, '灰色＝超過你而家嘅升級上限。')));
        showMat(combo.mats.some(m => m.id === matSel) ? matSel : combo.mats[0].id);
      } else {
        out.push(card('🧱 升級素材', el('p', { class: 'foot', style: 'margin:0' }, '呢個配裝嘅逐件素材未有資料。每級都要嘅狩玉見下面。')));
      }

      // 狩玉
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
            el('div', { class: 'muted' }, '推算：假設 5 件防具＋武器都跟已知規律，每件稀有度 9、10 各要 2 粒。主宰武器唔使就減 1 件。'));
        }
      }
      out.push(card('💎 狩玉（所有配裝通用）',
        table(['稀有度', '每件', '6 件合共'], JADE.map(j => ({
          cells: [String(j.r), j.each || '未有資料', j.each ? `狩玉${j.kind} ×${j.n * 6}` : '—'],
          c: j.c, src: j.src, note: j.note, cls: over(j.r) ? 'locked' : null,
        })), ['lv']),
        total,
        el('p', { class: 'foot' }, '狩玉Ⅲ：自由狩獵＊（難度Ⅲ）、野外狩獵＊、研究點數商店（200 點換 3 粒，每週 8 次）。狩玉Ⅳ：研究點數商店（400 點換 3 粒，每週 8 次）。＊英文：Free Hunt、Field Hunt。')));

      // 素材掉落
      if (E.drops) {
        out.push(card('📍 素材喺邊度打',
          table(['魔物', 'Ⅱ', 'Ⅲ', 'Ⅳ', 'Ⅴ'], E.drops.map(d => ({ cells: [d.mon, ...d.t], c: d.c, src: d.src, note: d.note })), ['k']),
          el('p', { class: 'foot' }, '★＝魔物星級：打幾多星嘅魔物會掉嗰一級素材。')));
      }

      body.replaceChildren(...out);
    }

    root.replaceChildren(elTabs, settings, body);
    draw();
  }

  window.MHO_GUIDE = { render, capFor };
})();
