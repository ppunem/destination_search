import DestinationItem from './components/DestinationItem/index.js'
import {Component} from 'react'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  valueChange = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults=destinationsList.filter(each=>{
        each.name.toLowerCase().includes(searchInput.toLowerCase())
    })
    return (
      <div className="main-container">
        <h1 className="main-heading">Destination Search</h1>
        <input
          className="user-input"
          type="search"
          placeholder="Search"
          onChange={this.valueChange}
          value={searchInput}
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          alt="search icon"
        />
      </div>
      <ul className="result-container">
             {searchResults.map(each=>(
                 <DestinationItem destinationDetails={each} key={each.id}/>
             ))}
      </ul>
    )
  }
}

export default DestinationSearch
