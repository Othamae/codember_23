
function miniCompiler(code: string) {
    let result = 0
    let sol = []
    for (const char of code) {
        switch (char) {
            case "#":
                result++
                break
            case "@":
                result--
                break
            case "*":
                result *= result
                break
            case "&":
                sol.push(result)
                break
        }
    }
    return sol.join("")

}

console.log(miniCompiler("&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&"))