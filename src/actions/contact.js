import { createAction } from 'promise-middleware-redux';
import { sendEmail } from '../services/api';

export const [
  sendMessage,
  SEND_MESSAGE
] = createAction('SEND_MESSAGE', sendEmail);

export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const updateMessage = message => ({
  type: UPDATE_MESSAGE,
  payload: message
});
