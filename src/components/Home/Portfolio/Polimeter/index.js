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
          Polimeter is an independent initiative developed by political scientists that tracks whether politicians keep the promises they make. In partnership with CLESSN, Center for Public Policy Analysis, McMaster University Digial Society Lab
        </p>

        <div className="PortfolioItem__content-stack tags">
          <span className="tag is-medium">Facilitated acquisition of IP</span>
          <span className="tag is-medium">Product manager</span>
          <span className="tag is-medium">Roadmap</span>
          <span className="tag is-medium">Agile project manager</span>
          <span className="tag is-medium">Partnerships</span>
          <span className="tag is-medium">Software service training and onboarding</span>
          <span className="tag is-medium">Service maintenance</span>
        </div>

        <h4 className="PortfolioItem__content-features-title">
          Features
        </h4>
        <ul>
          <li>Polimeter service admin panel (Elixir: LiveView)</li>
          <li>Live View application to minimize JavaScript and maximize SEO</li>
          <li>Polimeter landing page feed</li>
          <li>Polimeter admin: inviting users and permissions, launching a Polimeter, defining political terms, managing promises, uploading data import files and validation, graph visualizations, localizations, adding custom filters and statuses, add custom modal content, partner logos, source documents</li>
          <li>Polimeter users: customize Polimeter views, filters, Twitter and Facebook sharing, French or English language  </li>
        </ul>
      </div>
    </div>
  )

}

export default Polimeter