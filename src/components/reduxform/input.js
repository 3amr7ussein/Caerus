import React, { Component } from 'react'
import Form from '../uielements/form'
import { Input } from 'antd';

export class RenderField extends Component {
    

    render() {
        const {
            input,
            label,
            placeholder,
            formItemLayout,
            htmlType,
            meta: { touched, error }
        } = this.props
        return (

            <Form.Item
                {...formItemLayout}
                label={
                    label
                }
                validateStatus={touched && error ? "error" : ""}
                hasFeedback
                help={error && touched ? error : null}
            >
                <Input 
                {...input}
                size="large"
                placeholder={placeholder || label} id="error" 
                />
            </Form.Item>

        )
    }
}

