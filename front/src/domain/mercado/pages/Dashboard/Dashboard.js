import React from 'react';
import Styles from './Dashboard.module.css';
import { UserOutlined } from '@ant-design/icons';
import { Layout, Row, Col, List, Form } from 'antd';
import Cards from '../../../../components/Cards';
import DropdownButton from '../../../../components/DropdownButton';
import Datepicker from '../../../../components/Datepicker';
import BotaoBuscar from '../../../../components/BotaoBuscar';


const { Content } = Layout;

const gridConfig = {
	gutter: 0,
	xs: 1,
	sm: 2,
	md: 2,
	lg: 2,
	xl: 4,
	xxl: 5,
}

const Dashboard = () => {
	const [form] = Form.useForm();

	const mockCards = [
		{
			title: "Entregues",
			information: "Aqui nós temos a quantidade de produtos que foram entregues.",
			value: 35,
			pathModal: '/list-entregas'
		},
		{
			title: "Entregues",
			information: "Aqui nós temos a quantidade de produtos que foram entregues.",
			value: 35,
			pathModal: '/list-entregas'
		},
		{
			title: "Entregues",
			information: "Aqui nós temos a quantidade de produtos que foram entregues.",
			value: 35,
			pathModal: '/list-entregas'
		},
		{
			title: "Entregues",
			information: "Aqui nós temos a quantidade de produtos que foram entregues.",
			value: 35,
			// pathModal: '/list-entregas'
		},
		{
			title: "Entregues",
			// information: "Aqui nós temos a quantidade de produtos que foram entregues.",
			value: 35,
			pathModal: '/list-entregas'
		},
		{
			title: "Teste",
			// information: "Aqui nós temos a quantidade de produtos que foram entregues.",
			value: 35,
		}
	]

	const items = [
		{
			label: 'Paraná Centro',
			key: '1',
			icon: <UserOutlined />,
		},
		{
			label: 'Paraná Larpão',
			key: '1',
			icon: <UserOutlined />,
		},
	];

	const renderCards = (item) => (
		<List.Item>
			<Cards content={item} />
		</List.Item>
	);

	const handleSearch = () => {
		const values = form.getFieldsValue();
		console.log(values);
	  };

	const handleReset = () => {
		form.resetFields();
	};

	return (
		<Content className={Styles.content}>
			<h1 className={Styles.contentTitle}>Dashboard</h1>
			<Form form={form} layout="vertical">
				<div className={Styles.contentButtons}>
					<Row gutter={[16, 16]}>
						<Col xs={28} sm={28} md={28} lg={28}>
							<p style={{fontSize: 20}}>Filtros:</p>
						</Col>
					</Row>
					<Row gutter={[16, 16]}>
						<Col xs={28} sm={28} md={28} lg={28}>
							<Form.Item name="filial">
								<DropdownButton
									placeholder="Busque pela filial"
									items={items}
									onChange={value => form.setFieldsValue({ filial: value })}
								/>
							</Form.Item>
						</Col>
						<Col xs={28} sm={28} md={28} lg={28}>
							<Form.Item name="data">
								<Datepicker
									onChange={value => form.setFieldsValue({ data: value })}
								/>
							</Form.Item>
						</Col>
						<Col xs={28} sm={28} md={28} lg={28}>
							<BotaoBuscar
								onSearch={handleSearch}
								onReset={handleReset}
							/>
						</Col>
					</Row>
				</div>
				<div className={Styles.contentCards}>
					<List
						grid={gridConfig}
						dataSource={mockCards}
						renderItem={renderCards}
					/>
				</div>
			</Form>
		</Content>
	);
};

export default Dashboard;
