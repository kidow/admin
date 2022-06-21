import Link from 'next/link'
import type { FC } from 'react'
import { MenuIcon } from '@heroicons/react/outline'
import { EventListener } from 'services'

export interface Props {
  isMobile: boolean
}
interface State {}

const Header: FC<Props> = ({ isMobile }) => {
  return (
    <header className="sticky top-0 flex items-center justify-between border-b py-4 px-4 sm:px-7">
      <Link href="/" passHref>
        <img src="/admin.svg" alt="" className="h-5 cursor-pointer" />
      </Link>
      {isMobile && (
        <MenuIcon
          onClick={() =>
            EventListener.emit<{ open: boolean }>('drawer', { open: true })
          }
          className="h-5 w-5 sm:invisible"
        />
      )}
    </header>
  )
}

export default Header
