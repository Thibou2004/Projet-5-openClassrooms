import rightArrow from "../assets/svg/right-arrow-carrousel.svg"
import leftArrow from "../assets/svg/left-arrow-carrousel.svg"
import Collapse from "../compenents/Collapse"
import { AnnouncementsContext } from "../contexte/AnnouncementsProvider"
import { useContext, useEffect, useState, useRef } from "react"
import { useParams, useNavigate } from "react-router-dom"

export default function FicheLogement() {
  const navigate = useNavigate()
  const [currentAnnouncement, setCurrentAnnouncement] = useState(null)
  const [isDataGet, setIsDataGet] = useState(false)
  const { id } = useParams() ;
  const announcements = useContext(AnnouncementsContext)
  
  useEffect(() => {
    console.log(announcements)
    
    if (announcements.length > 0) {
      const found = announcements.find(obj => `${obj.id}` === id)
      if(!found)
        navigate("*");

      setCurrentAnnouncement(found);
      setIsDataGet(true);
      setCurrentPictureLink(currentAnnouncement?.pictures[0])
    }
  
  }, [announcements, id, currentAnnouncement])

  const [currentIndexCarrousel, setCurrentIndexCarrousel] = useState(0)
  const [currentPictureLink, setCurrentPictureLink] = useState(currentAnnouncement?.pictures[0])
  const currentPictureElement = useRef()
  
  function changeCurrentPicture(direction) {
    if(Number(direction) !== direction)
      return;

    let index = currentIndexCarrousel + direction;

    if(index < 0)
      index = currentAnnouncement.pictures.length - 1
    else if(index >= currentAnnouncement.pictures.length)
      index = 0

    setCurrentIndexCarrousel(index)
    setCurrentPictureLink(currentAnnouncement.pictures[index])
  }
  
  return (
    <main className="l-fiche-logement-content">
      <div className="l-carrousel">
        <button 
        className="arrow leftArrow"  aria-label="image précédente"
        onClick={() => changeCurrentPicture(-1)}
        style={{display:`${isDataGet && currentAnnouncement.pictures.length > 1 ? "block" : "none"}`}}
        >
          <img 
           src={leftArrow}
           alt="" 
          />
        </button>
        <button 
        className="arrow rightArrow" aria-label="image suivante"
        onClick={() => changeCurrentPicture(1)}
        style={{display:`${isDataGet && currentAnnouncement.pictures.length > 1 ? "block" : "none"}`}}
        >
          <img 
           src={rightArrow} 
          //  style={{display:`${isDataGet && currentAnnouncement.pictures.length > 1 ? "flex" : "none"}`}}
           alt="" 
          />
        </button>
        <img 
        className="l-current-picture" 
        src={currentPictureLink} 
        ref={currentPictureElement} 
        alt="" />
        <p className="l-indexes">
          <span className="l-current-index">{currentIndexCarrousel + 1}</span>/
          <span className="l-final-index">{isDataGet && currentAnnouncement.pictures.length}</span>
        </p>
      </div>
      <section>
          <div className="l-logement-container">
            <div className="l-item-logement-container">
                <h1>{isDataGet && currentAnnouncement.title}</h1>
                <p className="l-logement-location">{currentAnnouncement?.location}</p>
              <ul className="l-tags-list">
                {isDataGet && currentAnnouncement?.tags?.map((tag, index) => (
                  <li key={index} className="l-tag">{tag}</li>
                ))}
              </ul>
            </div>
            <div className="l-item-logement-container">
              <div className="l-profile-content">
                <p className="l-profile-name">{isDataGet && currentAnnouncement.host.name.split(" ").map(text => (
                  <span>{text}</span>
                ))}</p>
                <img className="l-profile-picture" src={isDataGet && currentAnnouncement?.host.picture} alt="" />
              </div>
              <p className="l-rating">
                {isDataGet && [1, 2, 3, 4, 5].map(num => (
                  <i 
                  key={num}
                  className={`fa-solid fa-star ${num <= Number(currentAnnouncement.rating) ? "red-star" : "grey-star"}`}>
                  </i>
                ))}
              </p>
            </div>
          </div>
          <div className="l-collapse-container">
            <Collapse title={"Description"} text={isDataGet && currentAnnouncement.description} largeOrMedium={"medium"} />
            <Collapse title={"Équipements"} text={isDataGet && currentAnnouncement.equipments.map(el => (
              <span>{el} <br /></span>
            ))} largeOrMedium={"medium"} />
          </div>
      </section>
    </main>
  )
}