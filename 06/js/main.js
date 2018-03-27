//0. common

const LEFT = 0;
const RIGHT = 1;

const isLeftWider = (original, current) => current[LEFT] <= original[LEFT] && current[RIGHT] >= original[LEFT];
const isRightWider = (original, current) => current[RIGHT] >= original[RIGHT] && current[LEFT] <= original[RIGHT];
const isWider = (original, current) => isLeftWider(original, current) || isRightWider(original, current);
const isNested = (original, current) => current[LEFT] >= original[LEFT] && current[RIGHT] <= original[RIGHT];

const mergeRangeArray = (givenArrayOfArray) => {

    //앞자리 기준 asc 정렬
    givenArrayOfArray = stableSort(givenArrayOfArray, (a,b) => a[0]>b[0]);


    let finalResult = givenArrayOfArray.reduce((mergedArrayOfArray, eachFromGivenArray) => {

        mergedArrayOfArray = mergedArrayOfArray.reduce((result, eachFromMergedArray, i) => {
            //이미 있는 요소와 범위가 겹치면
            if (isWider(eachFromMergedArray, eachFromGivenArray)) {
                if (isLeftWider(eachFromMergedArray, eachFromGivenArray)) {
                    eachFromMergedArray[LEFT] = eachFromGivenArray[LEFT];
                }
                if (isRightWider(eachFromMergedArray, eachFromGivenArray)) {
                    eachFromMergedArray[RIGHT] = eachFromGivenArray[RIGHT];
                }
                result.found = true;
            }
            result.merged.push(eachFromMergedArray);

            //이미 있는 요소에 포함되는 거면 스킵
            if(isNested(eachFromMergedArray, eachFromGivenArray)) {
                return result;
            }

            //마지막까지 왔는데 이미 있는 요소와 겹치지 않으면
            if (i == mergedArrayOfArray.length-1 && result.found === false) {
                result.merged.push(eachFromGivenArray)
            }

            return result;
        }, {merged: [], found: false}).merged;

        return mergedArrayOfArray;
    }, [
        [givenArrayOfArray[0][LEFT], givenArrayOfArray[0][RIGHT]]
    ]);

    return finalResult;
};
