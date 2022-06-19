import Link from 'next/link'
import type { FC } from 'react'

export interface Props {}
interface State {}

const Header: FC<Props> = () => {
  return (
    <header className="flex border-b bg-neutral-100 py-4 px-4 sm:px-7">
      <Link href="/" passHref>
        <img src="/admin.svg" alt="" className="h-5 cursor-pointer" />
      </Link>
    </header>
  )
}

export default Header
