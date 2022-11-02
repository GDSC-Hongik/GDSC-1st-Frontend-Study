import type { Dispatch, ReactNode, ReactElement } from "react"

import { createContext, useReducer } from "react"
import { nanoid } from "nanoid"

/**
 * Type definitions
 */

export interface TodoList {
	[key: string]: string
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
			payload: string
	  }
	| {
			type: ActionsEnum.UPDATE_TODO
			payload: { key: string; content: string }
	  }

export interface IGlobalContext {
	globalState: IGlobalState
	dispatch: Dispatch<GlobalAction>
}

export enum ActionsEnum {
	ADD_TODO,
	REMOVE_TODO,
	UPDATE_TODO,
}

export enum LocalStorageKey {
	TODO = "todo",
}

/**
 * Code starts here
 */

function saveToLocalStorage(todo: any) {
	window.localStorage.setItem(LocalStorageKey.TODO, JSON.stringify(todo))
}

const defaultState: IGlobalState = {
	todo:
		JSON.parse(window.localStorage.getItem(LocalStorageKey.TODO) as any) || {},
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

		case ActionsEnum.UPDATE_TODO:
			const { key, content } = action.payload
			state.todo[key] = content
			break

		default:
			break
	}

	saveToLocalStorage(state.todo)

	return { ...state }
}

export function GlobalStore(props: { children: ReactNode }): ReactElement {
	const [globalState, dispatch] = useReducer(reducer, defaultState)

	return (
		<globalContext.Provider value={{ globalState, dispatch }}>
			{props.children}
		</globalContext.Provider>
	)
}
