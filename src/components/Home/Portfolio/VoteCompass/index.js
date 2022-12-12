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
          Vote Compass is a tool developed by political scientists that allows you to compare your views on municipal politics with those of the parties running for election. 
          Vote Compass is used by millions of people during elections around the world.
        </p>

        <div className="PortfolioItem__content-stack tags">
          <span className="tag is-medium">Product Manager</span>
          <span className="tag is-medium">Project Manager</span>
          <span className="tag is-medium">Roadmapping</span>
          <span className="tag is-medium">Product marketing</span>
          <span className="tag is-medium">Redesign</span>
          <span className="tag is-medium">Business Development</span>
          <span className="tag is-medium">Client and vendor relations</span>
          <span className="tag is-medium">Scrum and Kanban team</span>
        </div>

        <h4 className="PortfolioItem__content-features-title">
          Features
        </h4>
        <ul>
          <li>Custom themeable white label React application </li>
          <li>Geocoding and shapefile traversal via Google Maps API</li>
          <li>Three.js, D3 data visualizations</li>
          <li>Secure data storage</li>
          <li>Multilingual localization</li>
          <li>Promotional landing page and dynamic survey experience </li>
          <li>Results page extra features: save results emailer, weight results, calibration filters and informational modals </li>
          <li>Municipal edition - 2022 Redesign + new unidimensional data viz</li>
          <li>Federal/ Provincial edition - 2023 Redesign + introduce new exploratory data features - In progress</li>          
        </ul>

        <h4 className="PortfolioItem__content-features-title">
          Initiatives
        </h4>
        <ul>
          <li>Vote Compass - The Toronto Star - Toronto 2022 Municipal Election <a href="https://votecompass.thestar.com/toronto2022" target="_blank">[View]</a></li>
          <li>Vote Compass - CBC - Quebec 2022 Provincial Election <a href="https://votecompass.cbc.ca/quebec2022" target="_blank">[View]</a></li>
          <li>Vote Compass - ABC - Australia 2022 Federal Election <a href="https://votecompass.abc.net.au/" target="_blank">[View]</a></li>          
          <li>Vote Compass - CBC - Canada 2021 Federal Election <a href="https://votecompass.cbc.ca/canada" target="_blank">[View]</a></li>
        </ul>        
      </div>
    </div>
  )

}

export default VoteCompass