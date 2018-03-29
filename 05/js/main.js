//0. common

const findIndexOfTargetSum = (obj) => {
    const target = obj.target;

    const indexByValue = obj.array.reduce((acc, cur, ind) => {
        acc.set(cur, ind);
        return acc;
    }, new Map());

    const res = obj.array.reduce((acc, cur, index) => {
        const searchForValue = target - cur;
        if (indexByValue.has(searchForValue) && acc.found === false) {
            acc.pos.push(index);
            acc.pos.push(indexByValue.get(searchForValue));
            acc.found = true;
        }
        return acc;
    }, {pos: [], found: false});

    return res.pos;

};
