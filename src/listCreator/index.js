import './index.css'

const ListCreator = props => {
  const {historyDetails, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails
  const onDelete = () => {
    deleteHistory(id)
  }
  return (
    <li>
      <div className="history-item-container">
        <div className="history-item-2">
          <p className="time-access">{timeAccessed}</p>
          <div className="history-details">
            <img className="logo" src={logoUrl} alt="domain logo" />
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
        <button
          testid="delete"
          className="delete-btn"
          type="button"
          onClick={onDelete}
        >
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
