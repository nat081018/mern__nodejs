import exerciseActionTypes from "./exercise.types"

const INITIAL_STATE = {
    exercise: {
        username: '',
        description: '',
        duration: 0,
        date: new Date(),
        users: []
    }
}

const exerciseReduser = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case exerciseActionTypes.CREATE_NEW_EXERCISE: return {
            ...state,
            exercise: action.payload

        }
            
            
    
        default: return state
            
    }
}

export default exerciseReduser