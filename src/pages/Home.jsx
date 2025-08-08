import AnnouncementCard from "../compenents/AnnouncementCard"
import { useContext } from "react"
import { AnnouncementsContext } from "../contexte/AnnouncementsProvider"

export default function Home() {

  const announcements = useContext(AnnouncementsContext)

  return (
    <main className="l-home-content">
      <section className="l-section-with-background-image" >
        <h1>Chez vous, partout et ailleurs</h1>
      </section>
      <div className="l-home-gallery">
        {announcements.map((obj, index) => (
          <AnnouncementCard key={obj.id} link={obj.cover} title={obj.title} index={index} id={obj.id} />
        ))}
      </div>
    </main>
  )
}