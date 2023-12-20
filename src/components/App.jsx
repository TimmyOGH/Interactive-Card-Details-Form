import React, { useState, useEffect } from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

function App() {
  const [chname, setChname] = useState("JANE APPLESEED");
  const [cnum, setCnum] = useState("0000 0000 0000 0000");
  const [mm, setMm] = useState("00");
  const [yy, setYy] = useState("00");
  const [cvc, setCvc] = useState("000");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1026);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1026);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="main_container">
      <LeftContent
        chname={chname}
        cnum={cnum}
        mm={mm}
        yy={yy}
        cvc={cvc}
        isMobile={isMobile}
      />
      <RightContent
        chname={chname}
        cnum={cnum}
        mm={mm}
        yy={yy}
        cvc={cvc}
        setChname={setChname}
        setCnum={setCnum}
        setMm={setMm}
        setYy={setYy}
        setCvc={setCvc}
        isMobile={isMobile}
      />
    </div>
  );
}

export default App;