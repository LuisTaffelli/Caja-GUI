import React from 'react';
import Select from 'react-select';


const Component = ({data, change, value}) => {

    const onChange = (event)=>{
        change(event.map((info)=>{return info.value}))
    }
    let values = null
    if(value !== null){
        values = value.map((info)=>{return {'value': info, 'label':info.name}})
    }


    const options = data.map((info)=>{
        return {'value': info,
            'label':info.name
        }
    })

    return (
        <Select isMulti
        options={options} 
        onChange={onChange}
        value={values}
        ></Select>
    );
};



export default Component;