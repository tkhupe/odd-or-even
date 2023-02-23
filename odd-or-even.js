// Write code to return the string "odd" if `num` is an odd number
// and return the string "even" if `num` is an even number

var oddOrEven = function (num) {
    for (let i = 0; i <= num; i++) {
        if (i % 2 !== 0) {
            console.log("odd")
        } else {
            if (i % 2 == 0) {
                console.log("even")
            }
        }
    }
}
