import Home from './pages/home/Home'
import React from 'react'

function App() {

  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  
  React.useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      <Home isMobile={isMobile} />
    </div>
  );
}

export default App;
