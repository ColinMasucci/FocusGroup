import PublicRoutes from "./routes/PublicRoutes";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <>
      <div className="flex flex-col h-screen w-full overflow-x-hidden">
        
        <main className="flex-1 overflow-y-auto">
          <div className="h-full"><PublicRoutes /></div>
        </main>
      </div>
    </>
  );
};

export default App;

