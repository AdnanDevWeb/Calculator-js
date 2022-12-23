class Calculator{
    constructor(previousOperandTextlElement, currentOperandTextElement){
        this.previousOperandTextlElement = previousOperandTextlElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear()
    }

    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1)
    }
    appendNumber(num){
        if(num === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + num.toString()
    }
    chooseOperation(operation){
        if(this.currentOperand === '') return
        if(this.previousOperand !== ''){
            this.compute()
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = ''
    }


    compute(){
        let computation;
        let prev = parseFloat(this.previousOperand)
        let current = parseFloat(this.currentOperand)

        if(isNaN(prev) || isNaN(current)) return

        switch(this.operation){
            case '+':
                computation = prev + current;
                break

            case '*':
                computation = prev * current
                break

            case '-':
                computation = prev - current
                break

            case '/':
                computation = prev / current
                break
            
            default:
                return
        }

        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = ''

    }
    getDisplayNumnber(number){
        const floatNumber = parseFloat(number)
        if(isNaN(floatNumber)) return ''
        return floatNumber.toLocaleString('en')
    }

    update(){
        this.currentOperandTextElement.innerText = this.getDisplayNumnber(this.currentOperand)
        if(this.operation != null){
            this.previousOperandTextlElement.innerText = `${this.previousOperand} ${this.operation}`

        }

    }
}






const del = document.querySelector('[data-del]')
const ac = document.querySelector('[data-ac]')
const equalsButton = document.querySelector('[data-equals]')
const numberButtons = document.querySelectorAll('[data-num]')
const operationsButtons = document.querySelectorAll('[data-operation]')

const previousOperandTextlElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextlElement,currentOperandTextElement)

// addEvent
ac.addEventListener('click' , ()=>{
    calculator.clear()
    calculator.update()
})
del.addEventListener('click' , ()=>{
    calculator.delete()
    calculator.update()
})
numberButtons.forEach(number =>{
    number.addEventListener('click' , ()=>{
        calculator.appendNumber(number.innerText)
        calculator.update()
    })
})

operationsButtons.forEach(operation =>{
    operation.addEventListener('click' , ()=>{
        calculator.chooseOperation(operation.innerText)
        calculator.update()
    })
})


equalsButton.addEventListener('click' , button =>{
    calculator.compute();
    calculator.update()
})