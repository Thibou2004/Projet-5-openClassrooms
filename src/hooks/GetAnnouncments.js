import { useEffect, useState } from "react";

export default function GetAnnouncments() {
   const [announcements, setAnnouncements] = useState([])

   useEffect(() => {
     fetch("/announcements.json")
     .then(res => {
        if(!res.ok)
            throw new Error(res.status);
        return res.json()
     })
     .then(data => {
        setAnnouncements(data)

     })
     .catch(err => console.log(err.message))
   }, [])

   return announcements;
}