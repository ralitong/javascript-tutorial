describe('This suite describes the comparison operators in javascript', () => {
    it('has the less than (<) operator', () => {
        expect(1 < 2).toBe(true);
        expect(2 < 1).toBe(false);
    });

    it('has the greater than (>) operator', () => {
        expect(3 > 2).toBe(true);
        expect(5 > 7).toBe(false);
    });

    it('has the shallow comparison ==', () => {
        expect(true == true).toBe(true);
        expect(false == false).toBe(true);
        expect(!false == true).toBe(true);

        expect('true' == 'true').toBe(true);
        expect('true' == 'false').toBe(false);
        expect('true' != 'false').toBe(true);

        expect(1 == true).toBe(true);
        expect(-1 == false).toBe(false);
        expect(0 != false).toBe(false);
        expect(-1 != true).toBe(true);

        expect(1000000 == true).toBe(false);
        expect(-100000 == false).toBe(false);

        expect('1' == true).toBe(true);
        expect('' == false).toBe(true);
        expect('234123313' == true).toBe(false);
        expect('-12123121' == false).toBe(false);
    });

    it('has the deep comparison ===', () => {
        expect(true === true).toBe(true);
        expect(false === false).toBe(true);
        expect(!false === true).toBe(true);

        expect('true' === 'true').toBe(true);
        expect('true' === 'false').toBe(false);
        expect('true' !== 'false').toBe(true);

        expect(1 === true).toBe(false);
        expect(-1 === false).toBe(false);
        expect(0 !== false).toBe(true);
        expect(-1 !== true).toBe(true);

        expect(1000000 === true).toBe(false);
        expect(-100000 === false).toBe(false);

        expect('1' === true).toBe(false);
        expect('' === false).toBe(false);
        expect('234123313' === true).toBe(false);
        expect('-12123121' === false).toBe(false);
    });
});