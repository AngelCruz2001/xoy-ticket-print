import React, { useEffect, useState } from 'react'
import { Cell } from './Cell';
import { Row } from './Row';
import "./List.scss"
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { startGetTickets } from '../../store/tickets/thunks';
import { Card } from '../card/Card';
// Import moment
import moment from 'moment';
import { PrintButton } from './PrintButton';
import { Datum } from '../../interfaces/ticket.resp';
import { pdf, PDFDownloadLink } from '@react-pdf/renderer';
import { DocumentPdf } from '../../pages/pdf/DocumentPdf';
import QRCode from "qrcode";
import Swal from 'sweetalert2';
export const Table = () => {

  // 2022-08-26T00:00:00.000Z to date format
  const [base64, setBase64] = useState("");

  useEffect(() => {
    const qrCodeCanvas = document.querySelector('canvas');
    if (qrCodeCanvas) {
      setBase64(qrCodeCanvas.toDataURL());
      console.log(qrCodeCanvas.toDataURL());
    }
  }, [])

  const dispatch = useAppDispatch();
  const { tickets } = useAppSelector((state: { tickets: any; })  => state.tickets);
  const [ticketsData, setTicketsData] = useState<Datum[] | null>(null);
  const [activeTicket, setActiveTicket] = useState<Datum | null>(null);
  const [loadingPdfDownload, setLoadingPdfDownload] = useState(false)

  useEffect(() => {
    dispatch(startGetTickets())
  }, [dispatch])

  useEffect(() => {
    if (tickets) {
      tickets?.map((ticket: any, index : number) => {
        QRCode.toDataURL(ticket.Transaccion,
          (_: any, url: string) => (
            setTicketsData(tickets?.map((ticket : any, index: number) => ({ ...ticket, qrCode: url }))
            )
          ))
      })
    }
  }, [tickets])

  const handleActiveTicket = (ticket: Datum) => {
    activeTicket !== null ? setActiveTicket(null) : setActiveTicket(ticket);
  }

  const handlePrint = (ticket: Datum) => {
    setLoadingPdfDownload(true)
    // Swal loading
    ticket.boletos.forEach(async (boleto, index) => {
      const caca = await pdf(<DocumentPdf dataUser={boleto} qr={ticket.qrCode!} juego={ticket.JuegoDatos} ventaDatos={ticket.VentaDatos} />).toBlob();
      const url = window.URL.createObjectURL(caca);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', boleto.Nombre);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    setLoadingPdfDownload(false)
    // Swal.close();

  }

  return (
    <Card>
      <h1 className='titleCard'>
        Lista de transacciones
      </h1>

      <hr />

      <div className='list'>

        <Row headers={true}>
          <Cell text={''} />
          <Cell text={'Transaccion'} />
          <Cell text={"Nombre del partido"} />
          <Cell text={"Costo"} />
          <Cell text={'Fecha'} />
          <Cell text={"Hora"} />
          <Cell text={""} />
        </Row>
        {
          ticketsData?.map(ticket => (
            <Row key={ticket.transaccion}>
              <button
                className='seeButton'
                onClick={() => handleActiveTicket(ticket)}>
                {
                  activeTicket ? <i className="fa-solid fa-eye-slash"></i>

                    : <i className="fa-solid fa-eye"></i>
                }

              </button>
              <Cell text={ticket.transaccion} />
              <Cell text={`${ticket.JuegoDatos.Equipo1} vs ${ticket.JuegoDatos.Equipo2} `} />
              <Cell text={`$${ticket.Importe}`} />
              <Cell text={moment(ticket.JuegoDatos.Fecha).format("DD/MM/YYYY")} />
              <Cell text={moment(ticket.JuegoDatos.Hora).format("HH:mm")} />
              <Cell icon='fa-solid fa-floppy-disk' clickFunction={() => handlePrint(ticket)} />
            </Row>
          ))
        }

        {activeTicket !== null &&
          <div className='seatsTickets'>
            <Row extra={true}>
              <Cell text={"Area"} />
              <Cell text={"Fila"} />
              <Cell text={"Columna"} />
              <Cell text={"Importe"} />
              <Cell text={"Descuento"} />
              <Cell text={""} />

            </Row>
            {activeTicket.boletos.map((seat, i) => (
              <Row key={seat.id} extra={true}>
                <Cell text={seat.Area} />
                <Cell text={seat.Fila} />
                <Cell text={seat.Columna} />
                <Cell text={seat.Importe} />
                <Cell text={seat.Descuento} />
                <PDFDownloadLink document={<DocumentPdf qr={activeTicket.qrCode!} dataUser={seat} ventaDatos={activeTicket.VentaDatos} juego={activeTicket.JuegoDatos} />} fileName={`${seat.Nombre}.pdf`}>
                  {({ blob, url, loading, error }) => (base64 !== "" && loading ? 'Cargando documento' : <Cell icon='fa-solid fa-floppy-disk' />)}
                </PDFDownloadLink>
                {/* <Cell icon='fa-solid fa-floppy-disk'  /> */}
              </Row>
            ))}
          </div>
        }
      </div>
    </Card>

  )
}
