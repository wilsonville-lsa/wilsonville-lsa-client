import { post } from './request';

export const sendEmail = message => post('/contact', message);
