import React from "react"

const GradientsSelect = ({ selectedTag, handleSelectTag, uniqueTags }) => {
  return (
    <div className="input-group mb-3">
      <label className="input-group-text" htmlFor="select">
        Filtrer par tag
      </label>
      <select className="form-select" id="select" onChange={handleSelectTag} value={selectedTag}>
        <option value="all">Tous</option>

        {uniqueTags.map(tag => {
          return <option value="{tag}">{tag}</option>
        })}
      </select>
    </div>
  )
}

export default GradientsSelect
