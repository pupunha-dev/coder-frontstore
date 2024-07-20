'use client'

import { ProvedorCarrinho, ContextoCarrinho } from "@/data/context/ContextoCarrinho"

type LayoutProps = {
    children: React.ReactNode
}

export default function Layout(props: LayoutProps){
    return(
       <ProvedorCarrinho>
        {props.children}
       </ProvedorCarrinho>
    )
}