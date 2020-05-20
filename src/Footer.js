import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
      <footer>
        <p className="footer">
          <i aria-hidden="true" className="far fa-copyright"></i>
          <span className="sr-only">Copyright</span>
          Gabriela Parada 2020<br/>
          <span className="credits">All images belong to their respective owners</span>
        </p>
      </footer>
    );
  } 
}

export default Footer;