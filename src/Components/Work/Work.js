import React from 'react'
import "./Work.css"

import image1 from "../../Asists/images/carousel-1.png";
import image2 from "../../Asists/images/carousel-2.png";
import image3 from "../../Asists/images/carousel-3.png";

function Work() {
  const works = [image1, image2, image3]
  return (
    <section className='work-section'>
      <h3 className="section-heading text-white">
        Here are of <span className="text-primary">our works</span>
      </h3>
      <div className="works">
        {works.map((work,index) => (
          <div className="work" key={index}>
            <img src={work} alt="" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Work
