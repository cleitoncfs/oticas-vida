import SecaoCapa from "../SecaoCapa/index";
import SecaoSobre from "../SecaoSobre/index";
import SecaoProdutos from "../SecaoProdutos/index";
import SecaoContato from "../SecaoContato/index";

export default function Conteudo() {
    return (
        <main>
            <SecaoCapa />
            <SecaoProdutos />
            <SecaoSobre />
            <SecaoContato />
        </main>
    );
}
