import React, { Component } from 'react'
import Form from '../uielements/form'
import { default as DatePicker } from '../uielements/datePicker';
import MultipleDatePicker from 'react-multiple-datepicker';
import styled from 'styled-components'

const moment = require('moment');





export class RenderMultiDatePicker extends Component {

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
    onSubmit(v){
        console.log ("DateArray" , v)
        
        if (this.props.input && this.props.input.onChange && v && v.length) {
            this.props.input.onChange({
              preventDefault: () => { },
              stopPropagation: () => { },
              target: {
                value: v,
                type: 'dateArray',
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
            <StyleWrapper> 
            <Form.Item

                {...formItemLayout}
                label={
                    label
                }
                validateStatus={ error && dirty ? "error" : ""}
                hasFeedback
                help={error && dirty  ? error : null}
            >
       
                <MultipleDatePicker  
                onSubmit={v => this.onSubmit(v)}  
                format="YYYY-MM-DD" />
               

            </Form.Item>
            </StyleWrapper>  
        )
    }
}


const StyleWrapper = styled.div`
input[type="text" ] {
    width: 100%;
    border: 1px solid #d9d9d9;
    padding: 0px 0px;
    border-radius: 5px;
}
.fvqYrY {
    background-color: #ff0000;
    
    height: 335px;
}
.hBpMxV{
    color: #ff0000
}
.RDNqh{
    background-color: #ff0000;
}
`
