import Gradient from "./Gradient"
const GradientsList = ({ gradients, selectedTag }) => {
  return (
    <ul className="row list-unstyled">
      {gradients.map(gradient => {
        const TagsArray = gradient.tags

        if (TagsArray.includes(selectedTag)) {
          return <Gradient colorStart={gradient.start} colorEnd={gradient.start} name={gradient.name} selectedTag={selectedTag} />
        }

        return null
      })}
    </ul>
  )
}

export default GradientsList
