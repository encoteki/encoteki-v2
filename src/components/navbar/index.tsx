'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import EncotekiLogo from '@/assets/encoteki-icon.png'
import IconMenu from '@/assets/icon/icon.menu.svg'

export default function NavBar() {
  const pathname = usePathname()

  const homepageNavs = [
    { label: 'Collection', href: '#collection' },
    { label: 'Benefit', href: '#benefit' },
    { label: 'About', href: '#about' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <nav className="flex items-center justify-between px-4 pt-4 tablet:px-8 tablet:pt-8">
      {pathname === '/' ? (
        <>
          <div className="flex items-center gap-12">
            <div className="flex flex-col tablet:flex-row tablet:gap-2">
              <Image
                src={IconMenu}
                alt="alt"
                width={32}
                height={32}
                className="desktop:hidden"
              />
              <Link href="/">
                <Image
                  src={EncotekiLogo}
                  alt="alt"
                  className=":h-[54px] hidden w-[79px] tablet:block tablet:h-[64px] tablet:w-[92px]"
                />
              </Link>
            </div>

            <div className="hidden gap-8 desktop:flex">
              {homepageNavs.map((nav, index) => {
                return (
                  <Link
                    key={index}
                    href={nav.href}
                    className="duration-300 hover:text-primary-green"
                  >
                    {nav.label}
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/dao">
              <button className="rounded-[32px] border border-primary-green bg-white px-8 py-2 duration-300 hover:bg-green-90 tablet:px-16 tablet:py-4">
                <span className="font-inter text-base font-medium text-primary-green">
                  DAO
                </span>
              </button>
            </Link>
            <Link href="/mint">
              <button className="rounded-[32px] bg-primary-green px-8 py-2 duration-300 hover:bg-green-10 tablet:px-16 tablet:py-4">
                <span className="font-inter text-base font-medium text-white">
                  Mint
                </span>
              </button>
            </Link>
          </div>
        </>
      ) : (
        <Link href="/">
          <Image
            src={EncotekiLogo}
            alt="alt"
            className="h-[54px] w-[79px] tablet:h-[64px] tablet:w-[92px]"
          />
        </Link>
      )}

      {pathname === '/partner-deals' && <></>}

      {pathname === '/mint' && (
        <Link href="/dao">
          <button className="rounded-[32px] border border-primary-green bg-white px-8 py-2 duration-300 hover:bg-green-90 tablet:px-16 tablet:py-4">
            <span className="font-inter text-base font-medium text-primary-green">
              DAO
            </span>
          </button>
        </Link>
      )}

      {pathname === '/dao' && (
        <Link href="/mint">
          <button className="rounded-[32px] bg-primary-green px-8 py-2 duration-300 hover:bg-green-10 tablet:px-16 tablet:py-4">
            <span className="font-inter text-base font-medium text-white">
              Mint
            </span>
          </button>
        </Link>
      )}
    </nav>
  )
}
