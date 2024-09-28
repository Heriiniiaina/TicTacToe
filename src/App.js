"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
require("./App.css");
var Block_1 = require("./components/Block");
function App() {
    var _this = this;
    var _a = (0, react_1.useState)(Array(9).fill(null)), state = _a[0], setState = _a[1];
    var _b = (0, react_1.useState)("X"), current = _b[0], setCurrent = _b[1];
    console.log(state);
    var checkNull = function (state) {
        for (var i = 0; i < state.length; i++) {
            if (state[i] == null)
                return false;
        }
        return true;
    };
    var checkWin = function (state) {
        var win = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [1, 4, 7],
            [0, 3, 6],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (var i = 0; i < win.length; i++) {
            var _a = win[i], a = _a[0], b = _a[1], c = _a[2];
            if (state[a] != null && state[a] == state[b] && state[a] == state[c])
                return true;
        }
        return false;
    };
    var blockClick = function (index) { return __awaiter(_this, void 0, void 0, function () {
        var stateCopy, win, nulls;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    stateCopy = Array.from(state);
                    stateCopy[index] = current;
                    return [4 /*yield*/, setState(stateCopy)];
                case 1:
                    _a.sent();
                    win = checkWin(stateCopy);
                    nulls = checkNull(stateCopy);
                    if (nulls)
                        alert("Match null");
                    if (win) {
                        alert("".concat(current, " win the game"));
                    }
                    setCurrent(current == "X" ? "O" : "X");
                    return [2 /*return*/];
            }
        });
    }); };
    return (<>
      <div className='board'>
          <div className="row">
            <Block_1.default oneClick={function () { return blockClick(0); }} value={state[0]}/>
            <Block_1.default oneClick={function () { return blockClick(1); }} value={state[1]}/>
            <Block_1.default oneClick={function () { return blockClick(2); }} value={state[2]}/>
          </div>
          <div className="row">
            <Block_1.default oneClick={function () { return blockClick(3); }} value={state[3]}/>
            <Block_1.default oneClick={function () { return blockClick(4); }} value={state[4]}/>
            <Block_1.default oneClick={function () { return blockClick(5); }} value={state[5]}/>
          </div>
          <div className="row">
            <Block_1.default oneClick={function () { return blockClick(6); }} value={state[6]}/>
            <Block_1.default oneClick={function () { return blockClick(7); }} value={state[7]}/>
            <Block_1.default oneClick={function () { return blockClick(8); }} value={state[8]}/>
          </div>
      </div>
    </>);
}
exports.default = App;
