import axios from 'axios';
export const example = () => {
  return async (dispatch, getState) => {
    await axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        dispatch({
          type: 'EXAMPLE',
          payload: response.data,
          
        });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};