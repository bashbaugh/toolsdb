import { createContext, useContext, useReducer, useEffect } from 'react'

const initialState = {
  theme: 'light'
}

const AppContext = createContext()

export function ContextWrapper({ children }) {

  const [ state, dispatch ] = useReducer((state, action) => {
    switch(action.type) {
      case 'switchTheme':
        const theme = state.theme === 'dark' ? 'light' : 'dark'
        window.localStorage.setItem('theme', theme)
        return {...state, theme }
      default:
        throw new Error();
    };
  }, initialState)

  useEffect(() => {
    const setTheme = localStorage.getItem('theme')
    if (setTheme === 'dark') dispatch({ type: 'switchTheme' })
  }, [])

  return (
    <AppContext.Provider value={[ state, dispatch ]}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext)
}