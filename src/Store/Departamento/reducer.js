const INITIAL_STATE = {
    data: [],
    isLoading: true    
};

export default function departamentos(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'GET_DEPARTAMENTOS':
            return {
                ...state, isLoading: true
            }
        case 'SUCCESS_GET_DEPARTAMENTOS':          
            return {
                ...state, data: action.payload.data, isLoading: false
            }
        case 'SUCCESS_NOVO_DEPARTAMENTO':
            return{
               ...state, isLoading: false
            }   
        default:
            return state;
    }
}