import React, { Component } from "react"
import { Layout, Col, Row , Icon } from "antd"
import style from "./style.module.scss"
import StyledHN from "../styled-hn"
import BrandedButton from "../brandedButton/BrandedButton"
import ProfilePic from "../../../static/Images/img_avatarWoman.png"
import EditPin from "../../../static/Images/EditPen1.png"
import Lock from "../../../static/Images/Lock-icon.png"

const { Content } = Layout

class Header extends Component {

  render() {
    return (


            <section
              className={style.sectionStyle}
            >
                <div className={style.imgContainer}>
                  <img src={ProfilePic} />
                </div>
                <div className={style.infoContainer}>
                  <h3>Mostafa Khater</h3>
                  <p>mostafa.khater@gmail.com</p>
                  <div>
                    
                    <BrandedButton
                      Icon={
                            <Icon 
                              type="edit" 
                              theme="filled" 
                              style={{
                                color:"white"
                              }}
                              className={style.onHover}
                            />
                      } 
                      content={"Edit Profile"}
                      className={style.BrandedbuttonStyle}
                      styles={{

                        width: "130px",
                        fontSize: "16px",
                        height: "30px",
                        fontWeight: "500"
                       }}
                    />
                     
                  
                  <BrandedButton
                      Icon={
                        <Icon 
                        type="lock" 
                        theme="filled" 
                        style={{
                          color:"#ff4200",
                          
                        }}
                        />
                        }  
                      content={"Change Password"}
                      className={style.ChangePassStyle}
                      styles={{

                        color:"#ff4200",
                        width: "200px",
                        fontSize: "16px",
                        height: "30px",
                        marginLeft:"10px",
                        backgroundColor:"white",
                        border: "1px solid #ff4200",
                        fontWeight: "500"
    
                       }}
                  >
                   
                  </BrandedButton>
                  </div>
                </div>
                
            </section>
                  
    )
  }
}


export default Header;