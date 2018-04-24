import * as actions from '../actions';

const initialState = {
  times: [{
    time: '00:25',
    time: '12:43'
  }]
};

export const trelloReducer = (state=initialState, action) => {
  if (action.type === actions.ADD_TIME) {
    return Object.assign({}, state, {
      times: [...state.times, {
        time:action.time
      }]
    });
  }
  return Object.assign({}, state, {
    times
  }) ;
}
  return state;
};
