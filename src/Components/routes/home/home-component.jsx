import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { NavContext } from "../../../contexts/nav.context";
import homeImage1 from "../../../assets/images/pexels-andrea-piacquadio-3779706.jpg";
import chair from "../../../assets/images/dentist-chair.png";
import dollar from "../../../assets/images/dollar.png";
import implant from "../../../assets/images/implant.png";
import hearth from "../../../assets/images/hearth.png";
import servLeft from "../../../assets/images/pexels-polina-zimmerman-4687360.jpg";
import bottomPart1 from "../../../assets/images/pexels-daniel-frank-305565.jpg";
import bottomPart2 from "../../../assets/images/pexels-tima-miroshnichenko-5355709.jpg";
import bottomLastFirst from "../../../assets/images/bottom-first.jpg";
import bottomLastSecond from "../../../assets/images/bottom-second.jpg";
import bottomLastThird from "../../../assets/images/bottom-third.jpg";
import Footer from "../../footer/footer.component";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./home.styles.scss";

const Home = () => {
  const { active, setActive } = useContext(NavContext);
  return (
    <>
      <header className="home-header" onClick={() => setActive(false)}>
        <div className="home-intro">
          <p>We are open 7 days a week</p>
          <p>to address your</p>
          <p>emergency needs.</p>
        </div>
      </header>
      <main className="home-main" onClick={() => setActive(false)}>
        <h1>Welcome to CRWN Dental</h1>
        <section>
          <h2>Your Family Dentist in Dublin</h2>
          <p className="intro">
            Whether you need <strong>routine preventive care</strong>,
            <strong> cosmetic dentistry</strong> solutions, or{" "}
            <strong>restorative treatments</strong>, we are here to help you
            achieve optimal oral health.
          </p>
          <div className="top-container">
            <div className="top-img-button">
              <LazyLoadImage src={homeImage1} alt="dentist" />
              <Link to="/contact" className="button">
                GET IN TOUCH
              </Link>
            </div>
            <div className="top-pars">
              <p>
                We are dedicated to providing our patients with top-quality
                dental treatments in a warm and inviting atmosphere. With a team
                of skilled professionals and the latest dental technology, we
                strive to deliver exceptional results that exceed your
                expectations.
              </p>
              <p>
                At CRWN Dental, we believe that a healthy and beautiful smile
                can enhance your overall well-being and confidence. Our friendly
                staff will ensure your comfort throughout your visit, and we
                take the time to listen to your concerns and tailor our services
                to meet your specific needs.
              </p>
            </div>
          </div>
        </section>
        <div className="main-four-imgs">
          <div>
            <LazyLoadImage src={chair} alt="dentist chair" />
            <p>Advanced Technology</p>
          </div>
          <div>
            <LazyLoadImage src={dollar} alt="insurance" />
            <p>Fully Insured</p>
          </div>
          <div>
            <LazyLoadImage src={implant} alt="implant" />
            <p>Implants</p>
          </div>
          <div>
            <LazyLoadImage src={hearth} alt="patient focused" />
            <p>Patient Focused</p>
          </div>
        </div>
        <div className="main-few-services">
          <LazyLoadImage src={servLeft} alt="dentist" />

          <div className="three-services-container">
            <div>
              <h3>Preventive Dentistry</h3>
              <ul>
                <li>Regular dental check-ups and cleanings</li>
                <li>Dental X-rays and oral examinations</li>
                <li>Oral hygiene instructions and education</li>
              </ul>
            </div>
            <div>
              <h3>Restorative Dentistry</h3>
              <ul>
                <li>Tooth-colored fillings</li>
                <li>Dental crowns and bridges</li>
                <li>Dental implants</li>
              </ul>
            </div>
            <div>
              <h3>Cosmetic Dentistry</h3>
              <ul>
                <li>Teeth whitening</li>
                <li>Dental veneers</li>
                <li>Invisalign or other orthodontic treatments</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom-part-1">
          <p>
            Our dedicated team is committed to providing pain-free dentistry,
            ensuring your visit is as comfortable and anxiety-free as possible.
            We understand the unique needs of children and offer a warm,
            friendly environment that puts them at ease. From gentle treatments
            to a welcoming atmosphere, we aim to make dental care enjoyable and
            stress-free for the whole family.
          </p>

          <LazyLoadImage src={bottomPart1} />
        </div>
        <div className="bottom-part-2">
          <LazyLoadImage src={bottomPart2} alt="Image" className="image" />

          <section>
            <h3>A Comprehensive View of Your Oral Health</h3>
            <p>
              We utilize state-of-the-art digital X-ray technology to gain
              valuable insights into your oral health. X-rays play a vital role
              in our comprehensive approach to dental care, allowing us to
              detect underlying issues that may not be visible to the naked eye.
              With digital X-rays, we minimize radiation exposure while
              maximizing diagnostic accuracy, ensuring your safety and peace of
              mind.
            </p>
            <Link to="/services" className="learn-more">
              Learn More
            </Link>
          </section>
        </div>
        <div className="bottom-part-last">
          <h2>Additional Info</h2>
          <div className="three-cols">
            <section>
              <div className="img-par-container">
                <LazyLoadImage src={bottomLastFirst} alt="dentist" />
                <h3 className="first-info">Compassionate Care</h3>
              </div>
              <p>
                Providing gentle and empathetic dental treatments to ensure your
                comfort and peace of mind.
              </p>
              <h3>Emergency Dentistry</h3>
              <p>
                Offering prompt dental care for urgent situations to relieve
                pain and address dental emergencies.
              </p>
            </section>
            <section>
              <div className="img-par-container">
                <LazyLoadImage src={bottomLastSecond} alt="dentist" />
                <h3 className="first-info">Personalized Approach</h3>
              </div>
              <p>
                Tailoring our dental care to meet your individual needs and
                goals for a truly customized experience.
              </p>
              <h3>Convenient Hours</h3>
              <p>
                Providing flexible appointment scheduling to accommodate your
                busy lifestyle and make dental visits hassle-free.
              </p>
            </section>
            <section>
              <div className="img-par-container">
                <LazyLoadImage src={bottomLastThird} alt="dentist" />
                <h3 className="first-info">Advanced Technology</h3>
              </div>
              <p>
                Utilizing cutting-edge technology to deliver precise and
                efficient treatments for optimal results.
              </p>
              <h3>Insurance Accepted</h3>
              <p>
                Accepting a wide range of dental insurance plans to help
                maximize your benefits and make dental care affordable.
              </p>
            </section>
          </div>
          <h3>2023 - Dublin, IRL</h3>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
