import React from "react"

function Header() {
  const myStyle = "background-image: linear-gradient(to right, rgb(82, 82, 82), rgb(61, 114, 180))"
  const color1 = "#343336"
  const color2 = "#B408A4"

  return (
    <header className="text-center bg-dark text-white py-5 mb-5" style={{ background: `linear-gradient(to bottom,  ${color1} 0%,${color2} 100%)` }}>
      <h1 className="display-1">Alyra Gradients</h1>
      <p className="tagline">Ultime collection de plus beaux dégradés</p>

      <button aria-label="Clicker pour afficher le dégradé précédant" type="button" className="btn btn-outline-light m-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"></path>
        </svg>
      </button>

      <button aria-label="Clicker pour changer le dégradé" type="button" className="btn btn-outline-light m-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"></path>
          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"></path>
        </svg>
      </button>
      <button aria-label="Clicker pour afficher le dégradé suivant" type="button" className="btn btn-outline-light m-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
        </svg>
      </button>
    </header>
  )
}

export default Header
