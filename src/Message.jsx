import truckImage from './assets/Screenshot_669 1.png';
import red from './assets/Vector 1.png';
import pizza from './assets/Group 289.png'
export default function Message(){
    return(
        <>
        <div className='container-sm cont'>
            <div className="text">
                <img className='container-sm imgg ' src={truckImage} alt="truck" />   
                <div className='content'>
                    <h1 className='blue'>Discover the <br></br><span className='spann'> Best</span> Food <br></br>and Drinks</h1>
                </div>
            <p className="para">
            Naturally made Healthcare Products for the <br></br> better care & support of your body.
            </p>
            <button className="explore"><span className='color'>Explore now!</span></button>  
            </div> 
            <div className='width'>
                <button className="explore2">Get In Touch</button>
            </div>
            
            <img className=' back ' src={red} alt="red" /> 
            <img className='piza ' src={pizza} alt="food" />        
        </div>
            
        </>
    )
}