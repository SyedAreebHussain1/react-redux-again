// const set_data = (data) => {
//     return (dispatch) => {
//         // console.log("hello redux")
//         dispatch(
//             {
//                 type:'SETDATA',data:data
//             }
//         )
//     }
// }
// export { set_data }



// const set_data = (data) => {
//     return (dispatch) => {
//         // console.log("hello redux")
//         dispatch(
//             {
//                 type:'SETDATA',data:{name:'umair',email:'umair@gmail.com'}
//             }
//         )
//     }
// }
// export { set_data }





import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";

const facebook_login = () => {
    return (dispatch) => {
        // console.log("hello redux")
    const provider = new FacebookAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log('user==>',user)
        // // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        // const credential = FacebookAuthProvider.credentialFromResult(result);
        // const accessToken = credential.accessToken;
    
        // // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Error Msg==>',errorMessage)
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = FacebookAuthProvider.credentialFromError(error);
    
        // // ...
      });
    }
}
export { facebook_login }