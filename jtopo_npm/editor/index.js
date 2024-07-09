import { EventTarget as ht, Node as H, Position as f, PositionInvertMap as wt, CircleNode as ut, Cursor as w, DefaultZIndexs as Ue, Link as I, AutoFoldLink as xe, isHorizontal as qe, CurveLink as vt, BezierLink as St, Style as Lt, EndpointSegment as ft, EndpointFixedName as pt, Point as de, setProto as st, Shape as _t, getNearestPointOnObjectsOBB as kt, getNearestAnchorOnObjects as Pt, DisplayObject as Et, PopupMenu as Tt, LinkHelper as bt, Rectangle as gt, ResourceLoader as it, EventNames as Ze, StageMode as Ht, NodeHelper as Mt, getClass as rt, InputTextfield as Ot, Tooltip as Bt, jtopo as Dt } from "@jtopo/core";
function U(r, t) {
  const e = he();
  return U = function(n, x) {
    return n = n - 310, e[n];
  }, U(r, t);
}
const K = U;
(function(r, t) {
  const e = U, n = r();
  for (; []; )
    try {
      if (parseInt(e(313)) / 1 + -parseInt(e(328)) / 2 * (parseInt(e(315)) / 3) + parseInt(e(322)) / 4 * (parseInt(e(326)) / 5) + -parseInt(e(319)) / 6 * (parseInt(e(321)) / 7) + parseInt(e(327)) / 8 * (parseInt(e(316)) / 9) + -parseInt(e(330)) / 10 * (parseInt(e(314)) / 11) + -parseInt(e(310)) / 12 * (-parseInt(e(324)) / 13) === t)
        break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(he, 653571);
function he() {
  const r = ["187iTVfAK", "479211sKQzfb", "2511VniJAT", "style", "initDom", "4839906cLiyhs", "add", "7OmHqwr", "2924suGFOf", "dargItem", "7643116aXkaMl", "innerHTML", "2665aCSgtN", "19336lWbOqN", "8dlEqed", "domElement", "262130XrAxDO", "div", "getDragItem", "12mNUJCx", "iconHtml", "stage", "892893dkcKtc"];
  return he = function() {
    return r;
  }, he();
}
class fn extends ht {
  constructor(t) {
    const e = U;
    super(), this[e(312)] = t, this.domElement, this.initDom(), this.hide();
  }
  [K(318)]() {
    const t = K;
    let e = document.createElement("div");
    return e.classList[t(320)]("jtopo_iconsPanel"), this.stage.layersContainer.appendChild(e), this.domElement = e, this;
  }
  hide() {
    const t = K;
    return this[t(329)][t(317)].display = "none", this;
  }
  show() {
    const t = K;
    return this.domElement[t(317)].display = "block", this;
  }
  [K(332)]() {
    return this[K(323)];
  }
  setConfig(t) {
    let e = this;
    return t.items.forEach(function(n) {
      const x = U;
      let s = document.createElement(x(331));
      s.classList.add("item"), s[x(325)] = n[x(311)], s.setAttribute("draggable", !![]), s.ondragstart = function(i) {
        e.dargItem = n;
      }, e.domElement.appendChild(s);
    }), this;
  }
}
function ue() {
  const r = ["getFolder", "remove", "globalAlpha", "7SitXRB", "连线属性", "onChange", "setCurrentObject", "10daLwDy", "3946328QeNgXc", "addFolder", "hide", "__folders", "showProperty", "8490600AbQEdr", "isLink", "边框粗细", "1644TFbvQn", "keys", "图片路径", "19510YpJYoH", "12px", "editor", "removeAll", "fontSize", "gui", "8GcmpRT", "getCtrollerValue", "object", "stage", "lineCap", "GUI", "name", "onFinishChange", "sans-serif", "open", "setValue", "backgroundColor", "1402179rMvXfs", "lineDash", "text", "节点属性", "32058917UmojiT", "domElement", "1424495LMBEPw", "strokeStyle", "3499908IVDyyf", "target", "basic", "setFolderValues", "style", "forEach", "attachTo", "block", "imageSrc", "Arial", "getCtroller", "add", "newFolder", "字体名称", "width"];
  return ue = function() {
    return r;
  }, ue();
}
const E = Q;
(function(r, t) {
  const e = Q, n = r();
  for (; []; )
    try {
      if (parseInt(e(320)) / 1 + parseInt(e(362)) / 2 * (-parseInt(e(314)) / 3) + -parseInt(e(322)) / 4 + parseInt(e(356)) / 5 * (-parseInt(e(353)) / 6) + parseInt(e(340)) / 7 * (-parseInt(e(345)) / 8) + parseInt(e(350)) / 9 + parseInt(e(344)) / 10 * (parseInt(e(318)) / 11) === t)
        break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ue, 975354);
function Q(r, t) {
  const e = ue();
  return Q = function(n, x) {
    return n = n - 309, e[n];
  }, Q(r, t);
}
class pn {
  constructor(t, e) {
    const n = Q;
    this.editor = t, this.dat = e, this.gui = new e[n(367)](), this[n(364)], this.folders = {};
  }
  [E(343)](t) {
    const e = E, n = this.editor, x = this.editor.stage;
    x.inputSystem[e(323)] = t, x.selectedGroup[e(359)]().add(t), t[e(351)] ? n.linkCtrlBox[e(328)](t) : t.isNode && n.nodeCtrlBox[e(328)](t), n.update(), this[e(349)](t);
  }
  showProperty(t) {
    const e = E;
    if (t == null)
      return;
    this.basic = { id: t.id, name: "", x: 1, y: 1, imageSrc: "", width: 1, height: 1, text: "", rotation: 0 };
    const n = this.editor[e(365)], x = n.styleSystem.currentTheme, s = x.getStyle(t.className);
    this.style = { lineDash: null, backgroundColor: "", textAlign: s.textAlign || "center", textBaseline: s.textAlign || "middle", strokeStyle: s.strokeStyle || "gray", fillStyle: "", color: s.color || "", borderWidth: 0, fontSize: e(357), fontFamily: "arial", lineWidth: s.lineWidth || 0, lineCap: "butt", globalAlpha: 1 };
    const i = this.basic, a = this.style;
    Object.keys(i).forEach(function(o) {
      if (t[o] != null) {
        let c = t[o];
        i[o] = c;
      }
    }), Object[e(354)](a).forEach(function(o) {
      let d = t[e(326)][o];
      t.style[o] != null && (a[o] = d);
    }), this.object == null && (this.object = t, this.init()), this.object = t, a.borderWidth = t.style.borderWidth || 0, a.fontWeight = t.style.fontWeight, a[e(360)] = t.style[e(360)], a.fontFamily = t[e(326)].fontFamily, this.setFolderValues(i, a), t.isNode && this.getFolder("节点属性") != null ? (this.getFolder("节点属性").show(), this[e(337)](e(341))[e(347)]()) : this[e(337)]("连线属性") != null && (this.getFolder("连线属性").show(), this.getFolder(e(317)).hide());
  }
  newFolder(t) {
    const e = E, n = this.gui[e(346)](t);
    return this.folders[t] = n, n;
  }
  [E(337)](t) {
    return this.folders[t];
  }
  [E(363)](t, e) {
    return this.getCtroller(t, e).getValue();
  }
  [E(332)](t, e) {
    return this.getFolder(t).__controllers.find((x) => x.property == e);
  }
  [E(325)](t, e) {
    const n = E;
    Object[n(354)](this[n(361)][n(348)])[n(327)]((s) => {
      this.gui.__folders[s].__controllers.forEach(function(o) {
        const c = Q;
        let d = o.property;
        t[d] != null ? o[c(312)](t[d]) : e[d] != null && o[c(312)](e[d]);
      });
    });
  }
  init() {
    const t = E, e = this, n = this[t(358)], x = n[t(365)], s = this[t(324)], i = this.style;
    let a = { 实线: "", "虚线1,1": "1,1", "虚线2,2": "2,2", "虚线3,3": "3,3", "虚线7,3": "7,3", "虚线3,7": "3,7", "虚线10,1": "10,1", "虚线1,10": "1,10" }, o = [t(331), "serif", t(310)], c = { 默认: "butt", 圆形: "round", 矩形: "square" };
    function d() {
      const v = t;
      let P = this.property, m = this.getValue(), O = e.object;
      O[v(330)] != null && (O.style[v(313)] = null), O[P] = m, n.update();
    }
    function l() {
      const v = t;
      let P = this.property, m = this.getValue(), O = e.object;
      P == v(315) ? m == null || m == "" ? m = null : typeof m == "string" && (m = m.split(",")) : P == "backgroundColor" && e[v(364)][v(351)] && (m = null), O.imageSrc != null && (O.style.backgroundColor = null), O.css(P, m), n.update();
    }
    const h = this.newFolder("基础属性");
    h.add(s, "name")[t(309)](d).name("name"), h.add(s, t(316)).onFinishChange(d)[t(368)]("文字"), h.add(i, t(339), 0, 1, 0.1)[t(342)](l).name("整体透明度"), h[t(333)](i, t(321))[t(309)](l)[t(368)]("线条颜色"), h.open();
    const u = this[t(334)]("节点属性");
    u[t(333)](s, "x").onFinishChange(d), u[t(333)](s, "y").onFinishChange(d), u.add(s, t(336), 1).onFinishChange(d).name("宽度"), u.add(s, "height", 1)[t(309)](d).name("高度"), u[t(333)](i, "borderWidth", 0, 10)[t(342)](l).name(t(352)), u.add(i, "lineWidth", 0, 10)[t(342)](l).name("线条粗细"), u.add(i, "lineDash", a).onChange(l).name("虚实"), u.add(i, "fillStyle").onFinishChange(l).name("填充颜色"), u.add(s, "imageSrc").onFinishChange(d).name(t(355)), u.open();
    const b = this.newFolder("连线属性");
    b.add(i, "lineWidth", 0, 100)[t(342)](l)[t(368)]("线条粗细"), b.add(i, "lineDash", a).onChange(l).name("虚实"), b.add(i, t(366), c).onChange(l)[t(368)]("末端样式"), b.open();
    const k = this.newFolder("文本");
    k.add(i, "fontFamily", o).onChange(l).name(t(335)), k[t(333)](i, t(360), 1, 1e3).onChange(l).name("大小"), k.add(i, "color").onChange(l)[t(368)]("颜色"), k[t(311)]();
    let L = this.gui.domElement;
    L[t(338)](), x.layersContainer.appendChild(L), L[t(326)].position = "absolute", L.style.right = "-15px", L.style.top = "0px", L.style.zIndex = 1e3;
  }
  open() {
    this.gui.open();
  }
  close() {
    this.gui.close();
  }
  hide() {
    this.gui.domElement.style.display = "none";
  }
  show() {
    const t = E;
    this[t(361)][t(319)].style.display = t(329);
  }
}
const N = fe;
function fe(r, t) {
  const e = pe();
  return fe = function(n, x) {
    return n = n - 337, e[n];
  }, fe(r, t);
}
(function(r, t) {
  const e = fe, n = r();
  for (; []; )
    try {
      if (-parseInt(e(341)) / 1 + parseInt(e(345)) / 2 * (parseInt(e(347)) / 3) + -parseInt(e(344)) / 4 * (parseInt(e(353)) / 5) + -parseInt(e(343)) / 6 * (-parseInt(e(349)) / 7) + parseInt(e(339)) / 8 * (parseInt(e(340)) / 9) + parseInt(e(350)) / 10 + -parseInt(e(351)) / 11 === t)
        break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(pe, 692333);
const $e = 11, p = { data: { localLastDocName: "topo_last_doc" }, anchorPoint: { size: $e, style: { strokeStyle: "gray", fillStyle: "rgba(255,255,255,0.6)", lineWidth: 1 }, activeStyle: { fillStyle: N(337) }, unActiveStyle: { fillStyle: N(342) }, drawStartMinDistance: $e, drawStartDelay: 200 }, anchorBox: { anchorDist: $e / 2, nodeDist: 12 }, nodeResizePoint: { width: 12, height: 12, style: { border: "1px solid black", backgroundColor: "orange" } }, nodeRotatePoint: { width: 14, height: 14, style: { lineWidth: 1, strokeStyle: "black", fillStyle: N(338) }, rotateLineStyle: { strokeStyle: "gray" }, rotateLineLength: 30 }, guildLine: { styleW: { strokeStyle: "#c8c8c8", lineDash: [1, 1] }, styleS: { strokeStyle: "#c8c8c8", lineDash: [1, 1] } }, linkCtrlPoint: { size: 7, style: { lineWidth: 1, strokeStyle: N(348), fillStyle: "pink" }, activeStyle: { strokeStyle: "rgba(0,0,0,0.1)", fillStyle: N(352) }, unactiveStyle: { strokeStyle: "rgba(0,0,0,0.9)", fillStyle: "pink" }, adjustStyle: { strokeStyle: "gray", fillStyle: N(338) }, ctrlLinkStyle: { lineDash: [2, 2] } }, dropBox: { style: { border: N(346), lineDash: [5, 3] } }, align: { minDistance: 10, alignLineStyle: { strokeStyle: "orange", lineDash: [5, 3] } }, operationTip: { enable: !![] } };
function pe() {
  const r = ["1690uYlgmG", "red", "orange", "8bDQHkX", "9198963rHFtiS", "733526HlvxJG", "rgba(255,255,255,0.6)", "11622TDAGpO", "1304GbIEhj", "1929766OBJzsY", "3px solid orange", "3mKOLrE", "gray", "4809jCQWDo", "7351390XPFhdX", "27684811UrKWZX", "rgba(0,0,0,0.1)"];
  return pe = function() {
    return r;
  }, pe();
}
const at = _e;
(function(r, t) {
  const e = _e, n = r();
  for (; []; )
    try {
      if (-parseInt(e(130)) / 1 + parseInt(e(140)) / 2 + parseInt(e(138)) / 3 * (parseInt(e(131)) / 4) + parseInt(e(129)) / 5 * (-parseInt(e(134)) / 6) + -parseInt(e(132)) / 7 + parseInt(e(141)) / 8 * (parseInt(e(136)) / 9) + -parseInt(e(133)) / 10 * (-parseInt(e(135)) / 11) === t)
        break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(be, 710676);
function _e(r, t) {
  const e = be();
  return _e = function(n, x) {
    return n = n - 129, e[n];
  }, _e(r, t);
}
const jt = navigator.userAgent.toUpperCase().indexOf("MAC OS") != -1, T = jt ? "Meta" : "Control";
function be() {
  const r = ["7882399pBsxoR", "2780yKLLYa", "6468186MUmGMt", "115313kAisAI", "218808rUGpKZ", "Escape", "359028YnfCFI", "ArrowDown", "410336pWGtxx", "32muEwRA", "5WUjyNp", "421602vvEmRJ", "4iRYvWW"];
  return be = function() {
    return r;
  }, be();
}
const Qe = { CtrlOrCmd: T, CreateGroup: T, DropTo_leader: "Shift", Delete: ["Delete", "Meta+Backspace"], Select_all: [T + "+a"], Select_invert: [T + "+i"], Cut: [T + "+x"], Copy: [T + "+c"], Paste: [T + "+v"], Save: [T + "+s"], Open: [T + "+o"], Undo: [T + "+z"], Redo: [T + "+shift+z"], Copy_style: ["Shift+c"], paste_Style: ["Shift+v"], Move_up: ["ArrowUp"], Move_down: [at(139)], Move_left: ["ArrowLeft"], Move_right: ["ArrowRight"], Layout_tree: ["t"], Layout_grid: ["g"], LocalView: ["/"], ResizeKeepAspectRatio: "shift", DrawLine: ["l"], Cancel: [at(137)], DiableNodeAlign: "Alt" };
(function(r, t) {
  for (var e = ye, n = r(); []; )
    try {
      var x = -parseInt(e(472)) / 1 + parseInt(e(469)) / 2 * (parseInt(e(474)) / 3) + -parseInt(e(476)) / 4 + parseInt(e(470)) / 5 + parseInt(e(477)) / 6 + parseInt(e(471)) / 7 + -parseInt(e(473)) / 8;
      if (x === t)
        break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ge, 343308);
function ge() {
  var r = ["4eULQak", "36370HFRISF", "2459009hvylcw", "291814GOGaxq", "3154656OocmBs", "841497FOWHYE", "type", "363356AbinyD", "1204404CRSxep"];
  return ge = function() {
    return r;
  }, ge();
}
function ye(r, t) {
  var e = ge();
  return ye = function(n, x) {
    n = n - 469;
    var s = e[n];
    return s;
  }, ye(r, t);
}
class S {
  constructor(t) {
    var e = ye;
    this[e(475)] = t;
  }
}
const J = se;
(function(r, t) {
  const e = se, n = r();
  for (; []; )
    try {
      if (-parseInt(e(485)) / 1 * (parseInt(e(462)) / 2) + -parseInt(e(477)) / 3 + parseInt(e(464)) / 4 + parseInt(e(486)) / 5 * (-parseInt(e(469)) / 6) + -parseInt(e(471)) / 7 * (-parseInt(e(484)) / 8) + parseInt(e(479)) / 9 * (parseInt(e(483)) / 10) + -parseInt(e(475)) / 11 === t)
        break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ie, 794284);
class At extends H {
  constructor(t, e) {
    const n = se;
    super(), this.nodeCtrlBox = t, this.editor = t.editor, this.stage = this.editor.stage, this.selectedGroup = this.stage[n(472)], this.resizeTo(p.nodeResizePoint[n(467)], p.nodeResizePoint.height), this.css(p.nodeResizePoint[n(480)]), this.name = e;
  }
  mouseenterHandler() {
  }
  [J(465)]() {
    const t = J;
    let e, n = this.name;
    n == f.lt ? e = t(468) : n == f.ct ? e = "n-resize" : n == f.rt ? e = t(460) : n == f.lm ? e = "w-resize" : n == f.rm ? e = "e-resize" : n == f.lb ? e = t(476) : n == f.cb ? e = t(470) : n == f.rb && (e = "se-resize"), this.editor.stage.setCursor(e);
  }
  [J(481)](t) {
  }
  mousedownHandler(t) {
    t.preventDefault();
  }
  mouseupHandler(t) {
    t.preventDefault();
  }
  [J(482)](t) {
    const e = J;
    let n = this.nodeCtrlBox, x = n.editor, s = x.stage, i = this.name;
    if (this.selectedGroup[e(466)]()[e(478)] == 0)
      throw new Error("selectedGroup.length is 0!");
    let c = s.inputSystem[e(458)], d = c.stageToLocalXY(t.x, t.y), l = c[e(474)](i), h = d.x - l.x, u = d.y - l.y;
    if (i == f.lt ? (h = -h, u = -u) : i == f.ct ? (h = 0, u = -u) : i == f.rt ? u = -u : i == f.lm ? (h = -h, u = 0) : i == f.rm ? u = 0 : i == f.lb ? h = -h : i == f.cb ? h = 0 : i == f.rb, x[e(473)].isKeydown(Qe.ResizeKeepAspectRatio)) {
      let b = c.height / (c.width || 1);
      u = h * b;
    }
    if (this.adjustFixedDirection(c, { dx: h, dy: u }, i), h != 0 && u != 0) {
      let b = new S("resize");
      b.object = c, b.details = { dx: h, dy: u, ctrl: i }, x[e(463)](b);
    }
  }
  adjustFixedDirection(t, e, n) {
    const x = J;
    let s = wt[n], i = t.positionToLocalPoint(s);
    i = t[x(461)](i), t[x(459)](e.dx, e.dy);
    let a = t[x(474)](s);
    a = t.transformPoint(a);
    let o = i.x - a.x, c = i.y - a.y;
    t.translateWith(o, c), this.nodeCtrlBox.updateSize();
  }
}
function se(r, t) {
  const e = Ie();
  return se = function(n, x) {
    return n = n - 458, e[n];
  }, se(r, t);
}
function Ie() {
  const r = ["ne-resize", "transformPoint", "498626fWpTTi", "dispatchEvent", "2228592EXbqUT", "mousemoveHandler", "getNoChildrensObjects", "width", "nw-resize", "3312678LfUDjM", "s-resize", "7koELFD", "selectedGroup", "keyboard", "positionToLocalPoint", "9064308TpVIOF", "sw-resize", "1261545VMYmbu", "length", "161199kfizhq", "style", "mouseoutHandler", "dragHandler", "670oBmKEX", "10659048zYDkSA", "2lyCLSW", "5DwnvWi", "target", "resizeWith"];
  return Ie = function() {
    return r;
  }, Ie();
}
function q(r, t) {
  const e = me();
  return q = function(n, x) {
    return n = n - 213, e[n];
  }, q(r, t);
}
const X = q;
(function(r, t) {
  const e = q, n = r();
  for (; []; )
    try {
      if (parseInt(e(223)) / 1 * (parseInt(e(238)) / 2) + -parseInt(e(221)) / 3 + parseInt(e(232)) / 4 + parseInt(e(228)) / 5 * (parseInt(e(234)) / 6) + -parseInt(e(222)) / 7 * (-parseInt(e(225)) / 8) + parseInt(e(215)) / 9 + -parseInt(e(214)) / 10 === t)
        break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(me, 610538);
function ot(r, t) {
  const e = q;
  let n = t.inputSystem, x = r[e(239)]("center");
  return x = r.getStageTransform().point(x), Math[e(240)](n.y - x.y, n.x - x.x);
}
function me() {
  const r = ["mouseInitAngle", "342668EzoNnL", "positionToLocalPoint", "atan2", "preventDefault", "editor", "19847400fUgGbD", "370152eCXYEk", "object", "style", "setCursor", "mouseupHandler", "details", "1766592JatDBX", "2072DuWOSk", "1EzuhvD", "resizeTo", "20672uWHyex", "auto", "width", "1984120imDwNn", "nodeRotatePoint", "target", "selectedGroup", "4065376BmJJmc", "mousemoveHandler", "18sjNSQG", "stage", "elementInitAngle"];
  return me = function() {
    return r;
  }, me();
}
class Nt extends ut {
  constructor(t, e) {
    const n = q;
    super(), this[n(213)] = t[n(213)], this[n(235)] = this.editor.stage, this[n(231)] = this.stage.selectedGroup, this.css(p[n(229)][n(217)]), this[n(224)](p[n(229)][n(227)], p[n(229)].height), this.name = e;
  }
  [X(233)]() {
    this[X(235)].setCursor(w.move);
  }
  mousedownHandler(t) {
    const e = X;
    t.preventDefault();
    let n = this.stage;
    if (this.selectedGroup.getNoChildrensObjects().length == 0)
      throw new Error("selectedGroup.length is 0!");
    let s = n.inputSystem.target;
    this.elementInitAngle = s.rotation, this[e(237)] = ot(s, n);
  }
  [X(219)](t) {
    const e = X;
    this.stage[e(218)](e(226)), t[e(241)]();
  }
  dragHandler(t) {
    const e = X;
    t.preventDefault();
    let n = this.parent, x = n.editor, s = x.stage;
    if (x.stage.selectedGroup.getNoChildrensObjects().length == 0)
      throw new Error("selectedGroup.length is 0!");
    let o = s.inputSystem[e(230)], c = ot(o, s) - this.mouseInitAngle;
    if (o.rotate(this[e(236)] + c), n.updateSize(), c != 0) {
      let d = new S("rotate");
      d[e(216)] = o, d[e(220)] = { dAngle: c }, x.dispatchEvent(d);
    }
  }
}
function Ce() {
  const r = ["viewClone", "center", "594TgGuaM", "3235188DHrGoI", "rotate", "12822072WsEKBe", "forEach", "createCtrlPoint", "updateSize", "currNode", "132GrQEfP", "rotateLineLength", "show", "initCtrlPoint", "editor", "346668ZWscCy", "4RlPNah", "7iryMDC", "1290996jAdPzC", "beginArrow", "hide", "282418lOLraI", "resizeTo", "visible", "nodeRotatePoint", "attachTo", "45bKEDuG", "isSelected", "51845jJMbWx", "translateTo", "initPoints", "1752610XaGhbQ", "positionToLocalPoint"];
  return Ce = function() {
    return r;
  }, Ce();
}
const D = V;
(function(r, t) {
  const e = V, n = r();
  for (; []; )
    try {
      if (-parseInt(e(404)) / 1 + -parseInt(e(401)) / 2 + -parseInt(e(419)) / 3 * (-parseInt(e(399)) / 4) + parseInt(e(411)) / 5 * (-parseInt(e(393)) / 6) + parseInt(e(400)) / 7 * (parseInt(e(388)) / 8) + -parseInt(e(409)) / 9 * (-parseInt(e(414)) / 10) + -parseInt(e(418)) / 11 * (parseInt(e(398)) / 12) === t)
        break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ce, 841420);
function V(r, t) {
  const e = Ce();
  return V = function(n, x) {
    return n = n - 388, e[n];
  }, V(r, t);
}
function zt(r) {
  const t = V;
  let e = r.parent;
  return e instanceof I && (e[t(402)] === r || e.endArrow === r);
}
class Gt extends H {
  constructor(t, e = 0, n = 0, x = 1, s = 1) {
    const i = V;
    super(null, e, n, x, s), this.zIndex = Ue.NodeCtrlBox, this[i(397)] = t, this.mouseEnabled = ![], this[i(403)]();
  }
  update() {
    const t = V;
    this[t(406)] && this[t(391)]();
  }
  mouseoutStageHandler() {
  }
  mouseenterStageHandler() {
  }
  [D(396)](t) {
    const e = D;
    this.removeAllChild();
    let n = t.getCtrlPoints(), x = this;
    n[e(389)]((s) => {
      const i = e;
      if (x[i(390)](s), s == i(420)) {
        let a = function() {
          return x[i(415)](f.ct);
        }, o = x.createCtrlPoint(i(420)), c = new I(null, o, a);
        c.css(p[i(407)].rotateLineStyle), c.mouseEnabled = ![], x.addChild(c);
      }
    });
  }
  createCtrlPoint(t) {
    let e;
    return t == "rotate" ? e = new Nt(this, t) : e = new At(this, t), this.addChild(e), e;
  }
  clearTarget() {
    const t = D;
    this[t(392)] = null, this.hide();
  }
  [D(408)](t) {
    const e = D;
    if (!zt(t)) {
      if (t.editable != !![])
        throw new Error("attach not Node or not editable");
      this.currNode !== null && this.initCtrlPoint(t), this.currNode = t, this.updateSize(), this[e(395)]();
    }
  }
  updateSize() {
    const t = D;
    let e = this.currNode;
    if (e == null || e[t(410)] == ![] || e.parent == null) {
      this.currNode = null, this.hide();
      return;
    }
    this[t(416)](e), this[t(413)]();
  }
  initPoints() {
    const t = D;
    let e = this.getChildren();
    for (var n = 0; n < e.length; n++) {
      let x = e[n];
      if (x instanceof I)
        continue;
      let s;
      x.name == t(420) ? (s = this.positionToLocalPoint(f.ct), s.y -= p.nodeRotatePoint[t(394)]) : s = this.positionToLocalPoint(x.name), x instanceof H && x[t(412)](s.x, s.y);
    }
  }
  viewClone(t) {
    const e = D;
    let n = t.getStageTransform(), x = n.point(t.positionToLocalPoint(f.center)), s = n.point(t[e(415)](f.rm)), i = Math.atan2(s.y - x.y, s.x - x.x);
    n.rotate(-i);
    let a = n.point(t[e(415)](f[e(417)])), o = n.point(t[e(415)](f.rb)), c = (o.x - a.x) * 2, d = (o.y - a.y) * 2;
    this[e(405)](c, d), this.rotate(i), this.translateTo(x.x, x.y);
  }
}
const z = Z;
(function(r, t) {
  const e = Z, n = r();
  for (; []; )
    try {
      if (parseInt(e(460)) / 1 * (-parseInt(e(459)) / 2) + -parseInt(e(447)) / 3 + parseInt(e(442)) / 4 * (parseInt(e(424)) / 5) + parseInt(e(419)) / 6 + parseInt(e(417)) / 7 + -parseInt(e(450)) / 8 * (-parseInt(e(456)) / 9) + -parseInt(e(452)) / 10 === t)
        break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(we, 259761);
function we() {
  const r = ["anchorBox", "crosshair", "target", "isActive", "1386584NIvylz", "inputSystem", "canConnectEndpoint", "points", "fold1", "122733grPpbm", "unActive", "s_resize", "24DYdxFL", "linkCtrlBox", "6110950obypRD", "parent", "e_resize", "dragHandler", "341523fCeNQG", "ctrlPoint2", "setCursor", "39536yRoSPL", "6VxUzTG", "findConnectableEndpoint", "ctrlPoint", "2756628lCEcBP", "name", "1056504zJonzP", "upgradeParent", "ctrlPoint1", "mousedownHandler", "setCtrlPoint1", "5hOOHHD", "stage", "setBegin", "event", "end", "attachedLink", "updateMatrix", "positionToLocalPoint", "hide", "setCenterOffset", "fold2", "editor", "setCtrlPoint", "begin"];
  return we = function() {
    return r;
  }, we();
}
function Z(r, t) {
  const e = we();
  return Z = function(n, x) {
    return n = n - 417, e[n];
  }, Z(r, t);
}
class Ft extends ut {
  constructor(t) {
    const e = Z;
    super(), this.isConnectPoint = !![], this.isActive = ![], this.setRadius(p.linkCtrlPoint.size), this.linkCtrlBox = t, this.editor = this[e(451)].editor, this.css(p.linkCtrlPoint.style);
  }
  active() {
    const t = Z;
    this.css(p.linkCtrlPoint.activeStyle), this[t(441)] = !![];
  }
  [z(448)]() {
    this.css(p.linkCtrlPoint.unactiveStyle), this.isActive = ![];
  }
  mousemoveHandler() {
    const t = z;
    this.editor.anchorBox[t(432)](), this.editor.stage.setCursor(w.move);
    let e = this[t(453)], n = this.editor.stage, x = e.attachedLink;
    if (x instanceof xe) {
      let s = null, i = x[t(445)][0], a = x.points[1], o = x.points[4], c = x.points[5];
      this[t(418)] == f.fold1 ? qe(x.getK(0, 0.5)) ? s = a.x > i.x ? w.w_resize : w[t(454)] : s = a.y > i.y ? w.s_resize : w.n_resize : this.name == f[t(434)] ? qe(x.getK(4, 0.5)) ? s = o.x > c.x ? w.w_resize : w.e_resize : s = o.y > c.y ? w[t(449)] : w.n_resize : this.name == f.center && (qe(x.getK(2, 0.5)) ? s = w.s_resize : s = w[t(454)]), s && n.setCursor(s);
    }
  }
  [z(422)](t) {
    const e = z;
    this.editor[e(425)].setCursor("crosshair"), this[e(444)] = null;
  }
  [z(455)](t) {
    const e = z;
    let n = this[e(453)], x = n.parent, s = x.stage;
    const i = this[e(435)];
    let a = n[e(429)];
    i.anchorBox[e(432)]();
    const o = this.name;
    this.editor[e(425)].setCursor(w[e(439)]);
    let c = a[e(453)].stageToLocalXY(s.inputSystem.x, s[e(443)].y);
    if (t.isDragStart && (o === f.begin || o === f.end) && this.active(), o == f.begin) {
      a instanceof xe && a.resetOffset(), a.setBegin({ x: c.x, y: c.y }), a.updateMatrix(), this[e(444)] = i.anchorBox[e(461)]([a]);
      return;
    }
    if (o == f[e(428)]) {
      a instanceof xe && a.resetOffset(), a.setEnd({ x: c.x, y: c.y }), a.updateMatrix(), this.canConnectEndpoint = i[e(438)][e(461)]([a]);
      return;
    }
    if (a instanceof vt)
      this[e(418)] == f.ctrlPoint && (a.ctrlPoint == null ? a[e(436)](a.positionToLocalPoint(o)) : (a.ctrlPoint.x += c.x - a[e(462)].x, a.ctrlPoint.y += c.y - a.ctrlPoint.y, a[e(436)](a.ctrlPoint)));
    else if (a instanceof St)
      o == f[e(421)] ? a[e(421)] == null ? a[e(423)](a.positionToLocalPoint(o)) : (a.ctrlPoint1.x += c.x - a.ctrlPoint1.x, a.ctrlPoint1.y += c.y - a.ctrlPoint1.y, a.setCtrlPoint1(a.ctrlPoint1)) : o == f[e(457)] && (a[e(457)] == null ? a.setCtrlPoint2(a.positionToLocalPoint(o)) : (a.ctrlPoint2.x += c.x - a.ctrlPoint2.x, a[e(457)].y += c.y - a.ctrlPoint2.y, a.setCtrlPoint2(a[e(457)])));
    else if (a instanceof xe) {
      if (o == f.fold1) {
        let d = a[e(431)](f[e(446)]);
        const l = c.x - d.x, h = c.y - d.y;
        a.setFold1Offset(l, h), a.updateMatrix();
      } else if (o == f.center) {
        let d = a[e(431)](f.center);
        const l = c.x - d.x, h = c.y - d.y;
        a[e(433)](l, h), a.updateMatrix();
      } else if (o == f.fold2) {
        let d = a[e(431)](f.fold2);
        const l = c.x - d.x, h = c.y - d.y;
        a.setFold2Offset(l, h), a[e(430)]();
      }
    }
  }
  mouseupHandler(t) {
    const e = z;
    this.editor.stage[e(458)](w.auto), t[e(427)].preventDefault(), this.isActive && this.unActive();
    let n = this.parent, x = n.attachedLink;
    if (this.canConnectEndpoint != null) {
      let s = this[e(444)], i = s[e(440)];
      if (i.isLink) {
        let a = i;
        a.end.target !== x && a.begin[e(440)] !== x && (this[e(418)] == f.begin ? x[e(426)](a, s) : this.name == f.end && x.setEnd(a, s), x[e(420)](), x.updateMatrix());
      } else
        this.name == f[e(437)] ? x.setBegin(i, s) : this.name == f[e(428)] && x.setEnd(i, s), x.upgradeParent(), x.updateMatrix();
      this.canConnectEndpoint = null;
    }
  }
}
const B = ie;
(function(r, t) {
  const e = ie, n = r();
  for (; []; )
    try {
      if (parseInt(e(293)) / 1 + -parseInt(e(301)) / 2 + -parseInt(e(300)) / 3 + parseInt(e(307)) / 4 * (parseInt(e(312)) / 5) + -parseInt(e(305)) / 6 + parseInt(e(292)) / 7 * (-parseInt(e(323)) / 8) + parseInt(e(304)) / 9 * (parseInt(e(298)) / 10) === t)
        break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ve, 232920);
function ie(r, t) {
  const e = ve();
  return ie = function(n, x) {
    return n = n - 291, e[n];
  }, ie(r, t);
}
function ve() {
  const r = ["attachedLink", "updateCtrlPoints", "ctrlLinkStyle", "parent", "addChild", "begin", "getCtrlPoints", "ctrlPointInfo", "Link", "end", "158088PEHdSB", "linkCtrlPoint", "hideAllPoint", "mouseenterStageHandler", "28REBzer", "309138iIXbcq", "init", "inputSystem", "isConnectPoint", "setBegin", "10JHJIpp", "name", "920037TYpnYw", "799368kKAeNm", "LinkCtrlBox", "css", "7096752knSrwV", "522750OLDJUc", "anchorNameStr", "136jmCCJQ", "removeAllChild", "updateFllow", "show", "join", "1145GvSiQw"];
  return ve = function() {
    return r;
  }, ve();
}
class Rt extends H {
  constructor(t) {
    const e = ie;
    super(), this[e(320)] = {}, this.zIndex = Ue[e(302)], this.editor = t, this.ctrlPointStyle = new Lt({}), this[e(294)]();
  }
  mouseoutStageHandler() {
  }
  [B(291)]() {
  }
  createNodeResizePoint(t) {
    const e = B;
    let n = new Ft(this);
    return n[e(299)] = t, this[e(317)](n), n;
  }
  init() {
    const t = B;
    this[t(320)] = {}, this.hide();
  }
  draw(t) {
    this.visible != ![] && this.updateSize();
  }
  updateSize() {
    const t = B, e = this.editor.stage[t(295)].target;
    this.attachedLink ? this.attachedLink[t(316)] == null || e == null || this[t(313)] != e ? (this.attachedLink = null, this.hide()) : this.attachTo(this.attachedLink) : this.hide();
  }
  updateCtrlPoints(t) {
    const e = B;
    this.attachedLink = t;
    let n = t[e(319)]();
    this.anchorNameStr = n[e(311)](",");
    for (let x = 0; x < n.length; x++) {
      let s = n[x], i = this.ctrlPointInfo[s];
      if (i == null) {
        if (i = this.createNodeResizePoint(s), s != f.begin && s != f.end && (i.fillColor = this.ctrlPointStyle.background, i[e(303)](p[e(324)].adjustStyle), i[e(296)] = ![]), s == "ctrlPoint1") {
          let a = new I();
          a[e(303)](p.linkCtrlPoint.ctrlLinkStyle), a.setBegin(i, "center");
          let o = this[e(320)][e(318)];
          a.setEnd(o, "center"), this.addChild(a), this.ctrlPointInfo[s + e(321)] = a;
        } else if (s == "ctrlPoint2") {
          let a = new I();
          a.css(p.linkCtrlPoint[e(315)]), a[e(297)](i, "center");
          let o = this[e(320)][e(322)];
          a.setEnd(o, "center"), this.addChild(a), this[e(320)][s + e(321)] = a;
        } else if (s == "ctrlPoint") {
          let a = new I();
          a[e(303)](p.linkCtrlPoint.ctrlLinkStyle), a[e(297)](i, "center");
          let o = this.ctrlPointInfo[e(318)];
          a.setEnd(o, "center"), this.addChild(a), this[e(320)][s + "Link"] = a;
        }
        this[e(320)][s] = i;
      }
    }
  }
  [B(325)]() {
    let t = this.ctrlPointInfo;
    for (var e in t)
      t[e].hide();
  }
  updateFllow() {
    const t = B, e = this.attachedLink;
    let n = e.getStageTransform(), x = e.getCtrlPoints();
    this.hideAllPoint();
    for (let s = 0; s < x.length; s++) {
      const i = x[s];
      let a = this.ctrlPointInfo[i];
      if (a == null)
        continue;
      let o = e.positionToLocalPoint(i), c = n.point(o);
      a.translateTo(c.x, c.y), a[t(310)]();
      let d = this[t(320)][i + t(321)];
      d && d.show();
    }
  }
  attachTo(t) {
    const e = B;
    if (this.matrixDirty = !![], t.parent != null) {
      if (this.attachedLink === t) {
        t instanceof xe && t.getCtrlPoints().join(",") != this[e(306)] && this.updateCtrlPoints(t), this.updateFllow(), this[e(310)]();
        return;
      }
      this.ctrlPointInfo = {}, this.removeAllChild(), this[e(314)](t), this[e(309)](), this[e(310)]();
    }
  }
  clearTarget() {
    const t = B;
    this.attachedLink = null, this.ctrlPointInfo = {}, this[t(308)](), this.hide();
  }
}
const y = Le;
(function(r, t) {
  const e = Le, n = r();
  for (; []; )
    try {
      if (parseInt(e(135)) / 1 + parseInt(e(109)) / 2 * (parseInt(e(134)) / 3) + parseInt(e(133)) / 4 * (-parseInt(e(107)) / 5) + -parseInt(e(117)) / 6 * (-parseInt(e(112)) / 7) + -parseInt(e(108)) / 8 + parseInt(e(123)) / 9 + parseInt(e(127)) / 10 === t)
        break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Se, 785784);
function Se() {
  const r = ["drawStartInfo", "findConnectableEndpoint", "mouseenterHandler", "isIntersectPoint", "isActive", "unactive", "setIntersect", "defineProperty", "setCursor", "mousemoveHandler", "7045ITwrAr", "9376432wutwPB", "8RAwxyi", "stage", "size", "4407067lusBsQ", "mouseoutHandler", "isDragStart", "Circle", "show", "6yCWPUH", "lineDrawingFinished", "active", "link", "instanceManager", "end", "4777920gsravc", "getOwnPropertyDescriptor", "target", "prototype", "7119800XxnWET", "shape", "record", "upgradeParent", "anchorPoint", "inputSystem", "1092OeFaQv", "295719cmYVWV", "75762HUBojl", "editor", "crosshair"];
  return Se = function() {
    return r;
  }, Se();
}
var Wt = Object[y(104)], Vt = Object[y(124)], ct = (r, t, e, n) => {
  for (var x = n > 1 ? void 0 : n ? Vt(t, e) : t, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (x = (n ? i(t, e, x) : i(x)) || x);
  return n && x && Wt(t, e, x), x;
};
function Le(r, t) {
  const e = Se();
  return Le = function(n, x) {
    return n = n - 104, e[n];
  }, Le(r, t);
}
const Kt = "intersectNode";
class re extends H {
  constructor(t, e = 0, n = 0, x = 1, s = 1) {
    const i = y;
    super(null, e, n, x, s), this[i(142)] = ![], this.isIntersectPoint = ![], this.anchorBox = t, this[i(136)] = t[i(136)], this[i(110)] = this.editor.stage, this.resizeTo(p.anchorPoint[i(111)], p[i(131)].size), this.css(p[i(131)].style), this[i(143)]();
  }
  [y(144)](t) {
    this.intersect = t;
  }
  [y(140)]() {
    this[y(119)]();
  }
  [y(113)]() {
    const t = y;
    this.stage.setCursor("auto"), this[t(143)]();
  }
  [y(106)]() {
  }
  mousedownHandler(t) {
    const e = y;
    t.preventDefault(), this.editor[e(110)].setCursor(e(137)), this.link = null;
  }
  dragHandler(t) {
    const e = y;
    if (t.buttons == 2)
      return;
    const n = this[e(136)], x = n.stage;
    this.anchorBox.activedPoint && this.anchorBox.activedPoint[e(143)]();
    const s = this.anchorBox[e(125)];
    if (t[e(114)]) {
      let i;
      if (this[e(141)]) {
        let a = this.anchorBox.intersect;
        i = new ft(s, a.rate, a.segIndex);
      } else
        i = new pt(s, this.name);
      this.drawStartInfo = { x: t.x, y: t.y, beginEndpoint: i, timeStamp: Date.now() };
      return;
    }
    if (this[e(138)] != null) {
      let i = de.distancePoint(this[e(138)], t);
      if (Date.now() - this.drawStartInfo.timeStamp > p.anchorPoint.drawStartDelay && i > p[e(131)].drawStartMinDistance) {
        this[e(136)].showTip("画线开始"), console.assert(this.link == null, this.link), this.editor[e(129)]("划线");
        const c = n.instanceManager.lineDrawn(null, s, null, this.drawStartInfo.beginEndpoint);
        this[e(120)] = c;
        let d = c.parent.stageToLocalXY(x.inputSystem.x, x.inputSystem.y);
        c.setEnd(d), this.drawStartInfo = null;
      }
    }
    if (this.link != null && this[e(120)].end != null) {
      let i = this.link.parent.stageToLocalXY(x.inputSystem.x, x[e(132)].y);
      this[e(120)].setEnd(i), this.endpoint = this.anchorBox.findConnectableEndpoint([this[e(120)], this.link[e(122)][e(125)]]);
    }
  }
  mouseupHandler(t) {
    const e = y;
    this[e(116)](), this.editor.update(), this.editor.stage[e(105)]("auto"), this.link != null && (this.endpoint && (this[e(120)].setEnd(this.endpoint), this.link[e(130)](), this.link.updateMatrix()), this.editor[e(121)][e(118)](this[e(120)]), this.anchorBox[e(139)]([]), this[e(136)].recordEnd("划线")), this.link = null;
  }
  active() {
    const t = y;
    this[t(142)] = !![], this.css(p.anchorPoint.activeStyle);
  }
  [y(143)]() {
    const t = y;
    this.isActive = ![], this.css(p[t(131)].unActiveStyle);
  }
}
ct([st(_t[y(115)])], re.prototype, "shape", 2), ct([st(y(128))], re[y(126)], "pickType", 2);
function $(r, t) {
  const e = ke();
  return $ = function(n, x) {
    return n = n - 280, e[n];
  }, $(r, t);
}
const C = $;
function ke() {
  const r = ["getObjectsIntersect", "15807624DMdgTO", "1706986PwqdGz", "update", "getConnectableEndpointFromObjects", "anchorBox", "_obb", "name", "forEach", "connectable", "getCenter", "editor", "activeStyle", "canConnectable", "anchorPoint", "active", "clearTarget", "setTarget", "nodeDist", "_findChildren", "children", "index", "30eAoxIw", "5032017xCSYpl", "createAnchorPoint", "1497875fClIzK", "1597200mZmVKy", "target", "length", "object", "translateTo", "stage", "displayList", "ctrlIntersectPoint", "activeNameOrPoint is null", "addChild", "aabb", "2291737JSrkus", "showIntersectAnchor", "hide", "getLocalPoint", "1835900jFwrks", "activePointByName"];
  return ke = function() {
    return r;
  }, ke();
}
(function(r, t) {
  const e = $, n = r();
  for (; []; )
    try {
      if (-parseInt(e(311)) / 1 + parseInt(e(307)) / 2 + -parseInt(e(289)) / 3 + -parseInt(e(292)) / 4 + parseInt(e(291)) / 5 * (parseInt(e(288)) / 6) + parseInt(e(303)) / 7 + parseInt(e(310)) / 8 === t)
        break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ke, 935544);
function Jt(r) {
  let t = r.parent;
  return t instanceof I && (t.beginArrow === r || t.endArrow === r);
}
class Xt extends H {
  constructor(t, e = 0, n = 0, x = 1, s = 1) {
    const i = $;
    super(null, e, n, x, s), this.editor = t, this[i(299)] = this[i(290)](Kt), this[i(299)].isIntersectPoint = !![], this.ctrlIntersectPoint.hide();
  }
  cancel() {
  }
  mouseoutStageHandler() {
  }
  mouseenterStageHandler() {
  }
  clearTarget() {
    const t = $;
    this[t(293)] = null, this[t(305)]();
  }
  [C(283)](t) {
    const e = C;
    if (!this.canConnectable(t))
      return;
    if (this.target !== t) {
      if (this.target = t, t != null && (t instanceof H || t instanceof I)) {
        let s = t.getAnchorPoints();
        this[e(286)][e(294)] = 0;
        for (var n = 0; n < s[e(294)]; n++) {
          let i = s[n];
          this.createAnchorPoint(i);
        }
      }
      this[e(312)]();
    }
    this.children[e(317)]((s) => s.unactive()), this.ctrlIntersectPoint.hide(), this.show();
  }
  [C(322)](t) {
    const e = C;
    return t == null || Jt(t) ? ![] : t.visible && t.mouseEnabled && t[e(318)] && t.painted;
  }
  setTargetWithName(t, e) {
    const n = C;
    if (e == null)
      throw new Error(n(300));
    this.setTarget(t), this[n(308)](e), this.show();
  }
  clearActived() {
    this.activedPoint && this.activedPoint.unactive(), this.ctrlIntersectPoint.hide();
  }
  activePointByName(t) {
    const e = C;
    this.activedPoint && this.activedPoint.unactive();
    let n = this.children, x = n.filter((s) => s[e(316)] == t)[0];
    this.activedPoint = x, x[e(281)](), this.ctrlIntersectPoint.hide();
  }
  [C(304)](t) {
    const e = C;
    if (this.intersect = t, t == null) {
      this.ctrlIntersectPoint.hide();
      return;
    }
    let n = t.rate, x = t.segIndex;
    const s = this.target;
    let i = s[e(306)](n, x), o = s.getStageTransform().point(i);
    this.ctrlIntersectPoint.translateTo(o.x, o.y), this[e(299)].css(p[e(280)][e(321)]), this.ctrlIntersectPoint.show();
  }
  update() {
    const t = C;
    if (this.target == null || this.target.parent == null) {
      this[t(282)]();
      return;
    }
    const e = this[t(293)], n = e.getStageTransform(), x = this.children;
    for (let s = 0; s < x[t(294)]; s++) {
      const i = x[s], a = i.name;
      if (!i.isIntersectPoint) {
        let o = e.positionToLocalPoint(a), c = n.point(o);
        i[t(296)](c.x, c.y);
      }
    }
  }
  createAnchorPoint(t) {
    const e = C, n = new re(this);
    return n[e(316)] = t, n[e(314)] = this, this[e(301)](n), n;
  }
  [C(309)](t) {
    const e = C;
    let n = this[e(320)].stage, x = this.editor.getCurrentLayer(), s = { x: n.inputSystem.x, y: n.inputSystem.y };
    return kt(x, s, t, p.anchorBox[e(284)]);
  }
  getConnectableEndpointFromObjects(t) {
    const e = C, n = this.editor, x = this, s = n[e(297)], i = s.inputSystem, a = { x: i.x, y: i.y }, o = Pt(a, t, p.anchorPoint.size / 2), c = n.keyboard.isControlDown();
    if (o.length == 0 && !c) {
      let l = Yt(s, 100);
      return this.canConnectable(l) && x.setTarget(l), null;
    }
    if (o.length > 0) {
      o.sort((k, L) => {
        const v = e;
        let P = k.object, m = L[v(295)];
        if (c) {
          let mt = P instanceof I ? 0 : 1, Ct = m instanceof I ? 0 : 1;
          return mt - Ct;
        }
        let O = P instanceof H ? 0 : 1, It = m instanceof H ? 0 : 1;
        return O - It;
      });
      const l = o[0], h = l[e(295)];
      let u = l.anchorName;
      const b = new pt(h, u);
      return x.setTargetWithName(h, u), b;
    }
    const d = this[e(309)](t);
    if (d != null) {
      const l = d.object;
      x.setTarget(l);
      const h = new ft(l, d.rate, d.segIndex);
      return this.showIntersectAnchor(d), h;
    }
    return x[e(282)](), null;
  }
  findConnectableEndpoint(t) {
    const e = C, n = this.editor, x = this, s = n[e(297)].localView.getObject();
    function i(c) {
      const d = e;
      return t.indexOf(c) == -1 && x[d(322)](c);
    }
    const a = s[e(285)](null, i, !![]);
    return this[e(313)](a);
  }
}
function Yt(r, t) {
  const e = C, n = r.getCurrentLayer(), x = { x: n.mouseX, y: n.mouseY };
  let s = n[e(298)].filter((o) => o.isNode), i = s.map((o, c) => {
    const d = e;
    let l = o[d(315)][d(302)][d(319)]();
    return { index: c, dist: de.distancePoint(x, l) };
  });
  if (i = i.filter((o) => o.dist <= t), i.length == 0)
    return null;
  i.sort((o, c) => o.dist - c.dist);
  let a = i[0][e(287)];
  return s[a];
}
const M = ee;
(function(r, t) {
  const e = ee, n = r();
  for (; []; )
    try {
      if (parseInt(e(192)) / 1 * (parseInt(e(190)) / 2) + parseInt(e(182)) / 3 + parseInt(e(191)) / 4 + -parseInt(e(186)) / 5 * (parseInt(e(175)) / 6) + parseInt(e(183)) / 7 * (-parseInt(e(181)) / 8) + -parseInt(e(179)) / 9 * (-parseInt(e(176)) / 10) + parseInt(e(185)) / 11 * (-parseInt(e(188)) / 12) === t)
        break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Pe, 716337);
function ee(r, t) {
  const e = Pe();
  return ee = function(n, x) {
    return n = n - 168, e[n];
  }, ee(r, t);
}
const Ut = { cut: M(173), copy: "copy", delete: "删除", modify: "修改", addChild: "添加图元", pasteCopy: "辅助粘贴", pasteCut: "剪切粘贴", resize: "尺寸修改", rotate: "旋转", dragNodeOrLink: "位置改变", modifyLink: "连线调整" };
class Qt {
  constructor(t, e, n) {
    const x = M;
    this.type = t, this[x(170)] = n, this.redoFn = e;
  }
  redo() {
    this[M(172)]();
  }
  undo() {
    this[M(170)]();
  }
}
class qt extends EventTarget {
  constructor(t) {
    const e = M;
    super(), this[e(171)] = t, this.undoHistory = [], this.redoHistory = [];
  }
  [M(174)]() {
    const t = M;
    this.undoHistory = [], this[t(177)] = [];
  }
  push(t, e, n) {
    const x = M;
    let s = new Qt(t, e, n);
    return s[x(171)] = this.editor, this.redoHistory[x(189)] = 0, this.undoHistory[x(187)](s), s;
  }
  undo() {
    const t = M;
    if (this.undoHistory.length == 0)
      return null;
    let e = this.undoHistory[t(168)]();
    return e.undo(), this.redoHistory[t(187)](e), e;
  }
  redo() {
    const t = M;
    if (this.redoHistory.length == 0)
      return null;
    let e = this.redoHistory.pop();
    return e.redo(), this[t(169)].push(e), e;
  }
  undoAll(t = 500) {
    let e = this;
    function n() {
      const x = ee;
      let s = e[x(184)]();
      e.editor[x(178)](), s != null && setTimeout(n, t);
    }
    n();
  }
  redoAll(t = 500) {
    let e = this;
    function n() {
      const x = ee;
      e.editor.update(), e[x(180)]() != null && setTimeout(n, t);
    }
    n();
  }
}
function Pe() {
  const r = ["undo", "480964bFijEs", "47865lmKess", "push", "384sUfcMn", "length", "4kpzLoq", "1722848UKCoaG", "44449bXRYlp", "pop", "undoHistory", "undoFn", "editor", "redoFn", "cut", "clear", "126eJJtcM", "299590dOtufR", "redoHistory", "update", "405VqAfES", "redo", "80RyxmKg", "3485829bUSEgt", "499219RkZgis"];
  return Pe = function() {
    return r;
  }, Pe();
}
(function(r, t) {
  const e = ae, n = r();
  for (; []; )
    try {
      if (parseInt(e(306)) / 1 * (-parseInt(e(302)) / 2) + parseInt(e(309)) / 3 * (-parseInt(e(308)) / 4) + -parseInt(e(298)) / 5 * (parseInt(e(303)) / 6) + -parseInt(e(299)) / 7 + -parseInt(e(310)) / 8 * (parseInt(e(304)) / 9) + -parseInt(e(301)) / 10 * (parseInt(e(300)) / 11) + parseInt(e(305)) / 12 === t)
        break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ee, 789525);
const Zt = { getItem: function(r) {
  const t = ae;
  return localStorage[t(307)](r);
}, setItem: function(r, t) {
  localStorage.setItem(r, t);
}, saveWithVersion(r, t) {
  r += Date.now(), this.setItem(r, t);
}, getAllVersions(r) {
  const t = ae;
  return Object.keys(localStorage).filter((n) => n[t(311)](r))[t(297)]();
}, getLastVersion(r, t) {
  let e = this.getAllVersions(r).reverse();
  if (e.length == 0)
    return;
  t == null && (t = 0), t + 1 >= e.length && (t = e.length - 1);
  let n = e[t];
  return this.getItem(n);
} };
function Ee() {
  const r = ["192056vkmXct", "startsWith", "sort", "3340730oOretE", "9030805rPCYzF", "11ObfWWh", "10477420CcOKrm", "2vrffXd", "6loAsYO", "531JSGNDv", "69271548SSiJXD", "53381HiYsid", "getItem", "148ODRwth", "41133NkmPhY"];
  return Ee = function() {
    return r;
  }, Ee();
}
function ae(r, t) {
  const e = Ee();
  return ae = function(n, x) {
    return n = n - 297, e[n];
  }, ae(r, t);
}
(function(r, t) {
  const e = Te, n = r();
  for (; []; )
    try {
      if (-parseInt(e(279)) / 1 * (parseInt(e(286)) / 2) + -parseInt(e(295)) / 3 + parseInt(e(291)) / 4 * (-parseInt(e(282)) / 5) + parseInt(e(283)) / 6 + parseInt(e(293)) / 7 * (-parseInt(e(288)) / 8) + -parseInt(e(289)) / 9 + -parseInt(e(292)) / 10 * (-parseInt(e(285)) / 11) === t)
        break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(He, 643470);
function Te(r, t) {
  const e = He();
  return Te = function(n, x) {
    return n = n - 279, e[n];
  }, Te(r, t);
}
function $t(r, t, e) {
  const n = Te, x = r[n(294)], s = r.KeysConfig.CreateGroup;
  let i = {};
  function a(d) {
    const l = n;
    i[d] = r.stage[l(280)].objects[l(290)](), r.showOpTooltip("编组-" + d);
  }
  function o(d) {
    const l = n;
    let h = i[d];
    if (h)
      return h = h.filter((u) => u.parent !== null), h.length > 0 && (r.showOpTooltip("选编组-" + d), r.stage[l(280)].removeAll().addAll(h), r.stage[l(281)].target = h[0]), h;
  }
  function c(d) {
    o(d) && e.centerBy(t.selectedGroup.objects);
  }
  for (let d = 0; d <= 9; d++)
    x[n(287)](s + "+" + d, function(l) {
      l.preventDefault(), a(d);
    }), x.bindKey("" + d, function(l) {
      l[n(284)](), o(d);
    }), x.bindKey("" + d + "+" + d, function(l) {
      l.preventDefault(), c(d);
    });
}
function He() {
  const r = ["bindKey", "269600xuHvZj", "6020820EGhIYw", "slice", "1912wuGsVF", "10RvurJJ", "161QEYeOL", "keyboard", "811197LCrpfL", "1517uKsylx", "selectedGroup", "inputSystem", "4415yGDEIu", "2676444lVxdsd", "preventDefault", "26340919HRkOXC", "80QiosLw"];
  return He = function() {
    return r;
  }, He();
}
(function(r, t) {
  const e = Me, n = r();
  for (; []; )
    try {
      if (parseInt(e(494)) / 1 + -parseInt(e(498)) / 2 * (-parseInt(e(482)) / 3) + -parseInt(e(491)) / 4 + -parseInt(e(497)) / 5 + -parseInt(e(485)) / 6 * (parseInt(e(489)) / 7) + -parseInt(e(478)) / 8 + parseInt(e(480)) / 9 === t)
        break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Oe, 792549);
function Me(r, t) {
  const e = Oe();
  return Me = function(n, x) {
    return n = n - 470, e[n];
  }, Me(r, t);
}
function Oe() {
  const r = ["pasteHandler", "filter", "layoutManager", "stylePasteHandler", "Move_up", "styleCopyHandler", "Move_left", "2061136aXyJvX", "Delete", "24672753NmhlgA", "editorEventManager", "16953TmKeFU", "forEach", "select", "8461158GYYAtC", "deleteHandler", "Move_down", "isNode", "7gautCG", "redoUndoSys", "2437376kYldMd", "Copy_style", "Cut", "443459cEzYHh", "getObject", "showOpTooltip", "5350835qLknvW", "338PLLjMj", "visible", "cutHandler", "selectedGroup", "getNoChildrensObjects"];
  return Oe = function() {
    return r;
  }, Oe();
}
class en {
  constructor(t) {
    this.editor = t, this.init();
  }
  init() {
    const t = Me, e = this.editor, n = e.stage, x = e.currentLayer;
    let s = e.stage.keyboard;
    const i = e.KeysConfig;
    function a(o, c, d) {
      o.forEach((l) => {
        s.bindKey(l, function(h) {
          c(h);
        }, d);
      });
    }
    s.on("keydown", function() {
      e.update();
    }), s.on("keyup", function(o) {
      e.update();
    }), a(i[t(479)], (o) => e[t(481)][t(486)](o)), a(i[t(493)], (o) => e.clipboardManager[t(500)](o)), a(i.Copy, (o) => {
      e.showOpTooltip("复制"), e.clipboardManager.copyHandler(o);
    }), a(i.Paste, (o) => e.clipboardManager[t(471)](o)), a(i.Undo, (o) => {
      const c = t;
      e[c(496)]("撤销"), e[c(490)].undo(), e.clearCtrlBoxs();
    }), a(i.Redo, (o) => {
      e.showOpTooltip("重做"), e.redoUndoSys.redo(o), e.clearCtrlBoxs();
    }), a(i.Select_all, (o) => {
      const c = t;
      e.showOpTooltip("全选");
      let d = n.localView[c(495)](), l = Et.flatten(d.children, (h) => h[c(499)] == !![]);
      n.select(l);
    }), a(i.Select_invert, (o) => {
      const c = t;
      e.showOpTooltip("反选");
      let d = n.selectedGroup.getNoChildrensObjects();
      n[c(484)](x.displayList.filter((l) => d.notContains(l)));
    }), a(i.Save, (o) => {
      e.showOpTooltip("保存"), e.saveHandler(o, e.imageToBase64);
    }, ![]), a(i.Open, (o) => {
      e.showOpTooltip("打开"), e.openLasted(o);
    }, ![]), a(i.LocalView, (o) => {
      e.toogleLocalView();
    }), a(i[t(492)], (o) => {
      const c = t;
      e[c(496)]("复制样式"), e.clipboardManager[c(476)](o);
    }, ![]), a(i.paste_Style, (o) => {
      const c = t;
      e.showOpTooltip("粘贴样式"), e.clipboardManager[c(474)](o);
    }, ![]), a(i[t(477)], (o) => {
      const c = t;
      n.selectedGroup[c(470)]().filter((l) => l.isNode).forEach((l) => {
        l.x -= 1;
      });
    }), a(i.Move_right, (o) => {
      const c = t;
      n.selectedGroup.getNoChildrensObjects()[c(472)]((l) => l.isNode)[c(483)]((l) => {
        l.x += 1;
      });
    }), a(i[t(475)], (o) => {
      const c = t;
      n[c(501)].getNoChildrensObjects()[c(472)]((l) => l[c(488)]).forEach((l) => {
        l.y -= 1;
      });
    }), a(i[t(487)], (o) => {
      const c = t;
      n.selectedGroup.getNoChildrensObjects().filter((l) => l.isNode)[c(483)]((l) => {
        l.y += 1;
      });
    }), a(i.Layout_grid, (o) => {
      e[t(473)].doGridLayout();
    }), $t(e, n, x), a(i.Cancel, (o) => {
      e.onEsc(o);
    });
  }
}
function Be(r, t) {
  const e = De();
  return Be = function(n, x) {
    return n = n - 133, e[n];
  }, Be(r, t);
}
const yt = Be;
(function(r, t) {
  const e = Be, n = r();
  for (; []; )
    try {
      if (-parseInt(e(140)) / 1 + -parseInt(e(141)) / 2 * (-parseInt(e(153)) / 3) + -parseInt(e(145)) / 4 * (-parseInt(e(135)) / 5) + parseInt(e(151)) / 6 * (parseInt(e(133)) / 7) + parseInt(e(150)) / 8 * (parseInt(e(136)) / 9) + parseInt(e(146)) / 10 + -parseInt(e(155)) / 11 * (parseInt(e(149)) / 12) === t)
        break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(De, 768521);
let tn = yt(142);
function De() {
  const r = ["6279568VdxxTe", "24CNKNps", "update", "6ScNiBl", "align", "22dmwHXa", "298319xeWDvO", "layoutManager", "5ntTdVA", "9KRTpVw", "editorEventManager", "select", "cutHandler", "655794Bgchnj", "1192348AuYYiV", `
<div class="header">编辑</div>
<a>剪切</a>
<a>复制</a>
<a>粘贴</a>
<a>删除</a> 
<hr></hr>
<div class="header">前后</div>
<a>上移一层</a>
<a>下移一层</a>
<a>移至顶部</a>
<a>移至底部</a>
<div class="header">对齐</div>
<a>左对齐</a>
<a>右对齐</a>
<a>顶部对齐</a>
<a>底部对齐</a>
<a>水平中心对齐</a>
<a>垂直中心对齐</a>
`, "垂直中心对齐", "左右等距", "1446804jrGZit", "9300160tVuicw", "右对齐", "zIndex", "12090984RCHjmR"];
  return De = function() {
    return r;
  }, De();
}
function nn(r) {
  const t = yt, e = r.stage;
  let n = new Tt(e, tn);
  return n.addEventListener(t(138), function(x) {
    const s = t, i = x.item;
    let a = e.inputSystem.target;
    i == "剪切" ? r.clipboardManager[s(139)]() : i == "复制" ? r.clipboardManager.copyHandler() : i == "粘贴" ? r.clipboardManager.pasteHandler() : i == "删除" && r[s(137)].deleteHandler(), a != null && (i == "上移一层" || i == "下移一层" || i == "移至顶部" ? r.layoutManager.setZIndex(a, i) : i == "移至底部" ? r[s(134)].setZIndex(a, i) : i == "左对齐" ? r[s(134)][s(154)]("左对齐") : i == "右对齐" ? r.layoutManager.align(s(147)) : i == "顶部对齐" ? r[s(134)].align("顶部对齐") : i == "底部对齐" ? r.layoutManager.align("底部对齐") : i == "水平中心对齐" ? r.layoutManager.align("水平中心对齐") : i == s(143) ? r.layoutManager.align("垂直中心对齐") : i == "左右等距" ? r.layoutManager.evenSpacing(s(144)) : i == "上下等距" && r[s(134)].evenSpacing("上下等距"), a[s(148)] < 0 ? a.zIndex = 0 : a[s(148)] > 1e3 && (a[s(148)] = 1e3), a.parent != null && a.parent.updateZIndex(), r[s(152)]());
  }), n;
}
const et = F;
function je() {
  const r = ["213487hKBFYz", "18053pKAmfB", "28uAzifK", "75507sIVXxs", "css", "12ZhFzDf", "hideGuidLine", "enable", "16148924ymkUxB", "392778ObTSgk", "guildlineW", "setBegin", "mouseEnabled", "322675TqfhtW", "show", "_disabled", "13200HRkNCj", "addChild", "10rPqEjX", "editor", "styleS", "handlerLayer", "2889rDHcOW"];
  return je = function() {
    return r;
  }, je();
}
(function(r, t) {
  const e = F, n = r();
  for (; []; )
    try {
      if (-parseInt(e(263)) / 1 + parseInt(e(268)) / 2 * (parseInt(e(266)) / 3) + parseInt(e(265)) / 4 * (-parseInt(e(276)) / 5) + -parseInt(e(272)) / 6 + -parseInt(e(264)) / 7 + -parseInt(e(256)) / 8 * (parseInt(e(262)) / 9) + -parseInt(e(258)) / 10 * (-parseInt(e(271)) / 11) === t)
        break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(je, 356174);
function F(r, t) {
  const e = je();
  return F = function(n, x) {
    return n = n - 254, e[n];
  }, F(r, t);
}
class xn {
  constructor(t) {
    const e = F;
    this[e(255)] = !![], this[e(259)] = t, this.init();
  }
  init() {
    const t = F, e = this[t(259)], n = new I();
    n[t(275)] = ![], n[t(267)](p.guildLine.styleW), n.hide(), this.guildlineW = n, e[t(261)].addChild(this.guildlineW);
    const x = new I();
    n.mouseEnabled = ![], x.css(p.guildLine[t(260)]), x.hide(), this.guildlineS = x, e.handlerLayer[t(257)](this.guildlineS);
  }
  disable() {
    const t = F;
    this[t(255)] = !![], this[t(269)]();
  }
  [et(270)]() {
    this._disabled = ![];
  }
  showGuildLine(t) {
    const e = et;
    if (this._disabled)
      return;
    const n = this.editor, x = n.stage, s = this[e(273)], i = this.guildlineS;
    s[e(274)]({ x: 0, y: t.y }), s.setEnd({ x: x.width, y: t.y }), s.show(), i.setBegin({ x: t.x, y: 0 }), i.setEnd({ x: t.x, y: x.height }), i[e(254)]();
  }
  hideGuidLine() {
    this[et(273)].hide(), this.guildlineS.hide();
  }
}
function te(r, t) {
  var e = Ae();
  return te = function(n, x) {
    n = n - 254;
    var s = e[n];
    return s;
  }, te(r, t);
}
var tt = te;
(function(r, t) {
  for (var e = te, n = r(); []; )
    try {
      var x = parseInt(e(267)) / 1 * (-parseInt(e(269)) / 2) + -parseInt(e(255)) / 3 + parseInt(e(256)) / 4 * (-parseInt(e(260)) / 5) + parseInt(e(265)) / 6 + -parseInt(e(259)) / 7 + -parseInt(e(258)) / 8 * (-parseInt(e(264)) / 9) + -parseInt(e(263)) / 10 * (-parseInt(e(254)) / 11);
      if (x === t)
        break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ae, 428868);
function Ae() {
  var r = ["407kigDxh", "1347327ooWSwU", "12uHReiU", "source", "552XQIQEW", "3725204zLmGrl", "602890HIulex", "take", "takeSource", "380630WPJuCJ", "9081RRppif", "2894868LIZblW", "isFirstCutPaste", "3aCRhQj", "type", "125698BXmyGT", "cut"];
  return Ae = function() {
    return r;
  }, Ae();
}
class nt {
  constructor() {
    this.take = 0;
  }
  copyPut(t) {
    var e = te;
    this[e(261)] = 0, this.type = "copy", this.source = t;
  }
  cutPut(t) {
    var e = te;
    this.take = -1, this[e(268)] = e(270), this[e(257)] = t;
  }
  [tt(262)]() {
    return this.take++, this.source;
  }
  [tt(266)]() {
    var t = tt;
    return this.type == Ut[t(270)] && this.take == 0;
  }
}
function Ne() {
  const r = ["record", "17285NCRvcF", "object", "4454072TBPqLR", "forEach", "cutPut", "objects", "aabb", "nodeCtrlBox", "concat", "1337574JltjhT", "48anRiEM", "40jVJsFb", "translateWith", "cssClipBoard", "selectedGroup", "654ySvlwo", "takeSource", "editor", "7EeLZKk", "target", "anchorBox", "74626mVnSPw", "stage", "copyPut", "clearTarget", "pasteHandler", "7978491FCjUHS", "4923182rsUPPx", "map", "recordEnd", "5389816sFVBJF"];
  return Ne = function() {
    return r;
  }, Ne();
}
function R(r, t) {
  const e = Ne();
  return R = function(n, x) {
    return n = n - 231, e[n];
  }, R(r, t);
}
const ce = R;
(function(r, t) {
  const e = R, n = r();
  for (; []; )
    try {
      if (-parseInt(e(254)) / 1 + -parseInt(e(234)) / 2 * (parseInt(e(255)) / 3) + -parseInt(e(247)) / 4 + parseInt(e(245)) / 5 * (parseInt(e(260)) / 6) + parseInt(e(231)) / 7 * (parseInt(e(243)) / 8) + parseInt(e(239)) / 9 + parseInt(e(256)) / 10 * (parseInt(e(240)) / 11) === t)
        break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ne, 679187);
class sn {
  constructor(t) {
    const e = R;
    this[e(258)] = new nt(), this.clipboard = new nt(), this.cssClipBoard = new nt(), this.editor = t;
  }
  copyHandler() {
    const t = R;
    let e = this[t(262)].stage, n = [][t(253)](e[t(259)].getNoChildrensObjects());
    if (n.length == 0)
      return;
    let x = n.map((i) => i.parent);
    this.clipboard[t(236)]([n, x]);
    let s = new S("copy");
    s.object = n, this.editor.dispatchEvent(s);
  }
  cutHandler() {
    const t = R;
    let e = this[t(262)], n = e[t(235)], x = [].concat(n.selectedGroup.getNoChildrensObjects());
    if (x.length == 0)
      return;
    let s = x.map((a) => a.parent);
    this.clipboard[t(249)]([x, s]), e[t(244)]("剪切"), x.forEach((a, o) => {
      s[o].removeChild(a), bt.disconnect(a, x);
    }), e.recordEnd("剪切"), n.inputSystem[t(232)] = null, e[t(233)].clearTarget(), e[t(252)].clearTarget(), e.linkCtrlBox[t(237)]();
    let i = new S("cut");
    i[t(246)] = x, this[t(262)].dispatchEvent(i);
  }
  [ce(238)]() {
    const t = ce;
    let e = this[t(262)], n = this.clipboard[t(261)]();
    if (n == null)
      return;
    let x = e.currentLayer, s = e.stage, i = n[0], a = n[1], o = i[t(241)]((v) => v._obb[t(251)]), c = gt.unionRects(o), d = c.getCenter(), l = x.stageToLocalXY(s.inputSystem.x, s.inputSystem.y), h = l.x - d.x, u = l.y - d.y;
    e[t(244)]("粘贴");
    let b = i, k = s.serializerSystem.copyAndToJSON(i);
    b = s.serializerSystem.jsonToObjects(k), b.forEach((v, P) => {
      v[t(257)](h, u);
    }), b[t(248)]((v, P) => {
      a[P].addChild(v);
    }), e[t(242)]("粘贴");
    let L = new S("paste");
    L.object = b, this.editor.dispatchEvent(L);
  }
  styleCopyHandler() {
    const t = ce;
    let e = this[t(262)], n = e.stage, x = n.inputSystem.target;
    x == null && (!n.selectedGroup.isEmpty() && (x = n.selectedGroup[t(250)][0]), x == null) || this.cssClipBoard.copyPut(x);
  }
  stylePasteHandler() {
    const t = ce;
    let e = this.editor, n = this.cssClipBoard.takeSource();
    if (n == null)
      return;
    let x = e.stage.selectedGroup[t(250)], s = this;
    e[t(244)]("粘贴样式"), x.forEach((i) => {
      s.copySetStyle(i, n);
    }), e[t(242)]("粘贴样式");
  }
  copySetStyle(t, e) {
    t !== e && t.className === e.className && t.css(e.style);
  }
}
function ze() {
  const r = ["1656920ETMwlI", "viewClone", "455939WWhSIx", "11259280yiwcdj", "center", "show", "point", "positionToLocalPoint", "attachTo", "1734940WAETDo", "161634uamVER", "91LYFbFQ", "zIndex", "726135SfVbQc", "getStageTransform", "visible", "1675527ArVdLB", "resizeTo"];
  return ze = function() {
    return r;
  }, ze();
}
function ne(r, t) {
  const e = ze();
  return ne = function(n, x) {
    return n = n - 129, e[n];
  }, ne(r, t);
}
const le = ne;
(function(r, t) {
  const e = ne, n = r();
  for (; []; )
    try {
      if (-parseInt(e(140)) / 1 + parseInt(e(129)) / 2 + parseInt(e(136)) / 3 + parseInt(e(138)) / 4 + parseInt(e(133)) / 5 + parseInt(e(130)) / 6 * (parseInt(e(131)) / 7) + -parseInt(e(141)) / 8 === t)
        break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ze, 472294);
class rn extends H {
  constructor(t, e = 0, n = 0, x = 1, s = 1) {
    const i = ne;
    super(null, e, n, x, s), this[i(132)] = Ue.NodeCtrlBox, this.editor = t, this.css(p.dropBox.style), this.mouseEnabled = ![], this.currObject, this.hide();
  }
  update() {
    this[ne(135)] && this.updateSize();
  }
  [le(146)](t) {
    const e = le;
    if (t == null || t.editable != !![]) {
      this.currObject = null, this.hide();
      return;
    }
    if (t.isLink)
      throw new Error("attach not Node");
    this.currObject = t, this.updateSize(), this[e(143)]();
  }
  updateSize() {
    const t = le;
    this.currObject != null && this[t(139)](this.currObject);
  }
  viewClone(t) {
    const e = le;
    let n = t[e(134)](), x = n.point(t[e(145)](f[e(142)])), s = n[e(144)](t.positionToLocalPoint(f.rm)), i = Math.atan2(s.y - x.y, s.x - x.x);
    n.rotate(-i);
    let a = n[e(144)](t[e(145)](f[e(142)])), o = n.point(t.positionToLocalPoint(f.rb)), c = (o.x - a.x) * 2, d = (o.y - a.y) * 2, l = 4;
    this[e(137)](c + l * 2, d + l * 2), this.rotate(i), this.translateTo(x.x, x.y);
  }
}
(function(r, t) {
  const e = oe, n = r();
  for (; []; )
    try {
      if (parseInt(e(312)) / 1 * (-parseInt(e(309)) / 2) + -parseInt(e(307)) / 3 + -parseInt(e(311)) / 4 + -parseInt(e(302)) / 5 * (parseInt(e(310)) / 6) + parseInt(e(303)) / 7 * (parseInt(e(308)) / 8) + -parseInt(e(306)) / 9 + -parseInt(e(298)) / 10 * (-parseInt(e(305)) / 11) === t)
        break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ge, 978119);
function oe(r, t) {
  const e = Ge();
  return oe = function(n, x) {
    return n = n - 298, e[n];
  }, oe(r, t);
}
function lt(r, t) {
  const e = oe;
  let n = r.currentLayer, x = r[e(301)].getAllVisiable().filter((a) => {
    const o = e;
    return a.isNode && a[o(304)] != !![] && a.mouseEnabled && a._cameraVisible;
  }), s = t.filter((a) => a.isOutOfParent() || a.parent === n), i;
  for (let a = 0; a < s.length; a++) {
    let o = s[a];
    if (i = an(o, x), i != null)
      break;
  }
  return i == null && (i = n, s = s.filter((a) => a.parent !== n)), console[e(300)](i.isLink != !![], !![], i), { parent: i, objects: s };
}
function Ge() {
  const r = ["25flqjpH", "119vboNhi", "isSelected", "6140453SBHkVD", "10725948rKOwli", "1312764EISOwM", "412656SErWhB", "1973414BKRGbi", "863364OVHgOy", "6348980YUcrqg", "1eQSYAw", "isIntersectRect", "90GCFemV", "addChild", "assert", "currentLayer"];
  return Ge = function() {
    return r;
  }, Ge();
}
function an(r, t) {
  const e = oe, n = r.getAABB(), x = t.filter((s) => s === r.parent || s === r ? ![] : r.isAncestors(s) ? ![] : !![]);
  for (let s = x.length - 1; s >= 0; s--) {
    const i = x[s];
    if (i.getAABB()[e(313)](n))
      return i;
  }
  return null;
}
const g = Fe;
(function(r, t) {
  const e = Fe, n = r();
  for (; []; )
    try {
      if (-parseInt(e(503)) / 1 + parseInt(e(509)) / 2 * (-parseInt(e(476)) / 3) + -parseInt(e(508)) / 4 * (-parseInt(e(473)) / 5) + parseInt(e(493)) / 6 + -parseInt(e(463)) / 7 + -parseInt(e(483)) / 8 * (-parseInt(e(462)) / 9) + parseInt(e(465)) / 10 * (-parseInt(e(487)) / 11) === t)
        break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Re, 520361);
function Fe(r, t) {
  const e = Re();
  return Fe = function(n, x) {
    return n = n - 459, e[n];
  }, Fe(r, t);
}
function Re() {
  const r = ["hide", "forEach", "dragHandler", "record", "3648690TeyPja", "round", "setTarget", "27690EeCNTA", "lineDrawingFinished", "setCursor", "onLinkCreate", "控制点", "selectedGroupDragHandler", "buttons", "7387304VkRjHC", "anchorBox", "clearTarget", "getNoChildrensObjects", "11DxqgWq", "DropTo_leader", "pickUpChild", "toStageRect", "mouseOverTarget", "mousedownHandler", "368034IsdTUI", "guidlineManager", "nodeCtrlBox", "getCenter", "对象拖拽", "delete", "dispatchEvent", "changeParent", "inputSystem", "deleteHandler", "253066yWLVMj", "mouseenterStageHandler", "defaultPrevented", "parent", "popupMenu", "4glBDDd", "26uTwNGE", "mouseupHandler", "Shift", "charAt", "editor", "onlineDrawingFinishedHandler", "length", "modeChange", "controlTarget", "object", "target", "linkCtrlBox", "mouseoutHandler", "Control", "attachTo", "stage", "9eLhCcI", "1664558sGyQsG", "dropToBox", "5832790SfVoay", "groupdrag", "event", "isNode"];
  return Re = function() {
    return r;
  }, Re();
}
const on = it.w != null ? it.w[g(512)](3) : "1";
class cn {
  constructor(t) {
    const e = g;
    this[e(513)] = t, this.init();
  }
  init() {
    const t = g;
    let e = this[t(513)], n = e.stage, x = n.inputSystem, s = e.handlerLayer;
    n.localView.mode == null && (n.camera.on("zoom", function() {
      e.update();
    }), n.on(Ze[t(516)], function(i) {
      const a = t;
      let o = i.newMode, c = e.nodeCtrlBox, d = e[a(520)], l = e[a(464)], h = e[a(484)];
      o == Ht.edit ? (s.addChild(c), s.addChild(d), s.addChild(h), s.addChild(l)) : (s.removeChild(c), s.removeChild(d), s.removeChild(h), s.removeChild(l)), e.update();
    }), x.on("dragover", function(i) {
      i.preventDefault(), e.dispatchEvent(x);
    }), x.on("drop", function() {
      const i = t;
      x.event[i(505)] || e.dispatchEvent(x);
    }), x.on("mousedown", function(i) {
      x.event.defaultPrevented || e.popupMenu.hide();
    }), x.on("mouseup", function(i) {
      const a = t;
      x.button == 2 ? !x.isDragEnd && e[a(507)].showAt(x.x, x.y) : e.popupMenu[a(469)]();
    }), x.on("mousemove", function() {
    }), n.selectedGroup.on(Ze[t(466)], function(i) {
      const a = t;
      e[a(481)](i, n.selectedGroup[a(486)]());
    }), n.selectedGroup.on(Ze.groupdragend, function(i) {
      e.selectedGroupDragEndHandler(i, n.selectedGroup.getNoChildrensObjects());
    }));
  }
  [g(502)]() {
    const t = g;
    let e = this.editor, n = e.stage, x = n.selectedGroup;
    if (on != "1")
      return null;
    let s = x.getNoChildrensObjects();
    x.removeAll(), e.instanceManager[t(498)](s);
    let i = new S("delete");
    i.object = s, e[t(499)](i);
  }
  mousedownHandler(t) {
    const e = g, n = this[e(513)], x = n.stage[e(501)];
    let s = n.handlerLayer, i = n.nodeCtrlBox, a = n[e(520)];
    if (n.alignManager[e(492)](x), n.controlTarget = s.pickUpChild(), n.anchorBox[e(469)](), n[e(517)] != null) {
      let o = n.controlTarget.parent;
      o !== i ? i.hide() : o !== a && a[e(469)](), n.controlTarget.mousedownHandler(x), x[e(467)].preventDefault();
      return;
    }
    a[e(469)](), i.hide();
  }
  mousewheelHandler(t) {
  }
  dblclickHandler(t) {
  }
  mouseupHandler(t) {
    const e = g, n = this[e(513)], x = n.stage.inputSystem;
    n[e(494)].hideGuidLine(), n.alignManager.mouseupHandler(x);
    let s = n.stage, i = n.nodeCtrlBox, a = n[e(520)], o = n[e(517)];
    if (o != null) {
      x.isDragEnd && !(o instanceof re) && n.recordEnd(e(480)), o[e(510)](x), x.event.preventDefault(), n.update();
      return;
    }
    if (x.button == 2)
      return;
    let c = s[e(501)].target;
    c != null ? (c.editable && (c instanceof I ? a.attachTo(c) : i.attachTo(c)), n.anchorBox.canConnectable(c) && n.anchorBox[e(475)](c)) : (n.anchorBox[e(485)](), i.clearTarget(), a.clearTarget());
    {
      if (n[e(464)].currObject != null) {
        let l = n.selectedGroup.getNoChildrensObjects(), h = lt(n, l), u = h.parent;
        h.objects[e(470)]((k) => {
          k[e(500)](u), k.upgradeLinks();
        });
      }
      n.dropToBox.attachTo(null);
    }
  }
  mousedragHandler(t) {
    const e = g, n = this.editor, x = n.stage.inputSystem;
    if (x[e(482)] == 2)
      return;
    n.keyboard.isKeydown(e(511)) && n[e(461)][e(478)](w.crosshair), n.guidlineManager.showGuildLine(x);
    let s = n.controlTarget;
    if (s != null) {
      if (x.isDragStart && !(s instanceof re) && n[e(472)](e(480)), s[e(471)](x), x.event instanceof MouseEvent && x[e(467)].defaultPrevented == !![])
        return;
      x.event.preventDefault();
      return;
    }
    n.alignManager.mousedragHandler(x), n.dropToBox.hide();
    const i = n.KeysConfig[e(488)];
    if (n.stage.inputSystem[e(519)] && n.keyboard.isKeydown(i)) {
      let o = n.selectedGroup.getNoChildrensObjects(), c = lt(n, o), d = c[e(506)];
      d != null && d.editable && n.dropToBox[e(460)](d);
    }
  }
  mousemoveHandler(t) {
    const e = g, n = this[e(513)];
    let x = n.stage;
    const s = x.handlerLayer;
    if (x.localView.getObject(), x[e(478)]("auto"), n.keyboard.isKeydown(e(459)) && n.anchorBox.findConnectableEndpoint([]))
      return;
    let i = s[e(489)]();
    if (i !== n.mouseOverTarget && (n.mouseOverTarget != null && n.mouseOverTarget.mouseoutHandler(t), i != null && i.mouseenterHandler(t)), n[e(491)] = i, i != null) {
      i.mousemoveHandler(t);
      return;
    }
    let a = x.getCurrentLayer()[e(489)]();
    a != null && (n.stage.setCursor("move"), a[e(468)] && n.anchorBox.canConnectable(a) && n[e(484)].setTarget(a));
  }
  mouseenterHandler(t) {
    const e = g, n = this.editor;
    n[e(520)].mouseenterStageHandler(), n[e(495)].mouseenterStageHandler(), n[e(484)][e(504)]();
  }
  [g(521)](t) {
    const e = g, n = this.editor;
    n[e(520)].mouseoutStageHandler(), n.nodeCtrlBox.mouseoutStageHandler(), n.anchorBox.mouseoutStageHandler();
  }
  onLineDrawnHandler(t) {
    const e = g, n = this.editor;
    if (n.onLinkCreate)
      n[e(479)](t);
    else {
      let x = new S("lineDrawn");
      x.object = t, n[e(499)](x), x = new S("drawLineStart"), x.object = t, n.dispatchEvent(x);
    }
  }
  [g(514)](t) {
    const e = g, n = this[e(513)];
    let x = new S(e(477));
    x[e(518)] = t, n[e(499)](x), x = new S("drawLineEnd"), x.object = t, n.dispatchEvent(x);
  }
  [g(481)](t, e) {
    const n = g, x = this.editor;
    if (x.stage.inputSystem.isDragStart && x.record(n(497)), e[n(515)] == 1) {
      const i = e[0], a = x.getCurrentLayer()[n(490)](i._obb.aabb), o = a[n(496)]();
      x.guidlineManager.showGuildLine(o);
    }
  }
  selectedGroupDragEndHandler(t, e) {
    const n = g, x = this.editor;
    if (!x[n(461)].inputSystem.isMouseOn) {
      x.recordInterrupt();
      return;
    }
    e[n(470)]((i) => {
      const a = n;
      i.isNode && (i.x = Math.round(i.x), i.y = Math[a(474)](i.y));
    }), x.recordEnd("对象拖拽");
  }
}
(function(r, t) {
  const e = j, n = r();
  for (; []; )
    try {
      if (parseInt(e(166)) / 1 * (-parseInt(e(156)) / 2) + parseInt(e(170)) / 3 + parseInt(e(168)) / 4 + -parseInt(e(146)) / 5 + parseInt(e(161)) / 6 * (-parseInt(e(160)) / 7) + -parseInt(e(148)) / 8 + parseInt(e(171)) / 9 === t)
        break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(We, 384273);
function We() {
  const r = ["778668JcAXqP", "8626509lLJAEo", "1770905zGrnXe", "shapeLayout", "854672PAYGyr", "垂直中心对齐", "easeInQuart", "updatezIndex", "isAlone", "下移一层", "editor", "上移一层", "23014GvwXor", "底部对齐", "水平中心对齐", "getUnionRect", "7nykImL", "2896176EiKWGa", "stage", "getBottom", "getCenter", "移至顶部", "34otCLCF", "length", "2004660HxzJXb", "getRight"];
  return We = function() {
    return r;
  }, We();
}
function j(r, t) {
  const e = We();
  return j = function(n, x) {
    return n = n - 146, e[n];
  }, j(r, t);
}
class ln {
  constructor(t) {
    const e = j;
    this[e(154)] = t;
  }
  setZIndex(t, e) {
    const n = j;
    e == n(155) ? t.zIndex++ : e == n(153) ? t.zIndex-- : e == n(165) ? t.zIndex = 1e3 : e == "移至底部" && (t.zIndex = 0), t.parent[n(151)]();
  }
  evenSpacing(t) {
    const e = j;
    let x = this[e(154)].stage.selectedGroup.getNoChildrensObjects();
    x = x.filter((s) => s.isNode || s instanceof I && s[e(152)]()), x.length != 0;
  }
  align(t) {
    const e = j, n = this.editor;
    let x = n.stage.selectedGroup.getNoChildrensObjects();
    if (x = x.filter((a) => a.isNode || a instanceof I && a[e(152)]()), x.length == 0)
      return;
    let s = x.map((a) => a._obb.aabb), i = gt.unionRects(s);
    for (let a = 0; a < x[e(167)]; a++) {
      let o = x[a], c = o._obb.aabb;
      t == "左对齐" ? o.translateWith(i.x - c.x, 0) : t == "右对齐" ? o.translateWith(i.getRight() - c[e(169)](), 0) : t == "顶部对齐" ? o.translateWith(0, i.y - c.y) : t == e(157) ? o.translateWith(0, i.getBottom() - c[e(163)]()) : t == e(158) ? o.translateWith(0, i.getCenter().y - c[e(164)]().y) : t == e(149) && o.translateWith(i.getCenter().x - c.getCenter().x, 0);
    }
    n.update();
  }
  doGridLayout() {
    const t = j;
    let e = this[t(154)], n = e[t(162)], x = n.selectedGroup.getNoChildrensObjects().filter((l) => l instanceof H);
    if (x.length < 2)
      return;
    let s = Math.ceil(Math.sqrt(x.length)), i = Mt[t(159)](x), a = i.getCenter(), o = _t.outerGrid(s, s), c = n.layoutSystem[t(147)](x, o), d = x[0].width * s;
    c.resizeTo(d, d), c.translate(a.x, a.y), c.doLayout({ effect: t(150), duration: 300 }), e.showOpTooltip("网格布局");
  }
}
const G = Ve;
(function(r, t) {
  const e = Ve, n = r();
  for (; []; )
    try {
      if (-parseInt(e(193)) / 1 * (parseInt(e(186)) / 2) + -parseInt(e(173)) / 3 + -parseInt(e(190)) / 4 + -parseInt(e(174)) / 5 + -parseInt(e(189)) / 6 + -parseInt(e(177)) / 7 + -parseInt(e(178)) / 8 * (-parseInt(e(187)) / 9) === t)
        break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ke, 864570);
function Ve(r, t) {
  const e = Ke();
  return Ve = function(n, x) {
    return n = n - 172, e[n];
  }, Ve(r, t);
}
function Ke() {
  const r = ["133747syjfcw", "stage", "isLink", "addNewInstance", "2998899HhqyzM", "4849310YNoTjO", "showOpTooltip", "onLineDrawnHandler", "9627289uEiofj", "50558928jVBECJ", "indexOf", "editor", "onlineDrawingFinishedHandler", "Node", "zIndex", "LinkClassName", "css", "14dtFyLl", "9MosevG", "Link", "2288700hkpsVw", "3171180wrkkEn", "delete", "create"];
  return Ke = function() {
    return r;
  }, Ke();
}
class dn {
  constructor(t) {
    this.editor = t;
  }
  [G(191)](t) {
    const e = G;
    let n = this.editor;
    n.record("删除"), t.forEach(function(x) {
      bt.disconnect(x), x.removeFromParent();
    }), n[e(175)]("删除"), n.recordEnd("删除");
  }
  [G(172)](t) {
    const e = this.editor;
    this.editor.stage.localView.getObject().addChild(t);
    let x = new S("create");
    x.object = t, e.dispatchEvent(x);
  }
  [G(192)](t) {
    const e = G;
    let s = this[e(180)][e(194)].localView.getMouseXY(), i = s.x, a = s.y, o = rt(t);
    if (t[e(179)](e(182)) != -1) {
      let c = new o(null, i, a, 64, 64);
      return this.addNewInstance(c), c;
    }
    if (t.indexOf("Link") != -1) {
      let c = new o(null, { x: i - 40, y: a }, { x: i + 40, y: a + (t == e(188) ? 0 : 80) });
      return this[e(172)](c), c;
    }
    throw new Error("unknow classname:" + t);
  }
  lineDrawn(t, e, n, x) {
    const s = G;
    let i = this[s(180)], a = rt(i[s(184)]);
    const o = new a(t, e, n, x), c = Object.assign({}, i.newLinkProperties);
    c.css && (o.css(c[s(185)]), delete c.css), Object.keys(c).forEach((h) => {
      let u = c[h];
      typeof u == "function" ? o[h] = u() : o[h] = u;
    });
    let l = e.isNode || e[s(195)] ? e.parent : i.currentLayer;
    return o[s(183)] = Ue.EditorNewLink, l.addChild(o), i.editorEventManager[s(176)](o), o;
  }
  lineDrawingFinished(t) {
    const e = G;
    this[e(180)].editorEventManager[e(181)](t);
  }
}
const Y = A;
(function(r, t) {
  const e = A, n = r();
  for (; []; )
    try {
      if (parseInt(e(285)) / 1 + -parseInt(e(250)) / 2 + parseInt(e(266)) / 3 * (parseInt(e(278)) / 4) + parseInt(e(262)) / 5 + parseInt(e(245)) / 6 * (-parseInt(e(252)) / 7) + -parseInt(e(282)) / 8 + parseInt(e(273)) / 9 === t)
        break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Je, 331518);
function A(r, t) {
  const e = Je();
  return A = function(n, x) {
    return n = n - 240, e[n];
  }, A(r, t);
}
function Je() {
  const r = ["dyLine", "102ajeHHT", "css", "center", "getAlignInfo", "_obb", "285998gcUBLX", "addChild", "105322EXoyry", "length", "bottom", "alignLineStyle", "DiableNodeAlign", "yType", "toStageRect", "mousedragHandler", "right", "minDistance", "391715dIamaJ", "isNode", "isIntersectRect", "displayList", "3xRqbxJ", "handlerLayer", "visible", "mouseEnabled", "align", "stageToLocalXY", "left", "3969648YfHCJA", "target", "editor", "distance", "init", "2021456WuZpUW", "_disabled", "parent", "xType", "4649784wzcFkG", "hide", "abs", "286743jXTyow", "endArrow", "map", "dxLine", "middle", "isKeydown"];
  return Je = function() {
    return r;
  }, Je();
}
class hn {
  constructor(t) {
    const e = A;
    this[e(261)] = p.align[e(261)], this._disabled = ![], this.visible = ![], this.editor = t, this[e(277)](t);
  }
  init(t) {
    const e = A;
    let n = new I(null, { x: 0, y: 0 }, { x: 100, y: 100 });
    n[e(246)](p.align[e(255)]), n[e(269)] = ![], this.dxLine = n;
    let x = new I(null, { x: 0, y: 0 }, { x: 100, y: 100 });
    x.css(p[e(270)].alignLineStyle), x.mouseEnabled = ![], this.dyLine = x, n.hide(), x[e(283)](), t[e(267)][e(251)](n), t[e(267)].addChild(x);
  }
  disable() {
    this._disabled = !![], this.dxLine.hide(), this.dyLine.hide();
  }
  enable() {
    const t = A;
    this[t(279)] = ![];
  }
  [Y(248)](t, e) {
    const n = Y, x = this.editor, s = x.stage;
    let i = t.target;
    if (s.selectedGroup.objects[n(253)] > 1)
      return null;
    let a = this.editor.getCurrentLayer(), o = (h) => h.isNode && h !== i && h !== h[n(280)].beginArrow && h !== h.parent[n(286)] && h !== h.parent.label;
    const c = s.getCurrentLayer()[n(265)].filter(o), d = c[n(240)]((h) => a[n(258)](h[n(249)].aabb));
    return this.findAlignRectInfo(a[n(258)](i._obb.aabb), d, e);
  }
  mousedownHandler(t) {
  }
  mouseupHandler(t) {
    const e = Y;
    if (this._disabled)
      return;
    let n = !this.dxLine.visible && !this.dyLine[e(268)];
    if (this[e(241)].hide(), this.dyLine.hide(), n)
      return;
    let x = t.target, s = this.alignInfo;
    if (x && x.isNode && s != null) {
      if (this.editor.getCurrentLayer(), s.xType != null) {
        let i = s.xRect, a = s.xType, o = i[s[e(281)]];
        o = x.parent[e(271)](o, 0).x, a == e(272) ? x.left = o : a == "center" ? x.x = o : a == "right" && (x[e(260)] = o);
      }
      if (s.yType != null) {
        let i = s.yRect, a = s.yType, o = i[s[e(257)]];
        o = x.parent[e(271)](0, o).y, a == "top" ? x.top = o : a == e(242) ? x.y = o : a == e(254) && (x.bottom = o);
      }
      this.editor.update(), this.alignInfo = null;
    }
  }
  [Y(259)](t) {
    const e = Y;
    if (this._disabled)
      return;
    let n = t[e(274)];
    if (n == null || !n[e(263)] || (this.dxLine.hide(), this[e(244)].hide(), this[e(275)].keyboard[e(243)](Qe[e(256)])))
      return;
    let x = this.dxLine, s = this.dyLine;
    const i = this.getAlignInfo(t, this[e(261)]);
    if (this.alignInfo = i, i == null)
      return;
    let a = i.rect;
    if (i.xType != null) {
      let o = i.xRect, c = o[i[e(281)]], d = (a.middle + o.middle) / 2, l = Math.abs(a.middle - o.middle);
      x.setBegin({ x: c, y: d - l / 2 }), x.setEnd({ x: c, y: d + l / 2 }), x.show();
    }
    if (i[e(257)] != null) {
      let o = i.yRect, c = (a.center + o.center) / 2, d = o[i[e(257)]], l = Math.abs(a.center - o[e(247)]);
      s.setBegin({ x: c - l / 2, y: d }), s.setEnd({ x: c + l / 2, y: d }), s.show();
    }
  }
  findAlignRectInfo(t, e, n) {
    const x = Y;
    let s = Number.MAX_VALUE, i = Number.MAX_VALUE, a, o, c, d;
    e.sort((h, u) => {
      const b = A;
      return de[b(276)](t.center, t[b(242)], u[b(247)], u.middle) - de[b(276)](t.center, t.middle, h.center, h.middle);
    });
    let l;
    for (let h = 0; h < e.length; h++) {
      let u = e[h];
      u[x(264)](t) || (l = Math.abs(t.top - u.top), l <= i && l <= n && (o = "top", i = l, d = u), l = Math[x(284)](t.bottom - u.bottom), l <= i && l <= n && (o = "bottom", i = l, d = u), l = Math.abs(t.middle - u.middle), l <= i && l <= n && (o = "middle", i = l, d = u), l = Math.abs(t.left - u.left), l <= s && l < n && (a = "left", s = l, c = u), l = Math.abs(t.right - u[x(260)]), l <= s && l < n && (a = "right", s = l, c = u), l = Math.abs(t.center - u[x(247)]), l <= s && l < n && (a = "center", s = l, c = u));
    }
    return { x: s, y: i, rect: t, xRect: c, yRect: d, xType: a, yType: o };
  }
}
const _ = W;
(function(r, t) {
  const e = W, n = r();
  for (; []; )
    try {
      if (-parseInt(e(158)) / 1 * (-parseInt(e(163)) / 2) + parseInt(e(177)) / 3 + parseInt(e(191)) / 4 + parseInt(e(192)) / 5 * (parseInt(e(170)) / 6) + -parseInt(e(173)) / 7 * (-parseInt(e(193)) / 8) + -parseInt(e(148)) / 9 + -parseInt(e(197)) / 10 === t)
        break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Xe, 832376);
function Xe() {
  const r = ["mouseupHandler", "nodeCtrlBox", "showOpTooltip", "showTip", "msg", "update", "11922858cbxLfT", "fadeOut", "getCurrentLayer", "targetOnly", "serializerSystem", "restoreToJson", "newLinkProperties", "KeysConfig", "guidlineManager", "log", "2071JltjRC", "lineDrawn", "sendKey", "opTooltip", "recordName", "114nOBuoN", "keyboard", "recordEnd", "open", "dispatchEvent", "saveHandler", "camera", "6qEbxux", "onEsc", "mousedragHandler", "77MgJMwl", "operationTip", "DataCenter", "dblclickHandler", "4086429fjIhOE", "instanceManager", "mousemoveHandler", "dropToBox", "EditorConfig", "clearTarget", "redoUndoSys", "push", "setHtml", "editorEventManager", "stage", "toogleLocalView", "isDraging", "linkCtrlBox", "289928feTQwT", "5924895fYseWf", "53992cMaVWL", "record和recordEnd没有成对出现", "getItem", "popupMenu", "6547520LIEeUX", "selectedGroupDragEndHandler"];
  return Xe = function() {
    return r;
  }, Xe();
}
function W(r, t) {
  const e = Xe();
  return W = function(n, x) {
    return n = n - 144, e[n];
  }, W(r, t);
}
class dt extends ht {
  constructor(t) {
    const e = W;
    super(), this.KeysConfig = Qe, this[e(181)] = p, this.LinkClassName = "AutoFoldLink", this[e(154)] = {}, this[e(175)] = Zt, this.imageToBase64 = ![], this.stage = t, t.editor = this, this.currentLayer = this.getCurrentLayer(), this.handlerLayer = t.handlerLayer, this.selectedGroup = this.stage.selectedGroup, this.keyboard = t[e(164)], this.clipboardManager = new sn(this), this[e(178)] = new dn(this), this.editorEventManager = new cn(this), this.keyManager = new en(this), this[e(200)] = new Gt(this), this[e(190)] = new Rt(this), this.anchorBox = new Xt(this), this[e(180)] = new rn(this), this[e(196)] = nn(this), this.stage.inputSystem.target = null, this.controlTarget = null, this.mouseOverTarget = null, this.inputTextfield = new Ot(this), this[e(183)] = new qt(this), this.layoutManager = new ln(this), this[e(156)] = new xn(this), this.alignManager = new hn(this), this[e(161)] = new Bt(t), Object.assign(this.opTooltip.domElement.style, { paddingLeft: "20px", paddingRight: "20px", color: "black" });
  }
  setLinkClassName(t) {
    this.LinkClassName = t;
  }
  getCurrentLayer() {
    return this[W(187)].getCurrentLayer();
  }
  defineKeys(t) {
    Object.assign(this[W(155)], t);
  }
  [_(144)](t) {
    const e = _;
    p[e(174)].enable && (this.opTooltip[e(185)](t), this.opTooltip.showAt(this.stage.width * 0.5, this[e(187)].height * 0.5), this[e(161)][e(149)](80));
  }
  [_(168)](t, e = ![]) {
    const n = _;
    let x = this[n(150)](), s = x.toFileJson({ imageToBase64: e });
    this.DataCenter.setItem(p.data.localLastDocName, s);
    const i = new S("save");
    i.object = s, i.imageToBase64 = e, this[n(167)](i);
  }
  openLasted() {
    const t = _, e = this.getCurrentLayer(), n = this.DataCenter[t(195)](p.data.localLastDocName);
    return n != null ? e.openJson(n) : null;
  }
  dblclickHandler(t) {
    const e = _;
    this.editorEventManager[e(176)](t), this[e(147)]();
  }
  mousewheelHandler(t) {
    this.editorEventManager.mousewheelHandler(t), this.update();
  }
  mousedownHandler(t) {
    const e = _;
    this[e(186)].mousedownHandler(t), this[e(147)]();
  }
  mouseupHandler(t) {
    const e = _;
    this[e(186)][e(199)](t), this.update();
  }
  mousedragHandler(t) {
    const e = _;
    this.editorEventManager[e(172)](t), this.update();
  }
  [_(179)](t) {
    const e = _;
    if (this.stage.inputSystem[e(189)])
      return this.mousedragHandler(t);
    this.editorEventManager.mousemoveHandler(t), this.update();
  }
  mouseenterHandler(t) {
    const e = _;
    this[e(186)].mouseenterHandler(t), this[e(147)]();
  }
  mouseoutHandler(t) {
    this[_(186)].mouseoutHandler(t), this.update();
  }
  selectedGroupDragHandler(t, e) {
    this.editorEventManager.selectedGroupDragHandler(t, e);
  }
  selectedGroupDragEndHandler(t, e) {
    const n = _;
    this[n(186)][n(198)](t, e);
  }
  recordInterrupt() {
    this.recordName = null, this.lastLayerState = null;
  }
  record(t) {
    const e = _;
    let n = this.currentLayer, x = n.stage[e(152)];
    this.recordName != null && console.warn(e(194), this.recordName + ":" + t), this.recordName = t, this.lastLayerState = x.getState(this.currentLayer);
  }
  [_(165)](t) {
    const e = _;
    t != this[e(162)], this.recordName = null;
    let n = this.currentLayer, x = n.stage.serializerSystem, s = this.lastLayerState, i = x.getState(n);
    this.redoUndoSys[e(184)](t, function() {
      x.restoreToJson(n, i);
    }, function() {
      x[e(153)](n, s);
    });
  }
  newLink(t, e, n, x) {
    const s = _;
    return this[s(178)][s(159)](t, e, n, x);
  }
  update() {
    const t = _;
    this.dropToBox.update(), this.nodeCtrlBox[t(147)](), this.anchorBox[t(147)](), this.stage.update();
  }
  toJson(t = ![]) {
    return this.getCurrentLayer().toFileJson(t);
  }
  openJson(t) {
    const e = _;
    this.getCurrentLayer().openJson(t);
    let n = new S(e(166));
    n.object = t, this.dispatchEvent(n);
  }
  [_(145)](t, e = "") {
    const n = _;
    let x = new Event(n(157));
    x[n(146)] = t + e, this.dispatchEvent(x);
  }
  create(t) {
    return this.instanceManager.create(t);
  }
  clearCtrlBoxs() {
    const t = _;
    this.anchorBox[t(182)](), this.nodeCtrlBox[t(182)](), this[t(190)].clearTarget();
  }
  [_(188)]() {
    const t = _;
    let e = this.stage.inputSystem.target;
    this[t(187)][t(169)][t(151)](e), this.clearCtrlBoxs(), this.update();
  }
  [_(160)](t, e) {
    this[_(164)].sendKey(t, e);
  }
  [_(171)]() {
    this.anchorBox.cancel();
  }
}
dt.KeysConfig = Qe, Dt.Editor = dt;
(function(r, t) {
  for (var e = xt, n = r(); []; )
    try {
      var x = parseInt(e(267)) / 1 + -parseInt(e(275)) / 2 * (-parseInt(e(274)) / 3) + -parseInt(e(271)) / 4 * (parseInt(e(276)) / 5) + -parseInt(e(272)) / 6 + -parseInt(e(268)) / 7 * (parseInt(e(265)) / 8) + parseInt(e(270)) / 9 * (parseInt(e(266)) / 10) + parseInt(e(273)) / 11 * (-parseInt(e(269)) / 12);
      if (x === t)
        break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ye, 366597);
function Ye() {
  var r = ["11pHzPMa", "618JeMPbQ", "1662uqCBfM", "1345690ZxpVsh", "870856LJuNlr", "70rLJJkV", "550719cBqtnS", "7QuoZJf", "4611084ljTgym", "919386MFRwqg", "8fkXIWI", "233976zVVWxl"];
  return Ye = function() {
    return r;
  }, Ye();
}
function xt(r, t) {
  var e = Ye();
  return xt = function(n, x) {
    n = n - 265;
    var s = e[n];
    return s;
  }, xt(r, t);
}
export {
  dt as Editor,
  fn as IconsPanel,
  pn as PropertiesPanel
};
