import userActionsType from "./user.types"



const  INITIAL_STATE = {
    user: {
        username: '',
        description: '',
        duration: 0,
        date: new Date(),
        users: []
    }
    
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionsType.SET_INFO_USER_EXERCISE: return {
            ...state, 
            user: action.payload
    } 
    default:
        return state
    }
}

export default userReducer