import { memo, useCallback } from "react";

function ChildComponent() {
    return (
        <div>
            Hello from child component
        </div>
    );
};

const MemoizedChildComponent = memo(ChildComponent, (prevProps, props) => {
    return prevProps.func === props.func;
});

function ParentComponent() {
    const a = 100;
    const b = 200;

    //useCallback хук котрорый нужен когда мы используем функцию memo 
    //для оптимизации рендеров

    //при каждом вызове функции если хотя бы один элемент массива изменился
    //буде произведен вызов переданой функции с новымы аргументами
    //иначе функция не вызывается   
    const someCallbackFunc = useCallback(() => {
        return a + b;
    }, [a, b]);

    return (
        <div>
            <span>
                HELLO WORLD
            </span>

            <MemoizedChildComponent func={someCallbackFunc} name='Zhekan'/>
        </div>
    );
};

function UseCallbackExample() {
    return <ParentComponent />;
};

export default UseCallbackExample;