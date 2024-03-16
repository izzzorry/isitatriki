function Casilla({ className, value, onClick }) {
    return(
        <div onClick={onClick} className={`Tile ${className}`}>
            {value}
        </div>
        );
}

export default Casilla;