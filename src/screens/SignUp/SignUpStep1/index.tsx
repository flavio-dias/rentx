import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, View } from "react-native";
import BackButton from "../../../components/BackButton";
import Bullet from "../../../components/Bullet";
import Button from "../../../components/Button";
import InputText from "../../../components/InputText";
import { BG, Content, ContentText, Footer, Form, Header, Steps, Subtitulo, Titulo } from "../styles";
import * as Yup from 'yup';


export default function SignUpStep1() {
    const { navigate } = useNavigation();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cnh, setCnh] = useState('');

    const handleAvancar = async () => {
        try {
            const schema = Yup.object().shape({
                nome: Yup.string().required('Nome é obrigatório'),
                email: Yup.string().required('Email é obrigatório').email('Email inválido'),
                cnh: Yup.string().required('CNH é obrigatório')
            });

            let data = { nome, email, cnh };
            await schema.validate(data);
            navigate('SignUpStep2', { userInfo: data });
        } catch (e) {
            Alert.alert('Erro', e.message)
        }
    }

    return <BG>
        <Header>
            <BackButton />
            <Steps>
                <Bullet active />
                <Bullet />
            </Steps>
        </Header>
        <Content>
            <View>
                <Titulo>Crie sua conta.</Titulo>
                <Subtitulo>Faça seu cadastro {'\n'}de maneira rápida e fácil.</Subtitulo>
            </View>

            <Form >
                <ContentText>1. Dados</ContentText>
                <InputText icon='person'
                    value={nome}
                    onChangeText={setNome}
                    placeholder='Nome'
                />
                <InputText icon='email'
                    value={email}
                    onChangeText={setEmail}
                    placeholder='E-mail'
                    keyboardType='email-address'
                />
                <InputText icon='credit-card'
                    value={cnh}
                    onChangeText={setCnh}
                    placeholder='CNH'
                    keyboardType='numeric'
                />
            </Form>
            <Footer>
                <Button label='Avançar' onPress={handleAvancar} />
            </Footer>
        </Content>

    </BG>
}