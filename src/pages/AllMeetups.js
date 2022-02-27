import MeetupList from "../componets/meetups/MeetupList";
import { useState, useEffect } from "react";

function AllMeetupsPage(){
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] =useState([]);

  useEffect( () =>{
    setIsLoading(true);
    fetch(
      'https://meetups-dbfb3-default-rtdb.firebaseio.com/meetups.json'
    ).then((response) => {
      return response.json();
    }).then((data) => {
      const meetups = [];
      for (const key in data){
        const meetup = {
          id: key,
          ...data[key]
        };
        meetups.push(meetup);
      }
      console.log(meetups);
      setIsLoading(false);
      setLoadedMeetups(meetups);
    });
  }, []);
  
  if (isLoading){
    return(
      <section>
        <p>Loading</p>
      </section>
    );
  }
    return (
    <section>
        <div>
            <h1>AllMeetupsPage</h1>
           <MeetupList meetups ={loadedMeetups} />
            </div>
    </section>
    );
}
export default AllMeetupsPage;