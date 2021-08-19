import React, { createContext, useReducer } from 'react'
import axios from 'axios'
import AppReducer from './AppReducer';

const initialState={
        zones:[],
        user:[],
        events:[],
        loginState:false,
        loading: true,
        IDclick:0,
        zoneKol:6,
        zonesDidLoad:true,
        infoDidLoad:true
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)


    const handleRefresh = () => {

        console.log(localStorage.getItem('refreshToken'))
        
        const config = localStorage.getItem('refreshToken')
        ?{
            headers: { 
                'refreshToken':`${localStorage.getItem('refreshToken')}`,
                'ContentType':'application/json'
            }
        }
        : null

        console.log(config.headers);
        
        axios
        .post(`http://localhost:8090/api/v1/users/auth/refresh`,null,config)
        .then(res => {
            handleLogIn(res.data)
        })
        .catch( error => {
            console.log(error)
        })   
        
    }  

    const handleStartLoad = () => {
        dispatch({
                type: 'HANDLE_START_LOAD',
                payload: true
            });
    }

    const handleStopLoad = () => {
        dispatch({
                type: 'HANDLE_STOP_LOAD',
                payload: false
            });
    }

    const handleClick = (event) => {
        const target = event.target
        if (!target.children){
            return
        }
        const id = target.id
            dispatch({
                type: 'HANDLE_CLICK',
                payload: id
            });
    }

    const handleLogIn = (tokens) => {
        localStorage.setItem('accessToken',tokens.accessToken)
        localStorage.setItem('refreshToken',tokens.refreshToken)
        dispatch({
                type: 'HANDLE_LOG_IN',
                payload: true
            });
    }

    const handleCheckLog = () => {
        let accessToken = localStorage.getItem("accessToken")
        if (accessToken === null){
            handleLogOut()
        }
        if (accessToken !== null){
            dispatch({
                type: 'HANDLE_CHECK_LOG',
                payload: true
            });
        }
    }

    const handleLogOut = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        dispatch({
                type: 'HANDLE_LOG_OUT',
                payload: false
            });

    }

    const handleUserInfo = () => {
        const config = localStorage.getItem('accessToken')? {
            headers: { 
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`,
                'Content-Type':'application/json'
            }
        }: null
        axios
            .get(`http://localhost:8090/api/v1/users/own/info`,config)
            .then(res => {
                console.log(res.data.userInfo);
                dispatch({
                    type: 'HANDLE_USER_INFO',
                    payload: {
                        user: res.data.userInfo,
                        loading: false
                    }
                });
            })
            .catch( error => {
                if (error?.response?.status === 401){
                    handleRefresh()
                }else{
                    dispatch({
                        type: 'HANDLE_ZONES',
                        payload: {
                            zones: {},
                            zonesDidLoad: false
                        }
                });
                console.log(error);
            }
            
        })        
    }

    const handleZones = () => {        
        const config = localStorage.getItem('accessToken')? {
            headers: { 
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`,
                'Content-Type':'application/json'
            }
        }: null
        axios
        .get(`http://localhost:8090/api/v1/zones/`,config)
        .then(res => {
                            console.log("GGGGG",res);

            dispatch({
                type: 'HANDLE_ZONES',
                payload: {
                    zones: res.data.data,
                    zonesDidLoad: true

                }
            });
            // console.log("@@@@@@@@@@@");
            // console.log(this.zonesDidLoad);
            handleStopLoad()
        })
        .catch( error => {
            if (error?.response?.status === 401){
                handleRefresh()
            }else{
                dispatch({
                type: 'HANDLE_ZONES',
                payload: {
                    zones: {},
                    zonesDidLoad: false
                }
            });
                console.log(error);
            }
            
        })        
    }

    return (
        <GlobalContext.Provider 
            value={{

                zones:state.zones,
                user:state.user,
                events:state.events,
                loginState:state.loginState,
                loading: state.loading,
                IDclick:state.IDclick,
                zoneKol:state.zoneKol,
                zonesDidLoad:state.zonesDidLoad,
                infoDidLoad:state.infoDidLoad,

                handleStartLoad,
                handleStopLoad,
                handleClick,
                handleLogIn,
                handleLogOut,
                handleUserInfo,
                handleZones,
                handleCheckLog,

            }}>
            {children}
        </GlobalContext.Provider>);



}
