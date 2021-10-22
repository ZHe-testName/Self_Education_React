import { useEffect, useRef, useState } from 'react';
import c from './timer_with_ref.module.css';

function TimerWithRef() {
    const [seconds, addSecond] = useState(0);
    const [isStart, toggleStart] = useState(false);
    //Здесь мы используем хук useRef для того чтобы
    //при обновлении компонента с помощю useState useEffect
    //interval не обновлялся а содержал свойство current
    //для того чтобы можно было остановить таймер
    let interval = useRef();

    useEffect(() => {
        if (isStart){
            interval.current = setInterval(() => {
                addSecond(prevSec => ++prevSec);
            }, 1000);
        }else{
            clearInterval(interval.current);
        }
    }, [isStart]);

    return (
        <div className={c.timer}>
            <h2>Прошло {seconds} секунд</h2>

            <div className={c.buttonsWrap}>
                <button onClick={() => toggleStart(true)}>СТАРТ</button>
                <button onClick={() => toggleStart(false)}>СТОП</button>
            </div>
        </div>
    );
};

export default TimerWithRef;