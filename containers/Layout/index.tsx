import { Header, Menu } from 'containers'
import type { FC } from 'react'

export interface Props extends ReactProps {}
interface State {}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <section className="flex h-[calc(100vh-53px)] w-full">
        <Menu />
        <main className="w-full bg-neutral-100 p-8">{children}</main>
      </section>
    </>
  )
}

export default Layout
