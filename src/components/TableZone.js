import React from 'react'
// import PropTypes from 'prop-types' 
import GooglePayButton from '@google-pay/button-react'
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'


export const TableZone = ({zone,login}) => {
    

    const {eventid, id, price, taken} = zone
    
    if (!taken && login){
        return (
        <div>
            <table id="zone-table" className={taken>0?"taken":"not-taken"}>
                    <tr>
                        <th>id</th>
                        <th>taken</th>
                        <th>price</th>
                    </tr>
                    <tr>
                        <td>{id}</td>
                        <td>{taken>0?"taken":"to be"}</td>
                        <td>{price}</td>
                    </tr>
                </table>
            <div>
                    <GooglePayButton
                        environment="TEST"
                        paymentRequest={{
                        apiVersion: 2,
                        apiVersionMinor: 0,
                        allowedPaymentMethods: [
                        {
                            type: 'CARD',
                            parameters: {
                                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                allowedCardNetworks: ['MASTERCARD', 'VISA'],
                        },
                        tokenizationSpecification: {
                            type: 'PAYMENT_GATEWAY',
                            parameters: {
                                gateway: 'example',
                                gatewayMerchantId: 'exampleGatewayMerchantId',
                            },
                        },
                        },
                        ],
                    merchantInfo: {
                        merchantId: '12345678901234567890',
                        merchantName: 'Demo Merchant',
                    },
                    transactionInfo: {
                        totalPriceStatus: 'FINAL',
                        totalPriceLabel: 'Total',
                        totalPrice: '100.00',
                        currencyCode: 'USD',
                        countryCode: 'US',
                    },
                    }}
                    onLoadPaymentData={paymentRequest => {
                    console.log('load payment data', paymentRequest);
                    }}
                    />
                </div>
        </div>
        )
    }else if(!login){
        return (
            <div>
                <table id="zone-table" className={taken>0?"taken":"not-taken"}>
                    <tr>
                        <th>id</th>
                        <th>taken</th>
                        <th>price</th>
                    </tr>
                    <tr>
                        <td>{id}</td>
                        <td>{taken>0?"taken":"to be"}</td>
                        <td>{price}</td>
                    </tr>
                </table>
                <Link to="/sign-in">
                    <Button variant="contained" color="primary">
                    Вход
                </Button>
                </Link>
            </div>
        )
    }else{
        return(
            <div>
                <table id="zone-table" className={taken>0?"taken":"not-taken"}>
                    <tr>
                        <th>id</th>
                        <th>taken</th>
                        <th>price</th>
                    </tr>
                    <tr>
                        <td>{id}</td>
                        <td>{taken>0?"taken":"to be"}</td>
                        <td>{price}</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default TableZone



