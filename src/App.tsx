import { Header } from './components/header'
import { Products } from './components/products'
import { Cart } from './components/cart'
import { SearchValueProvider } from './context/searchValueProvider'

export function App() {

  return (
      <SearchValueProvider>
        <Header />
        <Products />
        <Cart />
      </SearchValueProvider>
  )
}

