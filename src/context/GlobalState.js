import React, { createContext, useReducer } from 'react'
import axios from 'axios'
import AppReducer from './Appreducer'

const baseURL = 'http://localhost:8090'

const initialState = {
  mainEvent: [],
  user: [],
  events: [],
  loginState: false,
  IDclick: 0,
  error: [],
  // zoneKol: 0,
}

export const GlobalContext = createContext(initialState)

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  // todo:loading

  const handleClick = (event) => {
    const target = event.target
    if (!target.children) {
      return
    }
    const id = target.id
    dispatch({
      type: 'HANDLE_CLICK',
      payload: id,
    })
  }

  const handleLogIn = (tokens) => {
    localStorage.setItem('accessToken', tokens.accessToken)
    localStorage.setItem('refreshToken', tokens.refreshToken)
    dispatch({
      type: 'HANDLE_LOG_IN',
      payload: true,
    })
  }

  const handleLogOut = () => {
    localStorage.removeItem('accessToken')
    dispatch({
      type: 'HANDLE_LOG_OUT',
      payload: false,
    })
  }

  const handleCheckLog = () => {
    let accessToken = localStorage.getItem('accessToken')
    if (accessToken === null) {
      handleLogOut()
    }
    if (accessToken !== null) {
      dispatch({
        type: 'HANDLE_CHECK_LOG',
        payload: true,
      })
    }
  }

  const handleUserInfo = () => {
    const config = localStorage.getItem('accessToken')
      ? {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json',
          },
        }
      : null
    axios
      .get(`${baseURL}/api/v1/users/account/page`, config)
      .then((res) => {
        dispatch({
          type: 'HANDLE_USER_INFO',
          payload: {
            userEmail: res.data.user_email,
            zones: res.data.zones,
          },
        })
      })

      .catch((error) => {
        if (error?.response?.status === 401) {
        } else {
          dispatch({
            type: 'ERROR',
            payload: {
              error: error,
            },
          })
          console.log(error)
        }
      })
  }

  const handleFirstEvent = () => {
    axios
      .get(`${baseURL}/api/v1/events/first`)
      .then((res) => {
        dispatch({
          type: 'HANDLE_FIRST_EVENT',
          payload: {
            event: res.data.data,
          },
        })
      })
      .catch((error) => {
        dispatch({
          type: 'ERROR',
          payload: {
            error: error,
          },
        })
        console.log(error)
      })
  }

  return (
    <GlobalContext.Provider
      value={{
        zones: state.zones,
        user: state.user,
        events: state.events,
        loginState: state.loginState,
        loading: state.loading,
        IDclick: state.IDclick,
        zoneKol: state.zoneKol,
        zonesDidLoad: state.zonesDidLoad,
        infoDidLoad: state.infoDidLoad,

        handleClick,
        handleLogIn,
        handleLogOut,
        handleUserInfo,
        handleFirstEvent,
        handleCheckLog,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
export default GlobalProvider
