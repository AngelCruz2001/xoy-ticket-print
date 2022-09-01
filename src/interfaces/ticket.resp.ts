export interface TicketResp {
    message: string;
    data: Datum[];
}

export interface Datum {
    transaccion: string;
    id: number;
    Nombre: string;
    Transaccion: string;
    Importe: number;
    Datos: string;
    idpago: string;
    JuegoDatos: JuegoDatos;
    VentaDatos: VentaDatos;
    boletos: Boleto[];
    qrCode?: string;
}

export interface JuegoDatos {
    id: number;
    IdJuego: string;
    Equipo1: string;
    Equipo2: string;
    Fecha: string;
    Hora: string;
    Estado: number;
}

export interface VentaDatos {
    Folio: number;
    Fecha: string;
    Transaccion: string;
    Nombre: string;
    TipoVenta: number;
    Usuario: string;
    Importe: number;
    Descuento: number;
    Promocion: string;
    Cargo: number;
    TipoPago: string;
}

export interface Boleto {
    qr?: string;
    id: number;
    Unidad: number;
    Transaccion: string;
    Fecha: string;
    Juego: string;
    Corte: number;
    Usuario: string;
    Zona: string;
    Seccion: string;
    Area: string;
    TipoBoleto: string;
    Folio: number;
    Fila: number;
    Columna: number;
    Nombre: string;
    Importe: number;
    Descuento: number;
    Promocion: string;
    TipoPago: string;
    Tipocliente: string;
    Estado: string;
    Abonado: number;
    Cortesia: number;
    Reservado: number;
    Cancelado: number;
    FechaCancel: null;
    Autorizo: string;
    idboleto: string;
    Autweb: string;
    Email: string;
}
