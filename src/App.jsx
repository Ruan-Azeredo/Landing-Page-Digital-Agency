import './App.css';
import Companies from './sections/Companies';
import Hero from './sections/Hero';
import Infos from './sections/Infos';
import Navbar from './sections/Navbar';

function App() {
  return (
    <div>
      <div
        className='w-[450px] h-[450px] bg-blue-medium opacity-25 rounded-full blur-xl
        absolute -top-52 -left-52 -z-10'
      ></div>
      <div
        className='w-[450px] h-[450px] bg-blue-medium opacity-25 rounded-full blur-xl
        absolute top-[1500px] md:top-[1100px] -right-52 -z-10'
      ></div>
      <Navbar />
      <Hero />
      <Companies />
      <Infos/>
    </div>
  );
}

export default App;
