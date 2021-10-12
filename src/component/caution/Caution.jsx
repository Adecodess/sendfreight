import './caution.css';
import { AiOutlineStop } from 'react-icons/ai';
import { MdLocationPin } from 'react-icons/md';
import { BsFillCalendarDayFill } from 'react-icons/bs';

const Caution = () => {
  return (
    <div>
      <main className='caution'>
        {/* <div className='cautionIcon'> */}
        <AiOutlineStop />
        {/* </div> */}
        <div className='cautionTopItem'>
          <div className='cautionButtonContainer'>
            <button className='import'>import</button>
            <button className='export'>export</button>
          </div>
          <div className='cautionFormContainer'>
            <form className='cautionForm'>
              <input type='text' placeholder='From City or Port' />
              <div className='cautionIcon'>
                <MdLocationPin />
              </div>
            </form>
            <form className='cautionForm'>
              <input type='text' placeholder='To City or Port' />
              <div className='cautionIcon'>
                <MdLocationPin />
              </div>
            </form>
          </div>
        </div>
        <div className='cautionBottomItem'>
          <form className='cautionForm'>
            <input type='text' placeholder='Ready Date' />
            <div className='cautionIcon'>
              <BsFillCalendarDayFill />
            </div>
          </form>
          <form className='cautionForm'>
            <input type='text' placeholder='Incoterms' />
            <select name='terms' id='terms'>
              <option value='yes'>yes</option>
              <option value='no'>no</option>
            </select>
          </form>
          <form className='cautionForm'>
            <input type='text' placeholder='Total Cargo Value' />
          </form>
        </div>
      </main>
    </div>
  );
};

export default Caution;
