import "./App.css";
import Logo from "./img/logo.png";
import Profile from "./Profile/Profile";
function App(props) {
  const handleName = (e) => {
    alert(e);
  };
  return (
    <div className="App" >
      <div className="content">
      <Profile
        handleName={handleName}
        // bio="Test"
        title="Dhia logo"
        profession="Web Developer / Front-End Developer "
        fullName="Dhia Omri"
      >
        {Logo}
      </Profile>
      </div>
   
    </div>
  );
}

export default App;
