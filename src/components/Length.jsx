function Length({ length, setLength }) {
  return (
    <div className="flex flex-col gap-4 sm:gap-6">
      <div className="flex flex-wrap items-center justify-between">
        <label
          htmlFor="length"
          className="text-base text-almostWhite sm:text-lg sm:leading-5"
        >
          Character Length
        </label>

        <span className="text-2xl text-neonGreen sm:text-3xl sm:leading-10">
          {length}
        </span>
      </div>

      <input
        className="slider"
        id="length"
        type="range"
        name="length"
        min="1"
        max="20"
        step="1"
        defaultValue="1"
        onChange={(e) => {
          const value = Number(e.target.value)
          setLength(value)
          e.target.style.setProperty('--value', value)
        }}
      />
    </div>
  )
}

export default Length
