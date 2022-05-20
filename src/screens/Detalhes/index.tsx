import React, { useEffect, useState } from "react";
import BackButton from "../../components/BackButton";
import Carrossel from "../../components/Carrossel";
import PerksCarro from "../../components/PerksCarro";
import { Aluguel, BG, Footer, Header, Marca, Nome, Periodo, PerksContainer, Preco, Sobre, Titulo, Veiculo } from "./styles";
import Button from "../../components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackScreenListApp } from "../../routes/stack.routes";
import { CarroDTO } from "../../dtos/CarroDTO";
import { getSvgIcon } from "../../utils/getSvgIcon";
import Animated, { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { Car } from "../../database/model/Car";
import { useNetInfo } from "@react-native-community/netinfo";
import api from "../../services/api";

interface NavigationParams {
    carro: Car
}

export default function Detalhes() {
    const { navigate } = useNavigation<StackNavigationProp<StackScreenListApp, 'Detalhes'>>();
    const { carro } = useRoute().params as NavigationParams;
    const scrollY = useSharedValue(0);
    const netinfo = useNetInfo();
    const [carroOnline, setCarroOnline] = useState({} as CarroDTO);


    const scrollHandler = useAnimatedScrollHandler(e => {
        scrollY.value = e.contentOffset.y;
    });

    const headerAnimation = useAnimatedStyle(() => {
        return {
            height: interpolate(scrollY.value, [0, 200], [150, 0], Extrapolate.CLAMP),
            opacity: interpolate(scrollY.value, [0, 200], [1, 0])
        }
    })

    const handleConfirmar = () => {
        navigate('Agendamento', { carro: carroOnline });
    }

    useEffect(() => {
        const getCarroInfoOnline = async () => {
            const response = await api.get('/cars/' + carro.id);
            setCarroOnline(response.data);
        }

        if (netinfo.isConnected === true) getCarroInfoOnline();
    }, [netinfo.isConnected])

    return <BG>
        <Header>
            <BackButton />
        </Header>
        <Animated.View style={headerAnimation} >
            <Carrossel imagens={
                !!carroOnline.photos ?
                    carroOnline.photos : [{ id: carro.thumbnail, photo: carro.thumbnail }]
            } />
        </Animated.View>
        <Animated.ScrollView
            contentContainerStyle={{
                padding: 16,
                alignItems: 'center',
                paddingTop: getStatusBarHeight()
            }}
            showsVerticalScrollIndicator={false}
            onScroll={scrollHandler}
            scrollEventThrottle={16}
        >
            <Titulo>
                <Veiculo>
                    <Marca>{carro.brand}</Marca>
                    <Nome>{carro.name}</Nome>
                </Veiculo>
                <Aluguel>
                    <Periodo>{carro.period}</Periodo>
                    <Preco>R$ {netinfo.isConnected === true ? carro.price : '...'}</Preco>
                </Aluguel>
            </Titulo>

            {carroOnline.accessories &&
                <PerksContainer>
                    {
                        carroOnline.accessories.map(item => (
                            <PerksCarro
                                key={item.type}
                                name={item.name}
                                icon={getSvgIcon(item.type)}
                            />
                        ))
                    }
                </PerksContainer>
            }

            <Sobre>{carro.about}</Sobre>
            <Sobre>{carro.about}</Sobre>
            <Sobre>{carro.about}</Sobre>
            <Sobre>{carro.about}</Sobre>
            <Sobre>{carro.about}</Sobre>
            <Sobre>{carro.about}</Sobre>
            <Sobre>{carro.about}</Sobre>
            <Sobre>{carro.about}</Sobre>
        </Animated.ScrollView>
        <Footer>
            <Button disabled={!netinfo.isConnected} label='Avançar' onPress={handleConfirmar} />
        </Footer>
    </BG>
}