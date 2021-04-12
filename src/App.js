import GradientsList from "./components/GradientsList"
import Header from "./components/Header"
import Footer from "./components/Footer"
import GradientsSelect from "./components/GradientsSelect"

function App() {
  return (
    <div>
      <Header />

      <main className="container">
        <h1 className="text-center my-4">Alyra Gradients</h1>
        <GradientsSelect />
        <GradientsList />
      </main>
      <Footer />
    </div>
  )
}

export default App
