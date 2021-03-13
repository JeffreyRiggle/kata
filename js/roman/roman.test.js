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
});