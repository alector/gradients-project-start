import React from "react"
import { useState } from "react"
import GradientsSelect from "./GradientsSelect"
import GradientsList from "./GradientsList"
import { gradients, uniqueTags } from "../gradients"

const GradientsApp = () => {
  const handleSelectTag = e => {
    setSelectedTag(e.target.value)
  }
  const [selectedTag, setSelectedTag] = useState("")

  console.log("selectedTag", selectedTag)

  return (
    <>
      <GradientsSelect uniqueTags={uniqueTags} selectedTag={selectedTag} handleSelectTag={handleSelectTag} />
      <GradientsList gradients={gradients} />
    </>
  )
}

export default GradientsApp
