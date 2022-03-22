import React, { useEffect, useState } from "react";
import './ErrorPage.css';

const FoodTruckErrorPage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true)
  }, [])

  if (!loaded) {
    return null;
  }

  return (
    <div className="error-main-container">
        <div className="error-sub-container">
            <h1>It seems the selected food truck was removed.</h1>
        </div>
    </div>
  )
}

export default FoodTruckErrorPage;
