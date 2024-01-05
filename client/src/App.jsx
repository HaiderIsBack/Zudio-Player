import "./App.css"
import "bootstrap/dist/css/bootstrap.css"

// Components Imports
import Navbar from "./components/Navbar"
import Player from "./components/Player";
import Musics from "./components/Musics";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="row" style={{height: "100svh"}}>
        <div className="col-4">
          <Musics />
        </div>
        <div className="col-4 position-relative">
          <Player />
        </div>
        <div className="col-4">yup</div>
      </div>
    </>
  );
}

export default App;