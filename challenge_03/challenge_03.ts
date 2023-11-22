import * as fs from 'fs'

function invalidKey(filePath: string): string[] {
    const content = fs.readFileSync(filePath, 'utf-8')
    const list: string[] = content.trim().split('\n')

    const invalid: string[] = []
    for (let code of list) {
        const [pol, key] = code.split(':')
        const [num, letter] = pol.split(' ')
        const [min, max] = num.split('-')
        const count = key.substring(1).split('').filter((char) => char === letter).length
        if (count < Number(min) || count > Number(max)) {
            invalid.push(key.substring(1))
        }
    }
    return invalid

}

const filePath = './encryption_policies.txt'

const listOfInvalid = invalidKey(filePath)

console.log(listOfInvalid[41])
console.log(listOfInvalid[12])