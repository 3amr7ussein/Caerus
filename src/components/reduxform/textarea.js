import React, { Component } from 'react'
import Form from '../uielements/form'
import { Input } from 'antd';

const {TextArea} = Input;
export class RenderTextArea extends Component {
    

    render() {
        const {
            input,
            label,
            placeholder,
            formItemLayout,
            rows,
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
                <TextArea 
                rows={rows}
                {...input}
                placeholder={placeholder || label} id="error" />
            </Form.Item>

        )
    }
}

