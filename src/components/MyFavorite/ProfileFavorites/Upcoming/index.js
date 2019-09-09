import React, { Component } from "react"
import style from "./style.module.scss"
import { Link } from "gatsby"
import { List } from "antd"
import CardData from "../../../Card"

class UpcomingClasses extends Component {
  render() {
    console.log("userClasses", this.props.userClasses)
    return (
      <div className={style.myCards}>
        <h4 style={{ marginBottom: 30 }}>Manage your Favorite CLasses</h4>
        <div className={style.cards}>
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 2,
              lg: 2,
            }}
            itemLayout="horizontal"
            dataSource={this.props.userClasses || []}
            renderItem={item => (
              <List.Item>
                <div>
                  <Link to={`/classes/${item.id}`}>
                    <CardData
                      cover={item.owner.cover}
                      id={item.id}
                      title={item.title}
                      time={item.startAt}
                      trainer={item.trainers[0].name}
                      place={item.owner.name}
                      available={item.availablePlaces}
                      price={item.price}
                    />
                  </Link>
                </div>
              </List.Item>
            )}
          />
        </div>
      </div>
    )
  }
}

export default UpcomingClasses
