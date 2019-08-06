import React, { Component } from "react"
import { Link } from "gatsby"
import { Layout, List } from "antd"
import style from "./style.module.scss"
import BookingPartic from "../../Modal/BookingPartic"
import CardData from "../../Card"
import BrandedButton from "../../brandedButton/BrandedButton"

const { Content } = Layout

class StudioClasses extends Component {
  state = {
    showBookingSection: false,
  }

  showBookingModal(showBookingSection) {
    this.setState({
      showBookingSection,
    })
  }

  render() {
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
                dataSource={this.props.classes}
                renderItem={item => (
                  <List.Item>
                    <div>
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
                      <BrandedButton
                        styles={{
                          height: 44,
                          width: 300,
                        }}
                        content="Book"
                        handelClick={() => this.showBookingModal(true)}
                      />
                    </div>
                  </List.Item>
                )}
              />
            </div>
          </Content>
        </div>
        <BookingPartic
          Visibility={this.state.showBookingSection}
          onCancel={() => this.setState({ showBookingSection: false })}
          onSubmitSuccess={() => {
            this.setState({ showBookingSection: false })
          }}
        />
      </section>
    )
  }
}

export default StudioClasses
