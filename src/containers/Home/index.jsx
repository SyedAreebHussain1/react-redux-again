import React from "react";
import {connect} from "react-redux"



// class Home extends React.Component{
//     render(){
//         console.log('Home-props=>',this.props)
//         // console.log('Home-props=>',this.props.users[1].name)
//         // console.log('Home-props=>',this.props)
//         return(
//             <div>
//                 <h1>Home</h1>
//                 <button onClick={()=> this.props.setData()}>SetData</button>
//             </div>
//         )
//     }
// }
// const mapStateToProps = (state) => ({
//     users: state.users
// })
// const mapDispatchToProps = (dispatch) => ({
//     setData: () => console.log('Hello world')
// })
// export default connect(mapStateToProps,mapDispatchToProps) (Home)




// import { set_data } from "../../store/action";
// class Home extends React.Component{
//     render(){
//         console.log('Home-props=>',this.props)
//         // console.log('Home-props=>',this.props.users[1].name)
//         // console.log('Home-props=>',this.props)
//         return(
//             <div>
//                 <h1>Home</h1>
//                 <button onClick={()=> this.props.setData()}>SetData</button>
//             </div>
//         )
//     }
// }
// const mapStateToProps = (state) => ({
//     users: state.users
// })
// const mapDispatchToProps = (dispatch) => ({
//     setData: () => dispatch(set_data())
// })
// export default connect(mapStateToProps,mapDispatchToProps) (Home)






// import { set_data } from "../../store/action";
// class Home extends React.Component{
//     render(){
//         console.log('Home-props=>',this.props)
//         // console.log('Home-props=>',this.props.users[1].name)
//         // console.log('Home-props=>',this.props)
//         var user = {name:'umair',email:'umair@gmail.com'}
//         return(
//             <div>
//                 <h1>Home</h1>
//                 <button onClick={()=> this.props.setData(user)}>SetData</button>
//             </div>
//         )
//     }
// }
// const mapStateToProps = (state) => ({
//     users: state.users
// })
// const mapDispatchToProps = (dispatch) => ({
//     setData: (data) => dispatch(set_data(data))
// })
// export default connect(mapStateToProps,mapDispatchToProps) (Home)




// import { set_data } from "../../store/action";
// class Home extends React.Component{
//     render(){
//         console.log('Home-props=>',this.props)
//         // console.log('Home-props=>',this.props.users[1].name)
//         // console.log('Home-props=>',this.props)
//         return(
//             <div>
//                 <h1>Home</h1>
//                 <button onClick={()=> this.props.setData()}>SetData</button>
//             </div>
//         )
//     }
// }
// const mapStateToProps = (state) => ({
//     users: state.users
// })
// const mapDispatchToProps = (dispatch) => ({
//     setData: (data) => dispatch(set_data(data))
// })
// export default connect(mapStateToProps,mapDispatchToProps) (Home)




// facbook login

import { facebook_login } from "../../store/action";
import firebase from "../../config/firebase";

class Home extends React.Component{
    render(){
        console.log('Home-props=>',this.props)
        // console.log('Home-props=>',this.props.users[1].name)
        // console.log('Home-props=>',this.props)
        return(
            <div>
                <h1>Home</h1>
                <button onClick={()=> this.props.facebooklogin()}>SetData</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    users: state.users
})
const mapDispatchToProps = (dispatch) => ({
    facebooklogin: () => dispatch(facebook_login())
})
export default connect(mapStateToProps,mapDispatchToProps) (Home)