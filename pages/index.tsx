import { SEO } from 'components'
import type { NextPage } from 'next'

interface State {}

const HomePage: NextPage = () => {
  return (
    <>
      <SEO title="홈" />
      <div className="container mx-auto">
        <div>
          이 사이트는 실제로 어드민을 만든다는 가정하에 테스트 페이지를 만들어
          본 것입니다.
        </div>
        <div>무엇이든 자유롭게 테스트하셔도 됩니다.</div>
        <i>현재는 구축 중에 있습니다.</i>
      </div>
    </>
  )
}

export default HomePage
