describe('This suite demonstrates the operators available in javascript',()=>{
    it('should support addition',()=>{
        var sum = 1 + 1;
        expect(sum).toEqual(2);
    });

    it('should support subtraction', ()=>{
        var difference = 1 - 1;
        expect(difference).toEqual(0);
    });

    it('should support multiplication', ()=>{
        var product = 5 * 5;
        expect(product).toEqual(25);
    });

    it('should support division',()=>{
        var quotient = 20 / 4;
        expect(quotient).toEqual(5);
    });

    it('should support modulus operator', ()=> {
        var remainder = 15 % 2;
        expect(remainder).toBe(1);
    });

    it('should also support ++ (increment)', ()=>{
        var number = 5;
        number++;
        expect(number).toEqual(6);
    });

    it('should support -- (decrement)', ()=>{
        var number = 5;
        number--;
        expect(number).toEqual(4);
    });
});