import Pagina from "@/components/template/Pagina";
import { IconShoppingCart } from "@tabler/icons-react";

export default function Carrinho() {
  return (
    <Pagina>
      <div>
        <IconShoppingCart size={32} stroke={1}></IconShoppingCart>
      </div>
    </Pagina>
  )
}