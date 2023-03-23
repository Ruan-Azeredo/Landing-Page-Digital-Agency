import './App.css';
import Companies from './sections/Companies';
import Hero from './sections/Hero';
import Navbar from './sections/Navbar';

function App() {
  return (
    <div>
      <div
        className='w-[450px] h-[450px] bg-blue-medium opacity-25 rounded-full blur-xl
        absolute -top-52 -left-52 -z-10'
      ></div>
      <Navbar />
      <Hero />
      <Companies/>
    </div>
  );
}

export default App;
