import { useEffect, useState } from "react";
const Exercitiul5 = () =>{

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 5000);
    }, []);

    if(!loaded) return <div>Loading, please wait</div>

    return (
    <div className="container-ex5">
        Finished loading
    </div>
    );
};

export default Exercitiul5;