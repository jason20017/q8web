const pageReducer = (state = "", action) => {
  switch (action.type) {
    case "Terminal":
    case "Server":
    case "App":
    case "Log":
    case "Settings":
      return {
        page: action.payload[0],
      };

    default: //number
      return { page: state.page };
  }
};

export default pageReducer;
