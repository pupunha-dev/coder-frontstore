import { createContext } from "react"

interface ContextoCarrinhoProps {
    nome: string 
}

const ContextoCarrinho = createContext<ContextoCarrinhoProps>({} as any);

const ProvedorCarrinho = (props: any) => {
  return (
    <ContextoCarrinho.Provider value={{nome: "Daniel Provider"}}>
        {props.children}
    </ContextoCarrinho.Provider>
  )
}

export { ProvedorCarrinho, ContextoCarrinho }