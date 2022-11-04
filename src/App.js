import { useState, useEffect} from 'react';
import './App.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeView from './Views/HomeView';
import CategoriesView from './Views/CategoriesView';
import ProductsView from './Views/ProductsView';
import ProductDetailsView from './Views/ProductDetailsView';
import ContactsView from './Views/ContactsView';
import SearchView from './Views/SearchView';
import CompareView from './Views/CompareView';
import WishListView from './Views/WishListView';
import ShoppingcartView from './Views/ShoppingcartView';
import NotFoundView from './Views/NotFoundView';
import { ProductContext } from './Contexts/Context';


function App() {

    
    const [products, setProducts] = useState({
      allProducts: [],
      featuredProducts: []
    })
   


    useEffect(() => {
      const fetchAllProducts = async ()  => {

         let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
        /* setProducts(await result.json()) */
        setProducts({...products, allProducts: await result.json()})
      }
      fetchAllProducts()


            const fetchFeaturedProducts = async ()  => {

         let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
        setProducts({...products, featuredProducts: await result.json()})
      }
      fetchFeaturedProducts()
    
    }, [])


  return (
    <BrowserRouter>
      <ProductContext.Provider value={products}> 
        <Routes> 
          <Route path="/" element={<HomeView />} />
          <Route path="/categories" element={<CategoriesView/>} />
          <Route path="/products" element={<ProductsView/>} />
          <Route path="/products/:id" element={<ProductDetailsView />} />
          <Route path="/contacts" element={<ContactsView />} />
          <Route path="/search" element={<SearchView />} />
          <Route path="/compare" element={<CompareView />} />
          <Route path="/wishlist" element={<WishListView />} />
          <Route path="/shoppingcart" element={<ShoppingcartView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </ProductContext.Provider>
    </BrowserRouter>
  );
}

export default App;
