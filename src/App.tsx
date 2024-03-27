import { css } from '@emotion/react'
import './App.css'

const containerStyles = css`
  color: red;
`

function App() {
  return (
    <div className="App" css={containerStyles}>
      hi
    </div>
  )
}

export default App
