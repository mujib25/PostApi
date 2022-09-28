import Posts from "./components/Posts";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
   <>
  <BrowserRouter>
    <Routes>
    <Route exact path="/"  element={ <Posts   key="posts" category="posts"/>} />
    <Route exact path="/photos"  element={ <Posts   key="photos" category="photos" />} />
    <Route exact path="/comments"  element={ <Posts key="comments" category="comments" />} />
    <Route exact path="/albums"  element={ <Posts   key="albums" category="albums" />} />
    <Route exact path="/users"  element={ <Posts   key="users" category="users" />} />
    </Routes>
  </BrowserRouter>
  
   </>
  );
}

export default App;
