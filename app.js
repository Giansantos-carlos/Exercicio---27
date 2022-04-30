// console.log('Linha 1')
// console.log('Linha 2')
// console.log('Linha 3')
// console.log('Linha 4')

// setTimeout(() => {
//     console.log('Codigo assicrono')
// }, 3000)

// console.log('Linha 5')
// console.log('Linha 6')
// console.log('Linha 7')
// console.log('Linha 8')

// function logGreeting  (name)   {
//     console.log(`olá, ${name}`)
//   }
  
//  const x = callback => {
//      callback('Gian')
//  } 
// x(logGreeting)



// const numbers = [3, 4, 10, 20]
// const getLessThanFive = num => num < 5
// const lesserThanFive = numbers.filter(getLessThanFive)
// console.log(lesserThanFive)



// const prices = [12, 19, 7, 209]
// const getTotalPrice = (acc ,price) => acc + price
// let totalPrice = prices.reduce(getTotalPrice, 0)

// console.log(`Preço total: ${totalPrice}`)

// let car = { color: 'amarelo' }

// car['color'] = 'azul'
// console.log(car)

// const myFunc = (arg1, arg2,arg3) => {
//     const isSomeParameterundefined = ([arg1, arg2, arg3].includes(undefined))
//     return isSomeParameterundefined ? 'A função deve ser invocada com 3 argumentos' : 'A função foi invocada com 3 argumentos'
// }

// console.log(myFunc(1,2,3))



let booksBox = {
    spaces: 5,
    booksIn: 0
  }

  const getPluralOrSingular = (quantity, singular, plural) => quantity === 1 ? singular : plural
  const getAvalibleSpacesMessage = (spaces, booksIn) => {
    const avliabkeSpaces = spaces - booksIn
    const fitPluralOrSingular = getPluralOrSingular(avliabkeSpaces, 'cabe' ,'cabem')
    const bookPluralOrSingular = getPluralOrSingular(avliabkeSpaces, 'livro', 'livros')
    return `Só ${fitPluralOrSingular} mais ${avliabkeSpaces} ${bookPluralOrSingular}`
  }

booksBox.addBooks = booksQuanstity => {
    let {spaces}  = booksBox
    const isBoxFilled = booksBox.booksIn === spaces
    const boxSpacesAreNotEnough = booksBox.booksIn + booksQuanstity > spaces
    if(isBoxFilled){
        return 'A caixa já está cheia'
    }

    if (boxSpacesAreNotEnough){
        getAvalibleSpacesMessage(spaces, booksBox.booksIn)
    }
    booksBox.booksIn += booksQuanstity

    const bookPluralOrSingular = getPluralOrSingular(booksBox.booksIn, 'livro', 'livros')
    return `Já há ${booksBox.booksIn} ${bookPluralOrSingular} na caixa`
}

console.log(booksBox.addBooks(2))
// console.log(booksBox.addBooks(2))
// console.log(booksBox.addBooks(4))
// console.log(booksBox.addBooks(2))
console.log(booksBox)