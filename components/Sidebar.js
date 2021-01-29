import React, { memo } from 'react'
import Head from 'next/head'
import { Text, Button, Grid } from '@geist-ui/react'
import { useAppContext } from '../lib/context'
import { Moon, Sun, Github, ArrowRight } from '@geist-ui/react-icons'
import Link from 'next/link'
import { categoryNameToSlug } from '../lib/category'

function Sidebar({ categories }) {
  const [ state, dispatch ] = useAppContext()

  const switchTheme = () => {
    dispatch({ type: 'switchTheme' })
  }

  return (
    <nav>

      <div className='header'>
        {/* <Text h1>😎</Text> */}
        <div className='button-grid'>
          <Grid.Container gap={2} justify='center'>
            <Grid><Button onClick={switchTheme} size='small' icon={<Moon />} auto type='abort' /></Grid>
            <Grid><a href='https://github.com/scitronboy/awesomely-productive' target='_blank' rel='noopener noreferrer'>
              <Button size='small' icon={<Github />} auto type='abort'/>
            </a></Grid>
          </Grid.Container>
        </div>
        
        <Link href='/'><Text h4 size='1.15rem' style={{ textAlign: 'center', cursor: 'pointer' }}>Awesomely Productive</Text></Link>

        <Link href='/submissions'>
          <a className='submit-link'>Submit</a>
        </Link>
      </div>

      { categories && <div className='categories'>
        { categories.map(category => (
          <Link href={`/${categoryNameToSlug(category.fields.name)}`} key={category.id}>
            <div className={`category`} >
              <div className={!category.isSelected && `sliding-background category-color-${category.fields.color}`} />
              <div className={`inner ${category.isSelected && 'category-text-' + category.fields.color}`}>
                <span>{category.fields.name}</span>
                <span className='arrow-icon'><ArrowRight /></span>
              </div>
            </div>
          </Link>
        )) }
      </div>}

      <style jsx>{`
        nav {
          position: fixed;
          overflow-x: hidden;
          overflow-y: auto;
          top: 0;
          height: 100%;
          padding: 15px 0;
          width: 220px;
          //margin: 0;
          border-right: 2px solid gray;
        }

        .header {
          padding: 10px;
        }

        .button-grid {
          margin-bottom: 10px;
        }

        .submit-link {
          float: right;
          font-size: 0.9rem;
          text-decoration: underline
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
          width: 0;
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
