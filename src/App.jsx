import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Productdetails from './Pages/Productdetails'
import CartPage from './Pages/CartPage'
import Navbar from './Component/Navbar'
import './App.css'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './App/Store'
import AdminLayout from "./Admin/AdminLayout";
import DashboardHome from "./Admin/DashboardHome";
import ManageProducts from "./Admin/ManageProducts";
import AddProduct from "./Admin/AddProduct";
import Orders from "./Admin/Orders";
import EditProduct from './Admin/EditProduct'
import Checkout from './Pages/Checkout'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Register from './Pages/Register'
import MyAccount from './Pages/MyAccount'
import MainLayout from './Component/MainLayout'
import UserLayout from './User/UserLayout'
import UserDashboardHome from './User/UserDashboardHome'
import UserOrders from './User/UserOrders'
import UserWishlist from './User/UserWishlist'
import UserAddress from './User/UserAddress'
import UserSettings from './User/UserSettings'
import CategoryProducts from './Pages/CategoryProducts'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter >
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<Productdetails />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/about' element={<MainLayout><About /></MainLayout>} />
        <Route path='/contact' element={<MainLayout><Contact /></MainLayout>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/account' element={<MyAccount />} />
        <Route path="/category/:category" element={<CategoryProducts />} />

        <Route path="/admin" element={<AdminLayout><DashboardHome /></AdminLayout>} />
        <Route path="/admin/products" element={<AdminLayout><ManageProducts /></AdminLayout>} />
        <Route path="/admin/add-product" element={<AdminLayout><AddProduct /></AdminLayout>} />
        <Route path="/admin/orders" element={<AdminLayout><Orders /></AdminLayout>} />
        <Route path="/admin/edit-product/:id" element={<AdminLayout><EditProduct /></AdminLayout>}/>

        <Route path="/user" element={<UserLayout><UserDashboardHome /></UserLayout>} />
        <Route path="/user/orders" element={<UserLayout><UserOrders /></UserLayout>} />
        <Route path="/user/wishlist" element={<UserLayout><UserWishlist /></UserLayout>} />
        <Route path="/user/address" element={<UserLayout><UserAddress /></UserLayout>} />
        <Route path="/user/settings" element={<UserLayout><UserSettings /></UserLayout>} />
      </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App