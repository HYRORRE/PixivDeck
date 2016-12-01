// @flow
import Pixiv from '../repo/pixiv'
import type {Action, Dispatch, State} from '../types'

export const logout = (): Action => ({type: 'LOGOUT'})

export function init() {
	return async (
		dispatch: Dispatch,
		getState: () => State
	): Promise<void> | Action => {
		const {username, password} = getState().auth
		if (username && password) {
			await dispatch(login(username, password))
		} else {
			dispatch(logout())
			dispatch({type: 'INIT'})
		}
	}
}

export function login(username: string, password: string): (
	dispatch: Dispatch
) => Promise<Action> {
	return async dispatch => {
		dispatch({type: 'LOGIN_REQUEST'})
		try {
			await Pixiv.login(username, password)
			dispatch({type: 'LOGIN_SUCCESS', username, password})
			return dispatch({type: 'CLOSE_MODAL'})
		} catch (err) {
			return dispatch({type: 'LOGIN_FAILURE'})
		}
	}
}
