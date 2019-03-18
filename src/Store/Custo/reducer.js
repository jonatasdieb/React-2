const INITIAL_STATE = {
    data: [],
    isLoading: true     
};

export default function custos(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'GET_CUSTOS':
            return {
                ...state, isLoading: true
            }
        case 'SUCCESS_GET_CUSTOS':           
            return {
                ...state, data: action.payload.data, isLoading: false
            }
        case 'SUCCESS_NOVO_CUSTO':
            return{
               ...state, isLoading: false
            }           
       
        default:
            return state;
    }
}