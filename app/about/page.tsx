import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const basanta = allAuthors.find((p) => p.slug === 'default') as Authors
  const anurag = allAuthors.find((p) => p.slug === 'anuragsaikia') as Authors;

  const mainContent = coreContent(basanta)
  const secondaryContent = coreContent(anurag)

  return (
    <>
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          About
        </h1>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
        <AuthorLayout content={mainContent}>
          <MDXLayoutRenderer code={basanta.body.code} />
        </AuthorLayout>
        <AuthorLayout content={secondaryContent}>
          <MDXLayoutRenderer code={anurag.body.code} />
        </AuthorLayout>
      </div>
    </>
  )
}
