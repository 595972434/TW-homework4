const main = require('../main/main');

describe('出租车计价测试', function () {
    it("距离或时间不合法（小于0）时，返回Invalid",function(){
        let dis=-1;
        let time=1;
        let result=main(dis,time);
        expect(result).toEqual("Invalid");
        });
});
