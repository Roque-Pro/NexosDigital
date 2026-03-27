import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import ProtectedRoute from "./components/ProtectedRoute";
import Landing from "./pages/Landing";

// Lazy load pages
const Auth = lazy(() => import("./pages/Auth"));
const PlanAuth = lazy(() => import("./pages/PlanAuth"));
const DiagnosticsCRM = lazy(() => import("./pages/DiagnosticsCRM"));
const BlogAdmin = lazy(() => import("./pages/BlogAdmin"));
const InstagramReelsAdmin = lazy(() => import("./pages/InstagramReelsAdmin"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AutoClubPro = lazy(() => import("./pages/AutoClubPro"));
const AboutMe = lazy(() => import("./pages/AboutMe"));

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-600 mb-4">
        <div className="animate-spin h-6 w-6 border-2 border-white border-t-transparent rounded-full" />
      </div>
      <p className="text-gray-600">Carregando...</p>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/diagnostico-gratuito" element={<PlanAuth />} />
              <Route path="/autoclub-pro" element={<AutoClubPro />} />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route
                path="/crm"
                element={
                  <ProtectedRoute>
                    <DiagnosticsCRM />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/blog-admin"
                element={
                  <ProtectedRoute>
                    <BlogAdmin />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/instagram-reels-admin"
                element={
                  <ProtectedRoute>
                    <InstagramReelsAdmin />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
