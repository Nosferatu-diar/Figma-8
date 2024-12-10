// ---Map---

// Array.prototype.MyMap = function (CallBack){
//    let arr = []
//    for(let i = 0; i<this.length; ++i){
//       arr.push(CallBack(this[i], i, this))
//    }
//    return arr
// }

// let arr = [1,2,3,4,5,6,7,8,9]
// let arr2 = arr.MyMap((value) => {
//    return value * value
// })

// console.log(arr2)

// ---Filtre---

// Array.prototype.MyFiltre = function (CallBack) {
// 	let arr = []
//    for (let i = 0; i < this.length; ++i){
//       if(CallBack(this[i], i, this)){
//          arr.push(this[i])
//       }
//    }
//    return arr
// }

// let arr = [1,2,3,4,5,6,7,8,9]
// let arrFiltre = arr.MyFiltre((value) => {
//    return value % 2 !== 0
// })

// console.log(arrFiltre);

// ---Some---

// Array.prototype.MySome = function (CallBack){
//    for(let i =0; i<this.length; i++){
//       if(CallBack(this[i], i , this)){
//          return true
//       }
//    }
//    return false
// }
// let arr = [1,1,2]
// let some = arr.MySome((value) => {
//    return value % 2 === 0
// })
// console.log(some);

// ---Every---

// Array.prototype.MyEvery = function (CallBack){
//    for(let i =0; i<this.length; i++){
//       if(!CallBack(this[i], i , this)){
//          return false
//       }
//    }
//    return true
// }
// let arr = [2,2,2]
// let every = arr.MyEvery((value) => {
//    return value % 2 === 0
// })
// console.log(every);

// ---Find---

// Array.prototype.MyFind = function (CallBack){
//    for(let i =0; i<this.length; i++){
//       if(CallBack(this[i], i , this)){
//          return this[i]
//       }
//    }
//    return undefined
// }
// let arr = [1,2,3,4,5]
// let find = arr.MyFind((value) => {
//    return value % 2 === 0
// })
// console.log(find);