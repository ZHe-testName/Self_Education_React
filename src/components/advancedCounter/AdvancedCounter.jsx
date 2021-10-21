import c from './advanced_counter.module.css';

function AdvancedCounter() {
    return (
        <div className={c.advanced}>
            <span>
                {`Нажато  раз`}
            </span>

            <button>+</button>

            <button>-</button>

            <button>Поменять цвет</button>
        </div>
    );
};