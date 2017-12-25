/**
 * Created by CPU60133_LOCAL on 11/8/2017.
 */

var SeedSprite = cc.Sprite.extend({

    models: null,

    ctor: function(parent, seed_img) {
        this._super(seed_img);

        //
        this.init();

        var listener1 = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: function (touch, event) {
                var target = event.getCurrentTarget();

                var locationInNode = target.convertToNodeSpace(touch.getLocation());
                var s = target.getContentSize();
                var rect = cc.rect(0, 0, s.width, s.height);

                if (cc.rectContainsPoint(rect, locationInNode)) {
                    cc.log("sprite began... x = " + locationInNode.x + ", y = " + locationInNode.y);
                    target.opacity = 180;
                    return true;
                }


                return false;
            },
            onTouchMoved: function (touch, event) {

                var delta = touch.getDelta();
                // parent.x += delta.x;
                // parent.y += delta.y;

                this.x += delta.x / lstScale;
                this.y += delta.y / lstScale;

                cc.log("onTouchMoved: " + delta.x + ", " + delta.y);


                var seedBoundingBox = this.getBoundingBox();
                if (cc.rectIntersectsRect(seedBoundingBox, runnerBoundingBox)){
                    cc.log("va chạm");
                }


            }.bind(this),

            onTouchEnded: function (touch, event) {
                cc.log("sprite onTouchesEnded.. ");
            }
        });
        cc.eventManager.addListener(listener1, this);
    },
    init: function () {

    }
});