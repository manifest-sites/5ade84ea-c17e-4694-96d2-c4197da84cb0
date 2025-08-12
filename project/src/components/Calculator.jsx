import { useState } from 'react'
import { Button } from 'antd'

function Calculator() {
  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplay(String(digit))
      setWaitingForOperand(false)
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit)
    }
  }

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.')
      setWaitingForOperand(false)
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.')
    }
  }

  const clear = () => {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setWaitingForOperand(false)
  }

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(inputValue)
    } else if (operation) {
      const currentValue = previousValue || 0
      const newValue = calculate(currentValue, inputValue, operation)

      setDisplay(String(newValue))
      setPreviousValue(newValue)
    }

    setWaitingForOperand(true)
    setOperation(nextOperation)
  }

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue
      case '-':
        return firstValue - secondValue
      case '*':
        return firstValue * secondValue
      case '/':
        return firstValue / secondValue
      case '=':
        return secondValue
      default:
        return secondValue
    }
  }

  const handleEquals = () => {
    const inputValue = parseFloat(display)

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation)
      setDisplay(String(newValue))
      setPreviousValue(null)
      setOperation(null)
      setWaitingForOperand(true)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 p-8">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
        <div className="w-80">
          {/* Display */}
          <div className="bg-purple-900/50 rounded-2xl p-6 mb-6 border border-purple-300/30">
            <div className="text-right">
              <div className="text-4xl font-mono text-white truncate">
                {display}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-4 gap-3">
            {/* First Row */}
            <Button
              onClick={clear}
              className="h-16 text-lg font-semibold bg-purple-600 hover:bg-purple-500 border-0 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              C
            </Button>
            <div className="col-span-2"></div>
            <Button
              onClick={() => performOperation('/')}
              className="h-16 text-lg font-semibold bg-purple-700 hover:bg-purple-600 border-0 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              ÷
            </Button>

            {/* Second Row */}
            <Button
              onClick={() => inputDigit(7)}
              className="h-16 text-lg font-semibold bg-purple-200 hover:bg-purple-100 border-0 text-purple-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              7
            </Button>
            <Button
              onClick={() => inputDigit(8)}
              className="h-16 text-lg font-semibold bg-purple-200 hover:bg-purple-100 border-0 text-purple-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              8
            </Button>
            <Button
              onClick={() => inputDigit(9)}
              className="h-16 text-lg font-semibold bg-purple-200 hover:bg-purple-100 border-0 text-purple-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              9
            </Button>
            <Button
              onClick={() => performOperation('*')}
              className="h-16 text-lg font-semibold bg-purple-700 hover:bg-purple-600 border-0 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              ×
            </Button>

            {/* Third Row */}
            <Button
              onClick={() => inputDigit(4)}
              className="h-16 text-lg font-semibold bg-purple-200 hover:bg-purple-100 border-0 text-purple-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              4
            </Button>
            <Button
              onClick={() => inputDigit(5)}
              className="h-16 text-lg font-semibold bg-purple-200 hover:bg-purple-100 border-0 text-purple-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              5
            </Button>
            <Button
              onClick={() => inputDigit(6)}
              className="h-16 text-lg font-semibold bg-purple-200 hover:bg-purple-100 border-0 text-purple-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              6
            </Button>
            <Button
              onClick={() => performOperation('-')}
              className="h-16 text-lg font-semibold bg-purple-700 hover:bg-purple-600 border-0 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              −
            </Button>

            {/* Fourth Row */}
            <Button
              onClick={() => inputDigit(1)}
              className="h-16 text-lg font-semibold bg-purple-200 hover:bg-purple-100 border-0 text-purple-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              1
            </Button>
            <Button
              onClick={() => inputDigit(2)}
              className="h-16 text-lg font-semibold bg-purple-200 hover:bg-purple-100 border-0 text-purple-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              2
            </Button>
            <Button
              onClick={() => inputDigit(3)}
              className="h-16 text-lg font-semibold bg-purple-200 hover:bg-purple-100 border-0 text-purple-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              3
            </Button>
            <Button
              onClick={() => performOperation('+')}
              className="h-16 text-lg font-semibold bg-purple-700 hover:bg-purple-600 border-0 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              +
            </Button>

            {/* Fifth Row */}
            <Button
              onClick={() => inputDigit(0)}
              className="h-16 text-lg font-semibold bg-purple-200 hover:bg-purple-100 border-0 text-purple-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 col-span-2"
            >
              0
            </Button>
            <Button
              onClick={inputDecimal}
              className="h-16 text-lg font-semibold bg-purple-200 hover:bg-purple-100 border-0 text-purple-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              .
            </Button>
            <Button
              onClick={handleEquals}
              className="h-16 text-lg font-semibold bg-gradient-to-r from-purple-800 to-purple-900 hover:from-purple-700 hover:to-purple-800 border-0 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              =
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator