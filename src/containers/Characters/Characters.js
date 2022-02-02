import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Header from '../../containers/Header/Header.js';
import Overlay from '../../containers/Overlay/Overlay.js';
import NavBar from '../../containers/NavBar/NavBar.js';

import './Characters.css';

const Star = ({ marked, starId }) => {
  return (
    <span data-star-id={starId} className="star" role="button">
      {marked ? '\u2605' : '\u2606'}
    </span>
  );
};

const StarRating = ({ value }) => {
  const [rating, setRating] = useState(parseInt(value) || 0);
  const [selection, setSelection] = useState(0);

  const hoverOver = event => {
    let val = 0;
    if (event && event.target && event.target.getAttribute('data-star-id'))
      val = event.target.getAttribute('data-star-id');
    setSelection(val)
  };
  return (
    <div
      className="star-rating"
      onMouseOut={() => hoverOver(null)}
      onClick={e => setRating(e.target.getAttribute('data-star-id') || rating)}
      onMouseOver={hoverOver}
    >
      {Array.from({ length: 7 }, (v, i) => (
        <Star
          starId={i + 1}
          key={`star_${i + 1}`}
          marked={selection ? selection >= i + 1 : rating >= i + 1}
        />
      ))}
    </div>
  );
};

const Characters = () => {
  const playerRoster = localStorage.getItem('playerRoster');

  return (
    <>
      <Container id="content" fluid>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col>
            <NavBar />
          </Col>
        </Row>

        <Row id="character-grid">
          {
            JSON.parse(playerRoster).map((r, index) => (
              r.combatType === 1 && (
                <>
                  <Col className="character-box" xs={6} sm={3} md={3} lg={2}>
                    <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t13 char-portrait-full-alignment-dark-side">
                        <Link to={`/character-profile/${r.id}`} className="char-portrait-full-link">
                          <Image className="char-portrait-full-img initial loading" src="https://game-assets.swgoh.gg/tex.charui_sithrevan.png" alt={`${r.nameKey}`} height="80" width="80" roundedCircle />

                          <div className="char-portrait-zetas">{r.skills.filter(s => s.isZeta === true).length}</div>
                          <div className="char-portrait-full-level">{r.level}</div>
                          <div className="char-portrait-full-relic">{Object.values(r.relic) - 2}</div>
                          <StarRating value={r.rarity} />
                        </Link>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title={`Power ${r.gp} 35,308 / 37,585`}>
                        <ProgressBar now={60} />

                        <div className="collection-char-gp-label">
                          <span className="collection-char-gp-label-value">93</span>
                          <span className="collection-char-gp-label-percent">%</span>
                        </div>
                      </div>
                      <div className="collection-char-name">
                        <Link to={`/character-profile/${r.id}`} className="collection-char-name-link">
                          {r.nameKey}
                        </Link>
                      </div>
                    </div>
                  </Col>
                </>
              )
            ))
          }
        </Row>

      </Container>
    </>
  )
}

export default Characters;
