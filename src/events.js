import React from 'react';
import 'antd/dist/antd.css'
import { Row, Col, Progress, Card } from 'antd'

const name = "Rhino"
const time = "8:30a - 5:00pm"
const conferenceRoom = "A"

function Events() {
    return (
        <div>
            <Row>
                <Col span={24}>
                    <Card>
                        <Col span={24}>
                            <Row>
                                <Col span={22}>
                                    <div className='eventName'>
                                        <h2>{name}</h2>
                                        <h3>{time}</h3>
                                    </div>
                                </Col>
                                <Col span={2}>
                                    <div className="conferenceRoom">
                                        <p>Where:</p>
                                        <h1>{conferenceRoom}</h1>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Progress percent={50} status='active' showInfo={false} strokeWidth={25} strokeColor="orange" />
                                </Col>
                            </Row>
                        </Col>
                    </Card>
                </Col>
            </Row>   
        </div>
    );
}

export default Events;
