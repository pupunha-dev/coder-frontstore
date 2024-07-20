
'use client'

import { CardProduto } from "@/components/produto/CardProduto";
import Pagina from "@/components/template/Pagina";
import produtos from "@/data/constants/produtos";
import useCarrinho from "@/data/hooks/useCarrimho";

export default function Home() {
  const { } = useCarrinho()
  return (
    <Pagina>
      <div className="flex gap-5 justify-center flex-wrap">
        {produtos.map((produto) => (
          <CardProduto key={produto.id} produto={produto}/>
        ))}
      </div>
    </Pagina>
  );
}
