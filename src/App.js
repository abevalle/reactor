import React from 'react';
import'antd/dist/antd.css'
import './App.css';
import { Row, Col } from 'antd'
import Header from './header';
import Events from './events';
import Events1 from './events1';

function App() {
  return (
    <div className="App">
      <Row>
        <Header></Header>        
      </Row>      
      <Row>
        <Col span={24}>
          <Events></Events>
          <Events1></Events1>
        </Col>

      </Row>
    </div>
  );
}

export default App;
