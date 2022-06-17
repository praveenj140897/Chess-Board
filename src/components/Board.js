import React, { useState } from 'react';
import './Board.css'

function Board() {

    const [selectedCell, setSelectedCell] = useState(null);
    const [active, setActive] = useState(false);

    const changeCellColor = (cellNumber) => {
        setSelectedCell(cellNumber);
        setActive(true);
    }

    return <div className='chess-board'>
        <div>
            <div className={selectedCell === 1 && active ? 'box red' : 'box black'} onClick={() => changeCellColor(1)}></div>
            <div className={selectedCell === 2 && active ? 'box red' : 'box'} onClick={() => changeCellColor(2)}></div>
            <div className={selectedCell === 3 && active ? 'box red' : 'box black'} onClick={() => changeCellColor(3)}></div>
            <div className={selectedCell === 4 && active ? 'box red' : 'box'} onClick={() => changeCellColor(4)}></div>
            <div className={selectedCell === 5 && active ? 'box red' : 'box black'} onClick={() => changeCellColor(5)}></div>
            <div className={selectedCell === 6 && active ? 'box red' : 'box'} onClick={() => changeCellColor(6)}></div>
            <div className={selectedCell === 7 && active ? 'box red' : 'box black'} onClick={() => changeCellColor(7)}></div>
            <div className={selectedCell === 8 && active ? 'box red' : 'box'} onClick={() => changeCellColor(8)}></div>
        </div>
        <div>
            <div className={selectedCell === 9 && active ? 'box red' : 'box'} onClick={() => changeCellColor(9)}></div>
            <div className={selectedCell === 10 && active ? 'box red' : 'box black'} onClick={() => changeCellColor(10)}></div>
            <div className={selectedCell === 11 && active ? 'box red' : 'box'} onClick={() => changeCellColor(11)}></div>
            <div className={selectedCell === 12 && active ? 'box red' : 'box black'} onClick={() => changeCellColor(12)}></div>
            <div className={selectedCell === 13 && active ? 'box red' : 'box'} onClick={() => changeCellColor(13)}></div>
            <div className={selectedCell === 14 && active ? 'box red' : 'box black'} onClick={() => changeCellColor(14)}></div>
            <div className={selectedCell === 15 && active ? 'box red' : 'box'} onClick={() => changeCellColor(15)}></div>
            <div className={selectedCell === 16 && active ? 'box red' : 'box black'} onClick={() => changeCellColor(16)}></div>
        </div>
        <div>
            <div className={selectedCell === 17 && active ? 'box red' : 'box black'} onClick={() => changeCellColor(17)}></div>
            <div className={selectedCell === 18 && active ? 'box red' : 'box'} onClick={() => changeCellColor(18)}></div>
            <div className={selectedCell === 19 && active ? 'box red' : 'box black'} onClick={() => changeCellColor(19)}></div>
            <div className={selectedCell === 20 && active ? 'box red' : 'box'} onClick={() => changeCellColor(20)}></div>
            <div className={selectedCell === 21 && active ? 'box red' : 'box black'} onClick={() => changeCellColor(21)}></div>
            <div className={selectedCell === 22 && active ? 'box red' : 'box'} onClick={() => changeCellColor(22)}></div>
            <div className={selectedCell === 23 && active ? 'box red' : 'box black'} onClick={() => changeCellColor(23)}></div>
            <div className={selectedCell === 24 && active ? 'box red' : 'box'} onClick={() => changeCellColor(24)}></div>
        </div>
        <div>
            <div className={selectedCell === 25 && active ? 'box red' : 'box'} onClick={() => changeCellColor(25)}></div>
            <div className={selectedCell === 26 && active ? 'box red' : 'box black'} onClick={() => changeCellColor(26)}></div>
            <div className={selectedCell === 27 && active ? 'box red' : 'box'} onClick={() => changeCellColor(27)}></div>
            <div className={selectedCell === 28 && active ? 'box red' : 'box black'} onClick={() => changeCellColor(28)}></div>
            <div className={selectedCell === 29 && active ? 'box red' : 'box'} onClick={() => changeCellColor(29)}></div>
            <div className={selectedCell === 30 && active ? 'box red' : 'box black'} onClick={() => changeCellColor(30)}></div>
            <div className={selectedCell === 31 && active ? 'box red' : 'box'} onClick={() => changeCellColor(31)}></div>
            <div className={selectedCell === 32 && active ? 'box red' : 'box black'} onClick={() => changeCellColor(32)}></div>
        </div>
        <div>
            <div className={selectedCell === 33 && active ? 'box red' : 'box black'} onClick={() => changeCellColor(33)}></div>
            <div className={selectedCell === 34 && active ? 'box red' : 'box'} onClick={() => changeCellColor(34)}></div>
            <div className={selectedCell === 35 && active ? 'box red' : 'box black'} onClick={() => changeCellColor(35)}></div>
            <div className={selectedCell === 36 && active ? 'box red' : 'box'} onClick={() => changeCellColor(36)}></div>
            <div className={selectedCell === 37 && active ? 'box red' : 'box black'} onClick={() => changeCellColor(37)}></div>
            <div className={selectedCell === 38 && active ? 'box red' : 'box'} onClick={() => changeCellColor(38)}></div>
            <div className={selectedCell === 39 && active ? 'box red' : 'box black'} onClick={() => changeCellColor(39)}></div>
            <div className={selectedCell === 40 && active ? 'box red' : 'box'} onClick={() => changeCellColor(40)}></div>
        </div>
        <div>
            <div className={selectedCell === 41 && active ? 'box red' : 'box'} onClick={() => changeCellColor(41)}></div>
            <div className={selectedCell === 42 && active ? 'box red' : 'box black'} onClick={() => changeCellColor(42)}></div>
            <div className={selectedCell === 43 && active ? 'box red' : 'box'} onClick={() => changeCellColor(43)}></div>
            <div className={selectedCell === 44 && active ? 'box red' : 'box black'} onClick={() => changeCellColor(44)}></div>
            <div className={selectedCell === 45 && active ? 'box red' : 'box'} onClick={() => changeCellColor(45)}></div>
            <div className={selectedCell === 46 && active ? 'box red' : 'box black'} onClick={() => changeCellColor(46)}></div>
            <div className={selectedCell === 47 && active ? 'box red' : 'box'} onClick={() => changeCellColor(47)}></div>
            <div className={selectedCell === 48 && active ? 'box red' : 'box black'} onClick={() => changeCellColor(48)}></div>
        </div>
        <div>
            <div className={selectedCell === 49 && active ? 'box red' : 'box black'} onClick={() => changeCellColor(49)}></div>
            <div className={selectedCell === 50 && active ? 'box red' : 'box'} onClick={() => changeCellColor(50)}></div>
            <div className={selectedCell === 51 && active ? 'box red' : 'box black'} onClick={() => changeCellColor(51)}></div>
            <div className={selectedCell === 52 && active ? 'box red' : 'box'} onClick={() => changeCellColor(52)}></div>
            <div className={selectedCell === 53 && active ? 'box red' : 'box black'} onClick={() => changeCellColor(53)}></div>
            <div className={selectedCell === 54 && active ? 'box red' : 'box'} onClick={() => changeCellColor(54)}></div>
            <div className={selectedCell === 55 && active ? 'box red' : 'box black'} onClick={() => changeCellColor(55)}></div>
            <div className={selectedCell === 56 && active ? 'box red' : 'box'} onClick={() => changeCellColor(56)}></div>
        </div>
        <div>
            <div className={selectedCell === 57 && active ? 'box red' : 'box'} onClick={() => changeCellColor(57)}></div>
            <div className={selectedCell === 58 && active ? 'box red' : 'box black'} onClick={() => changeCellColor(58)}></div>
            <div className={selectedCell === 59 && active ? 'box red' : 'box'} onClick={() => changeCellColor(59)}></div>
            <div className={selectedCell === 60 && active ? 'box red' : 'box black'} onClick={() => changeCellColor(60)}></div>
            <div className={selectedCell === 61 && active ? 'box red' : 'box'} onClick={() => changeCellColor(61)}></div>
            <div className={selectedCell === 62 && active ? 'box red' : 'box black'} onClick={() => changeCellColor(62)}></div>
            <div className={selectedCell === 63 && active ? 'box red' : 'box'} onClick={() => changeCellColor(63)}></div>
            <div className={selectedCell === 64 && active ? 'box red' : 'box black'} onClick={() => changeCellColor(64)}></div>
        </div>
    </div>
}

export default Board;