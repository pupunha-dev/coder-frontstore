'use client'

import Pagina from "@/components/template/Pagina";
import useCarrinho from "@/data/hooks/useCarrimho";

export default function Carrinho() {
  const { nome } = useCarrinho();

  return (
    <Pagina>
      {nome}
    </Pagina>
  )
}