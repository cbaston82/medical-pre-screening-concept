import * as React from 'react';

class Header extends React.Component {
  render() {
    return(
      <nav className="navbar navbar-expand-md fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">Medical Pre Screening</a>
        </div>
      </nav>
    )
  }
}

export default Header;