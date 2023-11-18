import Produto from '../components/Produto'

import { useGetItensQuery } from '../Redux/api'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos, isLoading, error } = useGetItensQuery()

  if (isLoading) return <h1>Carregando</h1>

  if (error) {
    console.error('Erro na solicitação:', error)
    return <h2>Ocorreu um erro ao carregar os Produtos.</h2>
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
