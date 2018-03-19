//0. common


const reverseEachWord = s => s.split(" ").map( e => e.split("").reverse().join("") ).join(" ");
