import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import './Overlay.css';

const Overlay = ({ isLoaded }) => {
  return (
    <div id="overlay" style={{ display: isLoaded ? 'none' : 'block'}}>
      <Spinner className="spinner" animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  )
}

export default Overlay;
