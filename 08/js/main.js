//0. common

const findSecondMax = (list) => {
    const result = list.reduce((acc, current) => {
        if (acc.first < current) {
            acc.second = acc.first;
            acc.first = current;
        } else if (acc.second < current) {
            acc.second = current;
        }
        return acc;
    }, {first: -Infinity, second: -Infinity});

    if (result.first === result.second || result.first === -Infinity || result.second === -Infinity) {
        return "NORESULT";
    } else {
        return result.second;
    }
};

