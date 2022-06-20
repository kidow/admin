import { useEffect } from 'react'
import type { FC } from 'react'
import { Spinner } from 'components'
import { createPortal } from 'react-dom'
import dynamic from 'next/dynamic'

interface Props {}

const Backdrop: FC<Props> = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.removeAttribute('style')
    }
  }, [])
  return createPortal(
    <div role="progressbar">
      <div className="fixed inset-0 cursor-progress bg-black opacity-30" />
      <span className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-progress">
        <Spinner className="h-10 w-10" />
      </span>
    </div>,
    document.body
  )
}

export default dynamic(() => Promise.resolve(() => <Backdrop />), {
  ssr: false
})
