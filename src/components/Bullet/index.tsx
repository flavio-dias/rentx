import React from "react";
import { BG } from "./styles";

interface BulletProps {
    active?: boolean
}

export default function Bullet({ active = false }: BulletProps) {
    return <BG active={active} />
}