let findPrime =(...numbers)=>{
    numbers.forEach (value=>{
        let asalMi = true

        if(value <=1){
            console.log("Sayı asal değildir :"+value)
        
        }else{
            for (let i = 2; i < value; i++) {
                if (value%i==0){
                    asalMi=false
                    break

                }
                
            }
            if(asalMi==true){
                console.log(value+": sayısı asaldır ")
            
            }else{
                console.log(value+": sayısı asal değildir ")
            }
        }
        
    })

    

}
findPrime(-1,-2,1,2,11,9,8)
