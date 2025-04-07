'use client'
import axios from "axios";
import { redirect, useParams } from "next/navigation";
import { useEffect, useState } from "react";


function Produto() {
    const id = useParams().id

    const [produto, alteraProduto] = useState([])

    async function buscaPorID(id){
        const response = await axios.get("http://localhost:3000/api/produtos/"+id)
        alteraProduto( response.data )
    }

    useEffect(()=> { 
        if(id){ 
            buscaPorID(id)
        }
        }, [id])

    return ( 
        <div>

            <h1>Detalhes do produto { useParams().id}</h1>
            <br/>
            {
                                produto.length > 0 &&
                                <div>
                                    <p><strong>{produto[0].nome}</strong></p>
                                    <p>R$ <strong>{produto[0].preco.toFixed(2)}</strong></p>
                                    <p>Quantidade em estoque: {produto[0].quantidade}</p>
                                    </div>
                                    
            }
            <button onClick={()=> redirect("/")}>Voltar</button>



            

        </div>
     );
}

export default Produto;