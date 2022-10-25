/*Double Char:
function doubleChar(str) {
    let str_new = new String();
    for(let i in str){
        str_new += str[i]
        str_new += str[i]
    }
    return str_new
}

console.log(doubleChar("string")) => ssttrriinngg*/

//=================================================

/*function makeUpperCase(str) {
    return str.toUpperCase()
}
let str = "abc"
console.log(makeUpperCase(str))*/

//=================================================

/*function findAverage(array) {
    let ans = 0
    for (let i of array) {
        ans += i
    }
    ans /= array.length
    if (array.length == 0) return 0
    else return ans
}

let array = [1,2,3,4,5,6,7,8,9]
console.log(findAverage(array))*/

//=================================================

// function invert(array) {
//     for (let i in array) {
//         (array[i] >= 0) ? array[i] *= (-1) : array[i] = Math.abs(array[i])
//     }
//     return array
// }
// let array = [0]
// console.log(invert(array))

//=================================================

// function points(games) {
    //     let point = 0
//     for (let i in games) {
//         if (games[i].split(':')[0] > games[i].split(':')[1]) point += 3
//         else if (games[i].split(':')[0] < games[i].split(':')[1]) point += 0
//         else if (games[i].split(':')[0] == games[i].split(':')[1]) point += 1
//     }
//     return point
// }

// let str = ['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2']
// let point = 0
// console.log(points(str))

//=================================================









