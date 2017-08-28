describe('This suite describe the different data types in javascript', () => {
    it('has dynamic typing', () => {
        var x;
        var x = 5;
        var x = 'John';
        expect(x).toBe('John');
    });

    it('has support for floating point numbers', ()=>{
        var x = 34.00
        var y = 0.5;
        expect(x + y).toEqual(34.50);
    });

    it('has support for exponential notation', ()=>{
        var y = 123e5;
        var z = 123e-5;
        expect(y).toEqual(12300000);
        expect(z).toEqual(0.00123);
    });

    it('has support for boolean', ()=>{
        var x = true;
        var y = false;
        expect(x).toBe(true);
        expect(y).toBe(false);
    });

    it('has support for arrays like this [1,2,3,4,5]', ()=>{
        var array = [1, 2, 3, 4, 5];
        expect(array).toContain(1, 2, 3, 4, 5);
    });

    it('can access arrays like this array[index]', ()=>{
        var array = [1, 2, ,3 ,4, 5];
        expect(array[0]).toBe(1);
    });

    it('has support for objects', ()=>{
        var person = {
            name : 'John Doe',
            age : 50,
            eyeColor : 'blue'
        };

        expect(person.name).toBe('John Doe');
        expect(person.age).toBe(50);
        expect(person.eyeColor).toBe('blue');

        expect(person['name']).toBe('John Doe');
        expect(person['age']).toBe(50);
        expect(person['eyeColor']).toBe('blue');
    });
});