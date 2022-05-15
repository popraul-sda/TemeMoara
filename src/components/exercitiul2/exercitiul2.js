const Exercitiul2 = (props) =>{
    return (
    <div className="container-produs">
        <div className="denumire">{props.numeProdus}</div>
        <div className="pret">{props.pretProdus}</div>
        <div className="categorie" style={{ backgroundColor: props.culoare}}>{props.catProdus}</div>
    </div>
    );
};

Exercitiul2.defaultProps = {
    numeProdus: "Nume inexistent",
    pretProdus: "Pret inexistent",
    catProdus: "Categorie inexistenta",
    culoare: "white",
    
};

export default Exercitiul2;