import { createContext, useContext, useReducer } from 'react'

const initialState = {
  theme: 'light'
}

const AppContext = createContext()

export function ContextWrapper({ children }) {
  const [ state, dispatch ] = useReducer((state, action) => {
    switch(action.type) {
      case 'switchTheme':
        return {...state, theme: state.theme === 'dark' ? 'light' : 'dark'}
      default:
        throw new Error();
    };
  }, initialState)

  return (
    <AppContext.Provider value={[ state, dispatch ]}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext)
}
