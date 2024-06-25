import React, { useContext, useEffect, useState } from 'react';
import Styles from './Encomendas.module.css';

import { Link } from 'react-router-dom';
import {
  	EditOutlined,
	SignalFilled,
	PlusOutlined,
} from '@ant-design/icons';
import { Input, Button, Layout, Table, Row, Col, Dropdown, Menu, Checkbox, Form } from 'antd';
import BotaoInput from '../../../../components/BotaoInput';
import BotaoBuscar from '../../../../components/BotaoBuscar';
import DropdownButton from '../../../../components/DropdownButton';
import IMask from 'imask';
import { UserContext } from '../../../../components/MainLayout';
import axios from 'axios';
import moment from 'moment';

const { Content } = Layout;

const STATUS = [
    {
        key: "AG_CONFIRMACAO",
        label: "Ag. Confirmação"
    },
    {
        key: "AG_ENTREGA",
        label: "Ag. Entrega"
    },
    {
        key: "CANCELADO",
        label: "Cancelado"
    },
    {
        key: "ENTREGUE",
        label: "Entregue"
    },
]


const Encomendas = () => {
	const { user } = useContext(UserContext);
	const [dropdownVisible, setDropdownVisible] = useState(false);
	const [filiais, setFiliais] = useState([]);
	const [originalFiliais, setOriginalFiliais] = useState([]);
	const [form] = Form.useForm();
	const [visibleColumns, setVisibleColumns] = useState({
		id: true,
		provider: true,
		description: true,
		branch: true,
		date: true,
		status: true
	});

	useEffect(() => {
		const token = user.token;
	
		axios.get('http://localhost:3000/schedules', {
		  headers: {
			'Authorization': `Bearer ${token}`
		  }
		})
		.then(response => {     
			setOriginalFiliais(response.data);
			setFiliais(response.data);
		})
		.catch(error => {
		  console.error('Erro ao buscar os dados do perfil:', error);
		});
	}, [user.token]);

	function getStatusKey(label) {
		const statusObj = STATUS.find(status => status.label === label);
		return statusObj ? statusObj.key : null;
	}
	
	const onSubmit = (values) => {
		const { fornecedor, cnpj, statusLabel } = values;

		const status = getStatusKey(statusLabel);
	
		const filteredFiliais = originalFiliais.filter(filial => {
			const matchesFornecedor = !fornecedor || filial.provider.includes(fornecedor);
			const matchesCnpj = !cnpj || filial.cnpj === cnpj;
			const matchesStatus = !status || filial.status === status;
	
			return matchesFornecedor && matchesCnpj && matchesStatus;
		});
	
		setFiliais(filteredFiliais);
	};
	
	const onReset = () => {
		form.resetFields();
		setFiliais(originalFiliais);
	};

	const getStatusLabel = (key) => {
		const statusObj = STATUS.find((status) => status.key === key);
		return statusObj ? statusObj.label : key;
	};

	const columns = [
		{
			title: 'ID',
			dataIndex: 'id',
			key: 'id',
			sorter: (a, b) => a.id - b.id,
		},
		{
			title: 'Fornecedor',
			dataIndex: 'provider',
			key: 'provider',
			sorter: (a, b) => a.provider.localeCompare(b.provider),
		},
		{
			title: 'Descrição',
			dataIndex: 'description',
			key: 'description',
			sorter: (a, b) => a.description.localeCompare(b.description),
		},
		{
			title: 'Filial',
			dataIndex: 'branch',
			key: 'branch',
			sorter: (a, b) => a.branch.localeCompare(b.branch),
		},
		{
			title: 'Data de entrega',
			dataIndex: 'date',
			key: 'date',
			render: (text, record) => (
				<div>{moment(record.date).format('DD-MM-YYYY')}</div>
			),
			sorter: (a, b) => a.date.localeCompare(b.date),
		},
		{
			title: 'Situação',
			dataIndex: 'status',
			key: 'status',
			render: (text, record) => (
				<div>{getStatusLabel(record.status)}</div>
			),
			onFilter: (value, record) => record.status.indexOf(value) === 0,
		},
		{
		title: 'Ações',
		render: (record) => (
			<Link to={`/editar-encomenda/${record.id}`}>
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

  const onSearch = () => {
	form.submit();
};


	return (
		<Content className={Styles.content}>
			<h1>Encomendas</h1>
			<div className={Styles.contentButtons}>
				<Row gutter={[16, 16]}>
					<Col xs={28} sm={28} md={28} lg={28}>
						<p style={{fontSize: 20}}>Filtros:</p>
					</Col>
				</Row>
				<Form form={form} onFinish={onSubmit}>
					<Row gutter={[16, 16]}>
						<Col xs={28} sm={28} md={28} lg={28}>
							<Form.Item name="fornecedor">
								<BotaoInput placeholder={"Fornecedor"}/>
							</Form.Item>
						</Col>
						<Col xs={28} sm={28} md={28} lg={28}>
							<Form.Item name="cnpj">
								<MaskedInput mask="00.000.000/0000-00" placeholder="CNPJ" />
							</Form.Item>
						</Col>
						<Col xs={28} sm={28} md={28} lg={28}>
							<Form.Item name="statusLabel">
								<DropdownButton
									placeholder="Situação"
									items={STATUS}
									value={STATUS.key}
								/>
							</Form.Item>
						</Col>
						<Col xs={28} sm={28} md={28} lg={28}>
							<BotaoBuscar onSearch={onSearch} onReset={onReset} />
						</Col>
					</Row>
				</Form>
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
					<Link to={`/cadastro-encomenda`}>
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

					</Link>
				</Col>
			</Row>
			<Table
				columns={columns}
				dataSource={filiais}
				onChange={onChange}
			/>
		</Content>
	);
};

export default Encomendas;