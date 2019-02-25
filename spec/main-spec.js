const main = require('../main/main');

describe('出租车计价测试', function () {
    it("距离或时间不合法（小于0）时，返回Invalid",function(){
        let dis=-1;
        let time=1;
        let result=main(dis,time);
        expect(result).toEqual("Invalid");
        });
    it("距离小于两公里时，按起步价收取6块",function(){
        let dis=1;
        let time=0;
        let result=main(dis,time);
        expect(result).toEqual(6);
    });
    it("距离小于两公里，有停车等待，在起步价基础上加停车费用，四舍五入",function(){
        let dis=1;
        let time=5;
        let result=main(dis,time);
        expect(result).toEqual(7);
    });
    it("起步价6块，超出两公里后且不超过八公里，每公里0.8块",function(){
        let dis=3;
        let time=0;
        let result=main(dis,time);
        expect(result).toEqual(7);
    });
    it("起步价6块，超出两公里后且不超过八公里，每公里0.8块,加入4分钟停车等待费用",function(){
        let dis=3;
        let time=4;
        let result=main(dis,time);
        expect(result).toEqual(8);
    });
    it("起步价6块，超过八公里后加收50%的每公里运价，",function(){
        let dis=9;
        let time=0;
        let result=main(dis,time);
        expect(result).toEqual(12);
    });
    

});
