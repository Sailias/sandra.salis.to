// NPM
import React, { useRef, useState } from 'react';
import { Player } from "@lottiefiles/react-lottie-player";
import { create } from '@lottiefiles/lottie-interactivity';

// Constants
import animationData from './animationData';

const VoteCompass = ({ expanded }) => {
  const rootRef = useRef(null)
  const [lottiePlayer, setLottiePlayer] = useState(null)

  return (
    <div className="VoteCompass PortfolioItem" ref={ rootRef }>
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
                    visibility: [0.5, 1],
                    type: "seek",
                    frames: [0, 77]
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
          <a href="https://votecompass.cbc.ca" target="_blank">
            Vote Compass
          </a>
          {
            expanded && 
              <small className="PortfolioItem__link-content">
                { `https://votecompass.cbc.ca` }
              </small>
          }
        </h4>

        <p className="PortfolioItem__content-description">
          Vote Compass helps match political candidates to respondents’ opinions and viewpoints.
        </p>

        <div className="PortfolioItem__content-stack tags">
          <span className="tag is-medium">React</span>
          <span className="tag is-medium">Redux</span>
          <span className="tag is-medium">D3</span>
          <span className="tag is-medium">Three.js</span>
          <span className="tag is-medium">Proprietary NPM packages</span>
        </div>

        <h4 className="PortfolioItem__content-features-title">
          Features
        </h4>
        <ul>
          <li>Custom themeable white label application</li>
          <li>Geocoding and shapefile traversal via Google Maps API</li>
        </ul>
      </div>
    </div>
  )

}

export default VoteCompass