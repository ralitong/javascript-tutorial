describe('This suite describes the various loops in javascript', () => {
    it('has while loops', ()=>{
        var daysBeforeChristmas = 150;
        var money = 0;
        var christmasHasNotArrived = () => {
            return daysBeforeChristmas > 0;
        };
        var moveToTheNextDay = () => {
            daysBeforeChristmas--;
        }

        var saveMoney = () => {
            money += 100;
        }
        
        while(christmasHasNotArrived()) {
            saveMoney();
            moveToTheNextDay();
        }

        expect(money).toEqual(15000);
    });

    it('has do-while loops', ()=> {
        var schoolDays = 360;
        var num_assignments = 0;

        var assignments = () => {
            num_assignments++;
        }

        var schoolsAreActive = () => {
            return schoolDays > 0;
        }

        var onToTheNextSchoolDay = () => {
            schoolDays--;
        }

        do {
            assignments();
            onToTheNextSchoolDay();
        }
        while(schoolsAreActive());

        expect(num_assignments).toEqual(360);
    });

    it('has for-loops', ()=> {
        var moneys = ['dollar', 'yen', 'peso', 'bhat', 'rubles'];
        averylongstring = '';
        for(var i = 0; i < moneys.length; i++)
            averylongstring += moneys[i];

        expect(averylongstring).toEqual('dollaryenpesobhatrubles');
    });

});