
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrQyx3QkFBVztJQUE3QztRQUFBLHFFQXlCQztRQXZCQSxjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGVBQVMsR0FBWSxJQUFJLENBQUM7O0lBb0IzQixDQUFDO0lBbEJBLHFCQUFNLEdBQU47UUFBQSxpQkFpQkM7UUFoQkEsSUFBTSxJQUFJLEdBQWdCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUVqQiwwRUFBMEU7UUFDMUUsaUNBQWlDO1FBQ2pDLG9CQUFvQjtRQUVwQixFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBaUIsbUJBQW1CLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFDLENBQVEsRUFBRSxLQUFxQjtZQUN0RyxJQUFJLENBQUMsRUFBRTtnQkFDTixFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNaLE9BQU87YUFDUDtZQUNELEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztZQUN2RCx5REFBeUQ7UUFDMUQsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBdEJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ087SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDUTtJQUxOLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0F5QnhCO0lBQUQsV0FBQztDQXpCRCxBQXlCQyxDQXpCaUMscUJBQVcsR0F5QjVDO2tCQXpCb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTa2VsQ2hhbmdlciBmcm9tIFwiLi9zcGluZS9Ta2VsQ2hhbmdlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyBTa2VsQ2hhbmdlciB7XHJcblx0QHByb3BlcnR5KGNjLk5vZGUpXHJcblx0c2tlbE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHRAcHJvcGVydHkoY2MuTm9kZSlcclxuXHRza2VsTm9kZTE6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHRvbkxvYWQoKSB7XHJcblx0XHRjb25zdCBza2VsOiBzcC5Ta2VsZXRvbiA9IHRoaXMuc2tlbE5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuXHRcdHNrZWwuYW5pbWF0aW9uID0gXCJpZGxlXCI7XHJcblx0XHRza2VsLmxvb3AgPSB0cnVlO1xyXG5cclxuXHRcdC8vIGNvbnN0IHNrZWxDYXJkOiBzcC5Ta2VsZXRvbiA9IHRoaXMuc2tlbE5vZGUxLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcblx0XHQvLyBza2VsLmFuaW1hdGlvbiA9IFwiYW5pbWF0aW9uMlwiO1xyXG5cdFx0Ly8gc2tlbC5sb29wID0gdHJ1ZTtcclxuXHJcblx0XHRjYy5yZXNvdXJjZXMubG9hZDxjYy5TcHJpdGVGcmFtZT4oYGljb24vaWNvbl9kYXlhbnRhYCwgY2MuU3ByaXRlRnJhbWUsIChlOiBFcnJvciwgYXNzZXQ6IGNjLlNwcml0ZUZyYW1lKSA9PiB7XHJcblx0XHRcdGlmIChlKSB7XHJcblx0XHRcdFx0Y2MuZXJyb3IoZSk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMudXBkYXRlQXR0YWNoKHNrZWwsIFwiaml1aHVfM1wiLCBhc3NldC5nZXRUZXh0dXJlKCkpO1xyXG5cdFx0XHQvLyB0aGlzLnVwZGF0ZUF0dGFjaChza2VsQ2FyZCwgXCIxMlwiLCBhc3NldC5nZXRUZXh0dXJlKCkpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiJdfQ==