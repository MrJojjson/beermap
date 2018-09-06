import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import LeftMenu from './leftMenu';
import ContentPage from './contentPage';
import RightMenu from './rightMenu';

const MainPage = props => {
  console.log('main props', props);
  return (
    <div className="main-page-container">
      <LeftMenu />
      <ContentPage />
      <RightMenu />
    </div>
  );
};

export default connect(
  null,
  actions
)(MainPage);
