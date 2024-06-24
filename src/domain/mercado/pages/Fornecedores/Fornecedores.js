import React, { useState } from 'react';
import Styles from './Fornecedores.module.css';

import { Link } from 'react-router-dom';
import {
  	EditOutlined,
	SignalFilled,
	PlusOutlined,
} from '@ant-design/icons';
import { Input, Button, Layout, Table, Row, Col, Dropdown, Menu, Checkbox } from 'antd';
import BotaoInput from '../../../../components/BotaoInput';
import BotaoBuscar from '../../../../components/BotaoBuscar';
import DropdownButton from '../../../../components/DropdownButton';
import IMask from 'imask';

const { Content } = Layout;

const Fornecedores = () => {
	const [dropdownVisible, setDropdownVisible] = useState(false);
	const [visibleColumns, setVisibleColumns] = useState({
		id: true,
		nomeFantasia: true,
		cnpj: true,
		status: true,
	});

	const data = [
		{
			"id": "1",
			"nomeFantasia": "Fornecedor 1",
			"cnpj": "72.587.873/0001-53",
			"status": "ativo",
		},
    {
			"id": "2",
			"nomeFantasia": "Fornecedor 1",
			"cnpj": "72.587.873/0001-53",
			"status": "ativo",
		},
    {
			"id": "3",
			"nomeFantasia": "Fornecedor 1",
			"cnpj": "72.587.873/0001-53",
			"status": "ativo",
		},
    {
			"id": "4",
			"nomeFantasia": "Fornecedor 1",
			"cnpj": "72.587.873/0001-53",
			"status": "ativo",
		},
    {
			"id": "5",
			"nomeFantasia": "Fornecedor 1",
			"cnpj": "72.587.873/0001-53",
			"status": "ativo",
		},
    {
			"id": "6",
			"nomeFantasia": "Fornecedor 1",
			"cnpj": "72.587.873/0001-53",
			"status": "ativo",
		},
    {
			"id": "7",
			"nomeFantasia": "Fornecedor 1",
			"cnpj": "72.587.873/0001-53",
			"status": "ativo",
		},
    {
			"id": "8",
			"nomeFantasia": "Fornecedor 1",
			"cnpj": "72.587.873/0001-53",
			"status": "ativo",
		},
    {
			"id": "9",
			"nomeFantasia": "Fornecedor 1",
			"cnpj": "72.587.873/0001-53",
			"status": "ativo",
		},
    {
			"id": "10",
			"nomeFantasia": "Fornecedor 1",
			"cnpj": "72.587.873/0001-53",
			"status": "ativo",
		},
    {
			"id": "11",
			"nomeFantasia": "Fornecedor 1",
			"cnpj": "72.587.873/0001-53",
			"status": "ativo",
		},
	];

  const situacoes = [
		{
			label: 'Ativo',
			id: '1',
		},
		{
			label: 'Inativo',
			id: '2',
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
			title: 'Nome fantasia',
			dataIndex: 'nomeFantasia',
			key: 'nomeFantasia',
			sorter: (a, b) => a.nomeFantasia.localeCompare(b.nomeFantasia),
		},
		{
			title: 'CNPJ',
			dataIndex: 'cnpj',
			key: 'cnpj',
			sorter: (a, b) => a.cnpj.localeCompare(b.cnpj),
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

  const MaskedInput = ({ mask, ...props }) => {
    const inputRef = React.useRef();
  
    React.useEffect(() => {
      if (inputRef.current) {
        const maskOptions = {
          mask: mask,
        };
        const imaskInstance = IMask(inputRef.current.input, maskOptions);
        return () => imaskInstance.destroy();
      }
    }, [mask]);
  
    return <Input style={{ border: '1px solid #8D8D8D', color: '#8D8D8D'}} size='large' ref={inputRef} {...props} />;
  };

	return (
		<Content className={Styles.content}>
			<h1>Fornecedores</h1>
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
            <MaskedInput mask="00.000.000/0000-00" placeholder="CNPJ" />
          </Col>
          <Col xs={28} sm={28} md={28} lg={28}>
						<DropdownButton
							placeholder="Situação"
							items={situacoes}
						/>
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

export default Fornecedores;