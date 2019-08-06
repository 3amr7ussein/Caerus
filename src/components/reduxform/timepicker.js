import React, { Component } from 'react'
import Form from '../uielements/form'

import { TimePicker } from 'antd'
import styled from 'styled-components'

const moment = require('moment');





export class RenderTimePicker extends Component {

    // state = {
    //     startValue: ""
    // }

    constructor(props){
        super(props);
        console.log("TIME_VALUE", this.props.input.value)
        // if (props.input.value) {
        //     this.state = {
        //         ...this.state,
        //         startValue: props.input.value || undefined
        //     }
        // }
    }
    onChange(v){
        console.log (v)
      
        if (this.props.input && this.props.input.onChange && v ) {
            this.props.input.onChange({
              preventDefault: () => { },
              stopPropagation: () => { },
              target: {
                value: v.format('HH:mm'),
                type: 'text',
                files: undefined,
                dataTransfer: undefined,
                checked: undefined
              }
            });
        }
    }
    
    render() {
        const {
            label,
            formItemLayout,
            
            meta: { dirty , error } 
        } = this.props
        return (
            
            <Form.Item
                {...formItemLayout}
                label={
                    label
                }
                validateStatus={ error && dirty ? "error" : ""}
                hasFeedback
                help={error && dirty  ? error : null}
            >

                <TimePicker  
                // defaultValue={this.props.input.value}
                onChange={v => this.onChange(v)}  
                format=" HH:mm" />
                

            </Form.Item>
            
        )
    }
}



