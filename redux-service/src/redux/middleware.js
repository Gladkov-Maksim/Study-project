

export const logger = (storeApi) => (next) => (action) => {
  console.log(storeApi.getState())
  if(action.type === 'GET_DATA_FROM_GOOGLE') {
    fetch('https://google.com')
      .then(responce => responce.text())
      .then(data => storeApi.dispatch({type: "RECEIVE_DATA_FROM_GOOGLE", payload: data}))
  }

  return next(action)
}