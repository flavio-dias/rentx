import React from "react";
import { BG, Foto, FotoWrap, Index, IndexContainer } from "./styles";

interface CarrosselProps {
    imagens: string[]
}

export default function Carrossel({ imagens }: CarrosselProps) {

    return <BG>
        <IndexContainer>
            <Index active={true} />
            <Index active={false} />
            <Index active={false} />
        </IndexContainer>

        <FotoWrap>
            <Foto source={{ uri: imagens[0] }} resizeMode="contain" />
        </FotoWrap>
    </BG>
}