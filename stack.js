class myStack {
    constructor() {
        this.arr = [];
        this.s = -1;
    }

    push(x){
        this.arr.push(x);
        this.s++;
    }

    pop(){
        if(this.s == -1) throw new Error("Stack Underflow"); // Throw an error instead of returning "err"
        this.s--;
        return this.arr.pop();
    }

    peek(){
        if(this.s == -1) throw new Error("Stack Underflow"); // Throw an error instead of returning "err"
        return this.arr[this.s];
    }

    size(){
        return this.s + 1;
    }
}

function evaluateFormula(formula) {
    let exp = formula.split(" ");
    let operands = new myStack();
    let operators = new myStack();

    for (let i = 0; i < exp.length; i++) {
        let ch = exp[i];

        if (ch === '(') {
            operators.push(ch);
        } else if (isNumber(ch)) {
            operands.push(parseFloat(ch)); // Use parseFloat to handle decimals as well
        } else if (['+', '-', '*', '/'].includes(ch)) { // Simplify the check for operators
            while (operators.size() > 0 && operators.peek() !== '(' &&
                precedence(ch) <= precedence(operators.peek())) {
                let val2 = operands.pop();
                let val1 = operands.pop();
                let op = operators.pop();

                let opval = operation(val1, val2, op);
                operands.push(opval);
            }
            operators.push(ch);
        } else if (ch === ')') {
            while (operators.size() > 0 && operators.peek() !== '(') {
                let val2 = operands.pop();
                let val1 = operands.pop();
                let op = operators.pop();

                let opval = operation(val1, val2, op);
                operands.push(opval);
            }

            if (operators.size() > 0) {
                operators.pop(); // Pop '('
            }
        }
    }

    while (operators.size() > 0) {
        let val2 = operands.pop();
        let val1 = operands.pop();
        let op = operators.pop();

        let opval = operation(val1, val2, op);
        operands.push(opval);
    }

    return operands.pop();
}

function precedence(op) {
    if (op === '+' || op === '-') return 1;
    if (op === '*' || op === '/') return 2;
    return 0; // Return 0 if operator is invalid
}

function operation(val1, val2, op) {
    switch (op) {
        case '+': return val1 + val2;
        case '-': return val1 - val2;
        case '*': return val1 * val2;
        case '/': return val1 / val2;
        default: throw new Error("Invalid operator: " + op); // Handle invalid operators
    }
}

function isNumber(n) { 
    return !isNaN(parseFloat(n)); // Use parseFloat to handle floating point numbers as well
}
