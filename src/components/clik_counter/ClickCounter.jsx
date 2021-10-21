import { useState } from 'react';
import c from './clik_counter.module.css';

function ClikCounter() {
    return (
        <>
            <CompopnentA/>
            <CompopnentB/>
        </>
    );
};

function CompopnentA() {
    const [count, incrementCount] = useState(0);

    return (
        <div 
            className={c.component}
            onClick={() => incrementCount(prevCount => ++prevCount)}>
            <p>
                {`ComponentA: Нажато ${count} раз.`}
            </p>
        </div>
    );
};

function CompopnentB() {
    const [count, incrementCount] = useState(0);

    return (
        <div 
            className={c.component}
            onClick={() => incrementCount(prevCount => ++prevCount)}>
            <p>
                {`ComponentB: Нажато ${count} раз.`}
            </p>
        </div>
    );
};

export default ClikCounter;