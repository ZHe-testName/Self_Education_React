import { useEffect, useState } from "react";

//мы можем создавать свои собственные кастомные хуки с помощю хуков реакта
//Вот например мы создаем хук с помощю которого мы получаем размеры экрана 
const useWindowSize = () => {
    const [state, setState] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
    });

    useEffect(() => {
        const handler = () => {
            setState({
                height: window.innerHeight,
                width: window.innerWidth,
            });
        };

        window.addEventListener('resize', handler);

        return () => {
            window.removeEventListener('resize', handler);
        };
    }, []);

    return state;
};

const Component = () => {
    const {width, height} = useWindowSize();

    return (
        <div>
            Измините размер экрана. Сейчас размеры ширина - {width}px, высота - {height}px.
        </div>
    );
};

export default Component;