function Checkbox({
  isUppercase,
  handleUppercase,
  isLowercase,
  handleLowercase,
  isNumber,
  handleNumbers,
  isSymbol,
  handleSymbols,
}) {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:mt-2 sm:gap-5">
      <div className="flex items-center gap-5 sm:gap-6">
        <input
          className="checkbox"
          type="checkbox"
          name="uppercase"
          id="uppercase"
          checked={isUppercase}
          onChange={handleUppercase}
        />
        <label
          className="text-base text-almostWhite sm:text-lg sm:leading-5"
          htmlFor="uppercase"
        >
          Include Uppercase Letters
        </label>
      </div>
      <div className="flex items-center gap-5 sm:gap-6">
        <input
          className="checkbox"
          type="checkbox"
          name="lowercase"
          id="lowercase"
          checked={isLowercase}
          onChange={handleLowercase}
        />
        <label
          className="text-base text-almostWhite sm:text-lg sm:leading-5"
          htmlFor="lowercase"
        >
          Include Lowercase Letters
        </label>
      </div>
      <div className="flex items-center gap-5 sm:gap-6">
        <input
          className="checkbox"
          type="checkbox"
          name="numbers"
          id="numbers"
          checked={isNumber}
          onChange={handleNumbers}
        />
        <label
          className="text-base text-almostWhite sm:text-lg sm:leading-5"
          htmlFor="numbers"
        >
          Include Numbers
        </label>
      </div>
      <div className="flex items-center gap-5 sm:gap-6">
        <input
          className="checkbox"
          type="checkbox"
          name="symbols"
          id="symbols"
          checked={isSymbol}
          onChange={handleSymbols}
        />
        <label
          className="text-base text-almostWhite sm:text-lg sm:leading-5"
          htmlFor="symbols"
        >
          Include Symbols
        </label>
      </div>
    </div>
  )
}

export default Checkbox
