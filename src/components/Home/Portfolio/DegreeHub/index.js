// NPM
import React, { useRef, useState, useEffect } from 'react';
import { Player } from "@lottiefiles/react-lottie-player";
import { create } from '@lottiefiles/lottie-interactivity';

// Constants
import animationData from './animationData';

const DegreeHub = ({ expanded }) => {
  const rootRef = useRef(null)
  const [lottiePlayer, setLottiePlayer] = useState(null)

  return (
    <div className="DegreeHub PortfolioItem" ref={ rootRef }>
      <div className="PortfolioItem__image-holder">
        <Player
          lottieRef={(instance) => {
            setLottiePlayer(instance)
          }}
          onEvent={(event) => {
            if (event === "load") {
              create({
                mode: "scroll",
                player: lottiePlayer,
                container: rootRef.current,
                actions: [
                  {
                    visibility: [0, 1],
                    type: "seek",
                    frames: [50, 450]
                  }
                ]
              });
            }
          }}
          autoplay={ false }
          controls={ false }
          src={ animationData }
        />
      </div>
      <div className="PortfolioItem__content">
        <h4 className="PortfolioItem__content-title">
          <a href="https://degreehub.macleans.ca" target="_blank">
            DegreeHub
          </a>
          {
            expanded && 
              <small className="PortfolioItem__link-content">
                { `https://degreehub.macleans.ca` }
              </small>
          }
        </h4>

        <p className="PortfolioItem__content-description">
          In partnership with Maclean's Magazine, our DegreeHub tool use artificial intelligence to match prospective students to undergraduate programs.
        </p>

        <div className="PortfolioItem__content-stack tags">
          <span className="tag is-medium">Product Ideation through Delivery</span>
          <span className="tag is-medium">User testing and research</span>
          <span className="tag is-medium">Integrations</span>          
          <span className="tag is-medium">Roadmapping</span>
          <span className="tag is-medium">Product marketing</span>
          <span className="tag is-medium">Brand</span>
          <span className="tag is-medium">Project Manager</span>
          <span className="tag is-medium">Partnerships Manager</span>
          <span className="tag is-medium">Vendor Manager</span>

        </div>

        <h4 className="PortfolioItem__content-features-title">
          Features
        </h4>
        <ul>
          <li>White label React application</li>
          <li>Load, display, and filter large amounts of academic data</li>
          <li>Promotional landing page, survey and results page</li>
          <li>Filtered views and Favouriting</li>
          <li>Ad network integration (Rogers, Assembly) and analytics</li>
          <li>WGAG AA compliant</li>

        </ul>
      </div>
    </div>
  )

}

export default DegreeHub