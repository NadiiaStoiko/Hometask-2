import { ButtonHTMLAttributes, FC } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  classN: string,
  content: string,
  butonType?: 'button' | 'submit' | 'reset',
  onClick?: () => void
}

const Button:FC<ButtonProps>= ({ onClick, classN, content, butonType }) => {
  return (
    <button onClick={onClick} className={classN} type={butonType}>{content}</button>
  )
}

export default Button
