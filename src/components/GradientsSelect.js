import React from "react"

const GradientsSelect = () => {
  return (
    <div className="input-group mb-3">
      <label className="input-group-text" for="select">
        Filtrer par tag
      </label>
      <select className="form-select" id="select">
        <option value="all">Tous</option>
        <option value="gris">gris</option>
        <option value="vert">vert</option>
        <option value="bleu">bleu</option>
        <option value="violet">violet</option>
        <option value="rose">rose</option>
        <option value="jaune">jaune</option>
        <option value="orange">orange</option>
        <option value="fuchsia">fuchsia</option>
        <option value="mauve">mauve</option>
        <option value="rouge">rouge</option>
      </select>
    </div>
  )
}

export default GradientsSelect
