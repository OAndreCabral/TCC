import React, { useState } from 'react';
import Styles from './Encomendas.module.css';

import { Link } from 'react-router-dom';
import {
  	EditOutlined,
	SignalFilled,
	PlusOutlined,
} from '@ant-design/icons';
import { Button, Layout, Table, Row, Col, Dropdown, Menu, Checkbox } from 'antd';
import BotaoInput from '../../../../components/BotaoInput';
import BotaoBuscar from '../../../../components/BotaoBuscar';
import Datepicker from '../../../../components/Datepicker';
import DropdownButton from '../../../../components/DropdownButton';

const { Content } = Layout;

const Encomendas = () => {
	const [dropdownVisible, setDropdownVisible] = useState(false);
	const [visibleColumns, setVisibleColumns] = useState({
		id: true,
		fornecedor: true,
		descricao: true,
		filial: true,
		dateEntrega: true,
		status: true,
	});

	const data = [
		{
			"id": "1",
			"fornecedor": "Fornecedor 1",
			"descricao": "Descricao 1",
			"filial": "Filial 1",
			"dateEntrega": "2023-01-01",
			"status": "Ativo"
		},
		{
			"id": "2",
			"fornecedor": "Fornecedor 2",
			"descricao": "Descricao 2",
			"filial": "Filial 2",
			"dateEntrega": "2023-02-01",
			"status": "Inativo"
		},
		{
			"id": "3",
			"fornecedor": "Fornecedor 3",
			"descricao": "Descricao 3",
			"filial": "Filial 3",
			"dateEntrega": "2023-03-01",
			"status": "Ativo"
		},
		{
			"id": "4",
			"fornecedor": "Fornecedor 3",
			"descricao": "Descricao 3",
			"filial": "Filial 3",
			"dateEntrega": "2023-03-01",
			"status": "Ativo"
		},
		{
			"id": "5",
			"fornecedor": "Fornecedor 3",
			"descricao": "Descricao 3",
			"filial": "Filial 3",
			"dateEntrega": "2023-03-01",
			"status": "Ativo"
		},
		{
			"id": "6",
			"fornecedor": "Fornecedor 3",
			"descricao": "Descricao 3",
			"filial": "Filial 3",
			"dateEntrega": "2023-03-01",
			"status": "Ativo"
		},
		{
			"id": "7",
			"fornecedor": "Fornecedor 3",
			"descricao": "Descricao 3",
			"filial": "Filial 3",
			"dateEntrega": "2023-03-01",
			"status": "Ativo"
		},
		{
			"id": "8",
			"fornecedor": "Fornecedor 3",
			"descricao": "Descricao 3",
			"filial": "Filial 3",
			"dateEntrega": "2023-03-01",
			"status": "Ativo"
		},
		{
			"id": "9",
			"fornecedor": "Fornecedor 3",
			"descricao": "Descricao 3",
			"filial": "Filial 3",
			"dateEntrega": "2023-03-01",
			"status": "Ativo"
		},
		{
			"id": "10",
			"fornecedor": "Fornecedor 3",
			"descricao": "Descricao 3",
			"filial": "Filial 3",
			"dateEntrega": "2023-03-01",
			"status": "Ativo"
		},
		{
			"id": "11",
			"fornecedor": "Fornecedor 3",
			"descricao": "Descricao 3",
			"filial": "Filial 3",
			"dateEntrega": "2023-03-01",
			"status": "Ativo"
		},
	];
	const items = [
		{
			label: 'Paraná Centro',
			id: '1',
		},
		{
			label: 'Paraná Larpão',
			id: '1',
		},
	];

	const situacoes = [
		{
			label: 'Ag. Aprovação',
			id: '1',
		},
		{
			label: 'Ag. Entrega',
			id: '2',
		},
		{
			label: 'Entregue',
			id: '3',
		},
		{
			label: 'Cancelada',
			id: '4',
		},
	]

	const columns = [
		{
			title: 'ID',
			dataIndex: 'id',
			key: 'id',
			sorter: (a, b) => a.id - b.id,
		},
		{
			title: 'Fornecedor',
			dataIndex: 'fornecedor',
			key: 'fornecedor',
			sorter: (a, b) => a.fornecedor.localeCompare(b.fornecedor),
		},
		{
			title: 'Descrição',
			dataIndex: 'descricao',
			key: 'descricao',
			sorter: (a, b) => a.descricao.localeCompare(b.descricao),
		},
		{
			title: 'Filial',
			dataIndex: 'filial',
			key: 'filial',
			sorter: (a, b) => a.filial.localeCompare(b.filial),
		},
		{
			title: 'Data de entrega',
			dataIndex: 'dateEntrega',
			key: 'dateEntrega',
			sorter: (a, b) => a.dateEntrega.localeCompare(b.dateEntrega),
		},
		{
			title: 'Situação',
			dataIndex: 'status',
			key: 'status',
			onFilter: (value, record) => record.status.indexOf(value) === 0,
		},
		{
		title: 'Ações',
		render: (record) => (
			<Link to={`/edit-fornecedores/${record.id}`}>
			<EditOutlined style={{ cursor: 'pointer' }} />
			</Link>
		)
		},     
	].filter(column => column.key ? visibleColumns[column.key] : true);

	const onChange = (pagination, filters, sorter, extra) => {
		return ('params', pagination, filters, sorter, extra);
	};

	const handleVisibleChange = columnid => {
		setVisibleColumns({
		  ...visibleColumns,
		  [columnid]: !visibleColumns[columnid],
		});
	};

	const handleMenuClick = (e) => {
		e.domEvent.stopPropagation();
		handleVisibleChange(e.key);
	  };
	  
	const handleDropdownVisibleChange = (visible) => {
		setDropdownVisible(visible);
	};

	const menu = (
		<Menu onClick={handleMenuClick}>
			{Object.keys(visibleColumns).map(columnKey => {

				return (
				<Menu.Item key={columnKey}>
					<Checkbox
						checked={visibleColumns[columnKey]}
					>
						{columnKey}
					</Checkbox>
				</Menu.Item>
				)
			})}
		</Menu>
	);
	  

	return (
		<Content className={Styles.content}>
			<h1>Encomendas</h1>
			<div className={Styles.contentButtons}>
				<Row gutter={[16, 16]}>
					<Col xs={28} sm={28} md={28} lg={28}>
						<p style={{fontSize: 20}}>Filtros:</p>
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col xs={28} sm={28} md={28} lg={28}>
						<BotaoInput placeholder={"Fornecedor"}/>
					</Col>
					<Col xs={28} sm={28} md={28} lg={28}>
						<DropdownButton
							placeholder="Busque pela filial"
							items={items}
						/>
					</Col>
					<Col xs={28} sm={28} md={28} lg={28}>
						<DropdownButton
							placeholder="Situação"
							items={situacoes}
						/>
					</Col>
					<Col xs={28} sm={28} md={28} lg={28}>
						<Datepicker />
					</Col>
					<Col xs={28} sm={28} md={28} lg={28}>
						<BotaoBuscar />
					</Col>
				</Row>
			</div>
			<Row gutter={[16, 16]} className={Styles.contentTopButtons}>
				<Col xs={28} sm={28} md={28} lg={28}>
					<Dropdown
						visible={dropdownVisible}
						onVisibleChange={handleDropdownVisibleChange}
						overlay={menu}
						trigger={['click']}
					>
						<Button
							icon={<SignalFilled />}
							className={Styles.column}
						>
							Colunas
						</Button>
					</Dropdown>
				</Col>
				<Col xs={28} sm={28} md={28} lg={28}>
					<Button
						icon={<PlusOutlined />}
						className={Styles.add}
						onMouseOver={(e) => {
							e.target.style.backgroundColor = '#001C36';
							e.target.style.color = 'white';
							e.target.style.borderColor = 'white';
						}}
					>
						Adicionar
					</Button>
				</Col>
			</Row>
			<Table
				columns={columns}
				dataSource={data}
				onChange={onChange}
			/>
		</Content>
	);
};

export default Encomendas;