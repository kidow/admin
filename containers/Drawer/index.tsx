import { useState, useEffect } from 'react'
import type { FC } from 'react'
import classnames from 'classnames'
import { XIcon } from '@heroicons/react/outline'
import { createPortal } from 'react-dom'
import { EventListener } from 'services'
import dynamic from 'next/dynamic'
import { Menu } from 'containers'

interface Props extends ReactProps {}

const Drawer: FC<Props> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const onDrawer = ({ detail }: any) => {
    setIsOpen(detail.open)
    if (detail.open) document.body.style.overflow = 'hidden'
    else document.body.removeAttribute('style')
  }

  useEffect(() => {
    EventListener.add('drawer', onDrawer)
    return () => EventListener.remove('drawer', onDrawer)
  }, [])
  return createPortal(
    <div
      tabIndex={-1}
      className={classnames(
        'fixed inset-0 z-30 duration-300 ease-in-out',
        isOpen ? 'visible' : 'invisible'
      )}
      aria-labelledby="drawer-title"
      aria-modal="true"
      role="dialog"
    >
      <div className="flex min-h-screen items-end justify-center p-0">
        <div
          className={classnames(
            'fixed inset-0 bg-black transition-opacity',
            isOpen ? 'opacity-50' : 'opacity-0'
          )}
          aria-hidden="true"
          onClick={() => setIsOpen(false)}
        />
        <span
          className="hidden h-screen align-middle md:inline-block"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className={classnames(
            'fixed top-0 right-0 z-40 h-full w-full overflow-auto bg-white shadow-xl transition-transform sm:w-1/3',
            { 'translate-x-full sm:translate-x-[calc(100vw/3)]': !isOpen }
          )}
        >
          {isOpen && (
            <div>
              <Menu />
            </div>
          )}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 inline-block sm:hidden"
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default dynamic(() => Promise.resolve(() => <Drawer />), { ssr: false })
