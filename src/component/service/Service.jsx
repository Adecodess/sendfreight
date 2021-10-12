import './service.css';
import { MdAirplanemodeActive } from 'react-icons/md';
import { IoIosBoat } from 'react-icons/io';
import { ImTruck } from 'react-icons/im';
import { GoPerson } from 'react-icons/go';

const Service = () => {
  return (
    <div>
      <main className='service'>
        <span className='serviceTitle'> select a service</span>
        <div className='cardContainer'>
          <div className='airFreight'>
            <p>Air Freight</p>
            <MdAirplanemodeActive className='airFreightIcon' />
          </div>

          <div className='seaFreight'>
            <p>Sea Freight</p>
            <IoIosBoat className='seaFreightIcon' />
          </div>

          <div className='inland'>
            <p>Inland [Truck and Barge]</p>
            <ImTruck className='inlandIcon' />
          </div>
          <div className='customs'>
            <p>Customs Clearance</p>
            <GoPerson className='customsIcon' />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Service;
