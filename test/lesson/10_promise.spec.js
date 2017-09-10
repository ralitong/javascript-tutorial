describe("Promises", () => {
    let cleanRoom = () => {
        return new Promise((resolve, reject) => {
            resolve('Cleaned The Room');
        });
    };

    let removeGarbage = (message) => {
        return new Promise((resolve, reject) => {
            resolve(message + ' remove Garbage');
        });
    };

    let winIcecream = (message) => {
        return new Promise((resolve, reject) => {
            resolve(message + ' won Icecream');
        });
    };


    it("should explain resolve and reject", () => {


        let promiseToCleanTheRoom = new Promise((resolve, reject) => {
            // cleaning the room

            let isClean = false;

            if (isClean)
                resolve('Clean');
            else
                reject('not Clean');
        });

        promiseToCleanTheRoom.then((fromResolve) => {
            expect(fromResolve).toBe('Clean');
        }).catch((fromReject) => {
            expect(fromReject).toBe('not Clean');
        })
    });

    it('should be able to chain', () => {
        cleanRoom().then((fromClean) => {
            return removeGarbage(fromClean);
        }).then((fromGarbage) => {
            return winIcecream(fromGarbage);
        }).then((fromWinIceCream) => {
            expect(fromWinIceCream).toBe('Cleaned The Room remove Garbage won Icecream');
        });
    });

    xit('should be able to run in parallel', () => {
        Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then((messages)=>{
            expect(messages).toContain('Cleaned The Room');
            expect(messages).toContain('remove Garbage');
            expect(messages).toContain('won Icecream');
        });
    });

    xit('should be able to race', ()=>{
        Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then((messages)=>{
            expect(messages).toContain('Cleaned The Room');
            expect(messages).toContain('remove Garbage');
            expect(messages).toContain('won Icecream');
        });
    })
});