import React from "react";
import { Aluguel, BG, Foto, Info, Marca, Motor, Nome, Periodo, Preco, Sobre } from "./styles";
import { getSvgIcon } from "../../utils/getSvgIcon";
import { Car } from "../../database/model/Car";
import { useNetInfo } from "@react-native-community/netinfo";


interface CardCarroProps {
    data: Car,
    onPress?: () => void | Promise<void>
}

export default function CardCarro({ data, onPress }: CardCarroProps) {
    const MotorIcon = getSvgIcon(data.fuel_type);
    const netinfo = useNetInfo();

    return <BG onPress={onPress}>
        <Info>
            <Marca>{data.brand}</Marca>
            <Nome>{data.name}</Nome>

            <Sobre>
                <Aluguel>
                    <Periodo>{data.period}</Periodo>
                    <Preco>R$ {netinfo.isConnected === true ? data.price : '...'}</Preco>
                </Aluguel>
                <Motor>
                    <MotorIcon />
                </Motor>
            </Sobre>
        </Info>

        <Foto source={{ uri: data.thumbnail }} resizeMode="contain" />
    </BG>
}