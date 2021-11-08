let perfectNumbers=[]
for (let number = 1; number <= 1000; number++){
    let result=0
    for (let i = 1; i < number; index++) {
        if (number&i==0) {
            result=result + i
            
        }
        
    }
    if (result) {
        perfectNumbers.push(result)
        
    }


}

perfectNumbers.forEach(value =>{
    console.log(value+" mükemmel sayıdır")
})
    