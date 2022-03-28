const { readFile, writeFile } = require('fs')
const path = require('path')

readFile(
    path.resolve(__dirname, './content/first.txt'),
    'utf8',
    (err, result) => {
        if (err) {
            console.log(err)
            return
        }

        const first = result
        console.log(first)
        readFile(
            path.resolve(__dirname, './content/second.txt'),
            'utf8',
            (err, res) => {
                if (err) {
                    console.log(err)
                    return
                }
                const second = res
                console.log(second)

                writeFile(
                    path.resolve(__dirname, './content/result-async.txt'),
                    `Here is the result : ${first}, ${second}`,
                    (err, res) => {
                        if (err) {
                            console.log(err)
                            return
                        }
                        console.log(res)
                    }
                )
            }
        )
    }
)
