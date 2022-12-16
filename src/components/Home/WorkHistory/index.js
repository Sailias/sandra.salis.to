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
          Product Manager Lead
        </h5>
        <p className="WorkHistory__duration">
          Aug 2020 - present (fulltime)
          Dec 2019 - Aug 2020 (consultant)
        </p>
      </div>

<div className="WorkHistory__item">
        <h4 className="WorkHistory__company">
          <a href="https://www.motusbank.ca/Accounts/Investing" target="_blank">
            motusbank
          </a>
          {
            expanded && 
              <small className="WorkHistory__link-content">
                { `https://www.motusbank.ca/Accounts/Investing` }
              </small>
          }
        </h4>
        <h5 className="WorkHistory__title">
          Digital Product Manager
        </h5>
        <p className="WorkHistory__duration">
          May 2019 - June 2020
        </p>
      </div>

      <div className="WorkHistory__item">
        <h4 className="WorkHistory__company">
          <a href="https://lighthouselabs.ca" target="_blank">
            Lighthouse Labs
          </a>
          {
            expanded && 
              <small className="WorkHistory__link-content">
                { `https://lighthouselabs.ca` }
              </small>
          }
        </h4>
        <h5 className="WorkHistory__title">
         Digital Marketing and Product Manager
        </h5>
        <p className="WorkHistory__duration">
          June 2018 - May 2019
        </p>
      </div>

      <div className="WorkHistory__item">
        <h4 className="WorkHistory__company">
         <a href="https://www.canadahelps.org/en/" target="_blank">
           CanadaHelps 
          </a>
          {
            expanded && 
              <small className="WorkHistory__link-content">
                { `https://www.canadahelps.org/en/` }
              </small>
          }
        </h4>
        <h5 className="WorkHistory__title">
          Digital Marketing Associate, Production Lead
        </h5>
        <p className="WorkHistory__duration">
          Feb 2017 - June 2018
        </p>
      </div>

      <div className="WorkHistory__item">
        <h4 className="WorkHistory__company">
          <a href="https://www.manulife.ca/personal/group-plans/group-retirement-solutions.html" target="_blank">
            Manulife
          </a>
        </h4>
        <h5 className="WorkHistory__title">
          Intermediate Business Analyst
        </h5>
        <p className="WorkHistory__duration">
          Dec 2014 - Feb 2017
        </p>
      </div>

    </section>
  )

}

export default WorkHistory
