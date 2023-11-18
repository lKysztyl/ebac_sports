import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/store'

import * as S from './styles'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

const Header = () => {
  const useFavorites = useSelector(
    (state: RootState) => state.favorites.favorites
  )

  const useItens = useSelector((state: RootState) => state.cart.carts)
  console.log(useItens)

  const valorTotal = useItens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{useFavorites.length} favoritos</span>
        <img src={cesta} />
        <span>
          {useItens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
