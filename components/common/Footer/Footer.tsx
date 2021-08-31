import {FC} from "react";
import s from "./Footer.module.scss"

export const Footer: FC = () => {
  return (
    <footer className={s.root}>
      <div className="flex space-x-7">
        <img src="Telegram.svg" alt="Telegram"/>
        <img src="Discord.svg" alt="Discord"/>
        <img src="Twitter.svg" alt="Twitter"/>
      </div>
      <div className={s.links}>
        <a href="">Contact Us</a>
        <a href=""><strong>FAQ</strong></a>
      </div>
    </footer>
  )
}
