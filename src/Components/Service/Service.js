import React from "react";
import "./Service.css";

function Service() {
  const services = [
    {
      image: require("../../Asists/images/icons/service1.png"),
      title: "Web & mobail design",
      desc: "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
    },
    {
      image: require("../../Asists/images/icons/service2.png"),
      title: "Graphic design",
      desc: "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
    },
    {
      image: require("../../Asists/images/icons/service3.png"),
      title: "Web development",
      desc: "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
    },
  ];
  return (
    <section className="service-section wrap">
      <h3 className="section-heading">
        Provide awesome <span className="text-primary">service</span>
      </h3>

      <div className="services">
        {services.map((service, index) => (
          <div className="service" key={index}>
            <div className="s-img">
              <img src={service.image} alt="" />
            </div>
            <h4>{service.title}</h4>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service;
