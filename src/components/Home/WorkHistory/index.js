// NPM
import React from 'react'

const WorkHistory = ({ expanded }) => {

  return (
    <section className="WorkHistory CommonSection">
      <h3 className="CommonSection__title">
        work history
      </h3>

      <div className="WorkHistory__item">
        <h4 className="WorkHistory__company">
          <a href="https://www.voxpoplabs.com" target="_blank">
            Vox Pop Labs
          </a>
          {
            expanded && 
              <small className="WorkHistory__link-content">
                { `https://www.voxpoplabs.com` }
              </small>
          }
        </h4>
        <h5 className="WorkHistory__title">
          Chief Technology Officer / Technical Lead
        </h5>
        <p className="WorkHistory__duration">
          2016 - present
        </p>
      </div>

      <div className="WorkHistory__item">
        <h4 className="WorkHistory__company">
          <a href="https://lighthouselabs.ca" target="_blank">
            Lighthouse Labs Coding School
          </a>
          {
            expanded && 
              <small className="WorkHistory__link-content">
                { `https://lighthouselabs.ca` }
              </small>
          }
        </h4>
        <h5 className="WorkHistory__title">
          Web Instructor / Lecturer
        </h5>
        <p className="WorkHistory__duration">
          2015 - 2019
        </p>
      </div>

      <div className="WorkHistory__item">
        <h4 className="WorkHistory__company">
          Functional Imperative
        </h4>
        <h5 className="WorkHistory__title">
          Chief Technology Officer
        </h5>
        <p className="WorkHistory__duration">
          2012 - 2016
        </p>
      </div>

      <div className="WorkHistory__item">
        <h4 className="WorkHistory__company">
          <a href="https://www.aegplc.com/" target="_blank">
            AE Inc.
          </a>
        </h4>
        <h5 className="WorkHistory__title">
          Senior Developer
        </h5>
        <p className="WorkHistory__duration">
          2008 - 2012
        </p>
      </div>

      <div className="WorkHistory__item">
        <h4 className="WorkHistory__company">
          Nutracore Inc.
        </h4>
        <h5 className="WorkHistory__title">
          Developer
        </h5>
        <p className="WorkHistory__duration">
          2005 - 2008
        </p>
      </div>
    </section>
  )

}

export default WorkHistory