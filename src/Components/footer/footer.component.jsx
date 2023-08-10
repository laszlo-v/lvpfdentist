import "./footer.styles.scss";
import app from "../../assets/images/app-store.png";
import google from "../../assets/images/google-play.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Footer = () => {
  return (
    <>
      <footer>
        <h3 className="brand">CRWN Dental</h3>

        <h4>
          <a href="tel:012345678">☎️ 01 234 5678</a>
        </h4>
        <div className="footer-top">
          <div className="footer-top-info">
            <div></div>
            <p>Quality</p>
          </div>
          <div className="footer-top-info">
            <div></div>
            <p>Trustworthy</p>
          </div>
          <div className="footer-top-info">
            <div></div>
            <p>Excellence</p>
          </div>
        </div>
        <div className="footer-links">
          <LazyLoadImage src={app} alt="app store" />
          <LazyLoadImage src={google} alt="google play" />
        </div>
        <p>&copy;2023 CRWN Dental. All Rights Reserved.</p>
        <h4 className="pf">This is a portfolio website!!</h4>
        <h4 className="pf" style={{ color: "#61DBFB", fontSize: "1.2rem" }}>
          Created with React
        </h4>
        <h4 className="pf">Under Development!!</h4>
      </footer>
    </>
  );
};

export default Footer;
