import React from 'react';
import 'antd/dist/antd.css'
//import 'tools.js'
import { Row, Col } from 'antd'

const date = new Date();
const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday']
const today = {
    'month': date.getMonth(),
    'day': date.getDay(),
    'date': date.getDate(),
    'year': date.getFullYear()
}

function Header() {
    return (
        <div className="header">
            <Row>
                <Col span={12} push={1}>
                    <h1>Today at TechNexus</h1>
                </Col>
                <Col span={3} push={8}>
                    <div className="date">
                        <h2>{weekDay[today.day]}</h2>
                        <h2>{`${months[today.month]} ${today.date}, ${today.year}`}</h2>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Header;
