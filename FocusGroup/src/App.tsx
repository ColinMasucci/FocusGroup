import PublicRoutes from "./routes/PublicRoutes";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main style={{ padding: "1rem" }}>
        <PublicRoutes />
      </main>
      <Footer />
    </>
  );
};

export default App;

