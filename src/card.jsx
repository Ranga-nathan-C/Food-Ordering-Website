import foodie1 from './assets/grilled-tomatoes-1-846x846 1.png';
import foodie2 from './assets/meal-prep-ideas-846x846 1 (1).png';
import foodie3 from './assets/meal-prep-ideas-846x846 1.png';
import foodie4 from './assets/grilled-tomatoes-1-846x846 1 (1).png';
import foodie5 from './assets/meal-prep-ideas-846x846 1 (2).png';
import foodie6 from './assets/meal-prep-ideas-846x846 1 (3).png';
import cursor1 from './assets/Group 322.png';
import cursor2 from './assets/Group 323.png';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

export default function Card() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex(currentIndex === 0 ? 1 : 0);
    };

    const handleNext = () => {
        setCurrentIndex(currentIndex === 1 ? 0 : 1);
    };

    return (
        <div className="container d-flex flex-column">
            <h1 className='us2'>Latest Articles</h1>
            <div className='container row'>
                <Carousel controls={false} activeIndex={currentIndex}>
                    <Carousel.Item>
                        <div className='row row1'>
                            <div className="card box1 col-3">
                                <img className='card-img' src={foodie1} alt="foodie" />
                                <h2 className="us1">Grilled Tomatoes at Home</h2>
                                <p className='para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard</p>
                                <button className="explore2"><span className='color1'>Read More</span></button>
                            </div>
                            <div className="card box2 col-3">
                                <img className='card-img'  src={foodie2} alt="foodie" />
                                <h2 className="us1">Snacks for Travel</h2>
                                <p className='para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard</p>
                                <button className="explore2"><span className='color1'>Read More</span></button>
                            </div>
                            <div className="card box3 col-3">
                                <img className='card-img'  src={foodie3} alt="foodie" />
                                <h2 className="us1">Post-workout Recipes</h2>
                                <p className='para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard</p>
                                <button className="explore2"><span className='color1'>Read More</span></button>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row row1">
                            <div className="card box1 col-4">
                                <img className='card-img'  src={foodie4} alt="foodie" />
                                <h2 className="us1">How To Grill Corn</h2>
                                <p className='para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard</p>
                                <button className="explore2"><span className='color1'>Read More</span></button>
                            </div>
                            <div className="card box2 col-4">
                                <img className='card-img'  src={foodie5} alt="foodie" />
                                <h2 className="us1">Crunchwrap Supreme</h2>
                                <p className='para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard</p>
                                <button className="explore2"><span className='color1'>Read More</span></button>
                            </div>
                            <div className="card box3 col-4">
                                <img className='card-img'  src={foodie6} alt="foodie" />
                                <h2 className="us1">Broccoli Cheese Soup</h2>
                                <p className='para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard</p>
                                <button className="explore2"><span className='color1'>Read More</span></button>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='cursor'>
                    <img src={cursor1} alt="" onClick={handlePrev} />
                    <p className='num'>{currentIndex + 1}/2</p>
                    <img src={cursor2} alt="" onClick={handleNext} />
                </div>
        </div>
    );
}

















// import foodie1 from './assets/grilled-tomatoes-1-846x846 1.png';
// import foodie2 from './assets/meal-prep-ideas-846x846 1 (1).png';
// import foodie3 from './assets/meal-prep-ideas-846x846 1.png'
// import foodie4 from './assets/grilled-tomatoes-1-846x846 1 (1).png'
// import foodie5 from './assets/meal-prep-ideas-846x846 1 (2).png'
// import foodie6 from './assets/meal-prep-ideas-846x846 1 (3).png'
// import cursor1 from './assets/Group 322.png'
// import cursor2 from './assets/Group 323.png'
// import { Carousel } from 'react-bootstrap';
// export default function card(){
//     return(
        
//         <div className="container row">
//             <h1 className='us2'>Latest Articles</h1>
//             <div className='container '>
//             <Carousel controls={false}>
//                 <Carousel.Item>
//                     <div>
//                         <div className="card box1 col-lg-4">
//                         <img src={foodie1} alt="foodie" />
//                         <h2 className="us1">Grilled  Tomatoes at Home</h2>
//                         <p className='para'>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard</p>
//                         <button className="explore2"><span className='color1'>Read More</span></button>
//                     </div>
//                     <div className="card box2 col-lg-4">
//                         <img src={foodie2} alt="foodie" />
//                         <h2 className="us1">Snacks for Travel</h2>
//                         <p className='para'>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard</p>
//                         <button className="explore2"><span className='color1'>Read More</span></button>
//                     </div>
                
//                     <div className="card box3 col-lg-4">
//                         <img src={foodie3} alt="foodie" />
//                         <h2 className="us1">Post-workout Recipes</h2>
//                         <p className='para'>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard</p>
//                         <button className="explore2"><span className='color1'>Read More</span></button>
//                     </div>
//                     </div>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <div className="card box1 col-lg-4">
//                         <img src={foodie4} alt="foodie" />
//                         <h2 className="us1">How To Grill Corn</h2>
//                         <p className='para'>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard</p>
//                         <button className="explore2"><span className='color1'>Read More</span></button>
//                     </div>
        
//                     <div className="card box1 col-lg-4">
//                         <img src={foodie5} alt="foodie" />
//                         <h2 className="us1">Crunchwrap Supreme</h2>
//                         <p className='para'>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard</p>
//                         <button className="explore2"><span className='color1'>Read More</span></button>
//                     </div>

//                     <div className="card box1 col-lg-4">
//                         <img src={foodie6} alt="foodie" />
//                         <h2 className="us1">Broccoli Cheese Soup</h2>
//                         <p className='para'>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard</p>
//                         <button className="explore2"><span className='color1'>Read More</span></button>
//                     </div>
//                 </Carousel.Item>
//             </Carousel>
//             <div className='cursor'>
//                 <img src={cursor1} alt="" />
//                 <p className='num'>1/2</p>
//                 <img src={cursor2} alt="" />
//             </div>
//         </div>
//     );



            
            
            {/* <div className='container '>
            <div className=" card box1 col-lg-4">
            <img src={foodie1} alt="foodie" />
            <h2 className="us1">Grilled  Tomatoes at Home</h2>
            <p className='para'>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard</p>
            <button className="explore2"><span className='color1'>Read More</span></button>
            </div>
            <div className=" card box2 col-lg-4">
            <img src={foodie2} alt="foodie" />
                <h2 className="us1">Snacks for Travel</h2>
                <p className='para'>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard</p>
                <button className="explore2"><span className='color1'>Read More</span></button>
            </div>
            <div className="card box3 col-lg-4">
            <img src={foodie3} alt="foodie" />
                <h2 className="us1">Post-workout Recipes</h2>
                <p className='para'>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard</p>
                <button className="explore2"><span className='color1'>Read More</span></button>
                
            </div>
            <div className=" card box1 col-lg-4">
            <img src={foodie4} alt="foodie" />
            <h2 className="us1">How To Grill Corn</h2>
            <p className='para'>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard</p>
            <button className="explore2"><span className='color1'>Read More</span></button>
            </div>
            <div className='cursor'>
            <img src={cursor1} alt="" />
            <p className='num'>1/2</p>
            <img src={cursor2} alt="" />
            </div> */}
            
            {/* <div className=" card box1 col-lg-4">
            <img src={foodie4} alt="foodie" />
            <h2 className="us1">How To Grill Corn</h2>
            <p className='para'>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard</p>
            <button className="explore2"><span className='color1'>Read More</span></button>
            </div>
            <div className=" card box2 col-lg-4">
            <img src={foodie5} alt="foodie" />
                <h2 className="us1">Crunchwrap Supreme</h2>
                <p className='para'>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard</p>
                <button className="explore2"><span className='color1'>Read More</span></button>
            </div>
            <div className="card box3 col-lg-4">
            <img src={foodie6} alt="foodie" />
                <h2 className="us1">Broccoli Cheese Soup</h2>
                <p className='para'>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard</p>
                <button className="explore2"><span className='color1'>Read More</span></button>
            </div> */}
            {/* </div> */}

            
            
//     </div>
//     )
// }