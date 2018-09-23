declare namespace MsgPack {
    function pack(data: any, toString?: boolean): any;
    function unpack(data: any): any;
}

export = MsgPack;
