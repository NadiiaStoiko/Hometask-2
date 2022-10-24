import { FC } from "react"
import './ErrorMassage.css'

interface ErrorMessageProps {
  content: string
}

const ErrorMessage:FC<ErrorMessageProps>= ({ content}) => {

  return (
    <div className='invalid'>{content}</div>
  )
}

export default ErrorMessage
