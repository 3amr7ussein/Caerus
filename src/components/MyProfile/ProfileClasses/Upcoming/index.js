import React, { Component } from "react"
import style from "./style.module.scss"
import { Link } from "gatsby"
import { List ,Row,Col, Divider} from "antd"
import CardData from "../../../Card"

class UpcomingClasses extends Component {
  render() {
    console.log('propssss',this.props.userClasses)
 let show;
  ( this.props.userClasses.length === 0) ?
  
  show = (<div className ={style.noClasses}>
  <h4>There is No Booking Classes</h4>
  <Link to="/Explore">

  SEARCH FOR CLASSES
  </Link>
  </div>
  
  )
  :
   (
    show = <List
    grid={{
      gutter: 16,
      // column : 7,
      xs: 1,
      sm: 1,
      md: 2,
      lg: 2,
    }}
    itemLayout="horizontal"
    dataSource={this.props.userClasses }
    renderItem={item => ( 
    
// <Row>
//       <Col span = {12}
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
  />)


    return (
      <div className={style.myCards}>
        <h4 style={{ marginBottom: 30 }}>Manage Your Upcoming Classes</h4>
        <Divider />
        <div className={style.cards}>
             {show}
        </div>
      </div>
    )
  }
}

export default UpcomingClasses
