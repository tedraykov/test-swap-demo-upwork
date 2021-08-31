import {FC, HTMLAttributes} from "react";
import cn from "classnames";
import s from "@components/ui/Card/Card.module.scss";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  size?: 'basic' | 'compact' | 'spacious'
}

export const Card: FC<CardProps> = (props) => {
  const {
    children,
    className,
    size = 'basic'
  } = props

  const rootClassName = cn(
    s.root,
    {
      [s.basic]: size === 'basic',
      [s.compact]: size === 'compact',
      [s.spacious]: size === 'spacious'
    },
    className
  )

  return (
    <div className={rootClassName}>
      {children}
    </div>
  )
}
