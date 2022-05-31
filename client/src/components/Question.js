import { useState } from "react";
const Question = ({socket}) => {

    const [answer, setAnswer] = useState("");
    const [check, setCheck] = useState(true);

    const handleAnswerInputChange = (e) => {
        setAnswer(e.target.value);
      };

    const sendAnswer = () =>{
       socket.emit("send-answer", answer);
       setCheck(false);
    };
    if(answer === "" || check === true) return(
        <div className="question-box">
                <p>Intrebare : </p>
            <div>
            <input
                value={answer}
                placeholder="Enter your answer"
                type="text"
                onChange={handleAnswerInputChange}
            ></input>
            <button onClick={sendAnswer}>Send answer!</button>
            </div>
      </div>
    );

    return <p>Thank you!</p>
};

export default Question;