import useCarrinho from "@/data/hooks/useCarrimho"
import { IconShoppingCart } from "@tabler/icons-react"
import Link from "next/link"

export const Carrinho = () => {
  const { quantidadeItens } = useCarrinho()
  return (
    <Link href="/carrinho">
      <div className="flex relative">
        <IconShoppingCart size={32} stroke={1}></IconShoppingCart>
        <div className="absolute bg-red-600 rounded-full -top-2.5 -right-2.5 flex items-center justify-center text-xs w-6 h-6">
          {quantidadeItens}
        </div>
      </div>
    </Link>
  )
}