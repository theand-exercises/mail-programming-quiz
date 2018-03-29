//0. common

const isPalindromeInteger = i => {
    return i.toString() === i.toString().split('').reverse().join('');
};

