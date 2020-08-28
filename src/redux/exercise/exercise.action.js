import exerciseActionTypes from "./exercise.types"

export const createNewExercise = exercise => ({
    type: exerciseActionTypes.CREATE_NEW_EXERCISE,
    payload: exercise
})

