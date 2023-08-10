import { useState } from "react";
import accordionItems from "../../../faq-data.json";
import Footer from "../../footer/footer.component";
import "./faq.styles.scss";

const FAQ = () => {
  const [active, setActive] = useState(null);

  const onclickHandler = (id) => {
    setActive(id === active ? null : id);
  };

  return (
    <div className="container">
      <main className="faq-main">
        <h1>Frequently Asked Questions</h1>
        <div className="accordion-container">
          <div className="accordion">
            {accordionItems.data.map((item) => (
              <div key={item.id}>
                <h2
                  className={`accordion-head ${
                    active === item.id ? "accordion-head-active" : ""
                  }`}
                  onClick={() => onclickHandler(item.id)}
                >
                  {item.question}
                  <span>{active === item.id ? "-" : "+"}</span>
                </h2>
                {active === item.id && (
                  <p
                    className={`accordion-body ${
                      active === item.id ? "accordion-body-show" : ""
                    }`}
                  >
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
