import './cargo.css';
import Switch from '../switch/Switch';

const Cargo = () => {
  return (
    <main className='cargo'>
      <section className='cargoTopItem'>
        <div className='cargoTopItem__title'>
          <h1>Cargo Details</h1>
        </div>
        <div className='cargoTopItem__description'>
          <div className='cargoSwitch'>
            <Switch rounded={true} />
          </div>
          <p>Dangerous Cargo (ex.Chemicals, Battery)</p>
        </div>
      </section>

      <section className='cargoMidItemForm'>
        <form className='dimensions'>
          <input type='text' placeholder='Total Dimensions' />
        </form>
        <form className='details'>
          <input type='text' placeholder='Package Details' />
        </form>
      </section>

      <section className='cargoBottomItem'>
        <form>
          <fieldset>
            <legend>Total Volume</legend>
            <input type='text' placeholder='cbm' />
          </fieldset>
        </form>
        <form>
          <fieldset>
            <legend>Total Height</legend>
            <input type='text' placeholder='cbm' />
          </fieldset>
        </form>
      </section>
    </main>
  );
};

export default Cargo;
