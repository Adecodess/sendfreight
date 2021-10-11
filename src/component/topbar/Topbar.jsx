import './topbar.css';
import { BiSearchAlt2 } from 'react-icons/bi';

const Topbar = () => {
  return (
    <section className='topbar'>
      <main className='topbarWrapper'>
        <div className='topbarLeft'>
          <span className='logo'>send Freight</span>
        </div>

        <form className='topbarForm'>
          <input type='text' placeholder='Search' />
          <div className='tobarFormIcon'>
            <BiSearchAlt2 />
          </div>
        </form>

        <div className='topbarRight'>
          <button className='request'>Request Quote</button>
          <button className='book'>Book Shipment</button>
        </div>
      </main>
    </section>
  );
};

export default Topbar;
