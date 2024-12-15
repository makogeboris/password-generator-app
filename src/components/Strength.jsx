function Strength({ strength }) {
  const strengthColors = {
    'Too Weak!': 'bg-red',
    Weak: 'bg-orange',
    Medium: 'bg-yellow',
    Strong: 'bg-neonGreen',
  }

  const strengthBars = ['Too Weak!', 'Weak', 'Medium', 'Strong']
  const activeBars = strengthBars.indexOf(strength) + 1

  return (
    <div className="mt-8 flex flex-wrap items-center justify-between bg-veryDarkGrey px-4 py-3 sm:mt-0 sm:min-h-[4.5rem] sm:px-8 sm:py-5">
      <p className="text-base uppercase text-grey sm:text-lg sm:leading-5">
        Strength
      </p>

      <div className="flex items-center gap-4">
        <p className="text-lg uppercase leading-5 text-almostWhite sm:text-2xl">
          {strength}
        </p>

        <div className="flex gap-2">
          {Array(4)
            .fill('')
            .map((_, index) => (
              <div
                key={index}
                className={`h-7 w-[0.625rem] border-2 border-almostWhite ${
                  index < activeBars ? strengthColors[strength] : ''
                }`}
              ></div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Strength
