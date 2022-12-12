// NPM
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Hero = ({ expanded }) => {
  return (
    <section className={ `Hero ${ expanded ? "expanded" : "" }` }>
      <div className="columns">
        <div className="column is-6">
          <h1 className="Hero__title">
            Sandra Salis
          </h1>

          <h2 className="Hero__subtitle">
            Toronto-based Digital Product Manager with a digital marketing and finance background - 10 years of experience
          </h2>

          <h2 className="Hero__subtitle">
          Let's talk about your product and marketing needs. Connect with me!
          </h2>

          <div className="Hero__contact">
            <a href="mailto:sandra@salis.to">
              <FontAwesomeIcon icon={ ["fas", "envelope"] } />
              <span className="Hero__link-content">
                { `sandra@salis.to` }
              </span>
            </a>

            <a href="https://linkedin.com/in/sandra-salis" target="_blank">
              <FontAwesomeIcon icon={ ["fab", "linkedin"] } />
              <span className="Hero__link-content">
                { `https://linkedin.com/in/sandra-salis` }
              </span>
            </a>

            <a href="https://github.com/sandrasalis" target="_blank">
              <FontAwesomeIcon icon={ ["fab", "github"] } />
              <span className="Hero__link-content">
                { `https://github.com/sandrasalis` }
              </span>
            </a>

            {
              expanded &&
                <a href="https://sandra.salis.to" target="_blank">
                  <FontAwesomeIcon icon={ ["fas", "globe"] } />
                  <span className="Hero__link-content">
                    { `https://sandra.salis.to` }
                  </span>
                </a>
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero