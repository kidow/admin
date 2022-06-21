import { Header, Menu } from 'containers'
import type { FC } from 'react'

export interface Props extends ReactProps {
  isMobile: boolean
}
interface State {}

const Layout: FC<Props> = ({ children, isMobile }) => {
  return (
    <>
      <Header isMobile={isMobile} />
      <section className="flex h-[calc(100vh-53px)] w-full">
        {!isMobile && <Menu />}
        <main className="w-full bg-neutral-100 p-8">{children}</main>
      </section>
    </>
  )
}

export default Layout
