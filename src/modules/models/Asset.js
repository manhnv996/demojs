
var Asset = cc.Class.extend({

    foodStorage: Storages,
    warehouse: Storages,
    fieldList: [],
    animalLodgeList: [],
    machineList: [],
    natureThingList: [],
    myShop: null,

    ctor: function (foodStorage, warehouse, fieldList, animalLodgeList, machineList, natureThingList, myShop) {
        //
        //this._super();

        this.init(foodStorage, warehouse, fieldList, animalLodgeList, machineList, natureThingList, myShop);

    },
    init: function (foodStorage, warehouse, fieldList, animalLodgeList, machineList, natureThingList, myShop) {
        //
        this.foodStorage = foodStorage;
        this.warehouse = warehouse;
        this.fieldList = (fieldList == null) ? [] : fieldList;
        this.animalLodgeList = (animalLodgeList == null) ? [] : animalLodgeList;
        this.machineList = (machineList == null) ? [] : machineList;
        this.natureThingList = (natureThingList == null) ? [] : natureThingList;
        this.myShop = myShop;
        // this.fieldList = [];
    },

    getFoodStorage: function () {
        return this.foodStorage;
    },
    getWarehouse: function () {
        return this.warehouse;
    },
    getFieldList: function () {
        return this.fieldList;
    },
    getAnimalLodgeList: function () {
        return this.animalLodgeList;
    },
    getMachineList: function () {
        return this.machineList;
    },
    getNatureThingList: function () {
        return this.natureThingList;
    },
    getMyShop: function () {
        return this.myShop;
    },

    addField: function (field) {
        //bug
        this.fieldList.push(field);

    }

});