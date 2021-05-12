import logo from './logo.svg';
import './App.css';
import UserGithub from './profile.js'
function App() {
  return (
    <div className="App">
      <div>
        {<UserGithub source="https://api.github.com/users/b0829065"/>}
      </div>
    </div>
  );
}

export default App;
