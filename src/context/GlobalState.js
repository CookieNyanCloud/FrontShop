import React, { createContext, useReducer } from 'react'
import axios from 'axios'
import AppReducer from './AppReducer';
import { ErrorSharp } from '@material-ui/icons';





const initialState={
        zones:[],
        user:[],
        events:[],
        loginState:false,
        loading: true,
        IDclick:0,
        zoneKol:6,
        zonesDidLoad:true
}
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)


    const handleRefresh = () => {
        console.log(localStorage.getItem('refreshToken'));
        const config = localStorage.getItem('refreshToken')? {
            headers: { 
                'refreshToken':`${localStorage.getItem('refreshToken')}`,
                'ContentType':'application/json'
            }
        }: null
        console.log(config.headers);
        axios
        .post(`http://localhost:8090/api/v1/users/auth/refresh`,null,config)
        // .get(`http://localhost:8090/api/v1/users/auth/refresh`,config)
        .then(res => {
            console.log("TYTA");
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
        if (accessToken == null){
            handleLogOut()
        }
        if (accessToken != null){
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
                type: 'HANDLE_LOG_Out',
                payload: false
            });

    }

    const handleUserInfo = () => {
        const config = {
            headers: { 
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`,
                'Content-Type':'application/json'
            }
        }
        axios
            .get(`http://localhost:8090/api/v1/users/own/info`,config)
            .then(res => {
                dispatch({
                    type: 'HANDLE_USER_INFO',
                    payload: res.data.user
                });
            })
            .catch( error => {
                console.log(error);
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
            dispatch({
                type: 'HANDLE_ZONES',
                payload: {
                    zones: res.data.data,
                    zonesDidLoad: true
                }
            });
            handleStopLoad()
        })
        .catch( error => {
            if (error.response.status === 401){
                let token = localStorage.getItem('refreshToken')
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






// const DataContext = React.createContext()
// class DataProvider extends Component {

//     state={
//         zones:[],
//         user:[],
//         LoginState:false,
//         loading: true,
//         IDclick:0,
//         zoneKol:6
//     }

//     handleClick = event => {
//         const target = event.target
//         const id = target.id
//         let IDclick = this.state;
//         this.setState(
//         {
//             IDclick: id
//         },
//         );
//     }

//     handleSignin = () => {
//         let {LoginState} = this.state;
//         console.log("2",LoginState);
//         this.setState(
//             {
//                 LoginState: true
//             },
//         )
//         console.log("3",this.LoginState);
//     }

//     handleLogOut = () => {
//         console.log("1  ",localStorage.getItem("accessToken"))
//         localStorage.removeItem("accessToken");
//         console.log("1  ",localStorage.getItem("accessToken"))
//         let {LoginState} = this.state;
//         this.setState(
//             {
//                 LoginState: false
//             },
//         )

//     }

//     handleUserInfo = () => {
//         let {LoginState} = this.state;
//         console.log("AAAAA",LoginState);
//         if (LoginState){
//             const config = {
//                 headers: { 
//                     'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
//                 }
//             }
//             axios
//             .get(`http://localhost:8090/api/v1/users/info`,config)
//             .then(res => {
//                                 console.log("!!!!!!!!!!!!!!!!!!!!!!!");

//                 console.log(res);
//                 this.setState({
//                     user:res.data.user,
//                     loading:false,
//                     LoginState: true
//                 })
                
//             })
//             .catch( error => {
//                 console.log("!!!!!!!!!!!!!!!!!!!!!!!");
//                 console.log(error);
//             })       
//         }
//         // else{
//         //     this.setState(
//         //         {
//         //             LoginState: false
//         //         },
//         //     )
//         // }
// }

//     handleLogCheck = () => {
//         if (localStorage.getItem('accessToken')){
//             this.setState(
//                 {
//                     LoginState: true
//                 },
//             )
//         }else{
//             this.setState(
//                 {
//                     LoginState: false
//                 },
//             )
//         }
//     }

//     handleZones = () => {
//         axios
//         .get(`http://localhost:8090/api/v1/zones`)
//         .then(res => {
//             this.setState({
//                 zones:res.data.data,
//                 loading:false,
//                 // LoginState: true
//             })
//         })
//         .catch( error => {
//             console.log(error);
//         })        
//     }


//     componentDidMount(){
        
//     }

//     render() {
//         return (
//             <DataContext.Provider 
//             value={{
//                 ...this.state,
//                 handleClick: this.handleClick,
//                 handleSignin: this.handleSignin,
//                 handleLogOut: this.handleLogOut,
//                 handleLogCheck: this.handleLogCheck,
//                 handleUserInfo: this.handleUserInfo,
//                 handleZones: this.handleZones,
//                 }}>
//                 {this.props.children}
//             </DataContext.Provider>
//         )
//     }
// } 

// const DataConsumer = DataContext.Consumer

// export {DataProvider, DataConsumer, DataContext}

// export function withDataConsumer(Component) {
//     return function ConsumerWrapper(props) {
//         return (
//             <DataConsumer>
//                 {value => <Component {...props} context={value}
//             />}
//             </DataConsumer>
//         );
//     };
// }