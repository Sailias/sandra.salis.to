// NPM
import React, { useRef, useState } from 'react';
import { Player } from "@lottiefiles/react-lottie-player";
import { create } from '@lottiefiles/lottie-interactivity';

// Constants
import animationData from './animationData';

const Idap = ({}) => {
  const rootRef = useRef(null)
  const [lottiePlayer, setLottiePlayer] = useState(null)

  return (
    <div className="Idap PortfolioItem" ref={ rootRef }>
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
                    frames: [0, 182]
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
          Decision platform
        </h4>

        <p className="PortfolioItem__content-description">
          High performant back-end that powers multiple products, serving millions of users all over the world 
        </p>

        <div className="PortfolioItem__content-stack tags">
          <span className="tag is-medium">Elixir</span>
          <span className="tag is-medium">Elixir: Absinthe GraphQL</span>
          <span className="tag is-medium">Elixir: GenStage</span>
          <span className="tag is-medium">Elixir: Flow</span>
          <span className="tag is-medium">Elixir: ETS</span>
          <span className="tag is-medium">React</span>
          <span className="tag is-medium">Apollo (GraphQL)</span>
          <span className="tag is-medium">Redis</span>
          <span className="tag is-medium">Mongo</span>
          <span className="tag is-medium">Postgres</span>
          <span className="tag is-medium">AWS: Cloudformation</span>
          <span className="tag is-medium">AWS: Elastic Beanstalk</span>
          <span className="tag is-medium">AWS: Lambda</span>
          <span className="tag is-medium">AWS: Kinesis</span>
          <span className="tag is-medium">AWS: Redshift</span>
        </div>

        <h4 className="PortfolioItem__content-features-title">
          Features
        </h4>
        <ul>
          <li>Server response times less than 5ms under heavy load</li>
          <li>Capable of supporting 200,000+ requests per minute (RPM)</li>
          <li>Capacity able to be measured in RPM per core.</li>
          <li>Cross region deployments</li>
          <li>User data processing with custom deployed R servers or serverless Python functions</li>
          <li>Multi-tenant CMS</li>
          <li>White label API</li>
          <li>Custom data types for application specific data structures</li>
        </ul>
      </div>
    </div>
  )

}

export default Idap