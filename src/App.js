import GradientsList from "./components/GradientsList"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Header />
      <h1 className="text-center my-4">Alyra Gradients</h1>
      <main className="container">
        <GradientsList />
      </main>
      <Footer />
    </div>
  )
}

export default App
