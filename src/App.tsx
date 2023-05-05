import { useEffect, useState } from "react"
import { Nav } from "./components/Nav"

function App() {
  const [count, setCount] = useState<number>(0)
  const [limit, setLimit] = useState<string>('')

  const increment = (qty : number) => {
    setCount(count + qty)
  }

  const decrement = (qty : number) => {
    setCount(count - qty)
  }

  const reset = () => {
    setCount(0)
  }

  useEffect(() => {
    if(count > 25){
      setLimit("red")
    }else{
      setLimit('')
    }
  }, [count])

  return (
    <>
      <h1>React App <div style={{ backgroundColor: limit }}>{ count }</div></h1>
      <button onClick={() => increment(4)}>Increment</button>
      <button onClick={() => decrement(4)}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <Nav links={[
        { title: "Home", href: "/" },
        { title: "About", href: "/about" },
        { title: "Contact", href: "/contact" },
      ]}/>
    </>
  )
}

export default App
