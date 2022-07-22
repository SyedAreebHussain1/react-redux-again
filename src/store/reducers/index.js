const INITIAL_STATE = {
    users: [
        {
            name: 'Ghous', email: 'ghous@gmail.com'
        },
        {
            name: 'Basit', email: 'basit@gmail.com'
        }
    ]
}

var red = (state = INITIAL_STATE,action)=>{
    // console.log('action=>',action)
    switch (action.type){
        case 'SETDATA':
            return({
                ...state,users:[...state.users,action.data]
            })
    }
    return state
}

export default red