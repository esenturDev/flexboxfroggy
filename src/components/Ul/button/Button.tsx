import { FC, ReactNode } from 'react'
import scss from './Button.module.scss'

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
}
const Button: FC<ButtonProps> = ({children, onClick}) => {
  return <button className={scss.buttons} onClick={onClick}>{children}</button>
}

export default Button