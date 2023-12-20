const result = document.getElementById("result")
const passwordLabel = document.getElementById("password")
const passworddLength = document.getElementById("passwordLength")
const includeLowerCase = document.getElementById("includeLowerCase")
const includeUpperCase = document.getElementById("includeUpperCase")
const includeNumbers = document.getElementById("includeNumbers")
const includeSymbols = document.getElementById("includeSymbols")
const generate = document.getElementById("generate")

generate.onclick = function()
{
    function generatePassword(passwordLength, includesLowerCase, includesUpperCase, includesNumbers, includesSymbols)
    {
        const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz"
        const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const numberChars = "0123456789"
        const symbolsChars = "!@#$%^&*()_+-="

        let allowedChars = ""
        let password = ""
 
        allowedChars += includesLowerCase ? lowerCaseChars : ""
        allowedChars += includesUpperCase ? upperCaseChars : ""
        allowedChars += includesNumbers ? numberChars : ""
        allowedChars += includesSymbols ? symbolsChars : ""

        if(passwordLength <= 0)
        {
            result.innerText = "Password length must be at least 1"
        }
        else if(allowedChars.length == 0)
        {
            result.innerText = "Select at least 1 character set"
        }
        else if(passwordLength > 50)
        {
            result.innerText = "Max password length is 50 characters"
        }
        else
        {
            for(let i = 0; i < passwordLength; i++)
            {
                const randomIndex = Math.floor(Math.random() * allowedChars.length)
                password += allowedChars[randomIndex]
            }
            result.innerText = "Click on the password to copy it"
            passwordLabel.innerText = password
            passwordLabel.style.cursor = "pointer"
            passwordLabel.onclick = function()
            {
                navigator.clipboard.writeText(passwordLabel.innerText)
                result.innerText = "Copied!"
            }
        }
    }

    const passwordLength = passworddLength.value
    const includesLowerCase = includeLowerCase.checked
    const includesUpperCase = includeUpperCase.checked
    const includesNumbers = includeNumbers.checked
    const includesSymbols = includeSymbols.checked
    const password = generatePassword(passwordLength, includesLowerCase, includesUpperCase, includesNumbers, includesSymbols)
}