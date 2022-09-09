function delay(time = 1000) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), time)
  })
}

function asyncFn() {
  delay()
  console.log('Delay 1') 
  delay(2000)
  console.log('Delay 2') 
  delay(300)
  console.log('Delay 3') 
}

asyncFn()