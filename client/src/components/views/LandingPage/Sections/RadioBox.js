import React, {useState} from 'react'
import { Collapse, Radio } from 'antd';
import { OmitProps } from 'antd/lib/transfer/renderListBody';
const { Panel } = Collapse;



function RadioBox(props) {

    const [Value, setValue] = useState('0')

    const renderRadioBox = () => (
        props.list && props.list.map((value) => (
            <Radio Key={value._id} value={`${value._id}`}>{value.name}</Radio>
        ))
    )
    
    const handleChange = (event) => {
        setValue(event.target.value)

        props.handleFilters(event.target.value)
    }

    
    return (
        <div>
         <Collapse defaultActiveKey={['0']}>
             <Panel header="price" key="1">
                 <Radio.Group onChange={handleChange} value={Value}>

                     {renderRadioBox()}

                 </Radio.Group>
             </Panel>
         </Collapse>
        </div>
    )
}

export default RadioBox;