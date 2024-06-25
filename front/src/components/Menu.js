import { Menu as MenuAntd } from 'antd';

const Menu = ({ items, value }) => (
    <MenuAntd
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[value]}
        items={items}
    />
);

export default Menu;