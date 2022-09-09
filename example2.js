function executePromise() {
  return new Promise(function (resolve, reject) {
    let random = Math.floor(Math.random() * 2) + 1

  
    if(random > 1) {
      resolve("Promise resolvida!")
    } else {
      reject("Promise rejeitada!")
    }
  
  })
}

executePromise()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log("Eu executo sempre, independente se a promise resolveu ou falhou"))
