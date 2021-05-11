import logo from './logo.svg';
import './App.css';
import UserGithub from './profile.js'
function App() {
  return (
    <div className="App">
      <div>
        {<UserGithub/>}
      </div>
    </div>
  );
}

export default App;
