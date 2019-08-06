import React, { Component } from "react"
import { connect } from "react-redux"
import { Collapse, List } from "antd"
import style from "./style.module.scss"

const { Panel } = Collapse

const FAQList = [
  {
    key: 1,
    title: "How do I book online?",
    content:
      "Just go to the class, book a slot or more and select whether you want the payment in cash or online and voila, you get a code for your class booking.",
  },
  {
    key: 2,
    title: "How does the cash payment work?",
    content:
      "You just need to select “cash” payment when you book your class, and you pay upon entering your class.",
  },
  {
    key: 3,
    title: "Can I cancel a class I booked online?",
    content:
      "Of course you can. Go to your “upcoming classes” tab and click “cancel booking”. If you had already paid your class online, money will be transferred as credit in you Caerus wallet which you can redeem at any other time.",
  },
  {
    key: 4,
    title: "What if I don't show up to class?",
    content:
      "After your third no show to class and you did not cancel your booking 15 minutes prior to class, cancellation fees will be deducted.",
  },
  {
    key: 5,
    title: "Is the online payment secure?",
    content:
      "Our online payment is processed through “Accept” our financial affiliate which is 100% secure and safe.",
  },
  {
    key: 6,
    title: "What happens if a class was cancelled and I paid online?",
    content:
      "Money will be transferred as credit in you Caerus wallet which you can redeem at any other time.",
  },
  {
    key: 8,
    title: "Can I use the credit in my wallet to book a different class?",
    content: "Of course you can.",
  },
  {
    key: 9,
    title: "I'm having trouble booking or managing my account",
    content:
      "Please get in touch with us through support@caerus.com and we will be happy to help.",
  },
]

class QandA extends Component {
  render() {
    return (
      <div>
        <h1>Q&A's</h1>
        <List
          itemLayout="horizontal"
          dataSource={FAQList}
          renderItem={item => (
            <List.Item>
              <Collapse
                bordered={false}
                defaultActiveKey={["1"]}
                className={style.accordion}
              >
                <Panel header={item.title} key={item.key}>
                  <p style={{ paddingLeft: 24 }}>{item.content}</p>
                </Panel>
              </Collapse>
            </List.Item>
          )}
        />
        ,
      </div>
    )
  }
}

export default QandA
