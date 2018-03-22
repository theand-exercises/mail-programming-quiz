//0. common

const LEFT=0;
const RIGHT=1;

const isLeftInside = (src, target) => src[LEFT] >= target[LEFT] && src[LEFT] <= target[RIGHT];
const isRightInside = (src, target) => src[RIGHT] >= target[LEFT] && src[RIGHT] <= target[RIGHT];


const mergeRangeArray = (arrayofarry) =>{


    const result = arrayofarry.reduce( (acc, arr) => {

        // const current = [];
        // if( equals(acc, []) ){
        //     current[LEFT] = arr[LEFT];
        //     current[RIGHT] = arr[RIGHT];
        //     acc.push(current);
        //     console.log(current);
        //     console.log("X")
        // }else{
        //
        // }

        //acc 를 돌면서
        //이미 있는 요소에 범위가 포함되면 거기를 가지고 어택
        //이미 있는 요소에 범위가 포함되지 않으면 새로.
        console.log(acc);

        return acc;
    } , [ [arrayofarry[0][LEFT], arrayofarry[0][RIGHT]]]);

    return result;
};
