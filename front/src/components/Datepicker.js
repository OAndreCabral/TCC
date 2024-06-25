import React from 'react';
import { ConfigProvider, DatePicker } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';

import Style from './Datepicker.module.css'

const { RangePicker } = DatePicker;

const Datepicker = ({ onChange }) => {
	return (
		<ConfigProvider locale={ptBR}>
			<RangePicker
				size='large'
				className={Style.rangePicker}
				format="DD-MM-YYYY"
				onChange={onChange}
			/>
		</ConfigProvider>
	);
};

export default Datepicker;
