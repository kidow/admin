import type { NextPage } from 'next'

interface State {}

const HomePage: NextPage = () => {
  return (
    <div className="container mx-auto">
      <div>
        이 사이트는 실제로 어드민을 만든다는 가정하에 테스트 페이지를 만들어 본
        것입니다.
      </div>
      <div>무엇이든 자유롭게 테스트하실 수 있습니다.</div>
    </div>
  )
}

export default HomePage
