import React, { useState } from "react";
import BackButton from "../../components/BackButton";
import theme from "../../styles/theme";
import { BG, Content, ContentTabs, Footer, Foto, Header, HeaderContent, HeaderTop, IconButton, IconButtonFoto, Section, Tab, TabText, TituloHeader } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';
import InputText from "../../components/InputText";
import * as ImagePicker from 'expo-image-picker';
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useAuth } from "../../hooks/auth";
import Button from "../../components/Button";
import { Alert } from "react-native";
import * as Yup from 'yup';
import { useNetInfo } from "@react-native-community/netinfo";

export default function Perfil() {
    const { user, signOut, updateUsuario } = useAuth();
    const [tabIndex, setTabIndex] = useState(0);
    const [nome, setNome] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [cnh, setCnh] = useState(user.driver_license);
    const [senhaAntiga, setSenhaAntiga] = useState('');
    const [senhaNova, setSenhaNova] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [avatar, setAvatar] = useState(user.avatar);
    const [isLoadingRequest, setIsLoadingRequest] = useState(false);
    const netinfo = useNetInfo();

    const handleSelecionarImagemAvatar = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1
        });

        if (result.cancelled) return;
        if (result.uri) {
            setAvatar(result.uri);
        }
    }

    const handleSalvarInformacoes = async () => {
        setIsLoadingRequest(true);
        try {
            const schema = Yup.object({
                cnh: Yup.string().required('CNH é obrigatório'),
                nome: Yup.string().required('Nome é obrigatório'),
                email: Yup.string().required('Email é obrigatório')
            });
            let data = { cnh, nome, email };
            await schema.validate(data);

            await updateUsuario({
                id: user.id,
                user_id: user.user_id,
                email: email,
                name: nome,
                driver_license: cnh,
                avatar: avatar,
                token: user.token
            });
        } catch (error) {
            Alert.alert('Erro', error.message)
        } finally {
            setIsLoadingRequest(false);
        }
    }


    return <>
        <BG enabled behavior='position' keyboardVerticalOffset={useBottomTabBarHeight()}>
            <Header>
                <HeaderTop>
                    <BackButton color={theme.colors.bg_secondary} />
                    <TituloHeader>
                        Perfil
                    </TituloHeader>
                    <IconButton onPress={signOut}>
                        <MaterialIcons name='power-settings-new' size={30} color={theme.colors.main} />
                    </IconButton>
                </HeaderTop>
                <HeaderContent>
                    {!!avatar && <Foto resizeMode='contain' source={{ uri: avatar }} />}
                    <IconButtonFoto onPress={handleSelecionarImagemAvatar}>
                        <MaterialIcons name='edit' size={25} color={theme.colors.bg_secondary} />
                    </IconButtonFoto>
                </HeaderContent>
            </Header>

            <Content >
                <ContentTabs>
                    <Tab active={tabIndex === 0} onPress={() => setTabIndex(0)}>
                        <TabText active={tabIndex === 0}>Dados</TabText>
                    </Tab>
                    <Tab active={tabIndex === 1} onPress={() => setTabIndex(1)} disabled={netinfo.isConnected === false} >
                        <TabText active={tabIndex === 1}>Mudar senha</TabText>
                    </Tab>
                </ContentTabs>

                {
                    tabIndex === 0 ?
                        <Section>
                            <InputText icon='person' value={nome} placeholder='Nome' onChangeText={setNome} />
                            <InputText icon='email' value={email} placeholder='Email' onChangeText={setEmail} />
                            <InputText icon='credit-card' value={cnh} placeholder='CNH' onChangeText={setCnh} />
                        </Section> :
                        <Section>
                            <InputText icon='lock' value={senhaAntiga} placeholder='Senha antiga' onChangeText={setSenhaAntiga} />
                            <InputText icon='lock' value={senhaNova} placeholder='Senha nova' onChangeText={setSenhaNova} />
                            <InputText icon='lock' value={confirmarSenha} placeholder='Confirmar senha' onChangeText={setConfirmarSenha} />
                        </Section>
                }
            </Content>
        </BG>
        <Footer>
            <Button disabled={isLoadingRequest} label='Salvar informações' onPress={handleSalvarInformacoes} />
        </Footer>
    </>
}