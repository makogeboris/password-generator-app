import Form from './components/Form'

function App() {
  return (
    <main>
      <div className="mx-auto max-w-[33.75rem] space-y-4 sm:space-y-8">
        <h1 className="text-center text-base text-grey sm:text-2xl">
          Password Generator
        </h1>

        <Form />
      </div>
    </main>
  )
}

export default App
