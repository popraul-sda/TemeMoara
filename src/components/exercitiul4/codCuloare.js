const CodCuloare = (props) =>{

    const handleRemove = () =>{
        props.handleRemove(props.id);
    };

    return (
        <div className="container-codCuloare" style={{backgroundColor: props.culoare}}>
            <div className="container-codCuloare-text" style={{color: "white"}}>{props.culoare}</div>
            {
                props.handleRemove && <div onClick={handleRemove} className="sterge-culoare" style={{color: "white"}}>X</div> 
            }
        </div>
    );
};

export default CodCuloare;