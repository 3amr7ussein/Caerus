import React, { Component } from "react"
import Form from "../uielements/form"
import { Radio, Row, Col, RadioGroup } from "antd"
import styled from "styled-components"

export class RenderRadio extends Component {
  constructor(props) {
    super(props)
  }

  // state = {
  //     value: 1,
  //   }
  onChange(v) {
    console.log(v)
    debugger
    if (this.props.input && this.props.input.onChange && v) {
      this.props.input.onChange({
        preventDefault: () => {},
        stopPropagation: () => {},
        target: {
          value: v,
          type: "text",
          files: undefined,
          dataTransfer: undefined,
          checked: undefined,
        },
      })
    }
  }

  render() {
    const {
      input,
      label,
      placeholder,
      formItemLayout,
      htmlType,
      meta: { touched, error },
    } = this.props
    return (
      <Form.Item
        {...formItemLayout}
        label={label}
        validateStatus={touched && error ? "error" : ""}
        hasFeedback
        help={error && touched ? error : null}
      >
        <StyleWrapper>
          <Radio.Group
            {...input}
            style={{ width: "100%" }}
            defaultValue={this.props.input.value}
          >
            <Row>
              {this.props.dataSet.map(element => {
                return (
                  <Col key={element.key} lg={6} xs={24} md={12}>
                    <Radio value={element.key}>{element.value}</Radio>
                  </Col>
                )
              })}
            </Row>
          </Radio.Group>
        </StyleWrapper>
      </Form.Item>
    )
  }
}

const StyleWrapper = styled.div`
  .ant-checkbox-group {
    width: 100%;
    border: 1px solid #d9d9d9;
    padding: 7px 10px;
    border-radius: 5px;
  }
`
