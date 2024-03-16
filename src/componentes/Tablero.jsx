import Strike from "./Anuncios";
import Casilla from "./Casilla";

function Tablero({Tiles, onTileClick,strikeClass}) {
    return(

    <div class="Board">
        <Casilla onClick={()=> onTileClick(0)} value={Tiles[0]}  className="borde_inferior_der borde_inferior"/>
        <Casilla onClick={()=> onTileClick(1)} value={Tiles[1]}  className="borde_inferior_der borde_inferior"/>
        <Casilla onClick={()=> onTileClick(2)} value={Tiles[2]}  className="borde_inferior borde_inferior"/>
        <Casilla onClick={()=> onTileClick(3)} value={Tiles[3]}  className="borde_inferior_der borde_inferior"/>
        <Casilla onClick={()=> onTileClick(4)} value={Tiles[4]}  className="borde_inferior_der borde_inferior"/>
        <Casilla onClick={()=> onTileClick(5)} value={Tiles[5]}  className="borde_inferior"/>
        <Casilla onClick={()=> onTileClick(6)} value={Tiles[6]}  className="borde_inferior_der"/>
        <Casilla onClick={()=> onTileClick(7)} value={Tiles[7]}  className="borde_inferior_der"/>
        <Casilla onClick={()=> onTileClick(8)} value={Tiles[8]} />
        <Strike strikeClass={strikeClass}/>  
    </div>
    );
}

export default Tablero;