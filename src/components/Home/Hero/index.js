// NPM
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Hero = ({ expanded }) => {
  return (
    <section className={ `Hero ${ expanded ? "expanded" : "" }` }>
      <div className="columns">
        <div className="column is-6">
          <h1 className="Hero__title">
           <span>Sandra Salis</span>
          </h1>

          <h2 className="Hero__subtitle">
            Toronto-based digital Product Manager with a marketing background and data-driven approach.
          </h2>

          <p className="Hero__subtext">
          From ideation to delivery, let me help you bring your product vision to life.
          </p>

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