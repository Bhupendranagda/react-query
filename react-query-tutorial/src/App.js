import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.page";
import Superheroes from "./components/Superheroes.page";
import RQSuperheroes from "./components/RQSuperheroes.page";
import { QueryClientProvider, QueryClient } from "react-query";
import "./App.css";
import { ReactQueryDevtools } from "react-query/devtools";
import { RQSuperHero } from "./components/RQSuperHero.page";
import { ParallerQueries } from "./components/ParallerQueries.page";
import { DynamicParallelPage } from "./components/DynamicParallel.page";
import DependentQueriesPage from "./components/DependentQueries.page";
import PaginatedQueries from "./components/PaginatedQueries.page";
import InfiniteQueries from "./components/InfiniteQueries.page";
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
            {/* Route For Parallel Queries */}
            <Route path="/rq-parallel" element={<ParallerQueries />} />
            <Route
              path="/rq-dependent"
              element={<DependentQueriesPage email="honey@gmail.com" />}
            />
            {/* Route For dynamic paraller queries */}
            <Route
              path="/rq-dynamic-parallel"
              element={<DynamicParallelPage heroIds={[1, 3]} />}
            />
            {/* Route for Paginated Queries */}
            <Route path="/rq-paginated" element={<PaginatedQueries />} />
            <Route path="/rq-infinite" element={<InfiniteQueries />} />
          </Routes>
        </BrowserRouter>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
