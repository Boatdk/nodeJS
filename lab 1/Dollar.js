let stdin = process.openStdin()
console.log('(1) THB to Dollar')
console.log('(2) Dollar to THB')
console.log('Select your choice : ')
stdin.addListener("data", (choice) => {
    if (choice > 0) {
        console.log('Enter your money: ')
    }
    stdin.addListener("data", (money) => {
        let sum
        if (choice == 1) {
            if (money > 0) {
                sum = 31.46 / money
                console.log('is ' + sum + '$')
            } else {
                console.log('please fill your money')
            }
        } else if (choice == 2) {
            if (money > 0) {
                sum = 31.46 * money
                console.log('is ' + sum + 'THB')
            } else {
                console.log('please fill your money')
            }
        }


        stdin.destroy()
    })

});