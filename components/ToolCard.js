import Link from 'next/link'
import { Card, Text, Spacer, Grid } from '@geist-ui/react'
import { useIsSmallScreen } from '../lib/hooks'
import { categoryNameToSlug } from '../lib/slugs'
import Tag from '../components/Tag'
import { ExternalLink } from '@geist-ui/react-icons'

export default function ToolCard({ tool }) {
  const isSmallScreen = useIsSmallScreen()

  return (<>
    <div className='tool'>
      <Card hoverable>
        <Grid.Container>
          <Grid xs={7} md={3}>
            <Link href={`/${categoryNameToSlug(tool.fields.categoryName[0])}/${tool.fields.slug}`}><a>
              <Text b style={{ fontSize: isSmallScreen ? '0.9rem' : null }}>{ tool.fields.name }</Text>
            </a></Link>
          </Grid>
          <Grid xs={9} md={15}>
            <Text small>{tool.fields.description}</Text>
          </Grid>
          <Grid xs={7} md={5}>
            <Tag.Group tagNames={tool.fields.tagNames} tagColors={tool.fields.tagColors} small />
          </Grid>
          <Grid xs={1}>
            <a href={ tool.fields.url } target='_blank' rel='noopener noreferrer' title={tool.fields.url}>
              <ExternalLink />
            </a>
          </Grid>
        </Grid.Container>
      </Card>

      <style jsx>{`
      `}</style>
    </div>
    <Spacer y={1}/>
    </>
  )
}

ToolCard.Group = ({ tools }) => <div className='tools'>
  {tools.map(tool => (<ToolCard tool={tool} key={tool.id} />))}

  <style jsx>{`
    .tools {
      margin: 30px 0;
    }  
  `}</style>
</div>
