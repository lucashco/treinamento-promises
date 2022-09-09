function getUser() {
  let random = Math.floor(Math.random() * 2) + 1
  
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      if(random > 1) {
        resolve({ name: 'Jhon Doe', age: 99 })
      } else {
        reject("Erro ao buscar o usuário!")
      }

    }, 2000)

  })
}

async function callUser() {
  try {
    const user = await getUser()
    console.log(user);
    
  } catch (error) {
    console.log(error)
  } finally {
    console.log('Terminou')
  }
}

callUser()
