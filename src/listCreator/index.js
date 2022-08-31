import './index.css'

const ListCreator = props => {
  const {historyDetails} = props
  const {timeAccessed, logoUrl, title, domainUrl} = historyDetails

  return (
    <li>
      <div className="history-item-container">
        <div className="history-item-2">
          <p className="time-access">{timeAccessed}</p>
          <div className="history-details">
            <img className="logo" src={logoUrl} alt="avatar" />
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
        <button className="delete-btn" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default ListCreator
