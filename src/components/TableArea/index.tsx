import * as C from './styles'

export default function TableArea() {
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

      </tbody>
    </C.Table>
  )
}
