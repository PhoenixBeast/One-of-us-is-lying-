"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
console.clear();
var slides = [{
  title: "Simon Kelleher",
  subtitle: "Age 17",
  description: "A teenager, attending at Bayview High, who fakes being the omniscient narrator and serves as the main villain of the narrative. Simon is an isolate, a social pariah who, in fact, attempts to terrorize the other youths with his unfurling of their biggest secrets. Simon has an anaphylactic shock while detained alone with Ms. Rietveld and dies from it. The masses despised him whilst alive but now that he is dead, he finally gets the respect he has yearned for all his life.",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMNi0MB1zsASe5BtrcUQnm4mJRH6_G-P7c1Q&s"
}, {
  title: "Bronwyn Rojas",
  subtitle: "age 17",
  description: "A student at Bayview High and smartest member of the Bayview Four. Bronwyn wants to go to college at Yale, she plays the piano and is depicted as being very smart. Her family resides in a four storied Victorian house in the elitist neighborhood of the town. Of every character in the book, Bronwyn is the only character of mixed heritage given the fact that she is the daughter of a Columbian immigrant. ",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWiga-weOjjZ0UOfuNitboCjO7Lu9dV2BISA&s"
}, {
  title: "Nate McAuley",
  subtitle: "age 17",
  description: "A high school student at Bayview and one of the ‘criminals’ in the case of the Bayview Four. Even Nate becomes a dealer and cements his pound for selling marijuana and painkillers rendering him probation. Nate has been left to fend for himself since his mother is a druggie and his father an alcoholic.",
  image: "https://images.squarespace-cdn.com/content/v1/56c3533a37013b198dcdb996/1642536890285-GF9GOULTGNKEXMDXI8FN/ABOOKOF_COOPER_VAN_GROOTEL_COVER_web.jpg?format=750w"
}, {
  title: "Cooper Clay",
  subtitle: "age 17",
  description: "An aspiring football player in his last year of high school and a member of the group that attends Bayview High. Cooper was an exceptional baseball player who is sure to go far. Born in the State of Mississippi he retains a Southern accent which crops up whenever he is under pressure. Cooper has a good and warm relationship with his compact, traditional family, and the people from his school, Bayview High vibes positively with him, though, he must keep his homosexuality secret from almost everyone.",
  image: "https://i.pinimg.com/originals/3a/27/33/3a27333378e0b977207a8da2b631020b.jpg"
}, {
  title: "Addy Prentiss",
  subtitle: "age 17",
  description: "A seventeen-year-old student at Bayview High and “the princess” of the Bayview Four. Addy is beautiful and has been in a relationship with her boyish athlete boyfriend, Jake, for the whole year for freshman. Addy is portrayed as a helpless, dependent, emotionally unstable, and pretending to be shallower than she is, but she finally professionally demonstrates the contrary.",
  image: "https://assets.mycast.io/actor_images/actor-addy-prentiss-744447_large.jpg?1682170696"
}];
function useTilt(active) {
  var ref = React.useRef(null);
  React.useEffect(function () {
    if (!ref.current || !active) {
      return;
    }
    var state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined
    };
    var el = ref.current;
    var handleMouseMove = function handleMouseMove(e) {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      var px = (state.mouseX - state.rect.left) / state.rect.width;
      var py = (state.mouseY - state.rect.top) / state.rect.height;
      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };
    el.addEventListener("mousemove", handleMouseMove);
    return function () {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);
  return ref;
}
var initialState = {
  slideIndex: 0
};
var slidesReducer = function slidesReducer(state, event) {
  if (event.type === "NEXT") {
    return _objectSpread(_objectSpread({}, state), {}, {
      slideIndex: (state.slideIndex + 1) % slides.length
    });
  }
  if (event.type === "PREV") {
    return _objectSpread(_objectSpread({}, state), {}, {
      slideIndex: state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
    });
  }
};
function Slide(_ref) {
  var slide = _ref.slide,
    offset = _ref.offset;
  var active = offset === 0 ? true : null;
  var ref = useTilt(active);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "slide",
    "data-active": active,
    style: {
      "--offset": offset,
      "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "slideBackground",
    style: {
      backgroundImage: "url('".concat(slide.image, "')")
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "slideContent",
    style: {
      backgroundImage: "url('".concat(slide.image, "')")
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "slideContentInner"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "slideTitle"
  }, slide.title), /*#__PURE__*/React.createElement("h3", {
    className: "slideSubtitle"
  }, slide.subtitle), /*#__PURE__*/React.createElement("p", {
    className: "slideDescription"
  }, slide.description))));
}
function App() {
  var _React$useReducer = React.useReducer(slidesReducer, initialState),
    _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
    state = _React$useReducer2[0],
    dispatch = _React$useReducer2[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "slides"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return dispatch({
        type: "PREV"
      });
    }
  }, "\u2039"), [].concat(slides, slides, slides).map(function (slide, i) {
    var offset = slides.length + (state.slideIndex - i);
    return /*#__PURE__*/React.createElement(Slide, {
      slide: slide,
      offset: offset,
      key: i
    });
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return dispatch({
        type: "NEXT"
      });
    }
  }, "\u203A"));
}
var elApp = document.getElementById("app");
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), elApp);
