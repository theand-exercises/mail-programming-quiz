//0. common

const moveZerosToRight = (list) =>{
    let count = list.reduce( (count, current) => count+ (current===0?1:0), 0);
    list = list.filter(Boolean);
    return list.concat( Array(count).fill(0) );
};


Array.prototype.swap = function (x,y) {
    const b = this[x];
    this[x] = this[y];
    this[y] = b;
    return this;
};

const moveZerosToRightUsingSwap = (list) =>{
    let lastPositionOfZero = 0;
    for(let i=0; i<list.length; i++){
        if( list[i]!==0){
            list.swap(lastPositionOfZero, i);
            lastPositionOfZero = lastPositionOfZero+1;
        }
    }
    return list;
};
