import React, { Component } from 'react'
import style from './style.module.scss'
export default class StyledHN extends Component {
    render() {
        switch (this.props.header) {
            case 'h1':
                return <h1 className={style.headerStyle} style={this.props.style}><span />{this.props.children}</h1>
            case 'h2':
                return <h2 className={style.headerStyle} style={this.props.style}><span />{this.props.children}</h2>
            case 'h3':
                return <h3 className={style.headerStyle} style={this.props.style}><span />{this.props.children}</h3>
            case 'h4':
                return <h4 className={style.headerStyle} style={this.props.style}><span />{this.props.children}</h4>
            default:
                return <h1 className={style.headerStyle} style={this.props.style}><span />{this.props.children}</h1>
        }
    }
}
