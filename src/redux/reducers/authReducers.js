const initial_state = {
  loginSession: null,
  
};

const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case "LOGIN_SESSION": {
      return { ...state, loginSession: action.loginSession };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
