import {Link, withRouter} from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'

import './index.css'

const Vaccination = () => (
  <>
    <Header />
    <div className="vaccination-main-container">
      <div className="about-content-container">
        <h1 className="about-title">Vaccination</h1>
        <p className="about-title">Server down please try again sometime</p>
        <img
          src="https://res.cloudinary.com/dwffepf9q/image/upload/v1694703402/lj9jgae8ub6m58stsrqu.jpg"
          alt="error server"
          className="error-image"
        />
        <Link to="/">
          <button type="button" className="not-found-button">
            Home
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  </>
)

export default withRouter(Vaccination)
