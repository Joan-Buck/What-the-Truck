import React, { useEffect, useState } from "react";
import './ErrorPage.css';

function FoodTruckErrorPage() {
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
            <h1>The selected food truck is no longer in service.</h1>
        </div>
    </div>
  )
}

export default FoodTruckErrorPage;