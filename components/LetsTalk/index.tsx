import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
    .object({
        name: yup.string().required(),
        email: yup.string().email().required(),
        whatsapp: yup.string().required(),
        message: yup.string().required(),
    })
    .required();

type FormData = yup.InferType<typeof schema>;

import {
    Container,
    Wrapper,
    Header,
    Title,
    Text,
    Form,
    Label,
    LabelText,
    Input,
    Submit,
    TextArea,
} from "./styles";

export default function LetsTalk() {
    const {
        register,
        handleSubmit,
        getFieldState,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
            name: "",
            email: "",
            whatsapp: "",
            message: "",
        },
    });

    const onSubmit = (data: FormData) => console.log(data);

    return (
        <Container>
            <Wrapper>
                <Header>
                    <Title>Vamos conversar?!</Title>
                    <Text>
                        Ficou com alguma dúvida? Mande uma mensagem que logo te
                        responderemos.
                    </Text>
                </Header>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Label>
                        <LabelText>Nome</LabelText>
                        <Input
                            {...register("name")}
                            placeholder="Nome"
                            className={
                                getFieldState("name").isTouched ? "dirty" : ""
                            }
                        />
                        <p>{errors.name?.message}</p>
                    </Label>
                    <Label>
                        <LabelText>Email</LabelText>
                        <Input {...register("email")} placeholder="Email" />
                        <p>{errors.email?.message}</p>
                    </Label>
                    <Label>
                        <LabelText>WhatsApp</LabelText>
                        <Input
                            {...register("whatsapp")}
                            placeholder="WhatsApp"
                        />
                        <p>{errors.whatsapp?.message}</p>
                    </Label>
                    <Label>
                        <LabelText>Mensagem</LabelText>
                        <TextArea
                            {...register("message")}
                            as="textarea"
                            rows={12}
                            placeholder="Mensagem"
                        />
                        <p>{errors.message?.message}</p>
                    </Label>
                    <Submit type="submit">Enviar</Submit>
                </Form>
            </Wrapper>
        </Container>
    );
}
