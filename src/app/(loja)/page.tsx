
'use client'

import { CardProduto } from "@/components/produto/CardProduto";
import Pagina from "@/components/template/Pagina";
import produtos from "@/data/constants/produtos";
import useCarrinho from "@/data/hooks/useCarrimho";

export default function Home() {
  const { nome } = useCarrinho()
  return (
    <Pagina>
      {produtos.map((produto) => (
        <CardProduto key={produto.id} produto={produto}/>
      ))}
    </Pagina>
  );
}
