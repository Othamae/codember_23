import * as fs from 'fs'

function validFiles(filePath: string): string[] {
    const content = fs.readFileSync(filePath, 'utf-8')
    const list: string[] = content.trim().split('\n')

    const listOfValidFiles: string[] = []
    for (let code of list) {
        if (validCode(code)) {
            const [cad, checksum] = code.split('-')
            listOfValidFiles.push(checksum)
        }
    }
    return listOfValidFiles
}

const filePath = './files_quarantine.txt'

const listOfValidFiles = validFiles(filePath)

function validCode(code: string): boolean {

    const [cad, checksum] = code.split('-')
    const cadArray = cad.split('')
    let unique = cadArray.filter((item) => {
        return cadArray.indexOf(item) === cadArray.lastIndexOf(item)
    })

    return unique.join('') === checksum.trim()
}

console.log(listOfValidFiles[32])
