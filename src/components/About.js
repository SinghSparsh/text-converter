import React from 'react'
import logo from './ABOUT.jpg'

const About = () => {
  return (
    <>
     <div className="card mb-3">
    <img src={logo} className="card-img-top img" alt='#'/>
    <div classNameName="card-body">
      <h4 className="card-title">About Text Analyzer</h4>
      <p className="card-text">Text analyzer  helps in converting your text in different formats. You can convert your text to either upper case ,lower case and you can also capitalize your text as well as as removed
      extra spaces from it .You can also enable dark mode for better experience.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  
    </>
  
   
  )
}

export default About