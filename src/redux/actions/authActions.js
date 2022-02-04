import * as actionTypes from './types';
const sessionLogin = loginSession => {
  return {
    type: actionTypes.LOGIN_SESSION,
    loginSession,
  };
};


export {
  sessionLogin,
 
};
