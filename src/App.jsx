import "./App.css";
import Search from "./Search";
import Button from "./Button";

function App() {
  return (
    <main>
      <section>
        <h1>Comfy</h1>
        <Search />
        <Button title="youtube" link={"https://youtube.com"}></Button>
        <Button title="instagram" link={"https://instagram.com"}></Button>
        <Button title="reddit" link={"https://reddit.com"}></Button>
      </section>
    </main>
  );
}

export default App;
