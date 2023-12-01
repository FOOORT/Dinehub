import axios from "axios";

const action = {
  type: "apiRequest",
  payload: {
    url: "",
    method: "GET",
    data: {},
    onSuccess: "bugsReceived",
    onError: "bugsRequestFailed",
  },
};

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type === "apiRequest") return next(action);

    next(action);

    const { url, method, data, onSuccess, onError } = action.payload;
    try {
      const response = await axios.request({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
        url,
        method,
        data,
      });
      dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      dispatch({ type: onError, payload: error });
    }
  };

export default api;
