import React from "react";

//HOC(High Order Component) это компоненты высшего порядка
//Они принимают на входе компоненту возвращают новую
//В котрую обернута переданая

//это делается для того чтобы не дублировать схожую логику
//а выносить ее в отдельную компоненту и оборачивать 
//в нее нужные компоненты

//Допустим нам нужно изменять размеры блока относительно ширины и высоты 
//мы создаем компонент обертку котроая попринимает нужный компонент
//и оборачивает его в нужный функционал
function withWindowSize (Component){
    return class extends React.Component {
        constructor (props){
            super(props)

            this.state = {
                windowWidth: window.innerWidth,
                windowHeight: window.innerHeight,
            }

            this.onResize = this.onResize.bind(this)
        }

        onResize (){
            this.setState({
                windowWidth: window.innerWidth,
                windowHeight: window.innerHeight,
            });
        }

        componentDidMount (){
            window.addEventListener('resize', this.onResize);
        }

        componentWillUnmount (){
            window.removeEventListener('resize', this.onResize);
        }

        render (){
            const {windowWidth, windowHeight} = this.state;

            return (
                <div>
                    <Component
                            width={Math.trunc(windowWidth / 6)}
                            height={Math.trunc(windowHeight / 6)}></Component>
                </div>
            );
        }
    };
};

class CompA extends React.Component {
    render (){
        const {width, height} = this.props;
        
        return (
            <div
                style={{
                    width: width + 'px',
                    height: height + 'px',
                    backgroundColor: '#20bed7',
                    fontSize: '26px',
                }}>
                    I'm A Component!
            </div>
        );
    }
};

class CompB extends React.Component {
    render (){
        const {width, height} = this.props;

        return (
            <div
                style={{
                    width: width,
                    height: height,
                    backgroundColor: '#a428c3',
                    fontSize: '32px',
                }}>
                    I'm B Component!
            </div>
        );
    }
};

//мы просто вызываем их а отдаем а них пропсы
const WrappedCompA = withWindowSize (CompA);
const WrappedCompB = withWindowSize (CompB);

function ShowFrame (){
    //и вызываем их
    return (
        <div>
            <WrappedCompA />
            <WrappedCompB />
        </div>
    );
};

export default ShowFrame;