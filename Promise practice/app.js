let userData = {
    'USD': 1000,
    'EUR': 900,
    'UAH': 15000,
    'BIF': 20000,
    'AOA': 100
},
    bankData = {
        'USD': {
            max: 3000,
            min: 100,
            img: '💵'
        },
        'EUR': {
            max: 1000,
            min: 50,
            img: '💶'
        },
        'UAH': {
            max: 0,
            min: 0,
            img: '💴'
        },
        'GBP': {
            max: 10000,
            min: 100,
            img: '💷'
        }
    }

const getMoney = (user, bank) => {

    return new Promise((resolve, reject) => {
        const askUser = confirm('Посмотреть баланс на карте?')
        askUser ? resolve(user) : reject({ user: user, bank: bank });
    })

        .then(user => {
            let curr = ''
            const arrCurr = [];
            for (let key in user) {
                arrCurr.push(key)
            }

            do {
                curr = prompt('Введите валюту:')
            } while (!arrCurr.includes(curr))

            console.log(`Ваш баланс составляет: ${userData[curr]} ${curr}`)
            return curr;
        })
        .catch(obj => {
            let { user, bank } = obj
            let curr = ''
            let verifBank = 0;
            const arrCurr = [];
            for (let key in user) {
                arrCurr.push(key)
            }
            do {
                curr = prompt('Введите валюту:')
                verifBank = bank[curr] && bank[curr].max
            } while (!arrCurr.includes(curr) || !(verifBank > 0))
            obj.curr = curr;
            return Promise.reject(obj)
        }
        )
        .catch(obj => {
            let { user, bank, curr } = obj
            let amountCash = +prompt('Введите суму для снятия:')
            if (amountCash > bank[curr].max || amountCash > user[curr]) {
                console.log(`Введенная сумма больше допустимой. Максимальная сумма снятия: ${bank[curr].max}`)
            } else {
                obj.amountCash = amountCash
            }
            return Promise.reject(obj)
        })
        .catch(obj => {
            let { user, bank, curr, amountCash } = obj
            if (amountCash < bank[curr].min) {
                console.log(`Введенная сумма меньше допустимой. Минимальная сумма снятия: ${bank[curr].min}`)
                delete obj.amountCash
            }
            return Promise.reject(obj)
        })
        .catch(obj => {
            obj.amountCash && console.log(`Вот Ваши денежки ${obj.amountCash} ${obj.curr} ${bankData[obj.curr].img}`)
        })
        .finally(() => console.log('Спасибо, хорошего дня 😊'))
}

getMoney(userData, bankData);