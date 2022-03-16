import React from 'react';

function Home() {
    return (
        <div className='home-component-div'>
            <div className='home-component-banner-div'>
                <img className='home-component-banner-img' src='https://www.forafinancial.com/wp-content/uploads/2020/01/foodtruck.jpg' alt='Food Truck'/>
                <h1>
                    Find where to eat...
                </h1>
            </div>
            <div className='home-component-bottom-div'>
                <div className='home-component-trucks'>
                    {/* TO DO: these food trucks should be from the DB - TBD which 3 */}
                    <h3 className='home-component-truck-name'>
                        Food Truck 1
                    </h3>
                    <img className='home-component-truck-img' src='https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_662,q_65,w_552/v1/clients/outerbanks/_caravan_bar_1024x866_00e089b9-e4a4-498f-b66a-eab48f1b685f.jpg' alt='Food Truck'/>
                    <h3 className='home-component-truck-name'>
                        Food Truck 2
                    </h3>
                    <img className='home-component-truck-img' src='https://i.pinimg.com/originals/6e/b1/0a/6eb10a1f5b02a135100006f8051c66ad.jpg' alt='Food Truck'/>
                    <h3 className='home-component-truck-name'>
                        Food Truck 3
                    </h3>
                    <img className='home-component-truck-img' src='https://i.pinimg.com/originals/f0/f7/78/f0f778eef302387123967215bc3be619.jpg'/>
                </div>
            </div>
        </div>
    )
}

export default Home;
