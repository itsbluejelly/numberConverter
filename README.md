# Number converter

Hello everyone, this is a small practice on my HTML, CSS and JS which uses some deep logic on number convertion, the app can:

1. Convert numbers from one base to another
2. Handle errors gracefully.
3. Detect if number is fractional or a whole number.

Overall, it helped me handle some remind myself on some logic, and hopefully you can gain something on it too.

## Table of contents

1. [__Description__](#number-converter)
1. [__Updates and release notes__](#updates-and-release-notes)
1. [__Code review__](#code-review)
1. [__Credits__](#credits)

## Updates and release notes

This is the first version, so there are plans for it in the future.

Please check the table below for some guidance from release 1 to release 2 ___since 2 will be pretty breaking from 1 version___:

| __Version 1.0__                                  | __Version 2.0__                        |
|--------------------------------------------------|----------------------------------------|
|               Uses HTML, CSS nd JS               | Uses React version                     |
| Needed files for usage                           | No need for files, deployed as website |
| No storage means for recently calculated numbers | Can store recently converted numbers   |
| Not good of an UI                                | Better UI and designing of frontend    |

## code review

My favourite code snippet is converting a fractional number from hexadecimal to decimal, as shown:

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
  
## Project set up

As for version 1.0, its not that hard, you just have to clone the repository and use it in your local machine.


## Credits

All done by, [__Ronnie Denzel__](https://github.com/itsbluejelly)
