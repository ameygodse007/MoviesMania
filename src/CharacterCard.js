import React from 'react';
import {Row  } from 'react-bootstrap';
import "./CharacterCard.css";
function CharacterCard(characterInfo) {
  console.log(characterInfo);

  const url="https://image.tmdb.org/t/p/original";
  return (
    <Row className="justify-content-md-center">
      {characterInfo.characterInfo.results.map(function(e){
          return(e.backdrop_path ?<header
            className="banner"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url("${url}${e.backdrop_path}")`,
              backdropPosition: "center center",
            }}
          >
            {/* Background image */}
            <div style={{filter:"blur(0px"}} className="banner_contents">
              {/* title */}
              <div className="hvrbox-layer_top">
                <h1 className="banner_title">
                {e?.title || e?.name || e?.original_name}
              </h1>      
              {/* description */}
              <h1 className="banner_description">{e?.overview}</h1>
              </div>
            </div>
            <div className="banner_fadeBottom" />
          </header>: null)
        })}
    </Row>
  );
}

export default CharacterCard;

