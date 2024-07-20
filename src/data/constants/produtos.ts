import Produto from "../model/Produto";

const produtos: Produto[] = [
  {
    id: 1,
    nome: 'Smartphone Galaxy Z10 Pro',
    descricao: 'Smartphone Galaxy Z10 Pro com tela AMOLED de 6.7", processador Snapdragon 895 e câmera quádrupla de 108MP. Equipado com 12GB de RAM, 256GB de armazenamento e bateria de 5000mAh com carregamento rápido de 65W, oferece desempenho e inovação excepcionais. Suporte 5G, Android 12 e proteção IP68 completam a experiência.',
    preco: 1999.9,
    imagem: 'https://images.unsplash.com/photo-1518991043280-1da61d9f3ac5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    nome: 'MacBook Pro 16"',
    descricao: 'O MacBook Pro 16" oferece uma experiência incomparável com o chip M1 Pro, 16GB de RAM e 512GB de SSD. Com tela Retina XDR, bateria de longa duração e múltiplas portas Thunderbolt 4, é a escolha perfeita para profissionais exigentes. Elegância e desempenho em um só dispositivo.',
    preco: 7250,
    imagem: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    nome: 'PC Gamer Thunderbolt X',
    descricao: 'O PC Gamer Thunderbolt X vem com processador Intel i9-12900K, 32GB de RAM e placa de vídeo NVIDIA RTX 3080. Equipado com SSD de 1TB, sistema de resfriamento líquido e iluminação RGB personalizável, oferece desempenho extremo para jogos e multitarefa. Experimente gráficos incríveis e velocidade incomparável.',
    preco: 4299.9,
    imagem: 'https://images.unsplash.com/photo-1660855551550-2696677aaf28?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 4,
    nome: 'Console Gamer Ultimate X',
    descricao: 'O Console Gamer Ultimate X oferece gráficos de última geração com processador AMD Ryzen, 16GB de RAM e GPU customizada. Com 1TB de armazenamento SSD, suporte a resolução 4K e taxa de atualização de 120Hz, proporciona uma experiência de jogo imersiva e fluida. Desfrute de jogos com desempenho extremo e tempos de carregamento ultrarrápidos.',
    preco: 2890,
    imagem: 'https://images.unsplash.com/photo-1507457379470-08b800bebc67?q=80&w=1809&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
]

export default produtos;