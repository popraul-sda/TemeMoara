import { useState, useEffect } from "react";
const Feedback = ({socket}) => {

    const [feedback, setFeedBack] = useState("");
    const [check, setCheck] = useState(true);
    const [disabled, setDisabled] = useState(true);
    const [index, setIndex] = useState(-1);

    const handleFeedbackInputChange = (e) => {
        setFeedBack(e.target.value);
      };

    const sendFeedback = () =>{
       socket.emit("send-feedback", index, feedback);
       setCheck(false);
    };

    useEffect(() => {

        socket.on("changed-state", (state, index) => {
        setDisabled(state);  
        setIndex(index);
      });
      
      }, []);

    if(feedback === "" || check === true) return(
        <div className="question-box">
            <input
                value={feedback}
                placeholder="Feedback..."
                type="text"
                onChange={handleFeedbackInputChange}
            ></input>
            <button onClick={sendFeedback}  disabled={disabled}>Send</button>
      </div>
    );

    return <p>Thank you!</p>
};

export default Feedback;