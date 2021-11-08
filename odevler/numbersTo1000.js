let isPrime=true
let newPrimeNumber = []
for (let number = 2; number < 1000; number++){
    if(number %i==0){
        isPrime=false
        break
    }else{isPrime =true}
}
if(isPrime ===true){
    newPrimeNumber.push(number)
}

newPrimeNumber.forEach(value =>{
    console.log(value+" asaldır")
})