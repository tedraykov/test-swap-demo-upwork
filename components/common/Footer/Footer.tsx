import {FC} from "react";
import s from "./Footer.module.scss"
import {Button} from "@components/ui/Button/Button";

export const Footer: FC = () => {
  return (
    <footer className={s.root}>
      <div className='hidden lg:flex lg:space-x-3.5'>
        <Button variant='outline' color='accent' className='flex text-sm'>
          <div className='flex'>
            <img src="Logo.svg" alt="" className='mr-2'/>
            <strong>EDEN</strong>
          </div>
          <span className='ml-5'>$0.00</span>
        </Button>
        <Button variant='outline' color='accent' className='flex text-sm'>
          <div className='flex'>
            <img src="EDen.svg" alt="" className='mr-2'/>
            <strong>ALPHA</strong>
          </div>
          <span className='ml-5'>$0.00</span>
        </Button>
        <Button variant='outline' color='accent' className='flex text-sm'>
          <div className='flex'>
            <img src="Omega.svg" alt="" className='mr-2'/>
            <strong>OMEGA</strong>
          </div>
          <span className='ml-5'>$0.00</span>
        </Button>
      </div>
      <div className='flex flex-1 justify-between lg:justify-end lg:space-x-10 xl:space-x-16'>
        <div className="flex space-x-7 lg:space-x-10 xl:space-x-16">
          <img src="Telegram.svg" alt="Telegram"/>
          <img src="Discord.svg" alt="Discord"/>
          <img src="Twitter.svg" alt="Twitter"/>
        </div>
        <div className={s.links}>
          <a href="">Contact Us</a>
          <a href=""><strong>FAQ</strong></a>
        </div>
      </div>
    </footer>
  )
}
