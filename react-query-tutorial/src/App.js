import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.page";
import Superheroes from "./components/Superheroes.page";
import RQSuperheroes from "./components/RQSuperheroes.page";
import { QueryClientProvider, QueryClient } from "react-query";
import "./App.css";
import { ReactQueryDevtools } from "react-query/devtools";
import { RQSuperHero } from "./components/RQSuperHero.page";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="super-heroes" element={<Superheroes />} />
            <Route path="rq-super-heroes" element={<RQSuperheroes />} />
            {/* Added new route to view single super hero */}
            <Route path="/rq-super-heroes/:heroId" element={<RQSuperHero />} />
          </Routes>
        </BrowserRouter>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
