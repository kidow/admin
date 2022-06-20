import Link from 'next/link'
import type { FC, SVGProps } from 'react'
import { UserIcon, ChevronDownIcon } from '@heroicons/react/outline'
import classnames from 'classnames'

export interface Props {}
interface State {}

const MENU_LIST: Array<{
  name: string
  href: string
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
}> = [
  {
    name: '유저 관리',
    href: '/users',
    icon: UserIcon
  }
]

const Menu: FC<Props> = () => {
  return (
    <menu className="h-full border-r p-3">
      <ul>
        {MENU_LIST.map((item, key) => (
          <li key={key}>
            <Link href={item.href}>
              <a className="inline-flex items-center gap-3 rounded-lg py-5 px-8 hover:bg-neutral-100">
                <item.icon className="h-5 w-5 text-neutral-800" />
                <span className={classnames('w-40 text-xl font-medium')}>
                  {item.name}
                </span>
                <ChevronDownIcon className="h-5 w-5 text-neutral-300" />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </menu>
  )
}

export default Menu
