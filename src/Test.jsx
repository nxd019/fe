import { useState } from 'react'

export const Test = (props) => {
  const [check, setCheck] = useState(0)

  return (
    <div>
      {check === true && <div>Show me div</div>}
      {check === true ? <div>Show me div</div> : <div>Dont show me</div>}
      <hr></hr>
      <button onClick={() => setCheck(!check)}>Click me!</button>
    </div>
  )
}
