import Angela from '../Components/Angela';
import Breath from '../Components/Breath';
import About from '../Components/About/About';
import Navbar from '../Components/Navbar';
import Collaborate from '../Components/Collaborate/Collaborate';
import '../styles/globals.css';
import Connect from '../Components/Collaborate/Connect';

export default function Page() {
  return (
    <div className="App">
      <Navbar />
      <Angela />
      <Breath />
      <About />
      <Collaborate />
      <Connect />
    </div>
  );
}
