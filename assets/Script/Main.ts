import SkelChanger from "./spine/SkelChanger";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Main extends SkelChanger {
	@property(cc.Node)
	skelNode: cc.Node = null;

	@property(cc.Node)
	skelNode1: cc.Node = null;

	onLoad() {
		const skel: sp.Skeleton = this.skelNode.getComponent(sp.Skeleton);
		skel.animation = "idle";
		skel.loop = true;

		// const skelCard: sp.Skeleton = this.skelNode1.getComponent(sp.Skeleton);
		// skel.animation = "animation2";
		// skel.loop = true;

		cc.resources.load<cc.SpriteFrame>(`icon/icon_dayanta`, cc.SpriteFrame, (e: Error, asset: cc.SpriteFrame) => {
			if (e) {
				cc.error(e);
				return;
			}
			this.updateAttach(skel, "jiuhu_3", asset.getTexture());
			// this.updateAttach(skelCard, "12", asset.getTexture());
		});
	}
}
