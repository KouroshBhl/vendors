import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import AppLayout from './ui/AppLayout';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Admins from './pages/Admins';
import Orders from './pages/Orders';
import UiSettings from './pages/UiSettings';
import Users from './pages/Users';
import PageNotFound from './pages/PageNotFound';
import GlobalStyle from './styles/GlobalStyle';
import Categories from './pages/Categories';
import Brands from './pages/Brands';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to='dashboard' />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='admins' element={<Admins />} />
            <Route path='orders' element={<Orders />} />
            <Route path='products/all' element={<Products />} />
            <Route path='products/categories' element={<Categories />} />
            <Route path='products/brands' element={<Brands />} />

            <Route path='uisettings' element={<UiSettings />} />
            <Route path='users' element={<Users />} />
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
