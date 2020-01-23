import { createSelector } from 'reselect'
const selectUser = state => state.user

export const slectCurrentUser = createSelector(
	[selectUser],
	user => user.currentUser
)
