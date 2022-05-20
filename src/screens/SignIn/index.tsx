import React, { useState } from "react";
import { Alert, KeyboardAvoidingView, StatusBar } from "react-native";
import Button from "../../components/Button";
import InputText from "../../components/InputText";
import { BG, Footer, Form, Header, SubTitulo, Titulo } from './styles';
import * as Yup from 'yup';
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/auth";

export default function SignIn() {
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const { navigate } = useNavigation();
    const { signIn } = useAuth();

    const handleLogin = async () => {
        try {
            const schema = Yup.object().shape({
                email: Yup.string().required('Campo Email é obrigatório').email('Email inválido'),
                senha: Yup.string().required('Campo Senha é obrigatório')
            });
            await schema.validate({ email, senha });

            signIn(email, senha);

        } catch (e) {
            if (e instanceof Yup.ValidationError) {
                Alert.alert('Erro', e.message);
            }
        }
    }

    const handleCriarConta = () => {
        navigate('SignUpStep1');
    }

    return <KeyboardAvoidingView behavior='position' enabled >
        <BG>
            <StatusBar translucent barStyle='dark-content' backgroundColor='transparent' />
            <Header>
                <Titulo>Estamos quase lá.</Titulo>
                <SubTitulo>Faça seu login para começar uma experiencia incrível.</SubTitulo>
            </Header>

            <Form>
                <InputText
                    icon='email'
                    placeholder='E-mail'
                    keyboardType='email-address'
                    value={email}
                    onChangeText={setEmail}
                />
                <InputText
                    icon='lock'
                    placeholder='Senha'
                    secureTextEntry
                    value={senha}
                    onChangeText={setSenha}
                />
            </Form>

            <Footer>
                <Button label='Login' onPress={handleLogin} />
                <Button label='Criar conta' onPress={handleCriarConta} />
            </Footer>
        </BG>
    </KeyboardAvoidingView>
}