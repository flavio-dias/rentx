import React, { useEffect, useState } from "react";
import { Alert, StatusBar } from "react-native";
import { BG, Header, Lista, Titulo, CardContainer, CardFooter, CardFooterText, CardFooterPeriodoContainer, CardFooterData } from "./styles";
import CardCarro from "../../components/CardCarro";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackScreenListApp } from "../../routes/stack.routes";
import api from "../../services/api";
import LoadingContent from "../../components/LoadingContent";
import { CarroDTO } from "../../dtos/CarroDTO";
import BackButton from "../../components/BackButton";
import { AntDesign } from '@expo/vector-icons';
import theme from "../../styles/theme";
import { format, parseISO } from 'date-fns';

interface ListaProps {
    car: CarroDTO,
    id: string,
    user_id: number,
    startDate: string,
    endDate: string
}

export default function CarrosAlugados() {
    const [listaCarros, setListaCarros] = useState<ListaProps[]>([]);
    const [isLoadingLista, setLoadingLista] = useState(true);

    const { navigate } = useNavigation<StackNavigationProp<StackScreenListApp, 'CarrosAlugados'>>();

    const renderItemListaCarros = ({ item }: { item: ListaProps }) => {
        return <CardContainer>
            <CardCarro data={item.car} onPress={() => { }} />
            <CardFooter>
                <CardFooterText>PERIODO</CardFooterText>
                <CardFooterPeriodoContainer>
                    <CardFooterData>{format(parseISO(item.startDate), 'dd/MM/yyyy')}</CardFooterData>
                    <AntDesign name='arrowright' size={20} color={theme.colors.text_detail} style={{ marginHorizontal: 10 }} />
                    <CardFooterData>{format(parseISO(item.endDate), 'dd/MM/yyyy')}</CardFooterData>
                </CardFooterPeriodoContainer>
            </CardFooter>
        </CardContainer>
    }

    const handleSelecionarCarro = (carro: CarroDTO) => {
        navigate('Detalhes', { carro: carro });
    }

    useEffect(() => {
        const getLista = async () => {
            try {
                let response = await api.get('/schedules_byuser?user_id=1');
                setListaCarros(response.data);
            } catch (e) {
                Alert.alert('Erro', e.message)
            } finally {
                setLoadingLista(false);
            }
        }
        getLista();

    }, [])

    return <BG>
        <StatusBar barStyle='light-content'
            translucent
            backgroundColor='transparent'
        />
        <Header>
            <BackButton />
            <Titulo>O seu histórico de agendamentos está aqui.</Titulo>
        </Header>
        {isLoadingLista ?
            <LoadingContent /> :
            <Lista
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ padding: 16 }}
                data={listaCarros}
                keyExtractor={item => String(item.id)}
                renderItem={renderItemListaCarros}
            />
        }
    </BG>
}