import { useContext } from "react";
import MeetupList from "../componets/meetups/MeetupList";
import FavoritesContext from "../store/Favorites-context";

function FavoritePage(){
    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if (favoritesCtx.totalFavorites === 0){
        content = <p>you got no favorites yet. Start adding some?</p>
    } else{
        content = <MeetupList meetups ={favoritesCtx.favorites} />
    }

    return (
        <section>
            <h1>FavoritesPage</h1>
            {content}
        </section>
    );
   
}
export default FavoritePage;