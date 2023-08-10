import { LazyLoadImage } from "react-lazy-load-image-component";
import general from "../../../assets/images/general.jpg";
import whitening from "../../../assets/images/whitening.jpg";
import Footer from "../../footer/footer.component";
import "./services.styles.scss";

const Services = () => {
  return (
    <div className="container">
      <main className="services-main">
        <h1>Our Services</h1>
        <section className="general">
          <h2>General Dentistry</h2>
          <div className="general-container">
            <LazyLoadImage src={general} alt="dentis" />
            <p>
              General dentistry is a branch of oral health care that focuses on
              diagnosing, preventing, and treating common dental conditions. It
              includes regular check-ups, cleanings, and examinations to
              maintain overall oral health. General dentists also perform
              procedures such as fillings, extractions, and root canals to
              address tooth decay and infection. They provide guidance on proper
              oral hygiene practices and educate patients about the importance
              of dental care. General dentistry serves as the foundation for
              maintaining a healthy smile and preventing more complex dental
              issues from arising.
            </p>
          </div>
        </section>
        <section className="cosmetic">
          <h2>Cosmetic Dentistry</h2>
          <div className="cosmetic-container">
            <LazyLoadImage src={whitening} alt="dentis" />
            <p>
              Cosmetic dentistry focuses on enhancing the appearance of teeth
              and smiles through various elective procedures such as teeth
              whitening, veneers, dental bonding, and orthodontic treatments. It
              aims to improve the color, shape, alignment, and overall
              aesthetics of teeth, helping to create a more confident and
              attractive smile.
            </p>
          </div>
        </section>
        <section>
          <h2>All Services</h2>
          <div className="all-services-container">
            <h3>General Dentistry</h3>
            <h3>Dental Exams & Cleanings</h3>
            <h3>Root Canal Treatments</h3>
            <h3>Tooth Extractions</h3>
            <h3>Cosmetic Dentistry</h3>
            <h3>Tooth Whitening</h3>
            <h3>Porcelan Veneers</h3>
            <h3>Dental Crowns</h3>
            <h3>Restorative Dentistry</h3>
            <h3>Dental Bridges</h3>
            <h3>Dental Implants</h3>
            <h3>Dentures</h3>
            <h3>Dental Guards & Appliances</h3>
            <h3>Dental Fillings</h3>
            <h3>Emergency Dentistry</h3>
            <h3>Invasalign</h3>
            <h3>Orhodontics</h3>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default Services;
