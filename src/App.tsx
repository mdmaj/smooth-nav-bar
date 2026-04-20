import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "@/lib/react-helmet-async";
import Index from "./pages/Index.tsx";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  { path: "/", element: <Index /> },
  { path: "/projects", element: <Projects /> },
  { path: "*", element: <NotFound /> },
]);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HelmetProvider>
        <Toaster />
        <Sonner />
        <RouterProvider
          router={router}
          // Cast to any to allow newer v7 future flags not present in installed types
          future={{ v7_startTransition: true, v7_relativeSplatPath: true } as any}
        />
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
