import React, { useEffect, useState } from "react";
import { Alert, StatusBar } from "react-native";
import { BG, Header, Lista, Titulo, CardContainer, CardFooter, CardFooterText, CardFooterPeriodoContainer, CardFooterData } from "./styles";
import CardCarro from "../../components/CardCarro";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackScreenListApp } from "../../routes/stack.routes";
import api from "../../services/api";
import LoadingContent from "../../components/LoadingContent";
import { CarroDTO } from "../../dtos/CarroDTO";
import BackButton from "../../components/BackButton";
import { AntDesign } from '@expo/vector-icons';
import theme from "../../styles/theme";
import { format, parseISO } from 'date-fns';
import { Car } from "../../database/model/Car";

interface AluguelProps {
    id: string,
    car: Car,
    start_date: string,
    end_date: string
}

export default function CarrosAlugados() {
    const [listaCarros, setListaCarros] = useState<AluguelProps[]>([]);
    const [isLoadingLista, setLoadingLista] = useState(true);
    const isFocused = useIsFocused();

    const { navigate } = useNavigation<StackNavigationProp<StackScreenListApp, 'CarrosAlugados'>>();

    const renderItemListaCarros = ({ item }: { item: AluguelProps }) => {
        return <CardContainer>
            <CardCarro data={item.car} onPress={() => { }} />
            <CardFooter>
                <CardFooterText>PERIODO</CardFooterText>
                <CardFooterPeriodoContainer>
                    <CardFooterData>{format(parseISO(item.start_date), 'dd/MM/yyyy')}</CardFooterData>
                    <AntDesign name='arrowright' size={20} color={theme.colors.text_detail} style={{ marginHorizontal: 10 }} />
                    <CardFooterData>{format(parseISO(item.end_date), 'dd/MM/yyyy')}</CardFooterData>
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
                let response = await api.get('/rentals');
                setListaCarros(response.data);
            } catch (e) {
                Alert.alert('Erro', e.message)
            } finally {
                setLoadingLista(false);
            }
        }
        getLista();

    }, [isFocused])

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