import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { DocumentPdf } from './DocumentPdf';
import { useAppSelector } from '../../hooks/hooks';
import { Seat } from '../../interfaces/seats.resp';
export const Viewer = ({ qr }: { qr: string }) => {
    const data = {
        id: '10',
        transaccion: '123456789',
        fecha: '2019-10-10',
        nombre: 'Juan Perez',
        zona: 'Zona A',
        seccion: 'Seccion A',
        area: 'Area A',
        fila: 1,
        columna: 1,
        importe: 100,
        descuento: 0,
        promocion: 'Promocion A',
        email: 'asdf@asdf.com',
        cargo: 0,
    } as Seat;
    return (
        <div
            style={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            {/* <PDFViewer
                width="100%"
                height="100%"

            >
                <DocumentPdf qr={qr} dataUser={data} />
            </PDFViewer> */}
        </div>
    )
}
