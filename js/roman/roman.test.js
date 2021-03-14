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

    describe('when number is 40', () => {
        beforeEach(() => {
            res = convert(40);
        });

        it('should have the correct numeral', () => {
            expect(res).toBe('XL');
        });
    });

    describe('when number is between 40 and 45', () => {
        beforeEach(() => {
            res = convert(42);
        });

        it('should have the correct numeral', () => {
            expect(res).toBe('XLII');
        });
    });

    describe('when number is 45', () => {
        beforeEach(() => {
            res = convert(45);
        });

        it('should have the correct numeral', () => {
            expect(res).toBe('XLV');
        });
    });

    describe('when number is 48', () => {
        beforeEach(() => {
            res = convert(48);
        });

        it('should have the correct numeral', () => {
            expect(res).toBe('XLVIII');
        });
    });

    describe('when number is 50', () => {
        beforeEach(() => {
            res = convert(50);
        });

        it('should have the correct numeral', () => {
            expect(res).toBe('L');
        });
    });

    describe('when number is 54', () => {
        beforeEach(() => {
            res = convert(54);
        });

        it('should have the correct numeral', () => {
            expect(res).toBe('LIV');
        });
    });

    describe('when number is 55', () => {
        beforeEach(() => {
            res = convert(55);
        });

        it('should have the correct numeral', () => {
            expect(res).toBe('LV');
        });
    });

    describe('when number is 57', () => {
        beforeEach(() => {
            res = convert(57);
        });

        it('should have the correct numeral', () => {
            expect(res).toBe('LVII');
        });
    });

    describe('when number is 60', () => {
        beforeEach(() => {
            res = convert(60);
        });

        it('should have the correct numeral', () => {
            expect(res).toBe('LX');
        });
    });

    describe('when number is 63', () => {
        beforeEach(() => {
            res = convert(63);
        });

        it('should have the correct numeral', () => {
            expect(res).toBe('LXIII');
        });
    });

    describe('when number is 66', () => {
        beforeEach(() => {
            res = convert(66);
        });

        it('should have the correct numeral', () => {
            expect(res).toBe('LXVI');
        });
    });

    describe('when number is 69', () => {
        beforeEach(() => {
            res = convert(69);
        });

        it('should have the correct numeral', () => {
            expect(res).toBe('LXIX');
        });
    });

    describe('when number is 80', () => {
        beforeEach(() => {
            res = convert(80);
        });

        it('should have the correct numeral', () => {
            expect(res).toBe('LXXX');
        });
    });
});