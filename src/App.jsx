import "./App.css";
import Topo from "./components/Topo/index.jsx";
import SecaoCapa from "./components/SecaoCapa/index.jsx";
import SecaoProdutos from "./components/SecaoProdutos/index.jsx";
import SecaoSobre from "./components/SecaoSobre/index.jsx";
import SecaoContatos from "./components/SecaoContatos";
import Rodape from "./components/Rodape";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
    return (
        <>
            <Topo />
            <SecaoCapa />
            <SecaoProdutos />
            <SecaoSobre />
            <SecaoContatos />
            <Rodape />
            <WhatsAppButton />
        </>
    );
}

export default App;
