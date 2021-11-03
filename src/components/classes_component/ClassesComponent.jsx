import React, { createContext, useContext } from "react";

//В реакте также есть классовые компоненты
//они уже практически не нужны с появлением хуков

class ClassComponent extends React.Component {
    render () {
        return (
            <h2>
                I'M Class Component
            </h2>
        )
    }
};

//такой же компоенент только функцыональный
const FuncComponent = () => {
    return (
        <h2>
            I'm Functional Component
        </h2>
    );
};

class TestClassComponent extends React.Component {
    //если в компонент передаются пропсы
    //то их нужно передать классу React.Component в методе super компоненты
    constructor (props){
        super(props)

        //начальное сосотояние определяется в конструкторе
        //это должен быть объект а не примитив
        this.state = {
            count: 0,
        }

        //тут мы используем жесткую привязку для того чтобы при 
        //передаче метода в обработчик не потерять контекст вызова

        //также в качестве обработчка можно передать стрелочную функцию
        //тогда контекст позаимствуется во внешней области видимости

        //способ связывания через bind скорее всего является предпочтительнее
        //так как при использовании стрелок при перерисовке всегда будут создаваться новые функции
        //что в теории больше загружает процессор нежели разовое создание объекта класса
        this.onIncrement = this.onIncrement.bind(this)
    }

    onIncrement (){
        //метод в обработчике работает так же как setState  в функцыональных компонентах
        //только работает исключительно с объектом

        //в нашем случае логика зависит от предидущего состояния
        //тогда нужно передавть функцию которая принимает предидужие пропсы 
        //первым параметром 
        //и текущие вторым

        //если нет то просто объект состояния
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        });
    }

    render (){
        return (
            <h1
                onClick={this.onIncrement}>
                    Привет {this.props.name}. Вы нажали {this.state.count} раз.
            </h1>
        );
    }
};

function Classes (){
    return (
        <div>
            <ClassComponent />

            <FuncComponent />

            <TestClassComponent name="ZHekan"/>

            <ComponentZ />
        </div>
    );
};

export default Classes;

//у любой компоненты есть методы жизненых цыклов

//1-когда компонент первый раз отрендерился
//2-когда компонент изменился
//3-когда компонент будет удалятся

//для управления этими методами в функциональных компонентах используется useEffect
//в классах же есть методы жихненного цыкла

//componentDidMount
//componentDidUpdate
//componentWillUnmount

//соответсвенно

//метод componentDidUpdate принимает два аргумента
//первым prevProps, вторым prevState
//это пропсы и стейт из предилущего состояня компоненты
//они нужны для того чтобы принимать рещение рендерить или не рендерить компонент

//в функциональных компонентах мы\то неастраиваем с помощю массива зависимостей


//рефы настраиваются  при помощи React.createRef
class RefComponent extends React.Component {
    constructor (props){
        super(props)

        this.exampleRef = React.createRef();
    }

    render (){
        return (
            <h2 ref={this.exampleRef}>
                Example Ref
            </h2>
        );
    }
};

//В функциональных компонентах для создания Contexta мы испльзуем useContext
//он нужен для того чтобы не прокидывать какието значения в пропсах
//а использовать общие значения хранящиеся в контексте

//createContext возвращает объект контекта...
const testContext = createContext();

function ComponentX (){
    //на него можно подписаться с помощю хука useContext
    //он возвращает объект в котором есть доступ к нашим свойствам...
    const context = useContext(testContext);

    const style = {
        color: context.color,
    };

    return <span style={style}>Component X</span>
};

function ComponentY (){
    return (
        <div>
            Component Y

            <ComponentX />
        </div>
    );
};

//чтобы подписаться на контекст нам нужно обратится к свойству нашего 
//контекстного объекта Provider...
const { Provider } = testContext;

function ComponentZ (){
    const color = '#31c5b2';
    const test = 'Test Value';

    const contextValue = { color, test };

    return (
        //Provider это компонент в свойстве value которого и хранятся контекстные значения
        <Provider value={contextValue}>
            <div>
                Component Z

                <ComponentY />

                <ContextClassComponent />
            </div>
        </Provider>
    );
};

//в классовой все чуть иначе
//нам нужно обратится к свойчтву Consumer нашего контекстного объекта...
const { Consumer } = testContext;

class ContextClassComponent extends React.Component {
    render (){
        return (
            //Consumer  это компонент в котором доступен контекст
            //для классовых компонент
            //и которы вызывает переданую в него функцию
            //которая принимает контекст Providera
            //и возвращает JSX или компоненту
            <Consumer>
                {
                    context => {
                        const testConst = {test: context.test}

                        return <span>{testConst.test}</span>
                    }
                }
            </Consumer>
        );
    }
};

//для оптимизации на подобие memo в функциональных компонентах
//для классовых мы используем наследование от React.PureComponent
//такая компонента отрисуется только если хоть один из ее пропсов изменится
class Pure extends React.PureComponent {
    render (){
        return (
            <span>
                I'm pure component!
            </span>
        );
    }
};

//чтобы управлять оптимизацией в звисимости от измененых пропсов
//наследовать нужно от React.Component
//но использовать метод жизненного цыкла
//shouldComponentUpdate()
class ControledPureComponent extends React.ClassComponent {
    //этот метод вызывается перед рендером компонента
    //и если возвращается true то реакт НЕ отрендерит компонент
    //и принимает следующие пропсы и следующий стейт
    shouldComponentUpdate (nextProps, nextState){
        if (this.props.userName === nextProps.userName) return true;

        return false;
    }
};