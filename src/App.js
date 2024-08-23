import { useFormik } from "formik";
import { useState } from "react";

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = "Please provide a email address";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Please provide a valid email address";
  }

  return errors;
};

export default function App() {
  return (
    <div className="ping">
      <Header />
      <NotifyMe />
      <Ping />
      <Socials />
      <CopyRight />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <img
        className="logo-img"
        src="../assets/images/logo.svg"
        alt="ping logo"
      />
      <h2 className="title">
        <span className="launching">We are launching</span>{" "}
        <span className="soon">soon!</span>
      </h2>
      <p className="description">Subscribe and get notified</p>
    </header>
  );
}

function NotifyMe() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: values => {
      setIsSubmitted(true);
    },
  });

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <div className="input-container">
        <input
          className="input-email"
          type="text"
          name="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Your email address..."
        />
        <div className="message-container">
          {formik.touched.email && formik.errors.email ? (
            <span className="error-message">{formik.errors.email}</span>
          ) : (
            <span className="error-message hidden"></span>
          )}
          {isSubmitted && !formik.errors.email ? (
            <span className="valid-message">Thank you for subscribing!</span>
          ) : (
            <span className="valid-message hidden"></span>
          )}
        </div>
      </div>
      <button className="btn-notify">Notify Me</button>
    </form>
  );
}

function Ping() {
  return (
    <img
      className="ping-img"
      src="../assets/images/illustration-dashboard.png"
      alt="ping img"
    />
  );
}

function Socials() {
  return (
    <ul className="socials">
      <li className="social-link">
        <a
          className="social-links"
          href="https://www.facebook.com/wakin.esteban"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-facebook-f social-icon"></i>
        </a>
      </li>
      <li className="social-link">
        <a
          className="social-links"
          href="https://github.com/geraldesteban"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-twitter social-icon"></i>
        </a>
      </li>
      <li className="social-link">
        <a
          className="social-links"
          href="https://www.instagram.com/pol1carpio/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-instagram social-icon"></i>
        </a>
      </li>
    </ul>
  );
}

function CopyRight() {
  return <p className="copyright">© Copyright Ping. All rights reserved.</p>;
}
