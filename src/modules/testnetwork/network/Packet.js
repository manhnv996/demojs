/**
 * Created by KienVN on 10/2/2017.
 */

gv.CMD = gv.CMD ||{};
gv.CMD.HAND_SHAKE = 0;
gv.CMD.USER_LOGIN = 1;

gv.CMD.USER_INFO = 1001;
gv.CMD.MOVE = 2001;


//
gv.CMD.CHECK_STATUS_FIELD = 2011;
gv.CMD.ADD_STORAGE_ITEM = 2012;



testnetwork = testnetwork||{};
testnetwork.packetMap = {};

/** Outpacket */

//Handshake
CmdSendHandshake = fr.OutPacket.extend(
    {
        ctor:function()
        {
            this._super();
            this.initData(100);
            this.setControllerId(gv.CONTROLLER_ID.SPECIAL_CONTROLLER);
            this.setCmdId(gv.CMD.HAND_SHAKE);
        },
        putData:function(){
            //pack
            this.packHeader();
            //update
            this.updateSize();
        }
    }
);
CmdSendUserInfo = fr.OutPacket.extend(
    {
        ctor:function()
        {
            this._super();
            this.initData(100);
            this.setCmdId(gv.CMD.USER_INFO);
        },
        pack:function(){
            this.packHeader();
            this.updateSize();
        }
    }
);

CmdSendLogin = fr.OutPacket.extend(
    {
        ctor:function()
        {
            this._super();
            this.initData(100);
            this.setCmdId(gv.CMD.USER_LOGIN);
        },
        pack:function(user){
            this.packHeader();
            this.putString(user);
            this.updateSize();
        }
    }
);

CmdSendMove = fr.OutPacket.extend(
    {
        ctor:function()
        {
            this._super();
            this.initData(100);
            this.setCmdId(gv.CMD.MOVE);
        },
        pack:function(direction){
            this.packHeader();
            this.putShort(direction);
            this.updateSize();
        }
    }
);


//
CmdSendCheckStatusField = fr.OutPacket.extend(
    {
        ctor:function()
        {
            this._super();
            this.initData(100);
            this.setCmdId(gv.CMD.CHECK_STATUS_FIELD);
        },
        pack:function(fieldId){
            this.packHeader();
            this.putShort(fieldId);
            this.updateSize();
        }
    }
);

CmdSendAddStorageItem = fr.OutPacket.extend(
    {
        ctor:function()
        {
            this._super();
            this.initData(100);
            this.setCmdId(gv.CMD.ADD_STORAGE_ITEM);
        },
        pack:function(productType, number){
            this.packHeader();
            this.putShort(productType);
            this.putShort(number);
            this.updateSize();
        }
    }
);


/**
 * InPacket
 */

//Handshake
testnetwork.packetMap[gv.CMD.HAND_SHAKE] = fr.InPacket.extend(
    {
        ctor:function()
        {
            this._super();
        },
        readData:function(){
            this.token = this.getString();
        }
    }
);

testnetwork.packetMap[gv.CMD.USER_LOGIN] = fr.InPacket.extend(
    {
        ctor:function()
        {
            this._super();
        },
        readData:function(){
        }
    }
);


testnetwork.packetMap[gv.CMD.USER_INFO] = fr.InPacket.extend(
    {
        ctor:function()
        {
            this._super();
        },
        readData:function(){
            this.token = this.getInt();
            this.name = this.getString();
            this.x = this.getInt();
            this.y = this.getInt();
        }
    }
);

testnetwork.packetMap[gv.CMD.MOVE] = fr.InPacket.extend(
    {
        ctor:function()
        {
            this._super();
        },
        readData:function(){
            this.x = this.getInt();
            this.y = this.getInt();
        }
    }
);


//
testnetwork.packetMap[gv.CMD.CHECK_STATUS_FIELD] = fr.InPacket.extend(
    {
        ctor:function()
        {
            this._super();
        },
        readData:function(){
            this.fieldId = this.getShort();
            this.status = this.getShort();
        }
    }
);

testnetwork.packetMap[gv.CMD.ADD_STORAGE_ITEM] = fr.InPacket.extend(
    {
        ctor:function()
        {
            this._super();
        },
        readData:function(){
            this.isResult = this.getBool();
            this.productType = this.getShort();
            this.number = this.getShort();
        }
    }
);




