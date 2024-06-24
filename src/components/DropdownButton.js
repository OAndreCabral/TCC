import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu } from 'antd';

import Style from './DropdownButton.module.css'

const DropdownButton = ({ placeholder, items, onChange }) => {
	const [selectedItem, setSelectedItem] = useState(placeholder);

	const handleMenuClick = (e) => {
		const selectedLabel = items[e.key].label;
		setSelectedItem(selectedLabel);
		if (onChange) {
			onChange(selectedLabel);
		}
	};

	const menu = () => (
		<Menu onClick={handleMenuClick}>
			{items.map((item, index) => (
				<Menu.Item key={index}>
					{item.label}
				</Menu.Item>
			))}
		</Menu>
	);

	return (
		<Dropdown overlay={menu} trigger={['click']}>
			<Button
				size='large'
				className={Style.button}
			>
				{selectedItem}
				<DownOutlined />
			</Button>
		</Dropdown>
	)
}

export default DropdownButton;
