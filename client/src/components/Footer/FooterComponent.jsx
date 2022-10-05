import React from 'react';
import DateTime from '../DateTime/DateTime';
import './FooterComponent.scss';

const FooterComponent = () => {
  return (
    <div className="footer">
      <footer>
        <div>Developed by Gary Allin</div>
        <div> Club Manager &copy;</div>
        <DateTime />
      </footer>
    </div>
  );
};

export default FooterComponent;
