class DynamicNumber {
    constructor(number) {
        this.number = number;
        this.ones = ['zero', 'one', 'two', 'three',
            'four', 'five', 'six', 'seven', 'eight', 'nine',
        ];

        this.teens = ['eleven', 'twelve', 'thirteen', 'fourteen',
            'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

        this.tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty',
            'sixty', 'seventy', 'eighty', 'ninety'];
    }

    toWord() {
        if (this.countDigits() === 2) {
            if (this.number <= 19) {
                return this.tens[this.number % 10];
            }
               

        }

        return this.ones[this.number];
    }

    countDigits() {
        var digits = this.number.toString().split('');
        return digits.length;
    }




}