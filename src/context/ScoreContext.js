import { createContext, useState } from "react";

export const ScoreContext = createContext();

export const ScoreProvider = ({children}) => {

	const [array, setArray] = useState([]);

	return (
		<ScoreContext.Provider value={{array, setArray}}>
			{children}
		</ScoreContext.Provider>
	)
}
