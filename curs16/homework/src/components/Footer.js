import React from 'react';
const Footer = (props) => (
    <footer className="text-center">
    <div className="footer-above">
      <div className="container">
        <div className="row">
          <div className="footer-col col-md-4">
            <h3>Main Location</h3>
            <p>
              <span>Cluj-Napoca</span>
              <br />
              <span>Strada Observatorului, nr. 90, ap. 16-17</span>
            </p>
          </div>
          <div className="footer-col col-md-4">
            <h3>Around the Web</h3>
            <ul className="list-inline">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/company/fasttrackit/"
                  className="btn-social btn-outline"
                >
                  <i className="fa fa-fw fa-linkedin" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/fasttrackiteducation/"
                  className="btn-social btn-outline"
                >
                  <i className="fa fa-fw fa-facebook" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/fasttrackit/?hl=ro"
                  className="btn-social btn-outline"
                >
                  <i className="fa fa-fw fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col col-md-4">
            <h3>About FastTrackIT</h3>
            <p>
              <a href="https://fasttrackit.org/">FastTrackIT </a>
              <span>
                helps people kickstart their development careers
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-below">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <span>Copyright &copy;</span>{" "}
            <a
              href="https://leanjs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pruteanu Cosmin
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;