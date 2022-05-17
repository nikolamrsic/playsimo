import logo from './logo.svg';
import './App.css';
import Container from './Components/Container/Container';
import Content from './Components/Content/Content';
import SideBar from './Components/SideBar/SideBar';
import Main from './Components/Main/Main';
import PlayerControl from './Components/PlayerControl/PlayerControl';
import About from './Components/About/About';
function App() {
  return (
    <div className="App w-full  m-auto  h-screen bg-gray-900 px-28 overflow-hidden  py-5  shadow-inner ">
     <Container>
       <About/>
      <Content>
       <SideBar/>
        <Main>
      <PlayerControl/>
        </Main>
      </Content>
     </Container>
    </div>
  );
}

export default App;
