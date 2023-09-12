import React from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'
import { Avatar, Card } from 'antd'
import eventData from '../data/eventData'  

const { Meta } = Card

const CardComponent = () => {
  return (
    <>
        {eventData.map((event) => (
           <Card
            style={{ width: 300 }}
            cover={
                <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
            actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
            ]}
            >
            <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={event.name}
                description={'Description: ' + event.description + '  ' + 'Date: ' + event.date}

            />
        </Card>   
        ))      
        }

    </>

  )
}

export default CardComponent