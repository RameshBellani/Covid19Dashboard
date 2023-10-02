import {Link} from 'react-router-dom'

import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://res.cloudinary.com/dwffepf9q/image/upload/v1694669597/rzc4ltaayroza6ttdkb2.png"
      alt="not-found-pic"
      className="not-found-image"
    />
    <h1 className="not-found-heading">PAGE NOT FOUND</h1>
    <p className="not-found-description">
      we are sorry, the page you requested could not be found Please go back to
      the homepage
    </p>
    <Link to="/">
      <button type="button" className="not-found-button">
        Home
      </button>
    </Link>
  </div>
)

export default NotFound
