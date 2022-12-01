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
            Degree Hub
          </a>
          {
            expanded && 
              <small className="PortfolioItem__link-content">
                { `https://degreehub.macleans.ca` }
              </small>
          }
        </h4>

        <p className="PortfolioItem__content-description">
          DegreeHub helps prospective students estimate their likely level of satisfaction with programs and universities.
        </p>

        <div className="PortfolioItem__content-stack tags">
          <span className="tag is-medium">React</span>
          <span className="tag is-medium">Redux</span>
          <span className="tag is-medium">Proprietary NPM packages</span>
          <span className="tag is-medium">Ad network integration</span>
        </div>

        <h4 className="PortfolioItem__content-features-title">
          Features
        </h4>
        <ul>
          <li>WGAG AA compliant</li>
          <li>Load, display, and filter large amounts of academic data</li>
        </ul>
      </div>
    </div>
  )

}

export default DegreeHub