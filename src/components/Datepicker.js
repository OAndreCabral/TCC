import React from 'react';
import { ConfigProvider, DatePicker } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';

const { RangePicker } = DatePicker;

const Datepicker = () => (
    <ConfigProvider locale={ptBR}>
        <RangePicker />
    </ConfigProvider>
);
export default Datepicker;