import React from "react"
import { Card, Input } from "antd"
import style from "./style.module.scss"
import ic_search from "../../../static/Images/ic_search.png"
import ic_nearby from "../../../static/Images/ic_nearby.png"
import ic_location from "../../../static/Images/ic_location.png"
import BrandedButton from "../brandedButton/BrandedButton"
import RoundedLink from "../RoundedLink/RoundedLink"

class ExploreCard extends React.Component {
  render() {
    return (
      <Card className={style.card}>
        <div>
          <h3 className={style.exploreHeader}>Search, Explore & book.</h3>
          <p
            style={{
              fontFamily: "Helvetica",
              color: "#9B9B9B",
              marginBottom: 0,
            }}
          >
            Book what you love or discover a new favorite.
          </p>
        </div>
        <div className={style.search}>
          <Input
            className={style.filterSearch}
            placeholder="“gym”, “dance” or “photography” …"
            prefix={<img src={ic_search} alt="/" />}
            style={{
              display: "flex",
              flexGrow: 1,
            }}
          />

          <Input
            className={style.filterSearch}
            placeholder="Nearby"
            prefix={<img src={ic_location} alt="/" />}
            suffix={<img src={ic_nearby} alt="/" />}
          />
        </div>
        <RoundedLink
          content="Explore"
          redirect="/Explore"
          styles={{
            lineHeight: "48px",
            float: "right",
            marginTop: 24,
            textAlign: "center",
          }}
        />
      </Card>
    )
  }
}

export default ExploreCard
