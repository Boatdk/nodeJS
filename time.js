let stdin = process.openStdin()
console.log('Enter your (V:m/s) & (S:m)')
stdin.addListener("data", (v) =>{
    if(v > 0){
        stdin.addListener("data", (s) => {
            let time 
            if( s > 0) {
                time = s / v
                console.log('You will use '+ time + 's')
            }
            
            
            stdin.destroy()
        })
    } 
    else   
        console.log('error')
   

})