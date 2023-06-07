import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <body>
      <div class="">
        {/* travar posição no mq desktop */}
        <header class="h-58 sticky top-0 flex grid-cols-1 bg-header-color justify-between items-center"  >
            <div class="ml-4">
            <Image
              src="menu.svg"
              width={18}
              height={18}
              alt="icon of menu"
            />
            </div>
          <div class="ml-119 mr-82 ">
          <Image
              src="lagus-logo.svg"
              width={118}
              height={48}
              alt="logo"
            />
          </div>
          <div class="mr-4 flex grid-cols-1 gap-x-4">
            <Image
              src="icon-person.svg"
              width={18}
              height={18}
              alt="icon of person"
            />
            <Image
              src="icon-cart.svg"
              width={18}
              height={18}
              alt="icon of a cart"
            />
          </div>

        </header>

        <h1 class="text-3xl font-h1 font-bold w-283 m-auto mb-16 mt-4 leading-37">This page is a HTML/CSS/JS Test!</h1>

        <p class="w-398 font-h1 font-normal text-base text-justify m-auto mb-6">The objective of this test is to assess your coding and styling skills. It will be considered a good result if you can style all the components of this page. This text also count as a valid component.</p>

        <p class="w-398 font-h1 font-normal text-base text-justify m-auto mb-16">This second part is a second paragraph of the same component. Both p tags must follow the flow and display side by side, instead of the regular behavior of one on top of the other. only on desktop.</p>

        <span class="block w-398 font-h1 font-thin text-2xl leading-7 text-center m-auto mb-16">Attention: components must be responsive and use CSS Flex and Grid layouts</span>

        <h1 class="text-3xl text-center font-h1 font-bold w-283 m-auto mb-8 leading-37">Image List Component</h1>

        <div class="w-400 m-auto flex flex-col grid-cols-1 gap-y-4">

          <figure class="img-wrapper">
          <span class="inline-flex items-center w-400 pl-4 h-11 absolute bg-legend-color opacity-75 font-h1 text-base align-middle">Atom in the hand of a robot</span>
            <Image
              src="atom-pic.svg"
              width={400}
              height={400}
              alt="robot hand and a atom" />
          </figure>

          <figure class="img-wrapper">
          <span class="inline-flex items-center w-400 pl-4 h-11 absolute bg-legend-color opacity-75 font-h1 text-base align-middle">Person working on a website</span>
            <Image
              src="pic-man-code.svg"
              width={400}
              height={400}
              alt="man and a laptop" />
          </figure>

          <figure class="img-wrapper rounded-lg">
            <span class="inline-flex items-center w-400 pl-4 h-11 absolute bg-legend-color opacity-75 font-h1 text-base align-middle">Women working in styles and ESLint configurations</span>
            <Image
              src="code-2.svg"
              width={400}
              height={400}
              alt="woman with headphones coding"/>
          </figure>

        </div>
      </div>

    </body>
  )
}
