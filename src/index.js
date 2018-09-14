module.exports = function solveEquation(equation) {
    arrOfNumb = []
    solution = []

    for (let i = 0; i < equation.length; i++) {
        if (equation[i] == ' ') {
            arrOfNumb.push(Number(equation.slice(0, i)))
            for (let j = i+9; j < equation.length; j++) {
                if (equation[j] == ' ') {
                    arrOfNumb.push(Number(equation.slice(i+9, j)))
                    if (equation[i+7] == '-') {
                        arrOfNumb[1] *= -1
                    }
                    arrOfNumb.push(Number(equation.slice(j+7, equation.length)))
                    if (equation[j+5] == '-') {
                        arrOfNumb[2] *= -1
                    }
                    break
                }
            }
            break
        }
    }

    if (equation[0] == '-') {
        solution.push(Math.round(((arrOfNumb[1] * -1) + Math.sqrt(Math.pow(arrOfNumb[1], 2) - (4 * arrOfNumb[0] * arrOfNumb[2]))) / (2 * arrOfNumb[0])))
        solution.push(Math.round(((arrOfNumb[1] * -1) - Math.sqrt(Math.pow(arrOfNumb[1], 2) - (4 * arrOfNumb[0] * arrOfNumb[2]))) / (2 * arrOfNumb[0])))
    }
    else {
        solution.push(Math.round(((arrOfNumb[1] * -1) - Math.sqrt(Math.pow(arrOfNumb[1], 2) - (4 * arrOfNumb[0] * arrOfNumb[2]))) / (2 * arrOfNumb[0])))
        solution.push(Math.round(((arrOfNumb[1] * -1) + Math.sqrt(Math.pow(arrOfNumb[1], 2) - (4 * arrOfNumb[0] * arrOfNumb[2]))) / (2 * arrOfNumb[0])))
    }
    return solution
}

