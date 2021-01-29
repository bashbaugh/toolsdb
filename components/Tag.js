import Link from 'next/link'
import { tagNameToSlug } from '../lib/slugs'

export default function Tags({ name, color }) {
  return (
    <Link href={`/tag/${tagNameToSlug(name)}`}>
      <span className='tool-tag' style={{ background: `#${color}bb` }}>
        { name }

        <style jsx>{`
          .tool-tag {
            margin: 3px;
            padding: 3px;
            border-radius: 4px;
            cursor: pointer;
            transition: .3s;
          }

          .tool-tag:hover {
            box-shadow: -1px 2px 10px -4px gray;
          }
        `}</style>
      </span>
    </Link>
  )
}