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



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/categories" element={<CategoriesView />} />
        <Route path="/products" element={<ProductsView />} />
        <Route path="/products/:name" element={<ProductDetailsView />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="/compare" element={<CompareView />} />
        <Route path="/wishlist" element={<WishListView />} />
        <Route path="/shoppingcart" element={<ShoppingcartView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
