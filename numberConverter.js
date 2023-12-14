// GETTING ALL VARIABLES
    //LIST OF BUTTONS CONTROLLING FROM BASE
const allBeforeButtons = document.querySelector('.form-container__before-grid--buttons').children
    //LIST OF BUTTONS CONTROLLING TO BASE
const allAfterButtons = document.querySelector('.form-container__after-grid--buttons').children
    // GETTING INPUT FIELD
const inputField = document.querySelector('input')
const inputButton = document.querySelector(".form--input-area--button")
    // GETTING ERROR AND SUCCESSPOPUPS
const errorPopup = document.querySelector('.error-popup')
const errorPopupMessage = document.querySelector('.error-popup-message')
const errorPopupCloseButton = document.querySelector('.error-popup__close-button')

const answerPopup = document.querySelector('.answer-popup')
const answerPopupMessage = document.querySelector('.answer-popup-message')
const answerPopupCloseButton = document.querySelector('.answer-popup__close-button')
    // A VARIABLE TO STORE BASE FROM STATE
let baseFromState = ""
    // A VARIABLE TO STORE BASE TO STATE
let baseToState = ""
    // A VARIABLE TO HOLD NUMBER TO CONVERT
let numberToConvert = 0 
    // A VARIABLE FOR ERRORS AND ANSWER
let errorMessage = ""
let answerMessage = ""

// A FUNCTION TO CHOOSE FROM BASE STATE
function setBaseFromState(e){
    // DESTRUCTURING PROPERTIES
    const {name} = e.target
    baseFromState = name

    // ADDING DISABILITY TO BUTTON WHOSE VALUE IS THE SAME AS THAT ONE CLICKED, AND TO THE OTHER BUTTONS FROM THE BEFORE 
    for(let i = 0; i < allBeforeButtons.length; i++){
        const button = allBeforeButtons[i]
        button.setAttribute('disabled', true)

        if(allAfterButtons[i].getAttribute('name') == name){
            allAfterButtons[i].setAttribute('disabled', true)
        }
    }

    // STYLING THE CLICKED BUTTON
    e.target.classList.add('before-grid--buttons--active')
}

// A FUNCTION TO CHOOSE TO BASE STATE
function setBaseToState(e){
    // DESTRUCTURING PROPERTIES
    const {name} = e.target
    baseToState = name

    // ADDING DISABILITY TO BUTTON WHOSE VALUE IS THE SAME AS THAT ONE CLICKED, AND TO THE OTHER BUTTONS FROM THE BEFORE 
    for(let i = 0; i < allAfterButtons.length; i++){
        const button = allAfterButtons[i]
        button.setAttribute('disabled', true)

        if(allBeforeButtons[i].getAttribute('name') == name){
            allBeforeButtons[i].setAttribute('disabled', true)
        }
    }

    // STYLING THE CLICKED BUTTON
    e.target.classList.add('after-grid--buttons--active')
}

// A FUNCTION TO SHOW ERRORS
function displayError(errorMessage){
    answerMessage = ""
    answerPopupMessage.innerText = ""
    answerPopup.style.setProperty('display', 'none')
    
    errorPopup.style.setProperty('display', 'flex')
    errorPopupMessage.innerText = errorMessage
}

// A FUNCTION TO SHOW ANSWERS
function displayAnswer(answerMessage){
    errorMessage = ""
    errorPopupMessage.innerText = ""
    errorPopup.style.setProperty('display', 'none')
    
    answerPopup.style.setProperty('display', 'flex')
    answerPopupMessage.innerText = answerMessage
}

// A FUNCTION TO PICK THE VALUE FROM INPUT
function getInputValue(e){
    try{
        // GETTING VALUE FROM INPUT FIELD
        if(inputField.value === ""){
            throw new Error("You must input a value")
        }
    
        numberToConvert = inputField.value

        // STYLING THE CLICKED BUTTON
        e.target.classList.add('form--input-area--button--active')

        // CALLING RIGHT METHOD
        if(baseFromState == "Binary" && baseToState == "Decimal"){
            // CONVERTING VALUE OF INPUT TO FLOAT NUMBER BEFORE PROCEEDING
            numberToConvert = parseFloat(numberToConvert)
            
            if(Number.isInteger(numberToConvert)){
                convertWholeBinaryToDecimal(numberToConvert)
            }else{
                convertFractionalBinaryToDecimal(numberToConvert)
            }
        }else if(baseFromState == "Decimal" && baseToState == "Binary"){
            // CONVERTING VALUE OF INPUT TO FLOAT NUMBER BEFORE PROCEEDING
            numberToConvert = parseFloat(numberToConvert)
            
            if(Number.isInteger(numberToConvert)){
                convertWholeDecimalToBinary(numberToConvert)
            }else{
                convertFractionalDecimalToBinary(numberToConvert)
            }
        }else if(baseFromState == "Decimal" && baseToState == "Octal"){
            // CONVERTING VALUE OF INPUT TO FLOAT NUMBER BEFORE PROCEEDING
            numberToConvert = parseFloat(numberToConvert)
            
            if(Number.isInteger(numberToConvert)){
                convertWholeDecimalToOctal(numberToConvert)
            }else{
                convertFractionalDecimalToOctal(numberToConvert)
            }
        }else if(baseFromState == "Octal" && baseToState == "Decimal"){
            // CONVERTING VALUE OF INPUT TO FLOAT NUMBER BEFORE PROCEEDING
            numberToConvert = parseFloat(numberToConvert)
            
            if(Number.isInteger(numberToConvert)){
                convertWholeOctalToDecimal(numberToConvert)
            }else{
                convertFractionalOctalToDecimal(numberToConvert)
            }
        }else if(baseFromState == "Decimal" && baseToState == "Hexadecimal"){
            // CONVERTING VALUE OF INPUT TO FLOAT NUMBER BEFORE PROCEEDING
            numberToConvert = parseFloat(numberToConvert)

            if(Number.isInteger(numberToConvert)){
                convertWholeDecimalToHexadecimal(numberToConvert)
            }else{
                convertFractionalDecimalToHexadecimal(numberToConvert)
            }
        }else if(baseFromState == "Hexadecimal" && baseToState == "Decimal"){
            // CHECKING IF STRING OF INPUT HAS A DECIMAL POINT OR NOT
            const stringToConvert = numberToConvert.toString().trim()

            if(!(stringToConvert.includes('.'))){
                convertWholeHexadecimalToDecimal(stringToConvert)
            }else{
                convertFractionalHexadecimalToDecimal(stringToConvert)
            }
        }else if(baseFromState == "Binary" && baseToState == "Octal"){
            // CONVERTING VALUE OF INPUT TO FLOAT NUMBER BEFORE PROCEEDING
            numberToConvert = parseFloat(numberToConvert)
            
            if(Number.isInteger(numberToConvert)){
                const firstConvertion = convertWholeBinaryToDecimal(numberToConvert)
                convertWholeDecimalToOctal(firstConvertion)
            }else{
                const firstConvertion = convertFractionalBinaryToDecimal(numberToConvert)
                convertFractionalDecimalToOctal(firstConvertion)
            }
        }else if(baseFromState == "Octal" && baseToState == "Binary"){
            // CONVERTING VALUE OF INPUT TO FLOAT NUMBER BEFORE PROCEEDING
            numberToConvert = parseFloat(numberToConvert)
            
            if(Number.isInteger(numberToConvert)){
                const firstConvertion = convertWholeOctalToDecimal(numberToConvert)
                convertWholeDecimalToBinary(firstConvertion)
            }else{
                const firstConvertion = convertFractionalOctalToDecimal(numberToConvert)
                convertFractionalDecimalToBinary(firstConvertion)
            }
        }else if(baseFromState == "Binary" && baseToState == "Hexadecimal"){
            // CONVERTING VALUE OF INPUT TO FLOAT NUMBER BEFORE PROCEEDING
            numberToConvert = parseFloat(numberToConvert)
            
            if(Number.isInteger(numberToConvert)){
                const firstConvertion = convertWholeBinaryToDecimal(numberToConvert)
                convertWholeDecimalToHexadecimal(firstConvertion)
            }else{
                const firstConvertion = convertFractionalBinaryToDecimal(numberToConvert)
                convertFractionalDecimalToHexadecimal(firstConvertion)
            }
        }else if(baseFromState == "Hexadecimal" && baseToState == "Binary"){
            // CONVERTING VALUE OF INPUT TO FLOAT NUMBER BEFORE PROCEEDING
            const stringToConvert = numberToConvert.toString().trim()
            
            if(!(stringToConvert.includes('.'))){
                const firstConvertion = convertWholeHexadecimalToDecimal(stringToConvert)
                convertWholeDecimalToBinary(firstConvertion)
            }else{
                const firstConvertion = convertFractionalHexadecimalToDecimal(stringToConvert)
                convertFractionalDecimalToBinary(firstConvertion)
            }
        }else if(baseFromState == "Octal" && baseToState == "Hexadecimal"){
            // CONVERTING VALUE OF INPUT TO FLOAT NUMBER BEFORE PROCEEDING
            numberToConvert = parseFloat(numberToConvert)
            
            if(Number.isInteger(numberToConvert)){
                const firstConvertion = convertWholeOctalToDecimal(numberToConvert)
                convertWholeDecimalToHexadecimal(firstConvertion)
            }else{
                const firstConvertion = convertFractionalOctalToDecimal(numberToConvert)
                convertFractionalDecimalToHexadecimal(firstConvertion)
            }
        }else if(baseFromState == "Hexadecimal" && baseToState == "Octal"){
            // CONVERTING VALUE OF INPUT TO FLOAT NUMBER BEFORE PROCEEDING
            const stringToConvert = numberToConvert.toString().trim()
            
            if(!(stringToConvert.includes('.'))){
                const firstConvertion = convertWholeHexadecimalToDecimal(stringToConvert)
                convertWholeDecimalToOctal(firstConvertion)
            }else{
                const firstConvertion = convertFractionalHexadecimalToDecimal(stringToConvert)
                convertFractionalDecimalToOctal(firstConvertion)
            }
        }else{
            throw new Error("Choice not applicable")
        }
    }catch(error){
        displayError(error.message)
    }
}

// A FUNCTION TO SHUT DOWN ERRORS
function closeErrorPopup(e){
    //STYLE THE BUTTON
    e.target.classList.add('error-popup__close-button--active')

    // RESETTING PROPERTIES
    errorMessage = ""
    errorPopupMessage.innerText = ""
    errorPopup.style.setProperty('display', 'none')

    resetApp()
}

// A FUNCTION TO SHUT DOWN ANSWER NOTIFICATIONS
function closeAnswerPopup(e){
    //STYLE THE BUTTON
    e.target.classList.add('answer-popup__close-button--active')

    // RESETTING PROPERTIES
    answerMessage = ""
    answerPopupMessage.innerText = ""
    answerPopup.style.setProperty('display', 'none')

    resetApp()
}

// A FUNCTION TO RESET EVERYTHING
function resetApp(){
    // RESET INNER VALUES
    baseFromState = ""
    baseToState = ""
    numberToConvert = 0

    // RESET VISUALS
    answerPopupCloseButton.classList.remove('answer-popup__close-button--active')
    errorPopupCloseButton.classList.remove('error-popup__close-button--active')
    
    inputButton.classList.remove('form--input-area--button--active')
    inputButton.removeAttribute('disabled')

    inputField.value = 0

    for(let i = 0; i < allAfterButtons.length; i++){
        const button = allAfterButtons[i]
        button.removeAttribute('disabled')
        button.classList.remove('after-grid--buttons--active')
    }

    for(let i = 0; i < allBeforeButtons.length; i++){
        const button = allBeforeButtons[i]
        button.removeAttribute('disabled')
        button.classList.remove('before-grid--buttons--active')
    }
}

// A FUNCTION TO CONVERT WHOLE BINARY TO DECIMAL
function convertWholeBinaryToDecimal(wholeBinary){
    // DISABLE THE BUTTON TO AVOID MISHAPS
    inputButton.setAttribute('disabled', true)

    try{
        //CHECK IF NUMBER IS INDEED A WHOLE NUMBER
        if(!(Number.isInteger(wholeBinary))){
            throw new Error(`The number ${wholeBinary} must be an integer`)
        }

        // RETURNING PROPER NUMBERS IN SOME CASES
        if(wholeBinary === 0 || wholeBinary === 1){
            // CLEAR PREVIOUS ERROR TO SET SUCCESS, AVOIDING CONFLICT
            displayAnswer(`The number ${wholeBinary} converted to decimal is: ${wholeBinary}`)

            return parseInt(wholeBinary)
        }

        // INITIATING VARIABLES
            //FORMING A LIST OF BINARYDIGITS
        const binaryDigitsList = wholeBinary.toString().split("").reverse()
            //FORMING SUM TO ADD ONTO
        let decimalNumber = 0

        // A FOR LOOP TO GET DECIMALNUMBER
        for(let i = 0; i < binaryDigitsList.length; i++){
            const binaryDigit = parseInt(binaryDigitsList[i])

            if((binaryDigit !== 0) && (binaryDigit !== 1)){
                throw new Error(`The number ${wholeBinary} is not a binary number`)
            }

            decimalNumber += (2 ** i) * binaryDigit
        }

        // FINALLY, SHOW END RESULT
        displayAnswer(`The number ${wholeBinary} converted to decimal is: ${decimalNumber}`)

        return parseInt(decimalNumber)
    }catch(error){
        // CLEAR PREVIOUS ERROR TO SET SUCCESS, AVOIDING CONFLICT
        displayError(error.message)
    }
}

// A FUNCTION TO CONVERT FRACTIONAL BINARY TO DECIMAL
function convertFractionalBinaryToDecimal(fractionalBinary){
    // DISABLE THE BUTTON TO AVOID MISHAPS
    inputButton.setAttribute('disabled', true)

    try{
        //CHECK IF NUMBER IS INDEED A FRACTIONAL NUMBER
        if(Number.isInteger(fractionalBinary)){
            throw new Error(`The number ${fractionalBinary} must be an fraction`)
        }

        // INITIALIZING VARIABLES
        const wholeBinaryPart = Math.floor(fractionalBinary)
        const fractionalBinaryPart = (fractionalBinary - wholeBinaryPart).toFixed(4)
        const fractionalBinaryDigitsList = fractionalBinaryPart.split(".")[1].split('')
        let fractionalDecimalNumber = 0

        // A FOR LOOP TO FIND THE FRACTIONALDECIMALNUMBER
        for(let i = 0; i < 4; i++){
            const fractionalBinaryDigit = parseInt(fractionalBinaryDigitsList[i])

            if((fractionalBinaryDigit !== 0) && (fractionalBinaryDigit !== 1)){
                throw new Error(`The number ${fractionalBinary} is not a binary number`)
            }

            fractionalDecimalNumber += ((1 / 2) ** (i + 1)) * fractionalBinaryDigit
        }

        // FIND THE DECIMALNUMBER
        const wholeDecimalNumber = convertWholeBinaryToDecimal(wholeBinaryPart)
        const decimalNumber = wholeDecimalNumber + fractionalDecimalNumber

        // FINALLY SHOW END RESULT
        displayAnswer(`The number ${fractionalBinary} converted to decimal is: ${decimalNumber}`)

        return parseFloat(decimalNumber)
    }catch(error){
        // CLEAR PREVIOUS ERROR TO SET SUCCESS, AVOIDING CONFLICT
        displayError(
            error.message == "Cannot read properties of undefined (reading 'split')"
                ?
            errorMessage = "This is not the format of the number required"
                :
            errorMessage
        )
    }
}

// A FUNCTION TO CONVERT A WHOLE DECIMAL TO BINARY
function convertWholeDecimalToBinary(wholeDecimal){
    // DISABLE THE BUTTON TO AVOID MISHAPS
    inputButton.setAttribute('disabled', true)

    try{
        //CHECK IF NUMBER IS INDEED A WHOLE NUMBER
        if(!(Number.isInteger(wholeDecimal))){
            throw new Error(`The number ${wholeDecimal} must be an integer`)
        }

        // RETURNING PROPER NUMBERS IN SOME CASES
        if((wholeDecimal === 0) || (wholeDecimal === 1)){
            // CLEAR PREVIOUS ERROR TO SET SUCCESS, AVOIDING CONFLICT
            displayAnswer(`The number ${wholeDecimal} converted to binary is: ${wholeDecimal}`)

            return parseInt(wholeDecimal)
        } 

        // INITIALIZING VARIABLES
        const binaryDigitsList = []

        // A WHILE LOOP TO FIND THE BINARYDIGITS
        let decimalToConvert = wholeDecimal
        while(decimalToConvert !== 0){
            const binaryDigit = decimalToConvert % 2
            binaryDigitsList.push(binaryDigit)
            decimalToConvert = Math.floor(decimalToConvert / 2)
        }

        // REVERSE THE LIST AND SHOW THE RESULTS
        const binaryNumber = binaryDigitsList.reverse().join('')

        // FINALLY, SHOW END RESULT
        displayAnswer(`The number ${wholeDecimal} converted to binary is: ${binaryNumber}`)

        return parseInt(binaryNumber)

    }catch(error){
        // CLEAR PREVIOUS ERROR TO SET SUCCESS, AVOIDING CONFLICT
        displayError(error.message)
    }
        
}

// A FUNCTION TO CONVERT A FRACTIONALDECIMAL TO BINARY
function convertFractionalDecimalToBinary(fractionalDecimal){
    // DISABLE THE BUTTON TO AVOID MISHAPS
    inputButton.setAttribute('disabled', true)

    try{
        //CHECK IF NUMBER IS INDEED A FRACTIONAL NUMBER
        if(Number.isInteger(fractionalDecimal)){
            throw new Error(`The number ${fractionalDecimal} must be an fraction`)
        }

        // INITIALIZING VARIABLES
        const wholeDecimalPart = Math.floor(fractionalDecimal)
        let fractionalDecimalPart = parseFloat((fractionalDecimal - wholeDecimalPart).toFixed(4))
        const fractionalBinaryDigitsList = []

        // A FOR LOOP TO GENERATE THE FRACTIONAL BINARY NUMBERS
        for(let i = 0; i < 4; i++){
            const fractionalBinaryDigit = Math.floor(fractionalDecimalPart * 2)
            fractionalBinaryDigitsList.push(fractionalBinaryDigit)
            fractionalDecimalPart = (fractionalDecimalPart * 2) % 1
        }

        // LOOK FOR THE WHOLE BINARY PART
        const wholeBinaryNumber = convertWholeDecimalToBinary(wholeDecimalPart)
        // ADD THE WHOLE PART TO FRACTION PART, DISPLAY ANSWER AND RETURN IT
        const fractionalBinaryNumber = fractionalBinaryDigitsList.join('')
        const binaryNumber = wholeBinaryNumber + '.' + fractionalBinaryNumber

        // FINALLY, SHOW END RESULT
        displayAnswer(`The number ${fractionalDecimal} converted to binary is: ${binaryNumber}`)

        return parseFloat(binaryNumber)     
    }catch(error){
        // CLEAR PREVIOUS ERROR TO SET SUCCESS, AVOIDING CONFLICT
        displayError(error.message)
    }
}

// A FUNCTION TO CONVERT A WHOLE DECIMAL TO OCTAL
function convertWholeDecimalToOctal(wholeDecimal){
    // DISABLE THE BUTTON TO AVOID MISHAPS
    inputButton.setAttribute('disabled', true)

    try{
        //CHECK IF NUMBER IS INDEED A WHOLE NUMBER
        if(!(Number.isInteger(wholeDecimal))){
            throw new Error(`The number ${wholeDecimal} must be an integer`)
        }

        // RETURNING PROPER NUMBERS IN SOME CASES
        if((wholeDecimal >= 0) && (wholeDecimal <= 7)){
            // CLEAR PREVIOUS ERROR TO SET SUCCESS, AVOIDING CONFLICT
            displayAnswer(`The number ${wholeDecimal} converted to octal is: ${wholeDecimal}`)

            return parseInt(wholeDecimal)
        } 

        // INITIALIZING VARIABLES
        const octalDigitsList = []

        // A WHILE LOOP TO FIND THE OCTALDIGITS
        let decimalToConvert = wholeDecimal
        while(decimalToConvert !== 0){
            const octalDigit = decimalToConvert % 8
            octalDigitsList.push(octalDigit)
            decimalToConvert = Math.floor(decimalToConvert / 8)
        }

        // REVERSE THE LIST AND SHOW THE RESULTS
        const octalNumber = octalDigitsList.reverse().join('')

        // FINALLY, SHOW END RESULT
        displayAnswer(`The number ${wholeDecimal} converted to octal is: ${octalNumber}`)

        return parseInt(octalNumber)

    }catch(error){
        // CLEAR PREVIOUS ERROR TO SET SUCCESS, AVOIDING CONFLICT
        displayError(error.message)
    }
        
}

// A FUNCTION TO CONVERT A FRACTIONALDECIMAL TO OCTAL
function convertFractionalDecimalToOctal(fractionalDecimal){
    // DISABLE THE BUTTON TO AVOID MISHAPS
    inputButton.setAttribute('disabled', true)

    try{
        //CHECK IF NUMBER IS INDEED A FRACTIONAL NUMBER
        if(Number.isInteger(fractionalDecimal)){
            throw new Error(`The number ${fractionalDecimal} must be an fraction`)
        }

        // INITIALIZING VARIABLES
        const wholeDecimalPart = Math.floor(fractionalDecimal)
        let fractionalDecimalPart = parseFloat((fractionalDecimal - wholeDecimalPart).toFixed(4))
        const fractionalOctalDigitsList = []

        // A FOR LOOP TO GENERATE THE FRACTIONAL BINARY NUMBERS
        for(let i = 0; i < 4; i++){
            const fractionalOctalDigit = Math.floor(fractionalDecimalPart * 8)
            fractionalOctalDigitsList.push(fractionalOctalDigit)
            fractionalDecimalPart = (fractionalDecimalPart * 8) % 1
        }

        // LOOK FOR THE WHOLE BINARY PART
        const wholeOctalNumber = convertWholeDecimalToOctal(wholeDecimalPart)
        // ADD THE WHOLE PART TO FRACTION PART, DISPLAY ANSWER AND RETURN IT
        const fractionalOctalNumber = fractionalOctalDigitsList.join('')
        const octalNumber = wholeOctalNumber + '.' + fractionalOctalNumber

        // FINALLY, SHOW END RESULT
        displayAnswer(`The number ${fractionalDecimal} converted to octal is: ${octalNumber}`)

        return parseFloat(octalNumber)     
    }catch(error){
        // CLEAR PREVIOUS ERROR TO SET SUCCESS, AVOIDING CONFLICT
        displayError(error.message)
    }
}

// A FUNCTION TO CONVERT WHOLE OCTAL TO DECIMAL
function convertWholeOctalToDecimal(wholeOctal){
    // DISABLE THE BUTTON TO AVOID MISHAPS
    inputButton.setAttribute('disabled', true)

    try{
        //CHECK IF NUMBER IS INDEED A WHOLE NUMBER
        if(!(Number.isInteger(wholeOctal))){
            throw new Error(`The number ${wholeOctal} must be an integer`)
        }

        // RETURNING PROPER NUMBERS IN SOME CASES
        if((wholeOctal >= 0) && (wholeOctal <= 7)){
            // CLEAR PREVIOUS ERROR TO SET SUCCESS, AVOIDING CONFLICT
            displayAnswer(`The number ${wholeOctal} converted to decimal is: ${wholeOctal}`)

            return parseInt(wholeOctal)
        }

        // INITIATING VARIABLES
            //FORMING A LIST OF OCTALDIGITS
        const octalDigitsList = wholeOctal.toString().split("").reverse()
            //FORMING SUM TO ADD ONTO
        let decimalNumber = 0

        // A FOR LOOP TO GET DECIMALNUMBER
        for(let i = 0; i < octalDigitsList.length; i++){
            const octalDigit = parseInt(octalDigitsList[i])

            if((octalDigit < 0) || (octalDigit > 7)){
                throw new Error(`The number ${wholeOctal} is not an octal number`)
            }

            decimalNumber += (8 ** i) * octalDigit
        }

        // FINALLY, SHOW END RESULT
        displayAnswer(`The number ${wholeOctal} converted to decimal is: ${decimalNumber}`)

        return parseInt(decimalNumber)
    }catch(error){
        // CLEAR PREVIOUS ERROR TO SET SUCCESS, AVOIDING CONFLICT
        displayError(error.message)
    }
}

// A FUNCTION TO CONVERT FRACTIONAL OCTAL TO DECIMAL
function convertFractionalOctalToDecimal(fractionalOctal){
    // DISABLE THE BUTTON TO AVOID MISHAPS
    inputButton.setAttribute('disabled', true)

    try{
        //CHECK IF NUMBER IS INDEED A FRACTIONAL NUMBER
        if(Number.isInteger(fractionalOctal)){
            throw new Error(`The number ${fractionalOctal} must be an fraction`)
        }

        // INITIALIZING VARIABLES
        const wholeOctalPart = Math.floor(fractionalOctal)
        const fractionalOctalPart = (fractionalOctal - wholeOctalPart).toFixed(4)
        const fractionalOctalDigitsList = fractionalOctalPart.split(".")[1].split('')
        let fractionalDecimalNumber = 0

        // A FOR LOOP TO FIND THE FRACTIONALDECIMALNUMBER
        for(let i = 0; i < 4; i++){
            const fractionalOctalDigit = parseInt(fractionalOctalDigitsList[i])

            if((fractionalOctalDigit < 0) || (fractionalOctalDigit > 7)){
                throw new Error(`The number ${fractionalOctal} is not an octal number`)
            }

            fractionalDecimalNumber += ((1 / 8) ** (i + 1)) * fractionalOctalDigit
        }

        // FIND THE DECIMALNUMBER
        const wholeDecimalNumber = convertWholeOctalToDecimal(wholeOctalPart)
        const decimalNumber = wholeDecimalNumber + fractionalDecimalNumber

        // FINALLY SHOW END RESULT
        displayAnswer(`The number ${fractionalOctal} converted to decimal is: ${decimalNumber}`)

        return parseFloat(decimalNumber)
    }catch(error){
        // CLEAR PREVIOUS ERROR TO SET SUCCESS, AVOIDING CONFLICT
        displayError(
            error.message == "Cannot read properties of undefined (reading 'split')"
                ?
            errorMessage = "This is not the format of the number required"
                :
            errorMessage
        )
    }
}

// A FUNCTION TO CONVERT DECIMAL TO HEXADECIMAL
function convertWholeDecimalToHexadecimal(wholeDecimal){
    // DISABLE THE BUTTON TO AVOID MISHAPS
    inputButton.setAttribute('disabled', true)

    try{
        //CHECK IF NUMBER IS INDEED A FRACTIONAL NUMBER
        if(!(Number.isInteger(wholeDecimal))){
            throw new Error(`The number ${wholeDecimal} must be an integer`)
        }

        // RETURNING PROPER NUMBERS IN SOME CASES
        if((wholeDecimal >= 0) && (wholeDecimal <= 15)){
            // CLEAR PREVIOUS ERROR TO SET SUCCESS, AVOIDING CONFLICT
            displayAnswer(`The number ${wholeDecimal} converted to hexadecimal is: ${wholeDecimal}`)

            return wholeDecimal.toString()
        }

        // INITIALIZING VARIABLES
        const hexadecimalDigitsOnlyList = []

        // A WHILE LOOP TO FIND THE HEXADECIMALDIGITS
        let decimalToConvert = wholeDecimal
        while(decimalToConvert !== 0){
            const hexadecimalDigit = decimalToConvert % 16
            hexadecimalDigitsOnlyList.push(hexadecimalDigit)
            decimalToConvert = Math.floor(decimalToConvert / 16)
        }

        // ADJUSTING LIST WITH RIGHT LETTERS
        const hexadecimalDigitsList = hexadecimalDigitsOnlyList.map(hexadecimalDigit => {
            switch(hexadecimalDigit){
                case 10:
                    return "A"
                case 11:
                    return "B"
                case 12:
                    return "C"
                case 13:
                    return "D"
                case 14:
                    return "E"
                case 15:
                    return "F"
                default:
                    return hexadecimalDigit
            }
        })

        // REVERSE THE LIST AND SHOW THE RESULTS
        const hexadecimalNumber = hexadecimalDigitsList.reverse().join('')

        // FINALLY, SHOW END RESULT
        displayAnswer(`The number ${wholeDecimal} converted to hexadecimal is: ${hexadecimalNumber}`)

        return hexadecimalNumber
    }catch(error){
        displayError(error.message)
    }
}

// A FUNCTION TO CONVERT FRACTIONAL DECIMALS TO HEXADECIMALS
function convertFractionalDecimalToHexadecimal(fractionalDecimal){
    // DISABLE THE BUTTON TO AVOID MISHAPS
    inputButton.setAttribute('disabled', true)

    try{
        //CHECK IF NUMBER IS INDEED A FRACTIONAL NUMBER
        if(Number.isInteger(fractionalDecimal)){
            throw new Error(`The number ${fractionalDecimal} must be an fraction`)
        }

        // INITIALIZING VARIABLES
        const wholeDecimalPart = Math.floor(fractionalDecimal)
        let fractionalDecimalPart = parseFloat((fractionalDecimal - wholeDecimalPart).toFixed(4))
        const fractionalHexadecimalDigitsOnlyList = []

        // A FOR LOOP TO GENERATE THE FRACTIONAL HEXADECIMAL NUMBERS
        for(let i = 0; i < 4; i++){
            const fractionalHexadecimalDigit = Math.floor(fractionalDecimalPart * 16)
            fractionalHexadecimalDigitsOnlyList.push(fractionalHexadecimalDigit)
            fractionalDecimalPart = (fractionalDecimalPart * 16) % 1
        }

        // LOOK FOR THE WHOLE HEXADECIMAL PART
        const wholeHexadecimalNumber = convertWholeDecimalToHexadecimal(wholeDecimalPart)

        // ADJUSTING LIST WITH RIGHT LETTERS
        const fractionalHexadecimalDigitsList = fractionalHexadecimalDigitsOnlyList.map(hexadecimalDigit => {
            switch(hexadecimalDigit){
                case 10:
                    return "A"
                case 11:
                    return "B"
                case 12:
                    return "C"
                case 13:
                    return "D"
                case 14:
                    return "E"
                case 15:
                    return "F"
                default:
                    return hexadecimalDigit
            }
        })

        // ADD THE WHOLE PART TO FRACTION PART, DISPLAY ANSWER AND RETURN IT
        const fractionalHexadecimalNumber = fractionalHexadecimalDigitsList.join('')
        const hexadecimalNumber = wholeHexadecimalNumber + '.' + fractionalHexadecimalNumber

        // FINALLY, SHOW END RESULT
        displayAnswer(`The number ${fractionalDecimal} converted to Hexadecimal is: ${hexadecimalNumber}`)

        return hexadecimalNumber     
    }catch(error){
        // CLEAR PREVIOUS ERROR TO SET SUCCESS, AVOIDING CONFLICT
        displayError(error.message)
    }
}

// A FUNCTION TO CONVERT WHOLE HEXADECIMAL TO DECIMAL
function convertWholeHexadecimalToDecimal(wholeHexadecimal){
    // DISABLE THE BUTTON TO AVOID MISHAPS
    inputButton.setAttribute('disabled', true)

    try{
        //CHECK IF WHOLEHEXADECIMAL IS INDEED A STRING
        if(typeof(wholeHexadecimal) !== "string"){
            throw new Error(`The input ${wholeHexadecimal} must be a string`)
        }

        // RETURNING PROPER NUMBERS IN SOME CASES
        if(wholeHexadecimal.length === 1){
            if((parseInt(wholeHexadecimal) >= 0) && (parseInt(wholeHexadecimal) <= 9)){
                // CLEAR PREVIOUS ERROR TO SET SUCCESS, AVOIDING CONFLICT
                displayAnswer(`The number ${wholeHexadecimal} converted to decimal is: ${wholeHexadecimal}`)
    
                return parseInt(wholeHexadecimal)
            }else{
                switch(wholeHexadecimal){
                    case 'A':
                    case 'a':
                        displayAnswer(`The number ${wholeHexadecimal} converted to decimal is: ${10}`)

                        return 10
                    case 'B':
                    case 'b':
                        displayAnswer(`The number ${wholeHexadecimal} converted to decimal is: ${11}`)

                        return 11
                    case 'C':
                    case 'c':
                        displayAnswer(`The number ${wholeHexadecimal} converted to decimal is: ${12}`)

                        return 12
                    case 'D':
                    case 'd':
                        displayAnswer(`The number ${wholeHexadecimal} converted to decimal is: ${13}`)

                        return 13
                    case 'E':
                    case 'e':
                        displayAnswer(`The number ${wholeHexadecimal} converted to decimal is: ${14}`)

                        return 14
                    case 'F':
                    case 'f':
                        displayAnswer(`The number ${wholeHexadecimal} converted to decimal is: ${15}`)

                        return 15
                    default:
                        console.log(wholeHexadecimal)
                }
            }
        }

        // INITIATING VARIABLES
            //FORMING A LIST OF HEXADECIMALDIGITS
        const hexadecimalDigitsList = wholeHexadecimal.split('').reverse()
        
        const hexadecimalDigitsOnlyList = hexadecimalDigitsList.map(hexadecimalDigit => {
            switch(hexadecimalDigit){
                case 'A':
                case 'a':
                    return 10
                case 'B':
                case 'b':
                    return 11
                case 'C':
                case 'c':
                    return 12
                case 'D':
                case 'd':
                    return 13
                case 'E':
                case 'e':
                    return 14
                case 'F':
                case 'f':
                    return 15
                default:
                    return parseInt(hexadecimalDigit)
            }            
        })

            //FORMING SUM TO ADD ONTO
        let decimalNumber = 0

        // A FOR LOOP TO GET DECIMALNUMBER
        for(let i = 0; i < hexadecimalDigitsOnlyList.length; i++){
            const hexadecimalDigit = hexadecimalDigitsOnlyList[i]

            if((hexadecimalDigit < 0) || (hexadecimalDigit > 15)){
                throw new Error(`The number ${wholeHexadecimal} is not an hexadecimal number`)
            }

            decimalNumber += (16 ** i) * hexadecimalDigit
        }

        // FINALLY, SHOW END RESULT
        displayAnswer(`The number ${wholeHexadecimal} converted to decimal is: ${decimalNumber}`)

        return decimalNumber
    }catch(error){
        // CLEAR PREVIOUS ERROR TO SET SUCCESS, AVOIDING CONFLICT
        displayError(error.message)
    }
}

// A FUNCTION TO CONVERT FRACTIONAL HEXADECIMAL TO DECIMAL
function convertFractionalHexadecimalToDecimal(fractionalHexadecimal){
    // DISABLE THE BUTTON TO AVOID MISHAPS
    inputButton.setAttribute('disabled', true)

    try{
        //CHECK IF WHOLEHEXADECIMAL IS INDEED A STRING
        if(typeof(fractionalHexadecimal) !== "string"){
            throw new Error(`The input ${fractionalHexadecimal} must be a string`)
        }

        // INITIALIZING VARIABLES
        const wholeHexadecimalPart = fractionalHexadecimal.split('.')[0]
        const fractionalHexadecimalPart = fractionalHexadecimal.split('.')[1]
        const fractionalHexadecimalDigitsList = fractionalHexadecimalPart.split('')
        
        const fractionalHexadecimalDigitsOnlyList = fractionalHexadecimalDigitsList.map(fractionalHexadecimalDigit => {
            switch(fractionalHexadecimalDigit){
                case 'A':
                case 'a':
                    return 10
                case 'B':
                case 'b':
                    return 11
                case 'C':
                case 'c':
                    return 12
                case 'D':
                case 'd':
                    return 13
                case 'E':
                case 'e':
                    return 14
                case 'F':
                case 'f':
                    return 15
                default:
                    return parseInt(fractionalHexadecimalDigit)
            }            
        })

        let fractionalDecimalNumber = 0

        // A FOR LOOP TO FIND THE FRACTIONALDECIMALNUMBER
        for(let i = 0; i < fractionalHexadecimalDigitsOnlyList.length; i++){
            const fractionalHexadecimalDigit = fractionalHexadecimalDigitsOnlyList[i]

            if((fractionalHexadecimalDigit < 0) || (fractionalHexadecimalDigit > 15)){
                throw new Error(`The number ${fractionalHexadecimal} is not a hexadecimal number`)
            }

            fractionalDecimalNumber += ((1 / 16) ** (i + 1)) * fractionalHexadecimalDigit
        }

        // FIND THE DECIMALNUMBER
        const wholeDecimalNumber = convertWholeHexadecimalToDecimal(wholeHexadecimalPart)
        const decimalNumber = parseFloat((wholeDecimalNumber + fractionalDecimalNumber).toFixed(4))

        // FINALLY SHOW END RESULT
        displayAnswer(`The number ${fractionalHexadecimal} converted to decimal is: ${decimalNumber}`)

        return parseFloat(decimalNumber)
    }catch(error){
        // CLEAR PREVIOUS ERROR TO SET SUCCESS, AVOIDING CONFLICT
        displayError(
            error.message == "Cannot read properties of undefined (reading 'split')"
                ?
            errorMessage = "This is not the format of the number required"
                :
            errorMessage
        )
    }
}

// ADDING FUNCTION TO BEFOREGRIDBUTTONS
for(let i = 0; i < allBeforeButtons.length; i++){
    const button = allBeforeButtons[i] 
    button.addEventListener('click', (e) => setBaseFromState(e))
}

// ADDING FUNCTION TO AFTERGRIDBUTTONS
for(let i = 0; i < allAfterButtons.length; i++){
    const button = allAfterButtons[i] 
    button.addEventListener('click', (e) => setBaseToState(e))
}

// ADDING FUNCTION TO INPUTBUTTON
inputButton.addEventListener('click', (e) => getInputValue(e))

// ADDING FUNCTION TO CLOSEICONS
errorPopupCloseButton.addEventListener('click', (e) => closeErrorPopup(e))
answerPopupCloseButton.addEventListener('click', (e) => closeAnswerPopup(e))