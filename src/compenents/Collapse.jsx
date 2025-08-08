import { useRef, useState, useEffect } from "react";
import arrow from "../assets/svg/arrow.svg";

export default function Collapse({title, text, largeOrMedium}) {
  const collapseBtn = useRef()
  const collapseElement = useRef()

  const [isOpen, setIsOpen] = useState(false);
  const [minHeight, setMinHeight] = useState(largeOrMedium === "large" ? "54px" : "52px")
  const [height, setHeight] = useState(minHeight);



 useEffect(() => {
    function updateMinHeight() {
    
    let baseHeight = largeOrMedium === "large" ? 54 : 52;

    if (window.innerWidth <= 768) {
        baseHeight = 30;
    }

    setMinHeight(baseHeight + "px");

    setHeight(() => {
        return isOpen
          ? collapseElement.current?.scrollHeight + "px"
          : baseHeight + "px";
      });
   }
   updateMinHeight();
   window.addEventListener("resize", updateMinHeight)

   return () => window.removeEventListener("resize", updateMinHeight);
 }, [largeOrMedium, isOpen])
  
  function changeCollapseState() {
    setIsOpen(!isOpen);
    if (isOpen) {
      // Ouvrir : hauteur dynamique en fonction du contenu
      setHeight(collapseElement.current.scrollHeight + "px");
    } else {
      // Fermer : hauteur = 0
      setHeight(minHeight);
    }
}

  return (
    <div 
    className={`c-collapse-element close ${largeOrMedium}`} 
    ref={collapseElement}
    style={{maxHeight: height}}>
        <section className={`c-collapse ${largeOrMedium}`}>
            <h2>{title}</h2>
            <button 
            type="button" 
            aria-label="Afficher le contenu" 
            className={`c-collapse-btn ${isOpen ? "open" : ""}`}
            ref={collapseBtn}
            onClick={changeCollapseState}
            >
                <img src={arrow} alt="" />
            </button>
        </section>
        <p className={`c-collapse-content ${largeOrMedium}`}>{text}</p>
    </div>
  )
}