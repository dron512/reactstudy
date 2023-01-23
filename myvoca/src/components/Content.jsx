import React, { useEffect, useState } from "react";
function Content() {
  const [marginL, setMarginL] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (marginL < -1200) setMarginL(0);
      else setMarginL(marginL - 300);
    }, 2000);
  }, [marginL]);
  return (
    <>
      <h1>Content</h1>
      <div id="slider">
        <div style={{ marginLeft: `${marginL}px` }}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>
      </div>
    </>
  );
}

export default Content;
