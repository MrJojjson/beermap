import { TOGGLE_LEFT_MENU, TOGGLE_RIGHT_MENU } from '../actions/types';

export default (
  state = {
    leftMenuOpen: false,
    rightMenuOpen: false,
  },
  action
) => {
  switch (action.type) {
    case TOGGLE_LEFT_MENU:
      return {
        ...state,
        leftMenuOpen: !state.leftMenuOpen,
      };
    case TOGGLE_RIGHT_MENU:
      return {
        ...state,
        rightMenuOpen: !state.rightMenuOpen,
      };
    default:
      return state;
  }
};
