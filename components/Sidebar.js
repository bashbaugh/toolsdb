import Head from 'next/head'
import { Text } from '@geist-ui/react'
import { useAppContext } from '../lib/context'

export default function Sidebar({ categories }) {
  const [ state, dispatch ] = useAppContext()

  return (
    <nav>

      <div className='header'>
        {/* <Text h1>😎</Text> */}
        <button onClick={_ => dispatch({ type: 'switchTheme' })}>theme</button>
        <Text h4 size='1.25rem' style={{ textAlign: 'center' }}>Awesomely Productive</Text>
      </div>

      <style jsx>{`
        nav {
          height: 100%;
          padding: 15px 0;
          
        }

        .header {
          padding: 10px;
        }
      `}</style>
    </nav>
  )
}
