import * as React from 'react';
import logo from '../../images/mps-logo.png'

const Footer = (props) => {
  let date = new Date()
  let year = date.getFullYear()
  const data = props.data
  return(
    <footer className="footer">
      <div className="container text-center">
        <div className="row justify-content-md-center">
          <div className="col col-lg-4">
          <span className="copy">
            &copy; {data.projectInfo.yearCreated}
            &nbsp;{(year > data.projectInfo.yearCreated) ? `- ${year}` : '' }
            &nbsp;<a href={data.companyInfo.website} target="_blank">{data.companyInfo.name}</a>
            </span>
          </div>
          <div className="col col-lg-4">
            <img src={logo} height="60" alt="LVRC Logo"/>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
