import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='py-2'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Created with NextJS and Tailwind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex justify-center flex-col items-center min-h-screen'>
        <div className='no-underline text-7xl m-0'>
          Welcome to <a className='text-regal-blue hover:underline' href="https://nextjs.org">Next.js!</a>
        </div>

        <div className='py-14 text-2xl'>
          Get started by editing{' '}
          <code className='bg-neutral-900 rounded p-2 text-lg'>pages/index.tsx</code>
        </div>

        <div className='flex items-center justify-center flex-wrap max-w-4xl'>
          <a href="https://nextjs.org/docs" className='m-4 p-6 text-xl text-left no-underline max-w-xs border border-zinc-800 border-solid rounded-lg hover:text-blue-600 hover:border-blue-600'>
            <div className='text-2xl pt-1'>Documentation &rarr;</div>
            <div className='pt-5'>Find in-depth information about Next.js features and API.</div>
          </a>

          <a href="https://nextjs.org/learn" className='m-4 p-6 text-xl text-left no-underline max-w-xs border border-zinc-800 border-solid rounded-lg hover:text-blue-600 hover:border-blue-600'>
            <div className='text-2xl pt-1'>Learn &rarr;</div>
            <div className='pt-5'>Learn about Next.js in an interactive course with quizzes!</div>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className='m-4 p-6 text-xl text-left no-underline max-w-xs border border-zinc-800 border-solid rounded-lg hover:text-blue-600 hover:border-blue-600'
          >
            <div className='text-2xl pt-1'>Examples &rarr;</div>
            <div className='pt-5'>Discover and deploy boilerplate example Next.js projects.</div>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className='m-4 p-6 text-xl text-left no-underline max-w-xs border border-zinc-800 border-solid rounded-lg hover:text-blue-600 hover:border-blue-600'
          >
            <div className='text-2xl pt-1'>Deploy &rarr;</div>
            <div className='pt-5'>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </div>
          </a>
        </div>
      </main>

      <div className='flex justify-center items-center border-t-2 border-t-zinc-800 py-4'>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className='flex justify-center items-center flex-grow'
        >
          Powered by{' '}
          <span className='ml-2 invert'>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </div>
    </div>
  )
}
