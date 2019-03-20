const initialState = {
  count: 0
};
export default (state = initialState, action: any) => {
  if (typeof state === 'undefined') {
    return 0;
  }
    switch (action.type) {
        case 'ADD_COUNT':            
            return {
              count: state.count + 1
            };

        default:
            return state;

    }

};