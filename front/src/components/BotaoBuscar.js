import { Button, Menu, Dropdown } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import Style from './BotaoBuscar.module.css'

const BotaoBusca = ({ onSearch, onReset }) => {
	const menu = (
		<Menu>
		  <Menu.Item onClick={onReset}>
			Limpar filtros
		  </Menu.Item>
		</Menu>
	  );

	return (
		<div className={Style.botaoBuscar}>
			<Button
				className={Style.botao}
				size='large'
				icon={<SearchOutlined />}
				onClick={onSearch}
				onMouseOver={(e) => {
					e.target.style.backgroundColor = '#001C36';
					e.target.style.color = 'white';
					e.target.style.borderColor = 'white';
				}}
			>
				Buscar
			</Button>
			<Dropdown overlay={menu} trigger={['click']}>
				<Button
					className={Style.limpaFiltro}
					size='large'
					onMouseOver={(e) => {
						e.target.style.backgroundColor = '#001C36';
						e.target.style.color = 'white';
						e.target.style.borderColor = 'white';
					}}
				>
					<p>...</p>	
				</Button>
			</Dropdown>
		</div>
	);
};

export default BotaoBusca;
