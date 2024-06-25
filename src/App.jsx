import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductCard from "./components/ProductCard/ProductCard";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <NavigationMenu />
      <main className="flex-grow pt-32 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ProductCard
            title="Product 1"
            price={29.99}
            imageUrl="https://via.placeholder.com/150"
          />
          <ProductCard
            title="Product 2"
            price={49.99}
            imageUrl="https://via.placeholder.com/150"
          />
          <ProductCard
            title="Product 3"
            price={19.99}
            imageUrl="https://via.placeholder.com/150"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
