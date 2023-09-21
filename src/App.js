import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="newRecipe" element={<NewRecipeScreen />} />
        <Route path="recipe/:id" element={<DetailScreen />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
