import React, { useState } from "react";
import BackButton from "../../components/BackButton";
import Carrossel from "../../components/Carrossel";
import PerksCarro from "../../components/PerksCarro";
import {
    Aluguel, BG, Content, DataContainer, DataLabel, Footer, Header, IconeCalendario, Marca,
    Nome, Periodo, PeriodoContainer, PerksContainer, Preco, Titulo, Veiculo, Data, TotalContainer, TotalLabel, DetalhesTotal, TotalDiaria, SubTotal
} from "./styles";
import Button from "../../components/Button";
import Icon from '@expo/vector-icons/MaterialIcons';
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../styles/theme";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackScreenListApp } from "../../routes/stack.routes";
import { CarroDTO } from "../../dtos/CarroDTO";
import { getSvgIcon } from "../../utils/getSvgIcon";
import { format, parseISO } from "date-fns";
import api from "../../services/api";
import { Alert } from "react-native";

interface RouteProps {
    carro: CarroDTO,
    datas: string[]
}

export default function DetalhesAgendamento() {
    const { carro, datas } = useRoute().params as RouteProps;
    const { navigate } = useNavigation<StackNavigationProp<StackScreenListApp, 'Agendamento'>>();
    const [loadingRequest, setLoadingRequest] = useState(false);

    const handleConfirmar = async () => {
        setLoadingRequest(true);
        const dto = {
            car_id: carro.id,
            user_id: 1,
            startDate: datas[0],
            endDate: datas[datas.length - 1],
            total: carro.price * datas.length
        };

        api.post(`/rentals`, dto).then(() => {
            navigate('TelaDeConclusao', {
                texto: 'O seu agendamento foi concluído com êxito.',
                proximaTela: 'Home'
            });
        })
            .catch(e => {
                Alert.alert('Erro', e.message);
            })
            .finally(() => {
                setLoadingRequest(false);
            })


    }

    return <BG>
        <Header>
            <BackButton />
        </Header>
        <Carrossel imagens={carro.photos} />
        <Content>
            <Titulo>
                <Veiculo>
                    <Marca>{carro.brand}</Marca>
                    <Nome>{carro.name}</Nome>
                </Veiculo>
                <Aluguel>
                    <Periodo>ao dia</Periodo>
                    <Preco>R$ {carro.price}</Preco>
                </Aluguel>
            </Titulo>

            <PerksContainer>
                {
                    carro.accessories.map(item => (
                        <PerksCarro
                            key={item.type}
                            name={item.name}
                            icon={getSvgIcon(item.type)}
                        />
                    ))
                }
            </PerksContainer>

            <PeriodoContainer>
                <IconeCalendario>
                    <Icon name='calendar-today' size={24} color={theme.colors.bg_secondary} />
                </IconeCalendario>
                <DataContainer>
                    <DataLabel>DE</DataLabel>
                    <Data>{format(parseISO(datas[0]), 'dd/MM/yyyy')}</Data>
                </DataContainer>
                <Icon name='chevron-right' size={RFValue(15)} color={theme.colors.shape} />
                <DataContainer>
                    <DataLabel>ATÉ</DataLabel>
                    <Data>{format(parseISO(datas[datas.length - 1]), 'dd/MM/yyyy')}</Data>
                </DataContainer>
            </PeriodoContainer>

            <TotalContainer>
                <TotalLabel>Total</TotalLabel>
                <DetalhesTotal>
                    <TotalDiaria>R$ {carro.price} x{datas.length}</TotalDiaria>
                    <SubTotal>R$ {carro.price * datas.length}</SubTotal>
                </DetalhesTotal>
            </TotalContainer>
        </Content>
        <Footer>
            <Button disabled={loadingRequest} label='Confirmar Aluguel' color={theme.colors.success} onPress={handleConfirmar} />
        </Footer>
    </BG>
}