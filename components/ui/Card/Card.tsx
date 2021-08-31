import { FC, HTMLAttributes} from "react";
import cn from "classnames";
import s from "@components/ui/Card/Card.module.scss";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  compact?: boolean
}

export const Card: FC<CardProps> = (props) => {
  const {
    children,
    className,
    compact = false
  } = props

  const rootClassName = cn(
    s.root,
    {
      [s.compact]: !!compact
    },
    className
  )

  return (
    <div className={rootClassName}>
      {children}
    </div>
  )
}
