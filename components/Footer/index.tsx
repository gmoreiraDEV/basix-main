import { FooterWrapper } from "./styles";

export default function Footer() {
    return (
        <FooterWrapper>
            <p>
                <strong>Copyright © 2023 Basix Digital.</strong>
                Todos os direitos reservados. Um projeto{" "}
                <strong>
                    <a
                        href="https://valenteconsultoria.com.br"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                    >
                        Valente Consultoria e Inovação
                    </a>
                </strong>{" "}
                / CNPJ: 31.803.058/0001-05
            </p>
            <p>
                Av. Paulista, 1471 - Conj 1110, Jd. Paulista - São Paulo - SP,
                01311-927
            </p>
        </FooterWrapper>
    );
}
