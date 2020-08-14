import { Component } from 'react'
import ReactDOM from 'react-dom'

const loaderRoot = document.getElementById('loader')

export default class Loader extends Component {
    constructor() {
        super()
        this.el = document.createElement('div')
    }

    componentDidMount = () => {
       loaderRoot.appendChild(this.el)
    }    

    componentWillUnmount = () => {
        loaderRoot.removeChild(this.el)
    }

    render () {
        const { children } = this.props
        return ReactDOM.createPortal(children, this.el)
    }
}