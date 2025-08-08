import { Link } from "react-router-dom"

export default function AnnouncementCard({link, title, index, id}) {
  return (
    <Link to={`/FicheLogement/${id}`}>
      <figure className={`c-announcement-card c-announcement-card-${index + 1}`}>
          <img src={link} alt={title} />
          <figcaption>{title}</figcaption>
      </figure>
    </Link>
  )
}