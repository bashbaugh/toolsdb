import Link from 'next/link'
import { Card, Text, Spacer, Row, Col } from '@geist-ui/react'
import { ExternalLink } from '@geist-ui/react-icons'
import { categoryNameToSlug } from '../lib/slugs'
import Tag from './Tag'
import { useIsSmallScreen } from '../lib/hooks'

export default function ToolCard({ tool }) {
  const isSmallScreen = useIsSmallScreen()

  return (<>
    <div className='tool'>
      <Card hoverable>
        <Row>
          <Col span={isSmallScreen ? 6 : 3}>
            <Link href={`/${categoryNameToSlug(tool.fields.categoryName[0])}/${tool.fields.slug}`}><a>
              <Text b>{ tool.fields.name }</Text>
            </a></Link>
          </Col>
          <Col span={isSmallScreen ? 12 : 15}>
            <Text small>{tool.fields.description}</Text>
          </Col>
          <Col span={5}>
            <Tag.Group tagNames={tool.fields.tagNames} tagColors={tool.fields.tagColors} small />
          </Col>
          <Col span={1}>
            <a href={ tool.fields.url } target='_blank' rel='noopener noreferrer' title={tool.fields.url}>
              <ExternalLink />
            </a>
          </Col>
        </Row>
      </Card>

      <style jsx>{`
      `}</style>
    </div>
    <Spacer y={1}/>
    </>
  )
}

ToolCard.Group = ({ tools }) => <div className='tools'>
  { tools.map(tool => (<ToolCard tool={tool} key={tool.id} />))}

  <style jsx>{`
    .tools {
      margin: 30px 0;
    }  
  `}</style>
</div>
