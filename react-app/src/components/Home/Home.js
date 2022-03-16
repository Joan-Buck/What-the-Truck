import React from 'react';

function Home() {
    return (
        <div className='home-component-div'>
            <div >
                <img> </img>
                <h1>
                    Find where to eat...
                </h1>
            </div>
            <div>
                <div>
                    {/* TO DO: these food trucks should be from the DB - TBD which 3 */}
                    <h3>
                        Food Truck 1
                    </h3>
                    <img> </img>
                    <h3>
                        Food Truck 2
                    </h3>
                    <img> </img>
                    <h3>
                        Food Truck 3
                    </h3>
                    <img> </img>
                </div>
            </div>
        </div>
    )
}

export default Home;
