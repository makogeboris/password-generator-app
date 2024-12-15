function Button() {
  return (
    <button className="group mt-4 flex w-full items-center justify-center gap-4 border-2 border-transparent bg-neonGreen py-4 text-base uppercase text-darkGrey transition-all hover:border-neonGreen hover:bg-darkGrey hover:text-neonGreen sm:mt-0 sm:gap-6 sm:py-5 sm:text-lg sm:leading-5">
      Generate
      <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
        />
      </svg>
    </button>
  )
}

export default Button
