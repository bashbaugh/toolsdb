import React, { memo, useState } from 'react'
import Head from 'next/head'
import { Text, Button, Grid } from '@geist-ui/react'
import { useAppContext } from '../lib/context'
import { Moon, Sun, Github, ArrowRight, PlusCircle, Home, Menu, X } from '@geist-ui/react-icons'
import Link from 'next/link'
import { useIsSmallScreen } from '../lib/hooks'
import { categoryNameToSlug } from '../lib/slugs'

function Sidebar({ categories }) {
  const [ state, dispatch ] = useAppContext()
  const [ sidebarOpen, setSidebarOpen ] = useState(false)
  const isSmallScreen = useIsSmallScreen()

  const switchTheme = () => {
    dispatch({ type: 'switchTheme' })
  }

  return (
    <nav className={`${isSmallScreen ? (sidebarOpen ? 'mobile active' : 'mobile') : 'fixed'}`}>
      <div className='sidebar' onClick={_ => { 
        setTimeout(_ => setSidebarOpen(false), 200)
      }}>
        <div className='header'>
          {/* <Text h1>😎</Text> */}
          <div className='button-grid'>
            <Grid.Container justify='center'>
              <Grid><Link href='/'>
                <Button size='small' icon={<Home />} auto type='abort' title='Home' />
              </Link></Grid>
              <Grid><Button onClick={switchTheme} size='small' icon={state.theme === 'light' ? <Moon /> : <Sun />} auto type='abort' title='Switch theme' /></Grid>
              <Grid><a href='https://github.com/scitronboy/awesomely-productive-tools' target='_blank' rel='noopener noreferrer'>
                <Button size='small' icon={<Github />} auto type='abort' title='GitHub' />
              </a></Grid>
              <Grid><Link href='/submissions'>
                <Button size='small' icon={<PlusCircle />} auto type='abort' title='Submit a tool' />
              </Link></Grid>
            </Grid.Container>
          </div>
          
          <Link href='/'><Text h4 size='1.15rem' style={{ textAlign: 'center', cursor: 'pointer' }}>Awesomely Productive</Text></Link>
        </div>

        <div className='nav-links'>
          <Link href='/t'><a>Tags</a></Link>
          {/* <Link href='/c'><a>Collections</a></Link> */}
        </div>

        { categories && <div className='categories'>
          { categories.map(category => (
            <Link href={`/${categoryNameToSlug(category.fields.name)}`} key={category.id}>
              <div className={`category`} title={category.fields.description}>
                <div className={!category.isSelected && `sliding-background category-color-${category.fields.color || ''}`} />
                <div className={`inner ${category.isSelected && 'category-text-' + category.fields.color || ''}`}>
                  <span>{category.fields.name}</span>
                  <span className='arrow-icon'><ArrowRight /></span>
                </div>
              </div>
            </Link>
          )) }
        </div>}
      </div>
      
      { isSmallScreen && <div className='sidebar-control'>
        <Button onClick={_ => setSidebarOpen(o => !o)} icon={sidebarOpen ? <X /> : <Menu />} auto type='abort' title='View categories' />
      </div>}

      <style jsx>{`
        .sidebar {
          position: fixed;
          overflow-y: auto;
          top: 0;
          height: 100%;
        }

        nav.fixed .sidebar {
          overflow-x: hidden;
          padding: 15px 0;
          width: 220px;
          border-right: 2px solid gray;
        }

        nav.mobile .sidebar {
          padding: 5px 0;
          width: 0%;
          z-index: 1000;
          transition: 0.2s;
        }

        nav.mobile.active .sidebar {
          width: 100%;
          background: ${state.theme === 'light' ? '#fff' : '#2e2e2e'};
          border-right: 2px solid gray;
        }

        .sidebar-control {
          z-index: 100000;
          position: fixed;
          top: 0px;
          left: -5px;
          transition: 0.2s;
        }

        .active .sidebar-control {
          left: calc(100% - 60px);
        }

        .header {
          padding: 10px;
        }

        .button-grid {
          margin-bottom: 10px;
        }

        .nav-links {
          padding: 0 10px;
          text-align: center;
        }

        .nav-links a {
          white-space: nowrap;
          margin: 3px;
        }

        .categories {
          margin: 15px 0;
          //border-top: 1px solid gray;
          //border-bottom: 1px solid gray;
        }

        .category {
          position: relative;
          cursor: pointer;
        }

        .category .inner {
          padding: 15px 5px;
          user-select: none;
          transition: .2s;
        }

        .category .arrow-icon {
          position: absolute;
          right: 2px;
        }

        .sliding-background {
          position: absolute;
          width: 2px;
          top: 0;
          bottom: 0;
          z-index: -100;
          transition: .2s;
          transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
        }

        .category:hover .sliding-background {
          width: 100%;
          box-shadow: 0 5px 8px 0 ${state.theme === 'light' ? '#d3d3d3' : '#2c2c2c'};
        }

        .category:hover .inner {
          transform: translateY(-1px);
        }
      `}</style>
    </nav>
  )
}

export default memo(Sidebar)
