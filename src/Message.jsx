import  { useState, useEffect } from 'react';
import truckImage from './assets/Screenshot_669 1.png';
import red from './assets/Vector 1.png';
import pizza from './assets/Group 289.png';

function Message() {
  const [order, setOrder] = useState(1);

  const updateOrder = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      setOrder(2);
    } else {
      setOrder(1);
    }
  };

  useEffect(() => {
    updateOrder();
    window.addEventListener('resize', updateOrder);
    return () => {
      window.removeEventListener('resize', updateOrder);
    };
  }, []);

  return (
    <>
      <div className="container-fluid" id='home'>
        <div className="row">
          <div className={`left col-lg-6 col-12 order-${order}`}>
            <img className='container-sm relative imgg' src={truckImage} alt="truck" />
            <div className='d-flex flex-column'>
              <h1 className='blue'>Discover the <br></br><span className='spann'> Best</span> Food <br></br>and Drinks</h1>
              <p className="relative para">Naturally made Healthcare Products for the <br></br> better care & support of your body.</p>
              <button className="explore"><span className='color'>Explore now!</span></button>
            </div>
          </div>
          <div className={`right col-md-6 col-12 order-${order === 2 ? 1 : 2}`}>
            <div className="width1"><button className="explore2">Get In Touch</button></div>
            <img className='back1' src={red} alt="red" />
            <img className='piza1' src={pizza} alt="food" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Message;
