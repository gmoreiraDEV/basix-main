import Header from "../Header";
import { Blobs, Container, Content, WrapperContent } from "./styles";
import { StartButton } from "../Button";
import Blob from "../Blob";

export default function Hero() {
    return (
        <Container>
            <Header />
            <WrapperContent>
                <Content>
                    <h1>Visitantes em clientes fiéis</h1>
                    <p>
                        Maximize seu potencial de conversão online com nossa
                        equipe, agência especializada em criação de landing
                        pages personalizadas de alta performance e gestão de
                        tráfego.
                    </p>
                    <p>
                        Aumente suas vendas, gere mais leads e crie uma
                        experiência digital excepcional para seus clientes.
                    </p>
                    <StartButton href="/">Começar</StartButton>
                </Content>
                <Blobs>
                    <Blob />
                </Blobs>
            </WrapperContent>
        </Container>
    );
}
