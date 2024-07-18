import Header from "./Header"

export interface PaginaProps {
  children: React.ReactNode
  className?: string
}

export default function Pagina(props: PaginaProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={`${props.className ?? ''} w-[1200px] mx-auto h-full flex-1 py-4`}>
        {props.children}
      </main>
    </div>
  )
}