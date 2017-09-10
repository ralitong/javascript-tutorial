describe('DynamicNumber', ()=>{
    

    it('should accept a parameter in the constructor', ()=>{
        var number = createInstance(1);
    });

    it('should convert 1 to one', ()=> {
        var number = createInstance(1);
        expect(number.toWord()).toBe('one');    
    });

    it('should convert 9 to nine', ()=>{
        var number = createInstance(9);
        expect(number.toWord()).toBe('nine');
    });

    it('should convert 0 to zero', ()=>{
        var number = createInstance(0);
        expect(number.toWord()).toBe('zero');
    });

    xit('should convert 11 to eleven', ()=> {
        var number = createInstance(11);
        expect(number.toWord()).toBe('eleven');
    });

    xit('should convert 12 to twelve', ()=> {
        var number = createInstance(12);
        expect(number.toWord()).toBe('twelve');
    });

    xit('should convert 13 to thirteen', ()=> {
        var number = createInstance(13);
        expect(number.toWord()).toBe('thirteen');
    });

    xit('should convert 14 to fourteen', ()=> {
        var number = createInstance(14);
        expect(number.toWord()).toBe('fourteen');
    });

    xit('should convert 15 to fifteen', ()=>{
        var number = createInstance(15);
        expect(number.toWord()).toBe('fifteen');
    });

    xit('should convert 16 to sixteen', ()=>{
        var number = createInstance(16);
        expect(number.toWord()).toBe('sixteen');
    });

    xit('should convert 17 to seventeen', ()=> {
        var number = createInstance(17);
        expect(number.toWord()).toBe('seventeen');
    });

    xit('should convert 18 to eighteen', ()=> {
        var number = createInstance(18);
        expect(number.toWord()).toBe('eighteen');
    });

    xit('should convert 19 to nineteen', ()=>{
        var number = createInstance(19);
        expect(number.toWord()).toBe('nineteen');
    });

    xit('should convert 20 to twenty', ()=> {
        var number = createInstance(20);
        expect(number.toWord()).toBe('twenty');
    });

    xit('should convert 30 to thirty', ()=>{
        var number = createInstance(30);
        expect(number.toWord()).toBe('thirty');
    });


    function createInstance(number) {
        return new DynamicNumber(number);
    }
});