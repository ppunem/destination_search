import {Component} from 'react'
import './index.css'

class DestinationSearch extends Component {
  render() {
    return (
      <div className="main-container">
        <h1 className="main-heading">Destination Search</h1>
        <input className="user-input" type="search" placeholder="Search" />
      </div>
    )
  }
}

export default DestinationSearch
