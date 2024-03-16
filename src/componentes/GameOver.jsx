import GameState from "./GameState";

function GameOver({gameState}) {
    switch(gameState){
        case GameState.inProgress:
            return <></>;
        case GameState.playerOwins:
            return <div className="game-over">Gana O</div>;
        case GameState.playerXwins:
            return <div className="game-over">Gana X</div>;
        case GameState.draw:
            return <div className="game-over">Dibuja</div>;
        default:
            return<></>;
    }
}

export default GameOver;