import React, { Component } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { Layout, List } from "antd"
import style from "./style.module.scss"

import CardData from "../Card"
const { Content } = Layout

class ClassCard extends Component {
  render() {
    // console.log("myClasses2", this.props.myClasses)

    return (
      <section
        style={{
          width: "100%",
          position: "relative",
        }}
      >
        <div className={style.discoverWrapper}>
          <Content>
            <div className={style.cards}>
              <List
                grid={{
                  gutter: 16,
                  xs: 1,
                  sm: 2,
                  md: 2,
                  lg: 3,
                }}
                dataSource={this.props.myClasses || []}
                renderItem={item => (
                  <List.Item>
                    <Link to={`/classes/${item.id}`}>
                      <CardData
                        cover={item.owner.cover}
                        id={item.id}
                        title={item.title}
                        time={item.startAt}
                        trainer={item.trainers[0].name}
                        place={item.owner.name}
                      />
                    </Link>
                  </List.Item>
                )}
              />
            </div>
          </Content>
        </div>
      </section>
    )
  }
}

export default ClassCard
