import { Hono } from 'hono'

export const Home = new Hono()

Home.get('/', (c) => {
  const title = 'JioSaavn API'
  const description =
    'JioSaavn API is an unofficial wrapper written in TypeScript for jiosaavn.com providing programmatic access to a vast library of songs, albums, artists, playlists, and more.'

  return c.html(
    <html>
      <head>
        <title>JioSaavn API</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="utf-8" />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://saavn.dev/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://saavn.dev/" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/sumitkolhe/jiosaavn-api/main/assets/preview.jpg"
        />
        <meta
          property="twitter:image"
          content="https://raw.githubusercontent.com/sumitkolhe/jiosaavn-api/main/assets/preview.jpg"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="https://raw.githubusercontent.com/sumitkolhe/jiosaavn-api/main/assets/favicon.ico"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>
        <style
          dangerouslySetInnerHTML={{
            __html: `* { font-family: 'Inter', sans-serif; }`
          }}
        />
      </head>
      <body class="bg-black mx-auto min-h-screen max-w-screen-lg flex flex-col">
        <main class="flex flex-1 flex-col overflow-auto mt-8 mb-8">
          <div class="mx-auto my-auto container flex flex-col px-4 sm:px-8">
            <div class="relative mb-6 sm:mb-8 flex flex-row items-center space-x-4 px-4 sm:px-8 w-full">
              <svg class="sm:h-12 sm:w-12 h-8 w-8 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="#ff7d78"
                  d="M3.172 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.172 8.535C4.343 22 6.229 22 10 22h3.376A4.25 4.25 0 0 1 17 16.007V12.25a2.25 2.25 0 0 1 4.5 0a.75.75 0 0 0 .5.707V12c0-4.714 0-7.071-1.172-8.536C19.657 2 17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.464"
                  opacity=".5"
                />
                <path
                  fill="#ff7d78"
                  fill-rule="evenodd"
                  d="M8.25 12a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m11-.5a.75.75 0 0 1 .75.75a2.25 2.25 0 0 0 2.25 2.25a.75.75 0 0 1 0 1.5a3.734 3.734 0 0 1-2.25-.75v5a2.75 2.75 0 1 1-1.5-2.45v-5.55a.75.75 0 0 1 .75-.75m-.75 8.75a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0"
                  clip-rule="evenodd"
                />
              </svg>
              <p class="text-2xl md:text-4xl text-transparent font-bold leading-none bg-clip-text bg-gradient-to-r from-[#ff7d78] to-purple-600">
                JioSaavn API
                <span class="uppercase text-sm ml-3 text-gray-500 font-normal sm:hidden">unoffical</span>
              </p>
              <p class="hidden sm:block text-xs animate-pulse uppercase px-1 sm:px-3 sm:py-2 text-neutral-200 rounded text-center bg-neutral-800 sm:tracking-wide">
                Unofficial
              </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 relative grid-flow-row">
              <a
                target="_blank"
                class={`p-6 sm:p-8 hover:bg-opacity-5 hover:bg-white rounded-lg duration-100 sm:col-span-4`}
                href="/docs"
              >
                <div class="flex flex-col">
                  <span
                    class={`text-xs uppercase bg-opacity-15 rounded text-center max-w-fit px-2 py-1 font-bold tracking-wide bg-red-500 text-red-500`}
                  >
                    Get Started
                  </span>
                  <span class="text-neutral-200 font-bold text-lg sm:text-xl md:text-2xl mt-2">Explore the Docs</span>
                  <div class="text-neutral-500 mt-2">
                    Check out the documentation to learn how to use the JioSaavn API.
                  </div>
                </div>
              </a>

              <a
                target="_blank"
                class={`p-6 sm:p-8 hover:bg-opacity-5 hover:bg-white rounded-lg duration-100 sm:col-span-4`}
                href="https://github.com/sumitkolhe/jiosaavn-api"
              >
                <div class="flex flex-col">
                  <span
                    class={`text-xs uppercase bg-opacity-15 rounded text-center max-w-fit px-2 py-1 font-bold tracking-wide bg-green-500 text-green-500`}
                  >
                    Open Source
                  </span>
                  <span class="text-neutral-200 font-bold text-lg sm:text-xl md:text-2xl mt-2">Open Source</span>
                  <div class="text-neutral-500 mt-2">
                    Saavn API is open-source. Check out the source code on github.
                  </div>
                </div>
              </a>

              <a
                target="_blank"
                class={`p-6 sm:p-8 hover:bg-opacity-5 hover:bg-white rounded-lg duration-100 sm:col-span-4`}
                href="https://github.com/sumitkolhe/jiosaavn-api/issues"
              >
                <div class="flex flex-col">
                  <span
                    class={`text-xs uppercase bg-opacity-15 rounded text-center max-w-fit px-2 py-1 font-bold tracking-wide bg-violet-500 text-violet-500`}
                  >
                    Contribute
                  </span>
                  <span class="text-neutral-200 font-bold text-lg sm:text-xl md:text-2xl mt-2">Get Involved</span>
                  <div class="text-neutral-500 mt-2">
                    Encounter a bug or have a feature suggestion? Report it on GitHub or contribute by submitting a pull
                    request.
                  </div>
                </div>
              </a>

              <div class={`p-6 sm:p-8 hover:bg-opacity-5 hover:bg-white rounded-lg duration-100 sm:col-span-4`}>
                <div class="flex flex-col">
                  <span
                    class={`text-xs uppercase bg-opacity-15 rounded text-center max-w-fit px-2 py-1 font-bold tracking-wide bg-blue-500 text-blue-500`}
                  >
                    Contact
                  </span>
                  <span class="text-neutral-200 font-bold text-lg sm:text-xl md:text-2xl mt-2">Sumit Kolhe</span>
                  <div class="text-neutral-500 mt-2">
                    Have a question or need help? Reach out on{' '}
                    <a
                      href="https://github.com/sumitkolhe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-indigo-500"
                    >
                      GitHub
                    </a>
                    ,{' '}
                    <a
                      href="https://twitter.com/thesumitkolhe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-sky-500"
                    >
                      Twitter
                    </a>
                    , or{' '}
                    <a
                      href="https://t.me/sumitkolhe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-pink-500"
                    >
                      Telegram
                    </a>
                    .
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
})
