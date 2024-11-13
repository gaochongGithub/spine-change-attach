"use strict";
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