import React, { Component } from 'react'
import Form from '../uielements/form'
import { default as DatePicker } from '../uielements/datePicker';


const moment = require('moment');





export class RenderDatePicker extends Component {

    state = {
        startValue: ""
    }

    constructor(props){
        super(props);
        if (props.input.value) {
            this.state = {
                ...this.state,
                startValue: props.input.value || undefined
            }
        }
    }
    selectDate(v){
        
        
        if (this.props.input && this.props.input.onChange && v && v.format()) {
            this.props.input.onChange({
              preventDefault: () => { },
              stopPropagation: () => { },
              target: {
                value: v.format(),
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
            placeholder,
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
      
                <DatePicker 
                defaultValue={moment(this.props.input.value || undefined)} 
                allowClear
                showTime
                onOk={v => this.selectDate(v)}  
                format="YYYY-MM-DD HH:mm"
                 />
                

            </Form.Item>
           
        )
    }
}


