import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';

const BotaoBuscar = () => {
  const [position, setPosition] = useState('end');
  return (
      <Flex gap="small" vertical>
        <Flex wrap gap="small">
          <Button type="primary" icon={<SearchOutlined />} iconPosition={position}>
            Search
          </Button>
        </Flex>
      </Flex>
  );
};
export default BotaoBuscar;