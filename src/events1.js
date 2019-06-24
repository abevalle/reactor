import React from 'react';
import 'antd/dist/antd.css'
import { Row, Col, Progress, Card } from 'antd'

function Events1() {
    return (
        <div>
            <Row>
                <Col span={24}>
                    <Card>
                        <Col span={24}>
                            <Row>
                                <Col span={12}>
                                    <div className='eventName'>
                                        <h2>RhinoDox</h2>
                                        <h3>Conference Room: </h3>
                                        <h4>9:30am - 5:00pm</h4>
                                    </div>
                                </Col>
                                <Col span={6} push={6}>
                                    <Progress type="circle" percent={50} strokeColor="orange" format={() => '1:35'}/>
                                </Col>
                            </Row>
                        </Col>
                    </Card>
                </Col>
            </Row>   
        </div>
    );
}

export default Events1;
