import { useEffect, useState } from "react"

const Notification = ({name, socket}) => {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 5000);
    }, []);

    if(!loaded) return (

        <div className="chat-box" style={{width: 500, height: 20}}>
            <p>{name} a trimis un mesaj.</p>
      </div>
    );

    return;
};

export default Notification;