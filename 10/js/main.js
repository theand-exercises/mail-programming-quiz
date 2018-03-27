//0. common

const longestDistinctSubString = (s) => {
    let set = new Set([]);
    const result = [...s].reduce( (longest, c) => {
        if( set.has(c) ){
            set = new Set([c]);
        }else{
            set.add(c);
        }
        return longest > set.size ? longest : set.size;
    }, 0);
    return result;
};
