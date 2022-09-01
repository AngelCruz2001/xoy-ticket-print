import { Seats, Footer, Navbar } from '../../components';

export const SeatList = () => {
    return (
        <>
            <Navbar />

            <div className='seats'>
                <Seats />
            </div>

            <Footer />
        </>
    )
}
