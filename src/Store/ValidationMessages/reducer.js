const INITIAL_STATE = {    
    errors: false,
    messages: false
};

export default function validationMessages(state = INITIAL_STATE, action) {
    switch (action.type) {      
        case 'REQUEST_SUCCESS':
            return{
                messages: action.payload.messages, errors: false
            }            
        case 'REQUEST_FAILURE':        
            return {
                 errors: action.payload.errors, messages: false
            };
        case 'CLEAR_MESSAGES':
            return {
                errors: false, messages: false
            }
        default:
            return state;
    }
}