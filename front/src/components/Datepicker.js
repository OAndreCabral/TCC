import React from 'react';
import { ConfigProvider, DatePicker } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';

const { 
    RangePicker,
} = DatePicker;

const Datepicker = ({ disabled = false }) => (
    <ConfigProvider locale={ptBR}>
        <RangePicker disabled={disabled}/>
    </ConfigProvider>
);
export default Datepicker;