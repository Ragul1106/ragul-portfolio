import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Thank you, ${formData.name}! We will talk soon.`, {
      autoClose: 3000,
    });
    setFormData({ name: "", email: "", description: "" });
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate play duration={1} delay={0} start={{ transform: "translateX(-200px)" }} end={{ transform: "translateX(0px)" }}>
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate play duration={1} delay={0} start={{ transform: "translateX(200px)" }} end={{ transform: "translateX(0px)" }}>
          <form className="contact__content__form" onSubmit={handleSubmit}>
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  name="name"
                  className="inputName"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor="name" className="nameLabel">Name</label>
              </div>
              <div>
                <input
                  required
                  name="email"
                  className="inputEmail"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="email" className="emailLabel">Email</label>
              </div>
              <div>
                <textarea
                  required
                  name="description"
                  className="inputDescription"
                  rows="5"
                  value={formData.description}
                  onChange={handleChange}
                />
                <label htmlFor="description" className="descriptionLabel">Description</label>
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </Animate>
      </div>
      {/* <ToastContainer position="bottom-right" theme="dark" /> */}
<ToastContainer
  position="bottom-right"
  toastClassName="custom-toast"
  bodyClassName="custom-toast-body"
/>

    </section>
  );
};

export default Contact;
