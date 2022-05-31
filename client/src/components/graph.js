import { useEffect, useState } from "react";
const Graph = ({ socket }) => {

  const [sizeYes, setSizeYes] = useState(466);
  const [sizeNo, setSizeNo] = useState(466);
  const [sizeMaybe, setSizeMaybe] = useState(466);


useEffect(() => {

  socket.on("updated-graph", ( yes, no, maybe ) => {
    setSizeYes(yes);
    setSizeNo(no);
    setSizeMaybe(maybe);
});

}, []);



  return (
    <div className="graph-box">
      <div className="yes" style={{
      width: `${sizeYes}px`
    }}></div>
      <div className="no" style={{
      width: `${sizeNo}px`
    }}></div>
      <div className="maybe" style={{
      width: `${sizeMaybe}px`
    }}></div>
    </div>
  );
};

export default Graph;