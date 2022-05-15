import { useState } from "react";

const Exercitiul4 = (props) =>{

    const [culoare, setCuloare] = useState("#000000");

    const handleClick = () =>{
            props.handleClick({ culoare });
    };

    return (
        <div className="container-ex4">
             <input 
                type="color" 
                value={culoare} 
                onChange={(e) => setCuloare(e.target.value)}
            ></input>
            <button onClick={handleClick}>Add</button>
        </div>
    );
};

export default Exercitiul4;