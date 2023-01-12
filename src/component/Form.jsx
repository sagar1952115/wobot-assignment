import React from "react";
import "./Form.css";
const Form = () => {
  return (
    <div>
      <div className="container">
        <div className="form-header">
          <div className="logo-1"></div>
          <div className="logo-2"></div>
          <div className="logo-3"></div>
        </div>
        <div className="heading">
          <h3>It’s a delight to have you onboard</h3>
        </div>
        <p>
          Help us know you better. <br />
          (This is how we optimize Wobot as per your business needs)
        </p>
        <div className="form-input">
          <div>
            <label htmlFor="Cname">Company name</label>
            <input type="text" id="Cname" placeholder="e.g. Example Inc" />
          </div>

          <div>
            <label htmlFor="industry">Industry</label>
            <select id="idus" name="industry">
              <option value="select">select</option>
              <option value="software">Software</option>
              <option value="electronics">Electronics</option>
              <option value="Coal">Coal</option>
              <option value="Petrolium">Petrolium</option>
            </select>
          </div>

          <div>
            <label htmlFor="country">Company Size</label>
            <select id="size" name="Size">
              <option value="small">1-20</option>
              <option value="sm-med">21-50</option>
              <option value="med">51-200</option>
              <option value="med-large">201-500</option>
              <option value="large">500+</option>
            </select>
          </div>

          <div>
            <input type="submit" value="Submit"></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
