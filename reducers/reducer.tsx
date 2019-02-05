const initialState = {
  count: 0
};
export default (state = initialState, action: any) => {
    switch (action.type) {
        case 'ADD_COUNT':
            console.log(state.count)
            
            return {
      count: state.count + 1
    };

        default:
            return state;

    }

};