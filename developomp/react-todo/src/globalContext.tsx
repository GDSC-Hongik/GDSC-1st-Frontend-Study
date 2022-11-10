import { Dispatch, ReactNode, ReactElement, useState } from "react"

import { createContext } from "react"
import { nanoid } from "nanoid"
import axios from "axios"

/**
 * Type and constant definitions
 */

export interface TodoList {
	[key: string]: string
}

interface WeatherData {
	hourly: {
		temperature_2m: number[]
	}
	hourly_units: {
		temperature_2m: string
	}
}

export interface IGlobalState {
	todo: TodoList
	pageTitle: string
	weatherData: WeatherData
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
	| {
			type: ActionsEnum.UPDATE_WEATHER
	  }
	| {
			type: ActionsEnum.UPDATE_PATHNAME
			payload: string
	  }

export interface IGlobalContext {
	globalState: IGlobalState
	dispatch: Dispatch<GlobalAction>
}

export enum ActionsEnum {
	ADD_TODO,
	REMOVE_TODO,
	UPDATE_TODO,
	UPDATE_WEATHER,
	UPDATE_PATHNAME,
}

export enum LocalStorageKey {
	TODO = "todo",
}

const pathnameToTitle = {
	"/": "Home",
	"/settings": "Settings",
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
	pageTitle: "",
	weatherData: {
		hourly: {
			temperature_2m: [0],
		},
		hourly_units: {
			temperature_2m: "°C",
		},
	},
}

export const globalContext = createContext({} as IGlobalContext)

async function reducer(state = defaultState, action: GlobalAction) {
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

		case ActionsEnum.UPDATE_WEATHER:
			try {
				// https://open-meteo.com/en/docs#api-documentation
				const response = await axios.get(
					"https://api.open-meteo.com/v1/forecast?latitude=37.5139&longitude=126.9828&hourly=temperature_2m"
				)
				state.weatherData = response.data as unknown as WeatherData
			} catch (error) {}
			break

		case ActionsEnum.UPDATE_PATHNAME:
			try {
				state.pageTitle = (pathnameToTitle as any)[action.payload]
			} catch (error) {
				state.pageTitle = ""
			}
			break

		default:
			break
	}

	saveToLocalStorage(state.todo)

	return { ...state }
}

function useAsyncReducer(reducer: any, initState: any) {
	const [state, setState] = useState(initState)
	const dispatchState = async (action: any) =>
		setState(await reducer(state, action))

	return [state, dispatchState]
}

export function GlobalStore(props: { children: ReactNode }): ReactElement {
	const [globalState, dispatch] = useAsyncReducer(reducer, defaultState)

	return (
		<globalContext.Provider value={{ globalState, dispatch }}>
			{props.children}
		</globalContext.Provider>
	)
}
