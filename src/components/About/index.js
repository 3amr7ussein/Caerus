import React from "react"
// import { theme } from "../../config/theme";
import { Layout, Divider } from "antd"
import style from "./style.module.scss"

const { Content } = Layout

class About extends React.Component {
  render() {
    const { aboutContent, aboutHead } = this.props
    return (
      <div className={style.discoverWrapper}>
        <Content>
          <Divider className={style.dividerText}>{aboutHead}</Divider>
          <div>
            <p>{aboutContent}</p>
          </div>
        </Content>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     user: state.user,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {}
// }

export default About
