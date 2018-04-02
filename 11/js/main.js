//0. common

const isDecodable = (input) => {
    const src = [...input[0]];
    const encoded = [...input[1]];
    const zipped = zip(src, encoded);
    const result = zipped.reduce((acc, cur) => {
        if (acc.possible) {
            const from = cur[0];
            const to = cur[1];
            if (acc.matchingMap.has(from)) {
                if (acc.matchingMap.get(from) !== to) {
                    acc.possible = false;
                }
            } else {
                acc.matchingMap.set(from, to)
            }
        }
        return acc;

    }, {matchingMap: new Map([]), possible: true});
    return result.possible;

};
