import { Link } from "react-router-dom"
import '../assets/style/Nav.css'

const NavMenu = () => {
  return (
    <div className="nav-menu-list flex-1 items-center justify-center flex gap-2 2xl:gap-1.5 list-none capitalize text-[16px] text-gray-500 px-1 py-1 font-medium bg-black/5 w-fit rounded-full">
      <Link to="/#about">About</Link>
      <Link to="/#services">services</Link>
      <Link to="/#work">work</Link>
      <Link to="/#team">team</Link>
      <Link to="/#pricing">pricing</Link>
      <Link to="/#award">award</Link>
      <Link to="/#Contact">Contact</Link>
    </div>
  )
}

export default NavMenu