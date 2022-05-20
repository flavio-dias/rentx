import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, View } from "react-native";
import BackButton from "../../../components/BackButton";
import Bullet from "../../../components/Bullet";
import Button from "../../../components/Button";
import InputText from "../../../components/InputText";
import api from "../../../services/api";
import theme from "../../../styles/theme";
import { BG, Content, ContentText, Footer, Form, Header, Steps, Subtitulo, Titulo } from "../styles";

interface ParamsProps {
    userInfo: {
        nome: string,
        email: string,
        cnh: string
    }
}

export default function SignUpStep1() {
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    const { userInfo } = useRoute().params as ParamsProps;
    const { navigate } = useNavigation();

    const validaInputs = () => {
        if (!senha || !confirmaSenha) {
            return Alert.alert('Senha é obrigatório');
        }
        if (senha !== confirmaSenha) {
            return Alert.alert('As senhas não são iguais');
        }
        return true;
    }

    const handleCadastrar = async () => {
        if (validaInputs()) {
            let data = {
                ...userInfo,
                senha
            };
            try {
                await api.post('/users', {
                    name: data.nome,
                    email: data.email,
                    driver_license: data.cnh,
                    password: data.senha
                });

                navigate('TelaDeConclusao', {
                    texto: 'Cadastro concluído.',
                    proximaTela: 'SignIn'
                });
            } catch (e) {
                Alert.alert('Erro', e.message);
            }
        }
    }

    return <BG>
        <Header>
            <BackButton />
            <Steps>
                <Bullet />
                <Bullet active />
            </Steps>
        </Header>
        <Content>
            <View>
                <Titulo>Crie sua conta.</Titulo>
                <Subtitulo>Faça seu cadastro {'\n'}de maneira rápida e fácil.</Subtitulo>
            </View>

            <Form >
                <ContentText>2. Senha</ContentText>
                <InputText icon='lock'
                    value={senha}
                    onChangeText={setSenha}
                    placeholder='Senha'
                    secureTextEntry
                />
                <InputText icon='lock'
                    value={confirmaSenha}
                    onChangeText={setConfirmaSenha}
                    placeholder='Confirmar senha'
                    secureTextEntry
                />
            </Form>
            <Footer>
                <Button label='Cadastrar' onPress={handleCadastrar} color={theme.colors.success} />
            </Footer>
        </Content>

    </BG>
}