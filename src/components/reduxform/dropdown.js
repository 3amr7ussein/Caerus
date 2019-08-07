import React, { Component } from "react"
import Form from "../uielements/form"
import { Select } from "antd"
import styled from "styled-components"

export class RenderDropdown extends Component {
  constructor(props) {
    super(props)
    //  console.log("DISCLAIMER",this.props.input.value );
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
    const Option = Select.Option

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
          <Select
            showSearch
            style={{ width: "100%" }}
            onChange={v => this.onChange(v)}
            placeholder={placeholder}
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            }
            defaultValue={this.props.input.value || null}
          >
            {this.props.dataSet.map(element => {
              return (
                <Option key={element.key} value={element.key}>
                  {element.value}
                </Option>
              )
            })}
          </Select>
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
