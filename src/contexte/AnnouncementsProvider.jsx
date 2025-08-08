import { createContext } from "react";
import GetAnnouncments from "../hooks/GetAnnouncments";

export const AnnouncementsContext = createContext()

export default function AnnouncementsProvider(props) {
  const announcements = GetAnnouncments()

  return (
    <AnnouncementsContext.Provider value={announcements}>
      {props.children}
    </AnnouncementsContext.Provider>
  )
}