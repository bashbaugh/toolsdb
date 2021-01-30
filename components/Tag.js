import Link from 'next/link'
import { tagNameToSlug } from '../lib/slugs'

export default function Tag({ name, color, small }) {
  return (
    <Link href={`/t/${tagNameToSlug(name)}`}>
      <span className={`tool-tag ${small && 'small'}`} style={{ background: `#${color}bb` }}>
        { name }

        <style jsx>{`
          .tool-tag {
            display: inline-block;
            margin: 3px;
            padding: 2px 3px; 
            border-radius: 4px;
            cursor: pointer;
            transition: .3s;

            font-size: 1rem;
          }

          .small {
            font-size: 0.9rem;
          }

          .tool-tag:hover {
            box-shadow: -1px 2px 10px -4px gray;
          }
        `}</style>
      </span>
    </Link>
  )
}

Tag.Group = ({ tagNames, tagColors, tags, small}) => {
  if (tagNames && tagColors) {
    tags = tagNames.map((name, i) => ({ id: name, fields: { name, color: tagColors[i], } }))
  }
  
  return <div>
    { tags.map(t => (<Tag name={t.fields.name} color={t.fields.color} key={t.id} small={small} />)) }
  </div>
}
