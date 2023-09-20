import { allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return (
    <>
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          About
        </h1>
      </div>

      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-1xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
          What this is about
        </h1>
      </div>

      <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
        Rikto Xonghoti (ৰিক্ত সংহতি) is a project that aims to provide bitcoin education in the
        Assamese (অসমীয়া) language. We are translating articles, books etc to Assamese, creating
        our own content as well. Here is how we are doing it:
        <ul>
          <li>
            {' '}
            We hold a monthly Twitter/X Space on our twitter account{' '}
            <a href="https://twitter.com/xonghoti">@xonghoti</a>, on the first Sunday of each month.{' '}
          </li>
          <li> We publish our translated work on this website</li>
          <li>
            {' '}
            We plan on having audible versions of all our work here as well, also accessible via the
            podcast app of your choice.
          </li>
        </ul>
      </div>

      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-1xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
          Support Us
        </h1>
      </div>

      <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
        <li>
          You can send sats to <span className="font-extrabold">xonghoti@geyser.fund</span> to help
          us further our cause.
        </li>
        <li>
          Alternatively you can display your support publicly at{' '}
          <a href="https://geyser.fund/project/xonghoti">geyser.fund</a>.
        </li>
      </div>

      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-1xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
          Who are we
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
        {allAuthors.map((author) => (
          <AuthorLayout key={author.slug} content={coreContent(author)}>
            <MDXLayoutRenderer code={author.body.code} />
          </AuthorLayout>
        ))}
      </div>
    </>
  )
}
