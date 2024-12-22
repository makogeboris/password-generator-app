import { useState, useEffect } from 'react'

import Password from './Password'
import Length from './Length'
import Checkbox from './Checkbox'
import Strength from './Strength'
import Button from './Button'

function Form() {
  const [password, setPassword] = useState('')
  const [showCopied, setShowCopied] = useState(false)
  const [characters, setCharacters] = useState('')
  const [length, setLength] = useState(0)
  const [isUppercase, setIsUppercase] = useState(false)
  const [isLowercase, setIsLowercase] = useState(false)
  const [isNumber, setIsNumber] = useState(false)
  const [isSymbol, setIsSymbol] = useState(false)
  const [strength, setStrength] = useState('')

  function generatePassword(e) {
    e.preventDefault()

    if (!length || characters === '') {
      alert('Password length and character types must be selected.')
      return
    }

    // Generate the password
    let newPassword = ''
    for (let i = 0; i < length; i++) {
      const pos = Math.floor(Math.random() * characters.length)
      newPassword += characters[pos]
    }

    setPassword(newPassword)

    // Calculate strength
    const typesCount = [isUppercase, isLowercase, isNumber, isSymbol].filter(
      Boolean
    ).length

    const strength =
      length < 6 || typesCount < 2
        ? 'Too Weak!'
        : length < 8 || typesCount < 3
          ? 'Weak'
          : length < 12 || typesCount < 4
            ? 'Medium'
            : 'Strong'

    setStrength(strength)
  }

  function handleUppercase() {
    setIsUppercase(!isUppercase)
    setCharacters('QWERTYUIOPASDFGHJKLZXCVBNM')
  }

  function handleLowercase() {
    setIsLowercase(!isLowercase)
    setCharacters('qwertyuiopasdfghjklzxcvbnm')
  }

  function handleNumbers() {
    setIsNumber(!isNumber)
    setCharacters('1234567890')
  }

  function handleSymbols() {
    setIsSymbol(!isSymbol)
    setCharacters('!@#$%^&*()+-={}[];<>:')
  }

  function handleShowCopied() {
    setShowCopied(true)
  }

  function handleCopy() {
    navigator.clipboard.writeText(password)
  }

  useEffect(() => {
    let pool = ''
    if (isUppercase) pool += 'QWERTYUIOPASDFGHJKLZXCVBNM'
    if (isLowercase) pool += 'qwertyuiopasdfghjklzxcvbnm'
    if (isNumber) pool += '1234567890'
    if (isSymbol) pool += '!@#$%^&*()+-={}[];<>:'

    setCharacters(pool)
  }, [isUppercase, isLowercase, isNumber, isSymbol])

  useEffect(() => {
    if (showCopied) {
      const timeout = setTimeout(() => {
        setShowCopied(false)
      }, 3000)

      return () => clearTimeout(timeout)
    }
  }, [showCopied])

  return (
    <form onSubmit={generatePassword} className="flex flex-col gap-4 sm:gap-6">
      <Password
        password={password}
        setPassword={setPassword}
        showCopied={showCopied}
        onCopy={handleCopy}
        onShowCopied={handleShowCopied}
      />
      <div className="flex flex-col bg-darkGrey p-4 sm:gap-8 sm:p-8 sm:pt-6">
        <Length length={length} setLength={setLength} />
        <Checkbox
          isUppercase={isUppercase}
          handleUppercase={handleUppercase}
          isLowercase={isLowercase}
          handleLowercase={handleLowercase}
          isNumber={isNumber}
          handleNumbers={handleNumbers}
          isSymbol={isSymbol}
          handleSymbols={handleSymbols}
        />
        <Strength strength={strength} />
        <Button />
      </div>
    </form>
  )
}

export default Form
