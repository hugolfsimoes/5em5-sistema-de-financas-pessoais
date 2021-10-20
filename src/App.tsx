import { useState, useEffect } from 'react';
import * as C from './app.styles';
import { Item } from './types/Item'
import { Category } from './types/Category'
import { items } from './data/items'
import { categories } from './data/categories'
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'

function App() {
  const [ list, setList ] = useState(items);
  const [ filteredList, setFilteredList ] = useState<Item[]>([])
  const [ currentMonth, setCurrentMonth ] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [ list, currentMonth ])
  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        ...
      </C.Body>
    </C.Container>
  );
}

export default App;
