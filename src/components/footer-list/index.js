import React, { Component } from "react"
import { Link } from "gatsby"
import style from "./style.module.scss"

export default class FooterList extends Component {
  render() {
    return (
      <div className={style.ListContainer}>
        <strong>{this.props.title}</strong>
        <div>
          {this.props.list &&
            this.props.list.map((a, index) => (
              <Link
                key={`_${index}`}
                rel="noopener noreferrer"
                to={a.link}
                onClick={() => a.onClick}
                // key={a.link}
              >
                {a.title}
              </Link>
            ))}
        </div>
      </div>
    )
  }
}
