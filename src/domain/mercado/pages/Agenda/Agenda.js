import React, { useState } from 'react';
import Styles from './Agenda.module.css';
import { Layout, theme } from 'antd';
import Calendario from '../../../../components/Calendario';

const { Content } = Layout;

const Agenda = () => {
  return (
    <Content className={Styles.content}>
      <h1 className={Styles.contentTitle}>Agenda</h1>
      <Calendario />
    </Content>
  );
};

export default Agenda;
