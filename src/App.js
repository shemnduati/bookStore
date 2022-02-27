import './App.css';
import {Route , Routes} from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetups';
import FavoritePage from './pages/Favorites';
import Layout from './componets/layouts/Layout';



function App() {
  return (
    <Layout>
      <Routes>
      <Route path="/" element={<AllMeetupsPage />} />
      <Route path="/newmeetup"  element={<NewMeetupsPage/>} />
      <Route path="/favorites" element={<FavoritePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
