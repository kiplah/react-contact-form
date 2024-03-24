// ContactForm.js
import React, { useState } from 'react';
import '../styles.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',  
    desc: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.desc.trim()) {
      alert("Name, Email, and Description are required.");
      return;
    }
    alert("Form submitted successfully!\nName: " + formData.name + "\nEmail: " + formData.email + "\nThank you for contacting us");
    setFormData({
      name: '',
      email: '',
      phone: '',
      desc: ''
    });
  };

  return (
    <div className="container">
      <h1 className="mb-4 pb-0">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name"><b>Name:</b></label>
          <input type="text" className="form-control" id="name" name="name" placeholder="Enter Your Name" value={formData.name} onChange={handleChange} required />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="email"><b>Email:</b></label>
          <input type="email" className="form-control" id="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleChange} required />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" className="form-control" id="phone" name="phone" placeholder="Enter Your Phone Number" value={formData.phone} onChange={handleChange} />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="desc">Description:</label>
          <textarea className="form-control" id="desc" name="desc" rows="3" value={formData.desc} onChange={handleChange}></textarea>
        </div>
        <br />
        <button type="submit" className="btn btn-success">Submit response</button>
      </form>
    </div>
  );
};

export default ContactForm;
