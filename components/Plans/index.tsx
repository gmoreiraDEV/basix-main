import {
    Container,
    WrapperCards,
    Card,
    Content,
    Label,
    IconPattern,
} from "./styles";

export default function Plans() {
    return (
        <Container>
            <WrapperCards>
                <Card>
                    <Content>
                        <header>
                            <h2>Starter</h2>
                            <span>Mensal</span>
                        </header>
                        <main>
                            <ul>
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                                <li>Item 4</li>
                                <li>Item 5</li>
                                <li>Item 6</li>
                            </ul>
                        </main>
                        <button>Começar</button>
                    </Content>
                </Card>
                <Card plus={true}>
                    <Content>
                        <header>
                            <h2>Plus</h2>
                            <div>
                                <span>Trimestral</span>
                                <Label>15off</Label>
                            </div>
                        </header>
                        <main>
                            <ul>
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                                <li>Item 4</li>
                                <li>Item 5</li>
                                <li>Item 6</li>
                            </ul>
                        </main>
                        <button>Começar</button>
                    </Content>
                </Card>
                <Card>
                    <Content>
                        <header>
                            <h2>Premium</h2>
                            <div>
                                <span>Semestral</span>
                                <Label>20off</Label>
                            </div>
                        </header>
                        <main>
                            <ul>
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                                <li>Item 4</li>
                                <li>Item 5</li>
                                <li>Item 6</li>
                            </ul>
                        </main>
                        <button>Começar</button>
                    </Content>
                </Card>
            </WrapperCards>
            <IconPattern />
        </Container>
    );
}
