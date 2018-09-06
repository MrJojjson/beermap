import React from 'react';
import { connect } from 'react-redux';
import { completeToDo } from '../actions';

const ContentPage = () => <div className="content-page-container">ABC</div>;

export default connect(
  null,
  { completeToDo }
)(ContentPage);
