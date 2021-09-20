export type Procuras = {
    id: number;
    descricao: string;
    email: string;
    area: string;
}

export type ProcurasPage = {
    content?: Procuras[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size?: number;
    number: number;
    first: boolean;
    numberOfElements?: number;
    empty?: boolean;
}