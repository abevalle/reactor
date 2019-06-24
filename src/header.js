import React from 'react';
import 'antd/dist/antd.css'
import { Row, Col } from 'antd'

function Header() {
    return (
        <div className="header">
            <Row>
                <Col span={12} push={1}>
                    <h1>Today at TechNexus TechNexus</h1>
                </Col>
                <Col span={3} push={8}>
                    <div className="date">
                        <h2>It is Friday</h2>
                        <h2>June 28, 2019</h2>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Header;
