import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./lib/theme-context";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { Sponsors } from "./pages/Sponsors";
import { Tracks } from "./pages/Tracks";
import { NewFaq } from "./pages/NewFaq";
import { Insights } from "./pages/Insights";
import NotFound from "./pages/NotFound";
import { LoadingPage } from "./components/LoadingPage";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {isLoading ? (
            <LoadingPage onComplete={handleLoadingComplete} loadingTime={5000} />
          ) : (
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/sponsors" element={<Sponsors />} />
                <Route path="/tracks" element={<Tracks />} />
                <Route path="/faq" element={<NewFaq />} />
                <Route path="/insights" element={<Insights />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          )}
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
