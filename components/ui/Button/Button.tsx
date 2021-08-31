import {ButtonHTMLAttributes, FC, forwardRef, JSXElementConstructor, useRef} from "react";
import cn from 'classnames'

import s from './Button.module.scss'
import mergeRefs from "react-merge-refs";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: 'filled' | 'outline' | 'clear'
  color?: 'primary' | 'warning' | 'accent' | 'transparent'
  slim?: boolean
  Component?: string | JSXElementConstructor<any>
}

export const Button: FC<ButtonProps> = forwardRef((props, buttonRef) => {
    const {
      variant = 'filled',
      color = 'primary',
      slim = false,
      children,
      Component = 'button',
      className
    } = props

    const ref = useRef<typeof Component>(null)

    const rootClassName = cn(
      s.root,
      {
        [s.filled]: variant === 'filled',
        [s.outline]: variant === 'outline',
        [s.clear]: variant === 'clear',
        [s.primary]: color === 'primary',
        [s.warning]: color === 'warning',
        [s.accent]: color === 'accent',
        [s.transparent]: color === 'transparent',
        [s.slim]: !!slim
      },
      className
    )


    return (
      <Component
        ref={mergeRefs([ref, buttonRef])}
        className={rootClassName}>
        {children}
      </Component>
    )
  }
)
