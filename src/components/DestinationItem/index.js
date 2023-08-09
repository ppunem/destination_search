// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationsList

  return (
    <li className="individual-result">
      <img src={imgUrl} />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
