describe('This suite describes the conditional statements in javascript', () => {
    it('should have basic if-else statements', () => {
        var result = 0;
        if (3 > 2)
            result = 3;
        else
            result = 2;

        expect(result).toBe(3);
    });

    it('should have basic if-elsif-else', () => {
        var input = 'dog';
        var animal = '';
        if (input === 'turtle')
            animal = 'amphibian';
        else if (input === 'dog')
            animal = 'mammal';
        else
            animal = 'unknown';

        expect(animal).toBe('mammal');
    });

    it('should also have switch statements', () => {
        var disease = 'influenza';
        var deadliness = '';
        switch (disease) {
            case 'common cold':
                deadliness = 'not severe';
                break;
            case 'influenza':
                deadliness = 'severe';
                break;
            case 'AH1N1':
                deadliness = 'very severe';
                break;
            case 'AIDS':
                deadliness = 'extremely severe';
                break;
            default:
                deadliness = 'unknown';
        }

        expect(deadliness).toEqual('severe');
    })

})