import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Counter } from '@/components/counter'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div className="flex flex-col items-center">
        <header className="h-58 w-full sticky top-0 flex bg-header-color justify-between items-center z-10">
          <div className="ml-4 desktop:hidden">
            <Image
              src="menu.svg"
              width={18}
              height={18}
              alt="icon of menu"
            />
          </div>
          <Counter></Counter>
          <div className="ml-119 mr-82 desktop:ml-295 desktop:mr-395">
            <Image
              src="lagus-logo.svg"
              width={118}
              height={48}
              alt="logo"
            />
          </div>
          <div className="mr-4 flex grid-cols-1 gap-x-4 desktop:mr-52">
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

        <h1 className="text-3xl font-h1 font-bold text-32 text-center w-283 h-117 m-auto mb-16 mt-16 leading-37 desktop:w-743 desktop:h-14 desktop:leading-56 desktop:text-46 desktop:mt-24 desktop:mb-24 ">This page is a HTML/CSS/JS Test!</h1>

        <div className="desktop:flex desktop:grid-cols-2, gap-x-8 desktop:w-606 desktop:m-auto desktop:mb-24">

          <p className="w-398 font-h1 font-normal text-base text-justify m-auto mb-6 desktop:m-0">The objective of this test is to assess your coding and styling skills. It will be considered a good result if you can style all the components of this page. This text also count as a valid component.</p>

          <p className="w-398 font-h1 font-normal text-base text-justify m-auto mb-16 desktop:m-0">This second part is a second paragraph of the same component. Both p tags must follow the flow and display side by side, instead of the regular behavior of one on top of the other. only on desktop.</p>
        </div>

        <span className="block w-398 font-h1 font-thin text-2xl leading-7 tracking-wider text-center m-auto mb-16 desktop:text-32">Attention: components must be responsive and use CSS Flex and Grid layouts</span>

        <h1 className="text-3xl text-center font-h1 font-bold w-283 m-auto mb-8 leading-37 desktop:w-489 desktop:text-5xl desktop:mb-12">Image List Component</h1>

        <div className="w-400 grid grid-cols-1 gap-y-4 desktop:w-1024 desktop:grid-cols-1 desktop:gap-6">

          <div className="grid gap-y-4 desktop:h-500 desktop:grid desktop:grid-cols-5 desktop:gap-x-4">
            <div className="flex desktop:col-span-2 relative">
              <span className="w-full flex items-center float-left pl-4 h-11 absolute bg-legend-color opacity-75 font-h1 text-base align-middle rounded-t-lg desktop:col-span-1">Atom in the hand of a robot</span>
              <img className="h-auto rounded-lg desktop:w-400 desktop:h-500 desktop:object-cover" src="atom-pic.svg" />
            </div>

            <div className="flex desktop:col-span-3 relative">
              <span className="w-full inline-flex items-center float-left pl-4 h-11 absolute bg-legend-color opacity-75 font-h1 text-base align-middle rounded-t-lg">Person working on a website</span>
              <img src="pic-man-code.svg " className="desktop:h-500 desktop:w-600 desktop:object-cover desktop:w-1024 rounded-lg" />
            </div>
          </div>

          <div className="mb-4 relative">
            <span className="w-full inline-flex items-center float-left pl-4 h-11 absolute bg-legend-color opacity-75 font-h1 text-base align-middle rounded-t-lg">Women working in styles and ESLint configurations</span>
            <img src="code-2.svg" className="rounded-lg" />
          </div>

        </div>
      </div>
  )
}
