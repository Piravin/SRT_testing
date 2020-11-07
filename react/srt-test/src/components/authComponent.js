// import React, {createContext,Component} from 'react';
// import Cookies from 'js-cookie';

// export const UserContext = createContext();

// class UserContextProvider extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             isAuthenticated: false
//         }
//     }
//     componentDidMount() {
//         if(Cookies.jwt){
//             this.setState({isAuthenticated:true});
//         }
//     }
//     render(){
//         return(
//             <UserContext.Provider value={...this.state}>
//                 {this.props.children}
//             </UserContext.Provider>
//         )
//     }
// }
// export default UserContextProvider;