import { Outlet } from 'react-router-dom';
import Footer from '../shared/footer/Footer';
import NavBar from '../shared/navBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;