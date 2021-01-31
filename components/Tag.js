import Link from 'next/link'
import { tagNameToSlug } from '../lib/slugs'

export default function Tag({ name, color, small, noLink }) {
  const tag = (
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
          font-size: 0.8rem;
        }

        .tool-tag:hover {
          box-shadow: -1px 2px 10px -4px gray;
        }
      `}</style>
    </span>
  )
  if (noLink) return tag
  else return <Link href={`/t/${tagNameToSlug(name)}`}>{ tag }</Link>
}

Tag.Group = ({ tagNames, tagColors, tags, small, limit }) => {
  if (tagNames && tagColors) {
    tags = tagNames.map((name, i) => ({ id: name, fields: { name, color: tagColors[i], } }))
  }

  const totalTags = tags.length
  if (small || limit) {
    tags = tags.slice(0, limit - 1 || 7) // Limit to 8 tags
  }
  const tagsExcluded = totalTags - tags.length
  
  return <div>
    { tags.map(t => (<Tag name={t.fields.name} color={t.fields.color} key={t.id} small={small} />)) }
    { !!tagsExcluded && <Tag name={`+${tagsExcluded} more`} color={'a6a6a6'} small={small} noLink /> }
  </div>
}
