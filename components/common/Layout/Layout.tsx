import {FC} from "react";
import s from './Layout.module.scss'
import {Navbar} from "../Navbar/Navbar";
import {Footer} from "@components/common/Footer/Footer";


export const Layout: FC = (
  {
    children
  }) => {
  return <div className={s.root}>
    <Navbar/>
    <main className={s.main}>{children}</main>
    <Footer/>
  </div>
}
