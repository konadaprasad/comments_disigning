import {Component} from 'react'

import {v4 as uuId} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {
    title: '',
    date: '',
    isStarred: true,
    appointmentsList: [],
    newList: [],
  }

  submitForm = event => {
    const {title, date} = this.state
    event.preventDefault()
    const appointment = {
      id: uuId(),
      title,
      date,
      isStar: false,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, appointment],
      title: '',
      date: '',
    }))
  }

  changeStar = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isStar: !eachItem.isStar}
        }
        return eachItem
      }),
    }))
    this.setState(prevState => ({newList: prevState.appointmentsList}))
  }

  changeInput = event => {
    this.setState({title: event.target.value})
  }

  changeDate = event => {
    this.setState({date: event.target.value})
  }

  starredItems = () => {
    const {isStarred, appointmentsList, newList} = this.state
    if (isStarred) {
      const filterList = appointmentsList.filter(item => item.isStar === true)
      this.setState({appointmentsList: filterList, isStarred: false})
    } else {
      this.setState({isStarred: true, appointmentsList: newList})
    }
  }

  render() {
    const {title, date, appointmentsList} = this.state
    console.log(appointmentsList)
    return (
      <div className="container">
        <div className="inner-container">
          <div className="Add">
            <div className="appointment">
              <h1 className="heading">Add Appointment</h1>
              <form onSubmit={this.submitForm} className="form-elements">
                <label htmlFor="inputItem">Title</label>
                <input
                  className="input1"
                  id="inputItem"
                  type="text"
                  value={title}
                  onChange={this.changeInput}
                  placeholder="Title"
                />
                <label htmlFor="inputItem1">Date</label>
                <input
                  type="date"
                  id="inputItem1"
                  className="input1"
                  onChange={this.changeDate}
                  value={date}
                />
                <button className="btn-item" type="submit">
                  Add
                </button>
              </form>
            </div>
            <div className="Appointment-img">
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="appointment-image"
              />
            </div>
          </div>
          <hr className="line" />
          <div className="appointments">
            <div className="starred">
              <h1 className="heading1">Appointments</h1>
              <button
                className="starred-button"
                type="button"
                onClick={this.starredItems}
              >
                Starred
              </button>
            </div>
            <ul className="comments-container">
              {appointmentsList.map(each => (
                <AppointmentItem
                  listItems={each}
                  key={each.id}
                  changeStar={this.changeStar}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Appointments
