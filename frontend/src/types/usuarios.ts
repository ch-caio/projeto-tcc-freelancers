export type Usuarios = {
    id: number;
    nome: string;
    email: string;
    descricao: string;
    area: string;
}

export type UsuariosPage = {
    content?: Usuarios[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size?: number;
    number: number;
    first: boolean;
    numberOfElements?: number;
    empty?: boolean;
}