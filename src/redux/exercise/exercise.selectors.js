import { createSelector } from 'reselect'

const selectorExercise = state => state.exercise 

export const selectExercise = createSelector(
    [selectorExercise],
    exercise => exercise.username

)