import LinkNavigation from "../compenents/LinkNavigation"

export default function NotFound() {
  return (
    <main className="l-notFound-content">
      <h1>404</h1>
      <p className="l-notFound-description">Oups! la page que vous demandez n'existe pas.</p>
      <LinkNavigation 
      text={`Retourner sur la page d'accueil`}
      path={"/"} 
       />
    </main>
  )
}