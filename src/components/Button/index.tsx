import React from 'react'
import './Button.css'

type Props = {
  children: React.ReactChild | React.ReactChildren
  onClick: () => void;
}

export default function Button(props: Props) {
  const { children, onClick } = props

  return (
    <button
      className="button"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
