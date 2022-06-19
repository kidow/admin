import { Header, Menu } from 'containers'
import type { FC } from 'react'

export interface Props extends ReactProps {}
interface State {}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <section className="flex">
        <Menu />
        <main>{children}</main>
      </section>
    </>
  )
}

export default Layout
