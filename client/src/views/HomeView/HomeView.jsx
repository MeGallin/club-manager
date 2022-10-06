import React from 'react';
import ButtonComponent from '../../components/Button/ButtonComponent';
import './HomeView.scss';

const HomeView = () => {
  return (
    <div className="home-view">
      HomeView
      <ButtonComponent text="home" variant="dark" />
    </div>
  );
};

export default HomeView;
