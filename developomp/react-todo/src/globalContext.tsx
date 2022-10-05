import type { Dispatch, ReactNode, ReactElement } from "react"

import { createContext, useEffect, useReducer } from "react"
import { nanoid } from "nanoid"

/**
 * Type definitions
 */

export type key = string

export interface TodoList {
	[key: key]: string
}

export interface IGlobalState {
	todo: TodoList
}

export type GlobalAction =
	| {
			type: ActionsEnum.ADD_TODO
	  }
	| {
			type: ActionsEnum.REMOVE_TODO
			payload: key
	  }

export interface IGlobalContext {
	globalState: IGlobalState
	dispatch: Dispatch<GlobalAction>
}

export enum ActionsEnum {
	ADD_TODO,
	REMOVE_TODO,
}

export enum LocalStorageKey {
	TODO = "todo",
}

/**
 * Code starts here
 */

const defaultState: IGlobalState = {
	todo: {},
}

export const globalContext = createContext({} as IGlobalContext)

function reducer(state = defaultState, action: GlobalAction): IGlobalState {
	switch (action.type) {
		case ActionsEnum.ADD_TODO:
			state.todo[nanoid()] = ""
			break

		case ActionsEnum.REMOVE_TODO:
			delete state.todo[action.payload]
			break

		default:
			break
	}

	return { ...state }
}

export function GlobalStore(props: { children: ReactNode }): ReactElement {
	const [globalState, dispatch] = useReducer(reducer, defaultState)

	// save TODO when it's changed
	useEffect(() => {
		window.localStorage.setItem(
			LocalStorageKey.TODO,
			JSON.parse(globalState.todo as any)
		)
	}, [globalState.todo])

	return (
		<globalContext.Provider value={{ globalState, dispatch }}>
			{props.children}
		</globalContext.Provider>
	)
}
