const { convert } = require('./roman');

describe('roman numerals', () => {
    let res;
    describe('when a number smaller than 3 is provided', () => {
        beforeEach(() => {
            res = convert(2);
        });

        it('should have the correct numeral', () => {
            expect(res).toBe('II');
        });
    });

    describe('when number is 4', () => {
        beforeEach(() => {
            res = convert(4);
        });

        it('should have the correct numeral', () => {
            expect(res).toBe('IV');
        });
    });

    describe('when number is 5', () => {
        beforeEach(() => {
            res = convert(5);
        });

        it('should have the correct numeral', () => {
            expect(res).toBe('V');
        });
    });

    describe('when number is between 5 and 9', () => {
        beforeEach(() => {
            res = convert(7);
        });

        it('should have the correct numeral', () => {
            expect(res).toBe('VII');
        });
    });

    describe('when number is 9', () => {
        beforeEach(() => {
            res = convert(9);
        });

        it('should have the correct numeral', () => {
            expect(res).toBe('IX');
        });
    });

    describe('when number is 10', () => {
        beforeEach(() => {
            res = convert(10);
        });

        it('should have the correct numeral', () => {
            expect(res).toBe('X');
        });
    });

    describe('when number is between 10 and 14', () => {
        beforeEach(() => {
            res = convert(13);
        });

        it('should have the correct numeral', () => {
            expect(res).toBe('XIII');
        });
    });

    describe('when number is 14', () => {
        beforeEach(() => {
            res = convert(14);
        });

        it('should have the correct numeral', () => {
            expect(res).toBe('XIV');
        });
    });

    describe('when number is 15', () => {
        beforeEach(() => {
            res = convert(15);
        });

        it('should have the correct numeral', () => {
            expect(res).toBe('XV');
        });
    });

    describe('when number is between 15 and 19', () => {
        beforeEach(() => {
            res = convert(17);
        });

        it('should have the correct numeral', () => {
            expect(res).toBe('XVII');
        });
    });

    describe('when number is 19', () => {
        beforeEach(() => {
            res = convert(19);
        });

        it('should have the correct numeral', () => {
            expect(res).toBe('XIX');
        });
    });

    describe('when number is 20', () => {
        beforeEach(() => {
            res = convert(20);
        });

        it('should have the correct numeral', () => {
            expect(res).toBe('XX');
        });
    });

    describe('when number is between 20 and 24', () => {
        beforeEach(() => {
            res = convert(22);
        });

        it('should have the correct numeral', () => {
            expect(res).toBe('XXII');
        });
    });

    describe('when number is 24', () => {
        beforeEach(() => {
            res = convert(24);
        });

        it('should have the correct numeral', () => {
            expect(res).toBe('XXIV');
        });
    });

    describe('when number is 25', () => {
        beforeEach(() => {
            res = convert(25);
        });

        it('should have the correct numeral', () => {
            expect(res).toBe('XXV');
        });
    });

    describe('when number is between 25 and 29', () => {
        beforeEach(() => {
            res = convert(26);
        });

        it('should have the correct numeral', () => {
            expect(res).toBe('XXVI');
        });
    });

    describe('when number is 29', () => {
        beforeEach(() => {
            res = convert(29);
        });

        it('should have the correct numeral', () => {
            expect(res).toBe('XXIX');
        });
    });

    describe('when number is 30', () => {
        beforeEach(() => {
            res = convert(30);
        });

        it('should have the correct numeral', () => {
            expect(res).toBe('XXX');
        });
    });

    describe('when number is between 30 and 34', () => {
        beforeEach(() => {
            res = convert(33);
        });

        it('should have the correct numeral', () => {
            expect(res).toBe('XXXIII');
        });
    });

    describe('when number is 34', () => {
        beforeEach(() => {
            res = convert(34);
        });

        it('should have the correct numeral', () => {
            expect(res).toBe('XXXIV');
        });
    });

    describe('when number is 35', () => {
        beforeEach(() => {
            res = convert(35);
        });

        it('should have the correct numeral', () => {
            expect(res).toBe('XXXV');
        });
    });

    describe('when number is between 35 and 39', () => {
        beforeEach(() => {
            res = convert(37);
        });

        it('should have the correct numeral', () => {
            expect(res).toBe('XXXVII');
        });
    });

    describe('when number is 39', () => {
        beforeEach(() => {
            res = convert(39);
        });

        it('should have the correct numeral', () => {
            expect(res).toBe('XXXIX');
        });
    });
});