import { useState } from "react";
import {
    Bullet,
    Button,
    Card,
    Container,
    WrapperContainer,
    Line,
} from "./styles";

const services = [
    {
        title: "Sistemas, Sites e Landing Pages",
        text: "Criamos sistemas personalizados, site institucionais e todo tipo de página de vendas, as famosas Landing Pages.",
        image: "/assets/img/sites.png",
    },
    {
        title: "Tráfego Pago e Estratégias de Marketing",
        text: "Toda a estratégia para tráfego pago e para o marketing para sua marca.",
        image: "/assets/img/trafego.png",
    },
    {
        title: "Automações e Produtividade",
        text: "Automações de tarefas repetitivas da sua marca ou vida pessoal a um clique.",
        image: "/assets/img/automacao.png",
    },
];

export default function Cases() {
    const [containerBackground, setContainerBackground] = useState(
        "/assets/img/sites.png"
    );
    const [bulletHover, setBulletHover] = useState({ idx: 0, state: true });

    const handleBackground = (img: string, idx: number) => {
        setContainerBackground(img);
        setBulletHover({
            idx,
            state: true,
        });
    };

    const handleBulletHover = (idx: number) => {
        setBulletHover({ idx, state: false });
    };

    return (
        <Container image={containerBackground}>
            <WrapperContainer>
                <Line>
                    {[1, 2, 3].map((item, idx) => {
                        return (
                            <Bullet
                                key={item}
                                hover={
                                    bulletHover.idx === idx &&
                                    bulletHover.state === true
                                        ? false
                                        : true
                                }
                            />
                        );
                    })}
                </Line>
                {services.map(({ title, text, image }, idx) => {
                    return (
                        <Card
                            key={idx}
                            onMouseEnter={() => handleBackground(image, idx)}
                            onMouseLeave={() => handleBulletHover(idx)}
                        >
                            <h2>{title}</h2>
                            <p>{text}</p>
                            <Button>VER CASES</Button>
                        </Card>
                    );
                })}
            </WrapperContainer>
        </Container>
    );
}
