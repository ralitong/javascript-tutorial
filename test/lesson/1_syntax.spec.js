describe('This suite demonstrates the syntax of javascript', () => {
    it('should assign to variables', () => {
        var x, y, z;
        x = 5;
        y = 6;
        z = x + y;
        expect(z).toEqual(x + y);
    });

    it('should support literal point numbers', ()=>{
        var x = 0.5 + 0.5
        expect(x).toBe(1);
    });

    it('should support literal strings', ()=>{
        var name = "John Doe";
        expect(name).toBe("John Doe");
    });

    it('should also support literal strings in single quotes', ()=>{
        var name = 'Jane Doe';
        expect(name).toBe('Jane Doe');
    });

    it('should also support basic arithmetic operators',()=>{
        var result = 5 * 5 / 5 - 1 + 1;
        expect(result).toEqual(5);
    });

    it('should also support concatenating strings',()=>{
        var concatenated = 'John' + ' ' + 'Doe';
        expect(concatenated).toBe('John Doe');
    })
});