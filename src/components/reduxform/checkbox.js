import React, { Component } from "react"
import Form from "../uielements/form"
import { Checkbox, Row, Col } from "antd"
import styled from "styled-components"

export class RenderCheckBox extends Component {
  constructor(props) {
    super(props)
    // console.log("Catogeries", this.props.input.input);
  }

  onChange(v) {
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
        {/* <Input 
                {...input}
                size="large"
                placeholder={placeholder || label} id="error" /> */}
        <StyleWrapper>
          <Checkbox.Group
            style={{ width: "100%" }}
            defaultValue={this.props.input.value || null}
            onChange={v => this.onChange(v)}
          >
            <Row>
              {this.props.dataSet.map(element => {
                return (
                  <Col key={element.key} span={12}>
                    <Checkbox value={element.key}>{element.value}</Checkbox>
                  </Col>
                )
              })}
            </Row>
          </Checkbox.Group>
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
