import React from 'react'

class Lifecycle extends React.Component {
    constructor() {
        super()

        this.state = {
            number: 0
        }

        console.log('constructor')
    }

    componentWillMount() {
        console.log('componentWillMount')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillRecieveProps')
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate')

        console.log('this.props: ', this.props)
        console.log('this.state: ', this.state)
        console.log('nextProps: ', nextProps)
        console.log('nextState: ', nextState)

        return true
    }

    componentWillUpdate() {
        console.log('componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    render() {
        console.log('render')
        return (
            <div>
                Lifecycle
                <button
                    onClick = {() => this.setState({number: this.state.number + 1})}
                >
                    Zmień stan
                </button>
            </div>
        )
    }

}

export default Lifecycle