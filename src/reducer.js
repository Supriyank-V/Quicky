export const initialState = {
    term: null,
};

export const actionTypes = {
    UpdateFetchedData: "UpdateFetchedData",  
};

const reducer = (state, action) => {
    
    switch(action.type){
        case actionTypes.UpdateFetchedData:
            return{
                ...state,
                term: action.term,
            };

        default:
            return state;
    }
};

export default reducer;