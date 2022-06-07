import { useState,useEffect } from "react";

const StickyNote = ({ socket }) => {

    const stickyNotesId = ["00", "01", "02", "10", "11", "12", "20", "21", "22"];
    const colors = ["greenyellow", "pink", "rgb(102, 174, 216)", "blue", "greenyellow", "rgb(238, 133, 133)", "rgb(238, 133, 133)", "blue", "greenyellow"];
    const [feedback, setFeedback] = useState({id:1, text:"exemplu"});
    const [id, setId] = useState([]);
    const [isActive, setIsActive] = useState([false, false, false, false, false, false, false, false, false]);
    const size = 9;
    const initialValue = [{ id: 0, index:-1, value: "" }];
    const [vector, setVector] = useState(initialValue);

    const addElement = (index, feedback) =>{
        setVector((prevVector) => [
            ...prevVector,
            {
                id :0,
                index: index,
                value: feedback
            },
        ]);
    };

    const changeState = (index) => {
            socket.emit("change-state", false, index);
            var newArray = Array(size).fill(false);
            for(let i = 0; i < isActive.length; i++){
                if(i === index) newArray[i] = true;
                else newArray[i] = false;
            }
            setIsActive(newArray);
    };

    useEffect(() => {

        socket.on("received-feedback", (index, feedback) => { 
           setFeedback(feedback);
           setId(index);
           addElement(index, feedback);
           console.log(vector);
         /*   var newArray = [...feedback];
            for(let i = 0; i < isActive.length; i++){
                if(i === index) newArray[i] = post;
                if(newArray[i] === "" || newArray[i] === undefined) newArray[i] = "";
            }  
            setFeedback(newArray);*/
      });
      
      }, []);

    return (
        <div className="stickynote-container">
            {
                stickyNotesId.map((item, index) => {
                    return (<div id={`child${item}`} style={{
                        padding: 5,
                        border : '1px solid',
                        background: isActive[index] ? 'white' : colors[index],
                        width: '100px',
                        height: '100px'
                    }} key={`item-${index}`} onClick={e => changeState(index)}>
                        <p>{(id === index ? feedback : "")}</p>
                    </div>);
                })
            }
        </div>
    );
};

export default StickyNote;