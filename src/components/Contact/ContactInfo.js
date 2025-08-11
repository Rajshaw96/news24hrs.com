import React from 'react';

export default function ContactInfo() {
  return (
    <section className="contact-info-area pt-70 pb-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="contact-info-item mt-30">
              <h3 className="title">Headquarters</h3>
              <span>
                <i className="fas fa-map-marker-alt"></i> LOCATION:
              </span>
              <ul>
                <li>NH-58, Raj Nagar Extension, 
                    Ghaziabad, Uttar Pradesh 201003</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="contact-info-item mt-30">
              <h3 className="title">Let’s talk</h3>
              <span>
                <i className="fas fa-phone"></i> CALL NOW:
              </span>
              <ul>
                <li><a href="tel:+916204970866">+91 6204 97 0866</a></li>
                <li><a href="tel:+919708493575">+91 9708 49 3575</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="contact-info-item mt-30">
              <h3 className="title">Let’s chat</h3>
              <span>
                <i className="fas fa-envelope"></i> EMAIL:
              </span>
              <ul>
                <li><a href="mailto:support@news24hrs.com">support@news24hrs.com</a></li>
                <li><a href="mailto:connect@news24hrs.com">connect@news24hrs.com</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="map-area">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2874.832410188776!2d77.4511875!3d28.719437499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf159bcb70f09%3A0xba63feeac84f8e5c!2sNilaya%20Greens!5e1!3m2!1sen!2sin!4v1754933382757!5m2!1sen!2sin"
                width="600"
                height="350"
                style={{ border: 0 }}
                allowfullscreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
