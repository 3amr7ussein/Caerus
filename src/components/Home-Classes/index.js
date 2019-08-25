import React, { Component } from "react"
import { Link } from "gatsby"
import { Layout, Col, Row, List } from "antd"
import style from "./style.module.scss"
import StyledHN from "../styled-hn"
import CardData from "../Card"
import BrandedButton from "../brandedButton/BrandedButton"

const { Content } = Layout

export default class HomeClasses extends Component {
  render() {
    // console.log("HomeClasses", this.props.homeClasses)

    return (
      <section
        style={{
          width: "100%",
          position: "relative",
        }}
      >
        <div className={style.boxStyle}>
          <Content>
            <div className={style.discoverWrapper}>
              <StyledHN header="h2" style={{ paddingTop: 69, flex: 1 }}>
                Recommended Classes
              </StyledHN>
              <p className={style.subHeader}>
                There are many variations of passages of Lorem Ipsum available
              </p>
              <div className={style.cards}>
                <List
                  grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 2,
                    lg: 3,
                  }}
                  itemLayout="horizontal"
                  dataSource={this.props.homeClasses || []}
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
                          />
                        </Link>
                        <BrandedButton
                          styles={{
                            height: 44,
                            width: 300,
                          }}
                          redirect="/confirmation"
                          content="Book"
                         
                        />
                      </div>
                    </List.Item>
                  )}
                />
              </div>
              <div style={{ textAlign: "center" }}>
                <BrandedButton
                  content="Show All"
                  styles={{ marginBottom: 96, marginTop: 20 }}
                />
              </div>
            </div>
          </Content>
        </div>
      </section>
    )
  }
}
