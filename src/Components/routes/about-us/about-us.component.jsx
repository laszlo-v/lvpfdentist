import Footer from "../../footer/footer.component";
import { LazyLoadImage } from "react-lazy-load-image-component";
import expert1 from "../../../assets/images/expert-1.webp";
import expert2 from "../../../assets/images/expert-2.webp";
import expert3 from "../../../assets/images/expert-3.webp";
import "./about-us.styles.scss";

const About = () => {
  return (
    <div className="container">
      <main>
        <h1>About Us</h1>
        <section>
          <h2>Our experts</h2>
          <div className="experts-container">
            <div className="expert">
              <div className="expert-title">
                <LazyLoadImage src={expert3} alt="dentist" />
                <h3>Dr. Benjamin</h3>
              </div>
              <p>
                Dr. Benjamin is a <strong>family dentist</strong> who values
                comprehensive care for patients of all ages. He is committed to
                creating a welcoming and comfortable environment for families
                and offers a range of services from preventive care to pediatric
                dentistry.
              </p>
            </div>
            <div className="expert">
              <div className="expert-title">
                <LazyLoadImage src={expert2} alt="dentist" />
                <h3>Dr. Sophia</h3>
              </div>

              <p>
                Dr. Sophia is a <strong>cosmetic dentistry specialist</strong>{" "}
                who focuses on helping patients achieve their desired smiles.
                She offers personalized treatments such as teeth whitening,
                dental veneers, and orthodontics to enhance the appearance of
                teeth and boost patients' confidence.
              </p>
            </div>
            <div className="expert">
              <div className="expert-title">
                <LazyLoadImage src={expert1} alt="dentist" />
                <h3>Dr. Olivia</h3>
              </div>

              <p>
                Dr. Olivia{" "}
                <strong>
                  specializes in providing anxiety-free dental care
                </strong>{" "}
                to patients who experience fear or anxiety. She prioritizes
                creating a calming environment and offers sedation options to
                ensure a comfortable and stress-free dental experience.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
