import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../Redux/store'

import { IProduto, setCart } from '../../Redux/reducers/cart'
import { removeFavorite, setFavorites } from '../../Redux/reducers'

import * as S from './styles'

type Props = {
  produto: IProduto
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()
  const favorites = useSelector((state: RootState) => state.favorites.favorites)
  const useCart = useSelector((state: RootState) => state.cart.carts)
  const isFavorited = favorites.some((favorite) => favorite.id === produto.id)

  const handleAddToFavorites = () => {
    const isAlreadyFavorite = favorites.some(
      (favorite) => favorite.id === produto.id
    )

    if (isAlreadyFavorite) {
      dispatch(removeFavorite(produto.id))
    } else {
      dispatch(setFavorites([...favorites, produto]))
    }
  }

  const handleAddToCart = () => {
    const isAlreadyCart = useCart.some((cart) => cart.id === produto.id)

    if (isAlreadyCart) {
      alert('Item já adicionado aos carrinho')
      dispatch(removeFavorite(produto.id))
    } else {
      dispatch(setCart([...useCart, produto]))
    }
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={handleAddToFavorites} type="button">
        {isFavorited ? '- Remover dos favoritos' : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={handleAddToCart} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
