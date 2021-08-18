
export default (state, action) => {
    switch(action.type) {

    case 'HANDLE_CHECK_LOG':
        return {
            ...state,
            loginState: action.payload
        }

    case 'HANDLE_START_LOAD':
        return {
            ...state,
            loading: action.payload
        }

    case 'HANDLE_STOP_LOAD':
        return {
            ...state,
            loading: action.payload
        }

    case 'HANDLE_CLICK':
        return {
            ...state,
            IDclick: action.payload
        }
        
    case 'HANDLE_LOG_IN':
        return {
            ...state,
            loginState:action.payload
        }

    case 'HANDLE_LOG_OUT':
        return {
            ...state,
            loginState:action.payload
        }

    case 'HANDLE_USER_INFO':
        return {
            ...state,
            loading:action.payload.loading,
            user: action.payload.user
        }

    case 'HANDLE_ZONES':
        return {
            ...state,
            zones: action.payload.zones,
            zonesDidLoad: action.payload.zonesDidLoad
        }



    case 'TRANSACTION_ERROR':
        return {
            ...state,
            error: action.payload
        }
    default:
        return state;
    }
}