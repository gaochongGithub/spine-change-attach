
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Main');
require('./assets/Script/spine/SkelChanger');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/spine/SkelChanger.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c43a46qrERB3oVjZ9FWvOz1', 'SkelChanger');
// Script/spine/SkelChanger.ts

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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SkelChanger = /** @class */ (function (_super) {
    __extends(SkelChanger, _super);
    function SkelChanger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SkelChanger.prototype.start = function () {
        // @ts-ignore
        var skeleton = sp.Skeleton.prototype;
        if (CC_JSB) {
            // 局部换装
            // @ts-ignore
            skeleton.updateRegion = function (attach, tex2d) {
                // @ts-ignore
                var jsbTex2d = new middleware.Texture2D();
                jsbTex2d.setNativeTexture(tex2d.getImpl());
                jsbTex2d.setPixelsWide(tex2d.width);
                jsbTex2d.setPixelsHigh(tex2d.height);
                // @ts-ignore
                sp.spine.updateRegion(attach, jsbTex2d);
            };
        }
        else {
            // 局部换装
            // @ts-ignore
            skeleton.updateRegion = function (attach, tex2d) {
                // @ts-ignore
                var skeTexture = new sp.SkeletonTexture({ width: tex2d.width, height: tex2d.height });
                skeTexture.setRealTexture(tex2d);
                var region = attach.region;
                region.width = tex2d.width;
                region.height = tex2d.height;
                region.originalWidth = tex2d.width;
                region.originalHeight = tex2d.height;
                region.rotate = false;
                region.u = 0;
                region.v = 0;
                region.u2 = 1;
                region.v2 = 1;
                region.texture = skeTexture;
                region.renderObject = region;
                attach.region = region;
                attach.width = tex2d.width;
                attach.height = tex2d.height;
                if (attach instanceof sp.spine.MeshAttachment) {
                    attach.updateUVs();
                }
                else {
                    attach.setRegion(region);
                    attach.updateOffset();
                }
            };
        }
    };
    SkelChanger.prototype.deepCopy = function (skel) {
        return __awaiter(this, void 0, void 0, function () {
            var animation, skelData, flag, copy, oldName, newName, date;
            return __generator(this, function (_a) {
                animation = skel.animation;
                skelData = skel.skeletonData;
                flag = "_copy";
                // @ts-ignore
                if (skelData._uuid !== undefined && skelData._uuid.indexOf(flag) !== -1) {
                    cc.log("说明已经拷贝过了");
                    return [2 /*return*/];
                }
                copy = new sp.SkeletonData();
                cc.js.mixin(copy, skelData);
                oldName = copy.name;
                newName = copy.name + flag;
                date = new Date();
                // @ts-ignore
                copy._uuid = skelData._uuid + "_" + date.getTime() + flag;
                copy.name = newName;
                copy.atlasText = copy.atlasText.replace(oldName, newName);
                // @ts-ignore
                copy.textureNames[0] = newName + ".png";
                // @ts-ignore
                copy.init && copy.init();
                skel.skeletonData = copy;
                // 继续播放的动画，不然会停止
                skel.setAnimation(0, animation, true);
                return [2 /*return*/];
            });
        });
    };
    SkelChanger.prototype.updateAttach = function (skel, slotName, texture2d) {
        return __awaiter(this, void 0, void 0, function () {
            var slot, attach;
            return __generator(this, function (_a) {
                this.deepCopy(skel);
                slot = skel.findSlot(slotName);
                if (!slot) {
                    cc.error("findSlot is null");
                    return [2 /*return*/];
                }
                attach = slot.getAttachment();
                if (attach === null) {
                    cc.error("getAttachment is null");
                    return [2 /*return*/];
                }
                // @ts-ignore
                skel.updateRegion(attach, texture2d);
                skel.invalidAnimationCache();
                return [2 /*return*/];
            });
        });
    };
    SkelChanger = __decorate([
        ccclass("SkelChanger")
    ], SkelChanger);
    return SkelChanger;
}(cc.Component));
exports.default = SkelChanger;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcGluZVxcU2tlbENoYW5nZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFBckQ7O0lBdUdBLENBQUM7SUF0R0EsMkJBQUssR0FBTDtRQUNDLGFBQWE7UUFDYixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUNyQyxJQUFJLE1BQU0sRUFBRTtZQUNYLE9BQU87WUFDUCxhQUFhO1lBQ2IsUUFBUSxDQUFDLFlBQVksR0FBRyxVQUFVLE1BQTJELEVBQUUsS0FBbUI7Z0JBQ2pILGFBQWE7Z0JBQ2IsSUFBSSxRQUFRLEdBQUcsSUFBSSxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQzFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztnQkFDM0MsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3BDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUVyQyxhQUFhO2dCQUNiLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN6QyxDQUFDLENBQUM7U0FDRjthQUFNO1lBQ04sT0FBTztZQUNQLGFBQWE7WUFDYixRQUFRLENBQUMsWUFBWSxHQUFHLFVBQVUsTUFBMkQsRUFBRSxLQUFtQjtnQkFDakgsYUFBYTtnQkFDYixJQUFNLFVBQVUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxD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QyxJQUFJLEVBQUUsQ0FBQztnQkFFekIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLGdCQUFnQjtnQkFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDOzs7O0tBQ3RDO0lBRWUsa0NBQVksR0FBNUIsVUFBNkIsSUFBaUIsRUFBRSxRQUFnQixFQUFFLFNBQXVCOzs7O2dCQUN4RixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUVkLElBQUksR0FBa0IsSUFBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDckQsSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDVixFQUFFLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7b0JBQzdCLHNCQUFPO2lCQUNQO2dCQUVLLE1BQU0sR0FBd0QsSUFBSSxDQUFDLGFBQWEsRUFFNUQsQ0FBQztnQkFDM0IsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO29CQUNwQixFQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7b0JBQ2xDLHNCQUFPO2lCQUNQO2dCQUVELGFBQWE7Z0JBQ2IsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDOzs7O0tBQzdCO0lBdEdtQixXQUFXO1FBRC9CLE9BQU8sQ0FBQyxhQUFhLENBQUM7T0FDRixXQUFXLENBdUcvQjtJQUFELGtCQUFDO0NBdkdELEFBdUdDLENBdkd3QyxFQUFFLENBQUMsU0FBUyxHQXVHcEQ7a0JBdkdvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwiU2tlbENoYW5nZXJcIilcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2tlbENoYW5nZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cdHN0YXJ0KCkge1xyXG5cdFx0Ly8gQHRzLWlnbm9yZVxyXG5cdFx0bGV0IHNrZWxldG9uID0gc3AuU2tlbGV0b24ucHJvdG90eXBlO1xyXG5cdFx0aWYgKENDX0pTQikge1xyXG5cdFx0XHQvLyDlsYDpg6jmjaLoo4VcclxuXHRcdFx0Ly8gQHRzLWlnbm9yZVxyXG5cdFx0XHRza2VsZXRvbi51cGRhdGVSZWdpb24gPSBmdW5jdGlvbiAoYXR0YWNoOiBzcC5zcGluZS5SZWdpb25BdHRhY2htZW50IHwgc3Auc3BpbmUuTWVzaEF0dGFjaG1lbnQsIHRleDJkOiBjYy5UZXh0dXJlMkQpIHtcclxuXHRcdFx0XHQvLyBAdHMtaWdub3JlXHJcblx0XHRcdFx0bGV0IGpzYlRleDJkID0gbmV3IG1pZGRsZXdhcmUuVGV4dHVyZTJEKCk7XHJcblx0XHRcdFx0anNiVGV4MmQuc2V0TmF0aXZlVGV4dHVyZSh0ZXgyZC5nZXRJbXBsKCkpO1xyXG5cdFx0XHRcdGpzYlRleDJkLnNldFBpeGVsc1dpZGUodGV4MmQud2lkdGgpO1xyXG5cdFx0XHRcdGpzYlRleDJkLnNldFBpeGVsc0hpZ2godGV4MmQuaGVpZ2h0KTtcclxuXHJcblx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxyXG5cdFx0XHRcdHNwLnNwaW5lLnVwZGF0ZVJlZ2lvbihhdHRhY2gsIGpzYlRleDJkKTtcclxuXHRcdFx0fTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vIOWxgOmDqOaNouijhVxyXG5cdFx0XHQvLyBAdHMtaWdub3JlXHJcblx0XHRcdHNrZWxldG9uLnVwZGF0ZVJlZ2lvbiA9IGZ1bmN0aW9uIChhdHRhY2g6IHNwLnNwaW5lLlJlZ2lvbkF0dGFjaG1lbnQgfCBzcC5zcGluZS5NZXNoQXR0YWNobWVudCwgdGV4MmQ6IGNjLlRleHR1cmUyRCkge1xyXG5cdFx0XHRcdC8vIEB0cy1pZ25vcmVcclxuXHRcdFx0XHRjb25zdCBza2VUZXh0dXJlID0gbmV3IHNwLlNrZWxldG9uVGV4dHVyZSh7IHdpZHRoOiB0ZXgyZC53aWR0aCwgaGVpZ2h0OiB0ZXgyZC5oZWlnaHQgfSBhcyBJbWFnZUJpdG1hcCk7XHJcblx0XHRcdFx0c2tlVGV4dHVyZS5zZXRSZWFsVGV4dHVyZSh0ZXgyZCk7XHJcblxyXG5cdFx0XHRcdGNvbnN0IHJlZ2lvbjogc3Auc3BpbmUuVGV4dHVyZUF0bGFzUmVnaW9uID0gYXR0YWNoLnJlZ2lvbiBhcyBzcC5zcGluZS5UZXh0dXJlQXRsYXNSZWdpb247XHJcblx0XHRcdFx0cmVnaW9uLndpZHRoID0gdGV4MmQud2lkdGg7XHJcblx0XHRcdFx0cmVnaW9uLmhlaWdodCA9IHRleDJkLmhlaWdodDtcclxuXHRcdFx0XHRyZWdpb24ub3JpZ2luYWxXaWR0aCA9IHRleDJkLndpZHRoO1xyXG5cdFx0XHRcdHJlZ2lvbi5vcmlnaW5hbEhlaWdodCA9IHRleDJkLmhlaWdodDtcclxuXHRcdFx0XHRyZWdpb24ucm90YXRlID0gZmFsc2U7XHJcblx0XHRcdFx0cmVnaW9uLnUgPSAwO1xyXG5cdFx0XHRcdHJlZ2lvbi52ID0gMDtcclxuXHRcdFx0XHRyZWdpb24udTIgPSAxO1xyXG5cdFx0XHRcdHJlZ2lvbi52MiA9IDE7XHJcblx0XHRcdFx0cmVnaW9uLnRleHR1cmUgPSBza2VUZXh0dXJlO1xyXG5cdFx0XHRcdHJlZ2lvbi5yZW5kZXJPYmplY3QgPSByZWdpb247XHJcblxyXG5cdFx0XHRcdGF0dGFjaC5yZWdpb24gPSByZWdpb247XHJcblx0XHRcdFx0YXR0YWNoLndpZHRoID0gdGV4MmQud2lkdGg7XHJcblx0XHRcdFx0YXR0YWNoLmhlaWdodCA9IHRleDJkLmhlaWdodDtcclxuXHJcblx0XHRcdFx0aWYgKGF0dGFjaCBpbnN0YW5jZW9mIHNwLnNwaW5lLk1lc2hBdHRhY2htZW50KSB7XHJcblx0XHRcdFx0XHRhdHRhY2gudXBkYXRlVVZzKCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGF0dGFjaC5zZXRSZWdpb24ocmVnaW9uKTtcclxuXHRcdFx0XHRcdGF0dGFjaC51cGRhdGVPZmZzZXQoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGFzeW5jIGRlZXBDb3B5KHNrZWw6IHNwLlNrZWxldG9uKSB7XHJcblx0XHQvLyDorrDlvZXlvZPliY3mkq3mlL7nmoTliqjnlLtcclxuXHRcdGNvbnN0IGFuaW1hdGlvbiA9IHNrZWwuYW5pbWF0aW9uO1xyXG5cdFx0Y29uc3Qgc2tlbERhdGEgPSBza2VsLnNrZWxldG9uRGF0YTtcclxuXHRcdGNvbnN0IGZsYWcgPSBcIl9jb3B5XCI7XHJcblx0XHQvLyBAdHMtaWdub3JlXHJcblx0XHRpZiAoc2tlbERhdGEuX3V1aWQgIT09IHVuZGVmaW5lZCAmJiBza2VsRGF0YS5fdXVpZC5pbmRleE9mKGZsYWcpICE9PSAtMSkge1xyXG5cdFx0XHRjYy5sb2coXCLor7TmmI7lt7Lnu4/mi7fotJ3ov4fkuoZcIik7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGxldCBjb3B5OiBzcC5Ta2VsZXRvbkRhdGEgPSBuZXcgc3AuU2tlbGV0b25EYXRhKCk7XHJcblx0XHRjYy5qcy5taXhpbihjb3B5LCBza2VsRGF0YSk7XHJcblx0XHRjb25zdCBvbGROYW1lOiBzdHJpbmcgPSBjb3B5Lm5hbWU7XHJcblx0XHRjb25zdCBuZXdOYW1lOiBzdHJpbmcgPSBjb3B5Lm5hbWUgKyBmbGFnO1xyXG5cclxuXHRcdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0Ly8gQHRzLWlnbm9yZVxyXG5cdFx0Y29weS5fdXVpZCA9IHNrZWxEYXRhLl91dWlkICsgXCJfXCIgKyBkYXRlLmdldFRpbWUoKSArIGZsYWc7XHJcblx0XHRjb3B5Lm5hbWUgPSBuZXdOYW1lO1xyXG5cdFx0Y29weS5hdGxhc1RleHQgPSBjb3B5LmF0bGFzVGV4dC5yZXBsYWNlKG9sZE5hbWUsIG5ld05hbWUpO1xyXG5cdFx0Ly8gQHRzLWlnbm9yZVxyXG5cdFx0Y29weS50ZXh0dXJlTmFtZXNbMF0gPSBuZXdOYW1lICsgXCIucG5nXCI7XHJcblx0XHQvLyBAdHMtaWdub3JlXHJcblx0XHRjb3B5LmluaXQgJiYgY29weS5pbml0KCk7XHJcblxyXG5cdFx0c2tlbC5za2VsZXRvbkRhdGEgPSBjb3B5O1xyXG5cdFx0Ly8g57un57ut5pKt5pS+55qE5Yqo55S777yM5LiN54S25Lya5YGc5q2iXHJcblx0XHRza2VsLnNldEFuaW1hdGlvbigwLCBhbmltYXRpb24sIHRydWUpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGFzeW5jIHVwZGF0ZUF0dGFjaChza2VsOiBzcC5Ta2VsZXRvbiwgc2xvdE5hbWU6IHN0cmluZywgdGV4dHVyZTJkOiBjYy5UZXh0dXJlMkQpIHtcclxuXHRcdHRoaXMuZGVlcENvcHkoc2tlbCk7XHJcblxyXG5cdFx0Y29uc3Qgc2xvdDogc3Auc3BpbmUuU2xvdCA9IHNrZWwhLmZpbmRTbG90KHNsb3ROYW1lKTtcclxuXHRcdGlmICghc2xvdCkge1xyXG5cdFx0XHRjYy5lcnJvcihcImZpbmRTbG90IGlzIG51bGxcIik7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBhdHRhY2g6IHNwLnNwaW5lLlJlZ2lvbkF0dGFjaG1lbnQgfCBzcC5zcGluZS5NZXNoQXR0YWNobWVudCA9IHNsb3QuZ2V0QXR0YWNobWVudCgpIGFzXHJcblx0XHRcdHwgc3Auc3BpbmUuUmVnaW9uQXR0YWNobWVudFxyXG5cdFx0XHR8IHNwLnNwaW5lLk1lc2hBdHRhY2htZW50O1xyXG5cdFx0aWYgKGF0dGFjaCA9PT0gbnVsbCkge1xyXG5cdFx0XHRjYy5lcnJvcihcImdldEF0dGFjaG1lbnQgaXMgbnVsbFwiKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIEB0cy1pZ25vcmVcclxuXHRcdHNrZWwudXBkYXRlUmVnaW9uKGF0dGFjaCwgdGV4dHVyZTJkKTtcclxuXHRcdHNrZWwuaW52YWxpZEFuaW1hdGlvbkNhY2hlKCk7XHJcblx0fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
