import { Menu as MenuAntd } from 'antd';

const Menu = ({ items }) => (
    <MenuAntd
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={items}
    />
);

export default Menu;