const initialState = {
  user: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INFOUSER":
      return {
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
