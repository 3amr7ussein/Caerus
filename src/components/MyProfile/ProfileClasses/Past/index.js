import React, { Component } from "react"
import style from "./style.module.scss"
import { Link } from "gatsby"
import { List ,Row,Col} from "antd"
import CardData from "../../../Card"

class Past extends Component {
  
  render() {
 
    return (
      <div className={style.myCards}>
        <h4 style={{ marginBottom: 30 }}>Past Classes</h4>
        <div className={style.cards}>
        {this.props.userClasses === [] ?
          <div className = "noClasses">
          <h4>There is No Booking Classes</h4>
          <Link to="/Explore">

          SEARCH FOR CLASSES
          </Link>

          
          </div>
          
            :
          <List
            grid={{
              gutter: 16,
              // column : 7,
              xs: 1,
              sm: 1,
              md: 2,
              lg: 2,
            }}
            itemLayout="horizontal"
            dataSource={this.props.userClasses || []}
            renderItem={item => ( 
            
        // <Row>
        //       <Col span = {12}>
              <List.Item className = {style.Cards} >
                <div >
                  <Link to={`/classes/${item.id}`} style = {{padding : 10 ,width:'100%' }}>
                    
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

          
              // </Col>
              // </Row>
               )
               }
          />
              }
        </div>
      </div>
    )
  }
}

export default Past
