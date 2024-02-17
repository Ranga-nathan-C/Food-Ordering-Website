import instagram from './assets/Component.png'
import twitter from './assets/Component (1).png'
import facebook from './assets/Component (2).png'
import trucky from './assets/Screenshot_669 1.png'
export default function footer(){
    return(
            <footer className="container-fulid cont3 row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5  border-top">
                    <div className="col mb-3">
                    <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none" >
                        <img className='foot-img ' src={trucky} alt="truck" />
                    </a>
                    
                    </div>


                    <div className="container col mar1 mb-3">
                    <h5 className='us'>Contact Us</h5>
                    <ul className="nav flex-column">
                                <li className="nav-item text1 mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</a></li>
                                <li className="nav-item text1 mb-2"><a href="#" className="nav-link p-0 text-body-secondary">example2020@gmail.com</a></li>
                                <li className="nav-item text1 mb-2"><a href="#" className="nav-link p-0 text-body-secondary">(904) 443-0343</a></li>
                            </ul>
                    </div>

                    <div className="container col mar2 mb-3">
                    <h5 className='us'>More</h5>
                    <ul className="nav flex-column">
                                <li className="nav-item text1 mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About Us</a></li>
                                <li className="nav-item text1 mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Products</a></li>
                                <li className="nav-item text1 mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Career</a></li>
                                <li className="nav-item text1 mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Contact Us</a></li>
                            </ul>
                    </div>

                    <div className="container col mar3 mb-3">
                    <h5 className='us'>Social Links</h5>
                    <div className="social-icon-list">
                                    <ul className="nav social ">
                                        <li className="social-icon inst">
                                            <a aria-label="link" href="#" ><img src={instagram} alt="" /></a>
                                        </li>
                                        <li className="social-icon tweet">
                                            <a aria-label="link" href="#" ><img src={twitter} alt="" /></a>
                                        </li>
                                        <li className="social-icon face">
                                            <a aria-label="link" href="#" ><img src={facebook} alt="" /></a>
                                        </li>
                                        <li className="social-icon face">
                                            <p className='para4-sm'>© 2022 Food Truck Example</p>
                                        </li>
                                    </ul>
                                </div>
                    </div>
                    
    </footer>
    )
}
{/* <footer className="last row height row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
            <div className="col mb-3">
            <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
            </a>
            <img className='foot-img' src={trucky} alt="truck" />
            </div>

            <div className="col mar1 mb-3">
            <h5 className='us'>Contact Us</h5>
            <ul className="nav flex-column">
                <li className="nav-item text1 mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</a></li>
                <li className="nav-item text1 mb-2"><a href="#" className="nav-link p-0 text-body-secondary">example2020@gmail.com</a></li>
                <li className="nav-item text1 mb-2"><a href="#" className="nav-link p-0 text-body-secondary">(904) 443-0343</a></li>
            </ul>
            </div>

            <div className="col mar2 mb-3">
            <h5 className='us'>More</h5>
            <ul className="nav flex-column">
                <li className="nav-item text1 mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About Us</a></li>
                <li className="nav-item text1 mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Products</a></li>
                <li className="nav-item text1 mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Career</a></li>
                <li className="nav-item text1 mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Contact Us</a></li>
            </ul>
            </div>

            <div className="col mar3 mb-3">
            <h5 className='us'>Social Links</h5>
            <div className="social-icon-list">
                    <ul className="nav social ">
                        <li className="social-icon inst">
                            <a aria-label="link" href="#" ><img src={instagram} alt="" /></a>
                        </li>
                        <li className="social-icon tweet">
                            <a aria-label="link" href="#" ><img src={twitter} alt="" /></a>
                        </li>
                        <li className="social-icon face">
                            <a aria-label="link" href="#" ><img src={facebook} alt="" /></a>
                        </li>
                    </ul>
                </div>
                
            </div>
            <p className='para4'>© 2022 Food Truck Example</p>
    </footer> */}