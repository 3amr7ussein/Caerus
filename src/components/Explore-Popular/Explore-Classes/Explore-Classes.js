import React, { Component } from "react"
import { Link } from "gatsby"
import { Layout, Divider, List } from "antd"
import style from "./style.module.scss"
import CardData from "../../Card"

const { Content } = Layout

class ExploreClasses extends Component {
  render() {
    let HomeClasses = this.props.Classes.payload.upcoming
    return (
      <section
        style={{
          width: "100%",
          position: "relative",
        }}
      >
        <div className={style.discoverWrapper}>
          <Content>
            <Divider className={style.dividerText}>Classes</Divider>

            <div className={style.cards}>
              <List
                grid={{
                  gutter: 16,
                  xs: 1,
                  sm: 2,
                  md: 2,
                  lg: 3,
                }}
                dataSource={HomeClasses || []}
                renderItem={item => (
                  <List.Item>
                    <Link to={`/classes/${item.id}`}>
                      <CardData
                        cover={item.owner.cover}
                        id={item.id}
                        title={item.title}
                        time={item.startAt}
                        trainer={this.props.trainerName}
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

export default ExploreClasses
