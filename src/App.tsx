import { Suspense, useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./components/Navbar.css";
import type { Technology } from "./types/type";
import TechProduct from "./components/techProduct";
import Stack from "./components/stack";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Footer from "./components/footer";

const promiseData = async (): Promise<Technology[]> => {
  const res = await fetch("/data/data.json");
  const data = await res.json();
  return data;
};
const techProductpromise = promiseData();

function App() {
  const [stack, setStack] = useState<Technology[]>([]);

  function handleAddToStack(technology: Technology) {
    const alreadyExists = stack.some((item) => item.id === technology.id);

    if (alreadyExists) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setStack((previousStack) => [...previousStack, technology]);

    toast.success(`${technology.name} added to your stack!`);
  }

  function handleRemovefromstack(id: Technology["id"]) {
    setStack((previousStack) => previousStack.filter((tech) => tech.id !== id));
  }
  function handleClearStack() {
    setStack([]);
  }
  return (
    <>
      <Navbar />
      <Hero />
      <div className="page-layout">
        <div className="products-area">
          <Suspense fallback={<h1>Looding........</h1>}>
            <TechProduct
              techProductpromise={techProductpromise}
              onAddToStack={handleAddToStack}
            />
          </Suspense>
        </div>
        <Stack
          stack={stack}
          onRemove={handleRemovefromstack}
          onClear={handleClearStack}
        />
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
      <Footer />
    </>
  );
}

export default App;
