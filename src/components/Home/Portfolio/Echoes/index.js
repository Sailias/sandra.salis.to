// NPM
import React, { useRef, useState } from 'react';
import { Player } from "@lottiefiles/react-lottie-player";
import { create } from '@lottiefiles/lottie-interactivity';

// Constants
import animationData from './animationData';

const Echoes = ({ expanded }) => {
  const rootRef = useRef(null)
  const [lottiePlayer, setLottiePlayer] = useState(null)

  return (
    <div className="Echoes PortfolioItem" ref={ rootRef }>
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
                    frames: [0, 150]
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
          <a href="https://echoes.cbc.ca" target="_blank">
            Echoes
          </a>
          {
            expanded && 
              <small className="PortfolioItem__link-content">
                { `https://echoes.cbc.ca` }
              </small>
          }
        </h4>

        <p className="PortfolioItem__content-description">
          Echoes is an interactive 3D experience through which users can navigate a data-driven expression of the Canadian mosaic.
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
          <li>Navigate a constellation of user data in 3D space</li>
          <li>Custom filters that reduce visible nodes in 3D space and create interactive clusters</li>
        </ul>
      </div>
    </div>
  )

}

export default Echoes