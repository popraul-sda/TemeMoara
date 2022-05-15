import { useState } from "react";

const Exercitiul2 = () =>{
    const [open, setColor] = useState(false);

    const toggleColor = () => {
        setColor(!open);
    };

    return (
    <div className={`container-ex3 ${open ? "open" : "close"}`}>
        <div className="container-ex3-nume" onClick={toggleColor}>Pop Raul</div>
        <div className="container-ex3-text">Numele de alaturi este colorat.</div>
    </div>
    );
};

export default Exercitiul2;