// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    isDisplayFirstName: false,
    isDisplaySecondName: false,
  }

  toggleFirstName = () => {
    this.setState(prevState => ({
      ...prevState,
      isDisplayFirstName: !prevState.isDisplayFirstName,
    }))
  }

  toggleLastName = () => {
    this.setState(prevState => ({
      ...prevState,
      isDisplayLastName: !prevState.isDisplayLastName,
    }))
  }

  render() {
    const {isDisplayFirstName, isDisplayLastName} = this.state
    return (
      <div className="container">
        <div>
          <h1 className="main-heading">Show/hide</h1>
          <div className="button-container">
            <div>
              <button
                type="button"
                className="button button-firstName"
                onClick={this.toggleFirstName}
              >
                Show/Hide FirstName
              </button>
              {isDisplayFirstName && <p className="firstName">Joe</p>}
            </div>
            <div>
              <button
                type="button"
                className="button button-lastName"
                onClick={this.toggleLastName}
              >
                Show/Hide LastName
              </button>
              {isDisplayLastName && <p className="lastName">Jonas</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
