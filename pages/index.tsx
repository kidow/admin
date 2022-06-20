import type { NextPage } from 'next'
import { EventListener } from 'services'

interface State {}

const HomePage: NextPage = () => {
  return (
    <div className="container mx-auto">
      <div>HomePage</div>
      <button onClick={() => EventListener.emit('backdrop', { open: true })}>
        Backdrop
      </button>
    </div>
  )
}

export default HomePage
