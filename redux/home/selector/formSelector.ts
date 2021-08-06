import { createSelector } from "reselect"

const formState = (state: any) => state.forms

export const makeSelectForms = createSelector(
    formState,
    forms => forms
)
