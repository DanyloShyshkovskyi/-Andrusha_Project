import { render } from 'react-dom'
import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import MyTry from "../MyTry"
import './style.css'

const pages = [
  ({ style }) => <animated.div style={{ ...style,background:"pink" }}><MyTry/></animated.div>,
  ({ style }) => <animated.div style={{ ...style,background:"yellow"}}><MyTry/></animated.div>,
  ({ style }) => <animated.div style={{ ...style,background:"green" }}><MyTry/></animated.div>,
  ({ style }) => <animated.div style={{ ...style,background:"red" }}>l</animated.div>,
  ({ style }) => <animated.div style={{ ...style,background:"red" }}><MyTry/></animated.div>,
  ({ style }) => <animated.div style={{ ...style, }}>m</animated.div>,
  ({ style }) => <animated.div style={{ ...style, }}><MyTry/></animated.div>,
]

export default function App() {
  const [index, set] = useState(0)
  const onClick = useCallback(() => set((state) => (state + 1) % pages.length), [])
  const transitions = useTransition(index, (p) => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return (
    <div className="simple-trans-main" >
        <button className="NextButton" onClick={onClick} >NEXT -></button>
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item]
        return <Page key={key} style={props} />
      })}
    </div>
  )
}

render(<App />, document.getElementById('root'))