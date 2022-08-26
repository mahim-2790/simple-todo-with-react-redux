import { Provider } from "react-redux";
import "./App.css";
import CompletedTodoList from "./components/CompletedTodoList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <div className="grid place-items-center bg-blue-100 min-h-screen px-6 font-sans overflow-y-auto">
        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white mt-16 mb-5">
          <Header />

          <hr className="mt-4" />

          <TodoList />

          <hr className="mt-4" />

          <Footer />
        </div>
        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white mb-5">
          <CompletedTodoList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
