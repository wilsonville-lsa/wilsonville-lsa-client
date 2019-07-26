import {
  UPDATE_MESSAGE,
  SEND_MESSAGE
} from '../actions/contact';

const initialState = {
  message: {},
  error: ''
};

export default function reducer(state = initialState, { payload, type }) {
  switch(type) {
    case UPDATE_MESSAGE:
      return {
        ...state,
        message: { ...state.message, ...payload }
      };
    case SEND_MESSAGE:
      return {
        message: {},
        error: payload.error || ''
      };
    default:
      return state;
  }
}
