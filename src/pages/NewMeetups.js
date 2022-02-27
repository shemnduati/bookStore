import NewMeetupForm from "../componets/meetups/NewMeetupForm";
import { useNavigate } from 'react-router-dom';

function NewMeetupsPage(){
    const history = useNavigate();

    function addMeetupHandler(meetupData){
        fetch('https://meetups-dbfb3-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json',
            },
        }
        ).then(() => {
            history('/');
        });
    }
    return (
        <section>
        <div><h1>NewMeetupsPage</h1></div>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
    );
    
    
}
export default NewMeetupsPage;