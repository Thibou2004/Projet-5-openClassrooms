import { useLocation, useMatch } from "react-router-dom"
import Navbar from "./Navbar"

export default function Header() {
  const location = useLocation()

  const pathArray = ["/", "/APropos"]
  const matchFicheLogement = useMatch("/FicheLogement/:id")
  const isAPropos = location.pathname === pathArray[2];
  const isNotFound = !pathArray.includes(location.pathname) && !matchFicheLogement

  let headerClass = ""
  if(isNotFound)
    headerClass = "NotFoundHeader"
  else if(isAPropos)
    headerClass = "AProposHeader"
  

  return (
    <header className={headerClass}>
      <Navbar />
    </header>
  )
}