//0. common

const parenPermutation = (n) => {
    const result = initializeArrayWithRange(n, 1).reduce((acc, cur, arr) => {
        if (arr.length <= 1) return "()";

        let perm = "";
        acc.new_stack.push("(");
        perm = "X";
        acc.old_stacks.push(acc.new_stack);
        while (acc.new_stack.length > 0) {
            acc.new_stack.pop();
            perm += ")"
        }
        acc.permutation.push(perm);

        return acc;
    }, {new_stack: [], old_stacks: [], permutation: []});

    return result.permutation;
};
