/**
 * Created by GSN on 7/6/2015.
 */

var ScreenMenu = cc.Layer.extend({
    _itemMenu:null,
    _beginPos:0,
    isMouseDown:false,

    ctor:function() {
        this._super();
        var size = cc.director.getVisibleSize();

        var yBtn = 7*size.height/12;

        var btnNetwork = gv.commonButton(200, 64, cc.winSize.width/4, yBtn,"Network");
        this.addChild(btnNetwork);
        btnNetwork.addClickEventListener(this.onSelectNetwork.bind(this));

        var btnLocalization = gv.commonButton(200, 64, cc.winSize.width/2, yBtn,"Localize");
        this.addChild(btnLocalization);
        btnLocalization.addClickEventListener(this.onSelectLocalization.bind(this));

        var btnDragonbones = gv.commonButton(200, 64, 3*cc.winSize.width/4, yBtn,"Dragonbone");
        this.addChild(btnDragonbones);
        btnDragonbones.addClickEventListener(this.onSelectDragonbones.bind(this));




        // "src/modules/models/CoordinatedObject.js",
        //     "src/modules/models/Coordinate.js",
        //     "src/modules/models/AnimalLodge.js",
        //     "src/modules/models/Field.js",
        //     "src/modules/models/GameShop.js",
        //     "src/modules/models/Machine.js",
        //     "src/modules/models/Map.js",
        //     "src/modules/models/MyShop.js",
        //     "src/modules/models/NatureThing.js",
        //     "src/modules/models/News.js",
        //     "src/modules/models/Newsstand.js",
        //     "src/modules/models/Product.js",
        //     "src/modules/models/Storage.js",
        //     "src/modules/models/StorageItem.js",
        //     "src/modules/models/Asset.js",
        //     "src/modules/models/User.js",
        //
        //
        //     "src/modules/models/enum/ProductTypes.js"

    //    TEST//
    //     var field = new Field();
        var storage = new Storages();

        var asset = new Asset(storage);
        user = new User(asset);


        cc.log(ProductTypes.CROP_CORN);
        cc.log(user.getAsset().getStorage().getQuantity(ProductTypes.CROP_CORN));
        cc.log(user.getAsset().getStorage().getCapacity());
        cc.log(user.getAsset().getStorage().getCurrentQuantity());


        var currentdate = new Date();
        var comparedate = currentdate;
        comparedate.setHours(10, 50, 36);
        cc.log(comparedate < null);
        // currentdate.setMonth(5, 15);
        // cc.log(currentdate);
        // cc.log(currentdate.getHours() + ": "
        //     + currentdate.getMinutes() + ": "
        //     + currentdate.getSeconds());

        var field1 = new Field();
        asset.addField(field1);

        // cc.log(user.getAsset().getFieldList()[0].checkStatus());

        cc.log(user.getAsset().getFieldList()[0].crop());

        // cc.log(user.getAsset().getStorage().takeItem(ProductTypes.CROP_CORN.TYPE, 3));
        cc.log(user.getAsset().getStorage().getCurrentQuantity());

        // user.addExp(this.plantType.EXP);



    },
    onEnter:function(){
        this._super();
    },
    onSelectNetwork:function(sender)
    {
        fr.view(ScreenNetwork);
    },
    onSelectLocalization:function(sender)
    {
        fr.view(ScreenLocalization);
    },
    onSelectDragonbones:function(sender)
    {
        fr.view(ScreenDragonbones);
    }

});