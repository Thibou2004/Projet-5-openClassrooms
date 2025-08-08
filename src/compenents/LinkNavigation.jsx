import {Link, NavLink} from "react-router-dom"

export default function LinkNavigation({text, path}) {
  return (
    <NavLink to={path} className={({isActive}) => `${isActive && "active"} c-link-navigation`}>{text}</NavLink>
  )
}