import * as fs from 'fs'

function validFiles(filePath: string): string {
    const content = fs.readFileSync(filePath, 'utf-8')
    const list: string[] = content.trim().split('\n')

    const listOfInvalidUser: string[] = []
    for (let code of list) {
        if (!validCode(code)) {
            const [id, username, email, age, location] = code.split(',')
            listOfInvalidUser.push(username[0])
        }
    }
    return listOfInvalidUser.join('')
}

const filePath = './database_attacked.txt'

const solution = validFiles(filePath)

function validCode(code: string): boolean {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const regex = /^[a-z0-9]+$/i
    const [id, username, email, age, location] = code.split(',')
    console.log(id, username, email, age, location)
    if (!id || !regex.test(id)) return false
    if (!username || !regex.test(username)) return false
    if (!email || !regexEmail.test(email)) return false
    if (age !== '' && (isNaN(Number(age)) || age.includes('.') || age.includes(','))) return false
    if (location !== '' && typeof location !== 'string') return false

    return true
}

console.log(solution)
// console.log(validCode('1a421fa,alex,alex9@gmail.com,18,Barcelona'))
// console.log(validCode('9412p_m,maria,mb@hotmail.com,22,CDMX'))
// console.log(validCode('494ee0,madeval,mdv@twitch.tv,,'))
// console.log(validCode('494ee0,madeval,twitch.tv,22,Montevideo'))