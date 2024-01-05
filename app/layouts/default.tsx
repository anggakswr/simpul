"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const queryClient = new QueryClient();

const Default = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Default;
