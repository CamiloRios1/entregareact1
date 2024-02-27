import CarWidget from '../../CartWidget/CartWidget'
import classes from './Navbar.module.css'

const Navbar = () => {
    console.log(classes)
    return (
        <>
        <header className={classes.header}>
            <h4 style={{color:'red' , fontSize: 34}}>Ecommerce React</h4>
        
        <nav>
            <a className='btn btn-primary'>Celular</a>
            <a>Tablet</a>
            <a>Notebooks</a>
        </nav>
        <CarWidget />
        </header>
        </>
    )
}

export default Navbar