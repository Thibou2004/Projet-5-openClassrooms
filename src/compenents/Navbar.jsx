import LogoDesktop from "../assets/images/LOGO-Desktop.png"
import LogoMobile from "../assets/images/LOGO-Mobile.png"
import LinkNavigation from "./LinkNavigation"
import useViewportWidth from "../hooks/UseViewportWidth"

export default function Navbar() {
  const viewportWidth = useViewportWidth()

  return (
    <nav className="l-navbar">
        <img src={viewportWidth > 768 ? LogoDesktop : LogoMobile} alt="Logo Kasa" />

        <div className="l-navigation">
           <LinkNavigation path={"/"} text={"Accueil"} />
           <LinkNavigation path={"/APropos"} text={"A Propos"} />
        </div>
    </nav>
  )
}