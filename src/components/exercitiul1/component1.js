import Exercitiul2 from "../exercitiul2/exercitiul2";
const Component1 = () =>{
    return (
    <div className="exemplu">
        Exercitiu 1
        <Exercitiul2 culoare="red" numeProdus="Rosie" pretProdus="2" catProdus="Legume"/>
        <br />
        <Exercitiul2 />
        <br />
        <Exercitiul2 culoare="green" numeProdus="Salata" pretProdus="3" catProdus="Legume"/>
        
    </div>

    );
};

export default Component1;