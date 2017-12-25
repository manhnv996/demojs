
var Field = CoordinatedObject.extend({

    fieldId: 0,
    plantType: ProductTypes,
    plantedTime: null,

    ctor: function (coordinate, fieldId) {
        //
        //this._super(coordinate);
        CoordinatedObject.prototype.init(coordinate);

        this.init(fieldId);

        //cc.log("x " + CoordinatedObject.prototype.getCoordinate().call(this));

    },
    init: function (fieldId) {
        //
        this.fieldId = fieldId;

        this.plantType = null;
        this.plantedTime = null;

        //this._super().changeCoordinate();
    },

    getPlantType: function () {
        return this.plantType;
    },
    setPlantType: function (productType) {
        this.plantType = productType;
    },
    getPlantedTime: function () {
        return this.plantedTime;
    },
    setPlantedTime: function (datetime) {
        this.plantedTime = datetime;
    },


    plant: function (productType) {
        //boolean
        if (this.checkStatus() == FieldStatusTypes.EMPTY) {

            if (user.getAsset().getFoodStorage().takeItem(productType, 1)) {

                this.setPlantType(productType);
                this.setPlantedTime(new Date());

                return true
            }

        }
        return false;
    },
    crop: function () {
        //return ProductType
        if (this.checkStatus() == FieldStatusTypes.DONE){

            //////////user is global variable
            if (user.getAsset().getFoodStorage().addItem(this.plantType, 2)){

                user.addExp(this.plantType.EXP);

                var productCrop = this.plantType;
                this.init();

                return productCrop;
            }

        }
        return null;
    },
    getCropTime: function () {
        //Date
        if (this.plantType == null){
            return null;
        }
        /*
        ///////////////
        INPROGRESS
         */
        return new Date();
    },
    checkStatus: function () {
        //return Enum{FieldStatusType}
        if (this.plantType != null){
            var currentTime = new Date();

            if (currentTime >= this.getCropTime()){
                return FieldStatusTypes.DONE;
            } else {
                return FieldStatusTypes.GROWING;
            }

        } else {
            return FieldStatusTypes.EMPTY;
        }

    }
});