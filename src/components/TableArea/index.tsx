import { Item } from '../../types/Item'
import * as C from './styles'
import TableItem from '../TableItem'
type Props = {
  list: Item[]
}

export default function TableArea({ list }: Props) {
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableColumn width={ 100 }>Data</C.TableColumn>
          <C.TableColumn width={ 130 }>Categoria</C.TableColumn>
          <C.TableColumn >Título</C.TableColumn>
          <C.TableColumn width={ 150 }>Valor</C.TableColumn>
        </tr>
      </thead>
      <tbody>
        { list.map((item, index) => (
          <TableItem key={ index } item={ item } />
        )) }
      </tbody>
    </C.Table>
  )
}
