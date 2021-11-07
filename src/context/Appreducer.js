export default (state, action) => {
  // todo:loading
  switch (action.type) {
    case 'HANDLE_CLICK':
      return {
        ...state,
        IDclick: action.payload,
      }

    case 'HANDLE_LOG_IN':
      return {
        ...state,
        loginState: action.payload,
      }

    case 'HANDLE_LOG_OUT':
      return {
        ...state,
        loginState: action.payload,
      }

    case 'HANDLE_CHECK_LOG':
      return {
        ...state,
        loginState: action.payload,
      }

    case 'HANDLE_USER_INFO':
      return {
        ...state,
        user: action.payload.user,
      }

    case 'HANDLE_FIRST_EVENT':
      return {
        ...state,
        event: action.payload.event,
      }

    case 'ERROR':
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}
