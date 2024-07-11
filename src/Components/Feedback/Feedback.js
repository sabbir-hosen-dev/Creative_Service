import React from 'react'
import "./Feedback.css"

function Feedback() {
  const feedbacks = [
    {
      image: require("../../Asists/images/customer-1.png"),
      name: "Nash Patrik", 
      work:"CEO, Manpol",
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat "
    },
    {
      image: require("../../Asists/images/customer-2.png"),
      name: "Miriam Barron",
      work:"CEO, Toto",
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat "
    },
    {
      image: require("../../Asists/images/customer-3.png"),
      name: "Roy Das",
      work:"CEO,Ajaira",
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat "
    },
  ]
  return (
    <section className='feedback-section wrap'>
      <h3 className="section-heading">
        Clients <span className="text-primary">Feedback</span>
      </h3>
      <div className="feedbacks">
      {
        feedbacks.map((feedback,index) => (
          <div className="feedback">
            <div className="f-top">
              <img src={feedback.image} alt="" />
              <div className="f-right">
                <h3>{feedback.name}</h3>
                <h4>{feedback.work}</h4>
              </div>
            </div>
            <p>{feedback.feedback}</p>
          </div>
        ))
      }
      </div>
    </section>
  )
}

export default Feedback
