import './additional.css';
import Switch from '../switch/Switch';

const Additional = () => {
  return (
    <main className='additional'>
      <h1 className='additionalTitle'>Additional Services</h1>
      <section className='additionalTopItem'>
        <div className='additionalTopTopItem__desc'>
          <div className='additionalTopItem__switch'>
            <Switch rounded={true} />
          </div>
          <div className='top_Desc'>
            <h2>Exports Forwarding</h2>
            <p>We handle customs clearance and documentation</p>
          </div>
        </div>
        <div className='additionalTopTopItem__desc'>
          <div className='additionalTopItem__switch'>
            <Switch rounded={true} />
          </div>
          <div className='top_Desc'>
            <h2>Exports Forwarding</h2>
            <p>We handle customs clearance and documentation</p>
          </div>
        </div>
      </section>

      <section className='additionalBottomItem'>
        <div className='additionalBottomItem_desc'>
          <div className='additionalBottomItem__switch'>
            <Switch rounded={true} />
          </div>
          <div className='bottom_Desc'>
            <h2>Exports Forwarding</h2>
            <p>We handle customs clearance and documentation</p>
          </div>
        </div>
        <div className='additionalBottomItem_desc'>
          <div className='additionalBottomItem__switch'>
            <Switch rounded={true} />
          </div>
          <div className='bottom_Desc'>
            <h2>Exports Forwarding</h2>
            <p>We handle customs clearance and documentation</p>
          </div>
        </div>
      </section>
      {/* 
      <div className='additionalTopItem__title'>
        <h2>Exports Forwarding</h2>
        <p>We handle customs clearance and documentation</p>
      </div>
      <div className='additionalTopItem__switch'>
        <Switch rounded={true} />
      </div> */}
    </main>
  );
};

export default Additional;
