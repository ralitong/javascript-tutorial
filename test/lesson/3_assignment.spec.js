describe('This suite demonstrates javascript assignment operators', ()=>{
    it('should support the += operator', ()=>{
        var number = 5;
        number += 1;
        expect(number).toEqual(6);
    });

    it('should support the -= operator',()=>{
        var number = 5;
        number -= 1;
        expect(number).toEqual(4);
    });

    it('should support the /= operator', ()=>{
        var number = 20;
        number /= 5;
        expect(number).toEqual(4);
    });

    it('support the %= operator', ()=>{
        var number = 22;
        number %= 5;
        expect(number).toEqual(2);
    });
});