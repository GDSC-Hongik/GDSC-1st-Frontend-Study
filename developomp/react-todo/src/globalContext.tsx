import { Dispatch, ReactNode, ReactElement, useState } from "react"

import { createContext } from "react"
import { nanoid } from "nanoid"
import axios from "axios"

/**
 * Type and constant definitions
 */

export type listID = string
export type itemID = string

interface WeatherData {
	hourly: {
		temperature_2m: number[]
	}
	hourly_units: {
		temperature_2m: string
	}
}

export interface IGlobalState {
	todo: {
		[key: listID]: {
			[key: itemID]: string
		}
	}
	pageTitle: string
	weatherData: WeatherData
}

export type GlobalAction =
	| {
			type: ActionsEnum.ADD_LIST
	  }
	| {
			type: ActionsEnum.DEL_LIST
			payload: { listID: listID }
	  }
	| {
			type: ActionsEnum.ADD_ITEM
			payload: { listID: listID }
	  }
	| {
			type: ActionsEnum.DEL_ITEM
			payload: { listID: listID; itemID: itemID }
	  }
	| {
			type: ActionsEnum.UPDATE_ITEM
			payload: { listID: listID; itemID: itemID; content: string }
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
	ADD_LIST,
	DEL_LIST,
	ADD_ITEM,
	DEL_ITEM,
	UPDATE_ITEM,
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

function saveState(key: LocalStorageKey, value: any) {
	window.localStorage.setItem(key, JSON.stringify(value))
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
		case ActionsEnum.ADD_LIST: {
			state.todo[nanoid()] = {}
			saveState(LocalStorageKey.TODO, state.todo)
			break
		}

		case ActionsEnum.DEL_LIST: {
			const { listID } = action.payload
			delete state.todo[listID]
			saveState(LocalStorageKey.TODO, state.todo)
			break
		}
		case ActionsEnum.ADD_ITEM: {
			const { listID } = action.payload
			state.todo[listID][nanoid()] = ""
			saveState(LocalStorageKey.TODO, state.todo)
			break
		}

		case ActionsEnum.DEL_ITEM: {
			const { listID, itemID } = action.payload
			delete state.todo[listID][itemID]
			saveState(LocalStorageKey.TODO, state.todo)
			break
		}

		case ActionsEnum.UPDATE_ITEM: {
			const { listID, itemID, content } = action.payload
			state.todo[listID][itemID] = content
			saveState(LocalStorageKey.TODO, state.todo)
			break
		}

		case ActionsEnum.UPDATE_WEATHER: {
			try {
				// https://open-meteo.com/en/docs#api-documentation
				const response = await axios.get(
					"https://api.open-meteo.com/v1/forecast?latitude=37.5139&longitude=126.9828&hourly=temperature_2m"
				)
				state.weatherData = response.data as unknown as WeatherData
			} catch (error) {}
			break
		}

		case ActionsEnum.UPDATE_PATHNAME: {
			try {
				state.pageTitle = (pathnameToTitle as any)[action.payload]
			} catch (error) {
				state.pageTitle = ""
			}
			break
		}

		default:
			break
	}

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
