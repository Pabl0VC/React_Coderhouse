import cart from './assets/carrito.svg'

const CartWidget = () => {
    return(
        <div>
            <img src={cart} alt="cart-widget" className='carrito' />
            0  {/* Este es un numero fijo que representa la cantidad de elementos dentro del carrtio. En este caso es 0 */}
        </div>
    )
}

export default CartWidget