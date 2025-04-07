//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { DetailProduct } from "./views/DetailProduct";
import { ListProduct } from "./views/ListProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './App.css'

function App() {

  const queryClient = new QueryClient();

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path="/" element={<ListProduct />} />
              <Route path="/detail" element={<DetailProduct />} />
            </Route>
          </Routes>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider> 
    </ChakraProvider >
  )
}

export default App
