let stdin = process.openStdin()
let i=5
stdin.addListener("data", (win) => {
  console.log('win = ' + win)
  stdin.addListener("data", (num) => {

  
      if(num == win){
        console.log(num)
        console.log('You are winner')
      }
      else if(i == 0){
        console.log('You lose !')
      }
      else{
        console.log('You can try' + i + 'time')
        i--
      }
    stdin.destroy()
  });
  
});