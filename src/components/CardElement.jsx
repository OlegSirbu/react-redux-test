import React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import moment from 'moment';

const styles = {
    card: {
        width: '250px',
        height: '250px',
        display: 'inline-block',
        margin: '0 10px 10px 0',
        float: 'left'
    },
    img: {
        width: '100%'
    }
};

const CardElement = ({info}) => {
    return (
        <Card style={styles.card}>
            <CardMedia overlay={<CardTitle title={info.carrier}/>}>
                <img style={styles.img} src={`http://loremflickr.com/250/100/airline`}/>
            </CardMedia>
            <CardTitle
                subtitle={`From: ${info.direction.from} at ${moment(new Date(info.departure)).format("DD-MM-YYYY HH:mm")}`}/>
            <CardTitle
                subtitle={`To: ${info.direction.to} at ${moment(new Date(info.arrival)).format("DD-MM-YYYY HH:mm")}`}/>
        </Card>
    );
};
export default CardElement;