import React from 'react';
import { connect } from 'react-redux';
import { toggleLeftMenu } from '../actions';

const LeftMenu = props => {
  console.log(' left props', props);
  return (
    <div
      className={`left-menu-container ${
        props.leftMenuOpen ? 'left-menu-active' : ''
      }`}
    >
      <button onClick={() => props.toggleLeftMenu()}>Left menu</button>
    </div>
  );
};

const mapStateToProps = ({ ui, data }) => ui && data;

export default connect(
  mapStateToProps,
  { toggleLeftMenu }
)(LeftMenu);
