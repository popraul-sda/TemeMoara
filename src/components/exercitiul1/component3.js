import { useState } from "react";
import Exercitiul4 from "../exercitiul4/exercitiul4";
import CodCuloare from "../exercitiul4/codCuloare";
const Component3 = () =>{

    const [codCulori, setCodCulori] = useState([
        { id: 0, text:"#000000" },
    ]);

    const addCodCuloare = (codCuloare) =>{
        const newCodCulori = [...codCulori];
        codCuloare.id = codCulori.length;

        newCodCulori.push(codCuloare);

        setCodCulori(newCodCulori);
    };

    const stergeCuloare = (id) => {
        const newCodCulori = codCulori.filter((codCuloare) => codCuloare.id !== id);

        setCodCulori(newCodCulori);
    };
 
    return (
    <div className="exemplu">
        Exercitiu 3
        <br />
        <Exercitiul4 handleClick={addCodCuloare} />
        <br />
        <div className="d-flex">
        {codCulori.map((codCuloare) => (
            <CodCuloare key={codCuloare.id} {...codCuloare} handleRemove={stergeCuloare} />
        ))}
        </div>
    </div>
    );
};

export default Component3;