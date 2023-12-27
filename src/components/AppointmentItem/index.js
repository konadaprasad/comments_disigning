import {format} from 'date-fns'

import './index.css'

const AppointmentItem = props => {
  const {listItems, changeStar} = props
  const {id, title, date, isStar} = listItems
  const dateItem = format(new Date(date), 'dd MMMM yyyy, EEEE')

  let imageItem = ''
  if (isStar) {
    imageItem =
      'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
  } else {
    imageItem =
      'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  }

  const starButton = () => {
    changeStar(id)
  }
  return (
    <li className="list-item">
      <div className="cont">
        <p className="para">{title}</p>
        <button
          className="star-button"
          data-testid="star"
          type="button"
          onClick={starButton}
        >
          <img src={imageItem} alt="star" />
        </button>
      </div>
      <p className="date">Date:{dateItem}</p>
    </li>
  )
}
export default AppointmentItem
