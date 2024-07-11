import React from 'react'
import "./Company.css"

import google from "../../../Asists/images/logos/google.png"
import netflix from "../../../Asists/images/logos/netflix.png"
import slack from "../../../Asists/images/logos/slack.png"
import uber from "../../../Asists/images/logos/uber.png"
import airbnb from "../../../Asists/images/logos/airbnb.png"


function Company() {
  const companys = [google,netflix,slack,uber,airbnb]
  return (
    <div className='company-container wrap'>
       {
        companys.map((company,index) =>{
          return (
            <div className="company">
               <img src={company} key={index} alt="" />
            </div>
          )
        })
       }
    </div>
  )
}

export default Company
