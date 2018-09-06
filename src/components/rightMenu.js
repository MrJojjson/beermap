import React from 'react';
import { connect } from 'react-redux';
import { toggleRightMenu } from '../actions';

const RightMenu = props => {
  console.log('right props', props);
  return (
    <div
      className={`right-menu-container ${
        props.rightMenuOpen ? 'right-menu-active' : ''
      }`}
    >
      <button onClick={() => props.toggleRightMenu()}>Right menu</button>
    </div>
  );
};

const mapStateToProps = ({ ui, data }) => ui && data;

export default connect(
  mapStateToProps,
  { toggleRightMenu }
)(RightMenu);
