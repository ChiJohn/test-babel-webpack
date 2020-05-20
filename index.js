function helloworld() {
    let arr  = ['xiaoming','xiaohua','xiaoxioa'];
    arr.map(v=>{
        return {name:v,age:1}
    })
    new Promise(function(resolve,reject){
        if(arr.length){
            resolve('success')
        }
    })
    return arr.includes('xiaoming')
    console.log("hellworld [name]");
}
class People{
    constructor(name){
        this.name = name;
    }
    getName() {
        return this.name;
    }
}