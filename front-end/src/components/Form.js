import React from "react";
import "../css/Form.css";
const Form = () => {
  return (
    <section className="form-section">
      <form action="" className="form">
        <textarea
          name="content"
          id="content"
          type="text"
          className="content"
        ></textarea>
        <button className="btn">Tweet</button>
      </form>
    </section>
  );
};

export default Form;
