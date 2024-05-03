import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/Textform';

function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="About us"/>
    <div className="Container">
    <TextForm heading=" Enter the text form to analyze "/>
    </div>
    </>
  );
}

export default App;
