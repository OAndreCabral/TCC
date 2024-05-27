import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';


const BotaoBuscar = () => {
  return (
      <Flex gap="small" vertical>
        <Flex wrap gap="small">
          <Button type="primary" icon={<SearchOutlined />}>
            Buscar
          </Button>
        </Flex>
      </Flex>
  );
};
export default BotaoBuscar;