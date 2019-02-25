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
});
