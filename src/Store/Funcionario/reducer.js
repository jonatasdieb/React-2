const INITIAL_STATE = {
    data: [],
    isLoading: true   
};

export default function funcionarios(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'GET_FUNCIONARIOS':
            return {
                ...state, isLoading: true
            }
        case 'SUCCESS_GET_FUNCIONARIOS':           
            return {
                ...state, data: action.payload.data, isLoading: false
            }
        case 'SUCCESS_NOVO_FUNCIONARIO':
            return{
               ...state, isLoading: false
            }           
       
        default:
            return state;
    }
}