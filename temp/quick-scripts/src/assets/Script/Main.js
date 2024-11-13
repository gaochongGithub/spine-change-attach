"use strict";
cc._RF.push(module, 'e1b90/rohdEk4SdmmEZANaD', 'Main');
// Script/Main.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var SkelChanger_1 = require("./spine/SkelChanger");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.skelNode = null;
        _this.skelNode1 = null;
        return _this;
    }
    Main.prototype.onLoad = function () {
        var _this = this;
        var skel = this.skelNode.getComponent(sp.Skeleton);
        skel.animation = "idle";
        skel.loop = true;
        // const skelCard: sp.Skeleton = this.skelNode1.getComponent(sp.Skeleton);
        // skel.animation = "animation2";
        // skel.loop = true;
        cc.resources.load("icon/icon_dayanta", cc.SpriteFrame, function (e, asset) {
            if (e) {
                cc.error(e);
                return;
            }
            _this.updateAttach(skel, "jiuhu_3", asset.getTexture());
            // this.updateAttach(skelCard, "12", asset.getTexture());
        });
    };
    __decorate([
        property(cc.Node)
    ], Main.prototype, "skelNode", void 0);
    __decorate([
        property(cc.Node)
    ], Main.prototype, "skelNode1", void 0);
    Main = __decorate([
        ccclass
    ], Main);
    return Main;
}(SkelChanger_1.default));
exports.default = Main;

cc._RF.pop();