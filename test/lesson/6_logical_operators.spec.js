describe('This suite describes the logical operators typically used in conditional statements', ()=> {
    it('has the && (and) operator', ()=>{
        expect(true && true).toBe(true);
        expect(false && true).toBe(false);
        expect(true && true && false).toBe(false);
    })

    it('has the || operator', ()=>{
        expect(true || true).toBe(true);
        expect(true || false).toBe(true);
        expect(false || false).toBe(false);
    });

    it('has the ! not operator', ()=> {
        expect(true && !true).toBe(false);
        expect(true && !false).toBe(true);
        expect(false || !false).toBe(true);
        expect(!(true || false)).toBe(false);
    })
})