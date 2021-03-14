const numerals = [
    {
        value: 1,
        display: 'I'
    }, 
    {
        value: 5,
        display: 'V'
    },
    {
        value: 10,
        display: 'X'
    },
    {
        value: 50,
        display: 'L'
    },
    {
        value: 100,
        display: 'C'
    },
    {
        value: 500,
        display: 'D'
    },
    {
        value: 1000,
        display: 'M'
    }
].reverse();

function build(value, times) {
    let retVal = '';
    for (let i = 0; i < times; i++) {
        retVal += value;
    }
    return retVal;
}

const convert = (num) => {
    let retVal = '';
    let remaining = num;
    numerals.forEach((n, ind) => {
        if (remaining < n.value) {
            return;
        }

        if (remaining === n.value) {
            remaining = 0;
            retVal += n.display;
            return;
        }

        let smaller = null;
        if ((ind + 1) < numerals.length) {
            smaller = numerals[ind + 1];
        }

        let larger = null;
        if ((ind - 1) >= 0) {
            larger = numerals[ind - 1];
        }

        const largerDif = larger ? larger.value - n.value : 0;
        const remDif = remaining - largerDif;
        if (larger && ((largerDif === remaining) || (remDif > 0 && remDif < n.value && remaining > n.value * 2))) {
            remaining = remDif;
            retVal += n.display + larger.display;
            return;
        }

        if (larger && smaller && (larger.value - smaller.value === remaining)) {
            remaining = 0;
            retVal += smaller.display + larger.display;
            return;
        }

        const onlyValue = remaining % n.value === 0;
        if (onlyValue) {
            retVal += build(n.display, remaining / n.value);
            remaining = 0;
            return;
        }

        while (remaining > n.value) {
            remaining = remaining - n.value;
            retVal += n.display;
        }
    });

    return retVal;
};

module.exports = {
    convert
};
