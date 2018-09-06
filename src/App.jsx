import React from 'react';
import { connect } from 'react-redux';

import { ClimbingBoxLoader } from 'react-spinners';

import * as actions from './actions';
import MainPage from './components/mainPage';

import './App.css';

class App extends React.Component {
  componentWillMount() {
    this.props.fetching();
    this.props.removing();
  }

  renderLoader = () => (
    <ClimbingBoxLoader
      className="loading-indicator"
      sizeUnit={'px'}
      size={150}
      color={'#123abc'}
    />
  );

  render() {
    const { fetchStatus } = this.props.data;
    return (
      <div className="app-container">
        <MainPage />
        {fetchStatus && fetchStatus === 'pending' ? this.renderLoader() : null}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  actions
)(App);
