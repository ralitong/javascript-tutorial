describe('This suite describes how classes are used in javascript',()=>{
    it('has instance variables', ()=> {
        class Dog {
            constructor(name) {
                this.name = name;
            }
        }

        var dogInstance = new Dog('lassie');
        expect(dogInstance.name).toBe('lassie');
    });

    it('has methods', ()=> {
        class Dog {
            constructor(name) {
                this.name = name;
            }

            bark() {
                return 'woof';
            }
        }

        var dogInstance = new Dog('lassie');
        expect(dogInstance.bark()).toBe('woof');
    });
});