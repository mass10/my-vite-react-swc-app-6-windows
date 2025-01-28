import { useEffect } from 'react'
import './App.css'
import { DefaultPage } from './DefaultPage'


function App(): JSX.Element {
  useEffect(() => {
    console.info(`[App] $$$ LOAD $$$`)
    return () => {
      console.info(`[App] --- UNLOAD ---`)
    }
  }, [])

  return (
    <DefaultPage />
  )
}

export default App
