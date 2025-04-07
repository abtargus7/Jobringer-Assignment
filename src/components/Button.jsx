import React from 'react'

const Button = ({text,bgColor, textColor, hoverBg, hoverText}) => {
  return (
    <button className={`${bgColor} ${textColor} hover:${hoverBg} hover:${hoverText} px-2 sm:px-4 sm:py-1 py-2 text-xs sm:text-base  rounded font-semibold`} >{text}</button>
  )
}

export default Button
