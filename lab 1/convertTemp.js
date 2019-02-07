let stdin = process.openStdin()
console.log('Enter your Celcius: ')
stdin.addListener("data", (C) => {
    let F
    if(C > 0){
        F = (1.8 * C) + 32
        console.log('Fahrenhiet :' + F)
    }
    else
        console.log('Please fill your input !!')

    stdin.destroy()
})