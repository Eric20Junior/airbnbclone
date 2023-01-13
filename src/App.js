import './App.css';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Card from './components/Card/Card';
import data from './components/data';

function App() {
  const cards = data.map(item => {
    return (
      <Card
        item={item}   
      />
    )
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <section className='block sm:flex justify-end'>
        {cards}
      </section>
      {/* <Card
        img="image12.png"
        rating="5.0"
        reviewCount="(6)"
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}   
      /> */}
    </div>
  );
}

export default App;
