import food from './assets/girl (lp).png';

export default function content(){
    return(
        <>
        {/* <div className="container2">
        <div className="flex flex-wrap">
            <div className="flex img-fluid">
                <img src={food} alt="food" />
            </div>

            <div className="about-info">
                <h1 className="us">
                    About Us
                </h1>

                <p className="para2">
                    Lorem Ipsum is simply dummy text of the printing and<br></br> typesetting industry. Lorem Ipsum has been the industrys<br></br> standard dummy text ever since the 1500s, when an unknown<br></br> printer took a galley of type and scrambled it to make a type<br></br> specimen book. t has survived not only five centuries.
                </p>
                <button className="explore"><span className='color'>Read More</span></button>
            </div>
        </div>
    </div> */}
    <div className="container-fulid container2">
        <div className="row about-info">
            <div className="col-12 col-lg-6">
                <img src={food} alt="food" />
            </div>
            <div className="col-12 col-lg-6 right-container">
                <h1 className="us">About Us</h1>
                <p className="para2">Lorem Ipsum is simply dummy text of the printing and<br></br> typesetting industry. Lorem Ipsum has been the industrys<br></br> standard dummy text ever since the 1500s, when an unknown<br></br> printer took a galley of type and scrambled it to make a type<br></br> specimen book. t has survived not only five centuries.</p>
                <button className="explore"><span className='color'>Read More</span></button>
            </div>
        </div>
    </div>

        </>
    )
}
