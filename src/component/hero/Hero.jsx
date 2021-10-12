import Additional from '../additional/Additional';
import Cargo from '../cargo/Cargo';
import Caution from '../caution/Caution';
import Service from '../service/Service';
import './hero.css';

const Hero = () => {
  return (
    <main className='hero'>
      <div className='title'>
        <h1>new booking</h1>
        <p>fill in the information to get a quote or create a new booking</p>
      </div>
      <Service />
      <Caution />
      <Cargo />
      <Additional />
    </main>
  );
};

export default Hero;
