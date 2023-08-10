import Footer from "../../footer/footer.component";
import "./contact.styles.scss";

const Contact = () => {
  return (
    <div className="container">
      <main>
        <h1>Contact Us</h1>
        <div className="contact-container">
          <div className="form">
            <form action="send-mail.php" method="POST">
              <div className="form-inputs">
                <label form="name">Name:</label>
                <input type="text" name="name" id="name" required autoFocus />
              </div>
              <div className="form-inputs">
                <label form="email">Email:</label>
                <input type="email" name="email" id="email" required />
              </div>
              <div className="form-inputs">
                <label form="message">Message:</label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button>Send</button>
            </form>
          </div>
          <div className="map">
            <div>
              <iframe
                scrolling="no"
                marginweight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="600"
                frameBorder="0"
              >
                <a href="https://www.maps.ie/population/">
                  Calculate population in area
                </a>
              </iframe>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Contact;
