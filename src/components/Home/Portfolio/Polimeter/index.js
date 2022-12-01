// NPM
import React, { useRef, useState } from 'react';
import { Player } from "@lottiefiles/react-lottie-player";
import { create } from '@lottiefiles/lottie-interactivity';

// Constants
import animationData from './animationData';

const Polimeter = ({ expanded }) => {
  const rootRef = useRef(null)
  const [lottiePlayer, setLottiePlayer] = useState(null)

  return (
    <div className="Polimeter PortfolioItem" ref={ rootRef }>
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
                    frames: [0, 159]
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
          <a href="https://www.polimeter.org/en" target="_blank">
            Polimeter
          </a>
          {
            expanded && 
              <small className="PortfolioItem__link-content">
                { `https://www.polimeter.org/en` }
              </small>
          }
        </h4>

        <p className="PortfolioItem__content-description">
          Polimeter is an independent initiative developed by political scientists that tracks whether politicians keep the promises they make.
        </p>

        <div className="PortfolioItem__content-stack tags">
          <span className="tag is-medium">Elixir</span>
          <span className="tag is-medium">Elixir: LiveView</span>
          <span className="tag is-medium">Elixir: GenStage</span>
        </div>

        <h4 className="PortfolioItem__content-features-title">
          Features
        </h4>
        <ul>
          <li>GenServer data caching for frequently accessed data</li>
          <li>Live View application to minimize JavaScript and maximize SEO</li>
        </ul>
      </div>
    </div>
  )

}

export default Polimeter