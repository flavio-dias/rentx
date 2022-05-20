import React, { useEffect, useState } from "react";
import { Alert, StatusBar } from "react-native";
import { BG, Header, Totalizador, Lista, FAB } from "./styles";
import Logo from '../../assets/logo.svg';
import { RFValue } from "react-native-responsive-fontsize";
import CardCarro from "../../components/CardCarro";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackScreenListApp } from "../../routes/stack.routes";
import api from "../../services/api";
import LoadingContent from "../../components/LoadingContent";
import { useNetInfo } from "@react-native-community/netinfo";
import { synchronize } from '@nozbe/watermelondb/sync';
import { database } from "../../database";
import { Car } from "../../database/model/Car";

export default function Home() {
    const [listaCarros, setListaCarros] = useState<Car[]>([]);
    const [isLoadingLista, setLoadingLista] = useState(true);
    const netInfo = useNetInfo();

    const { navigate } = useNavigation<StackNavigationProp<StackScreenListApp, 'Home'>>();

    const renderItemListaCarros = ({ item }: { item: Car }) => {
        return <CardCarro data={item} onPress={() => handleSelecionarCarro(item)} />
    }

    const handleSelecionarCarro = (carro: Car) => {
        navigate('Detalhes', { carro: carro });
    }

    const sincronizacaoOffline = async () => {
        await synchronize({
            database,
            pullChanges: async ({ lastPulledAt }) => {
                const response = await api.get(`/cars/sync/pull?lastPulledVersion=${lastPulledAt || 0}`);
                const { changes, latestVersion } = response.data;
                return { changes, timestamp: latestVersion };
            },
            pushChanges: async ({ changes }) => {
                const user = changes.users;
                if (user.updated.length > 0) {
                    await api.post('/users/sync', user);
                }
            }
        });
    }

    useEffect(() => {
        const getLista = async () => {
            try {
                const carCollection = database.get<Car>('cars');
                const cars = await carCollection.query().fetch();

                setListaCarros(cars);
            } catch (e) {
                Alert.alert('Erro', e.message)
            } finally {
                setLoadingLista(false);
            }
        }
        getLista();
    }, [])

    useEffect(() => {
        if (netInfo.isConnected) {
            sincronizacaoOffline();
        }
    }, [netInfo.isConnected])

    return <BG>
        <StatusBar barStyle='light-content'
            translucent
            backgroundColor='transparent'
        />
        <Header>
            <Logo width={RFValue(108)} height={RFValue(12)} />
            <Totalizador>Total de {listaCarros.length} carros</Totalizador>
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