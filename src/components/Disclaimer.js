import React from 'react'
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
const Disclaimer = props =>
<Container className='disclaimer-container-text'>
    <div className='disclaimer-body'>
    <Row>
        <p><Col fluid={true} md="8">Disclaimer</Col></p>
    </Row >
    <Row>
        <p><Col fluid={true} md="8">EPB Newsletter is published as an information service.  It includes opinions as to buying, selling and holding various stocks and other securities.</Col></p>
    </Row>
    <Row>
        <p><Col fluid={true} md="8">However, the publishers of EPB Newsletter are not brokers or acting as investment advisers and do not provide investment advice or recommendations directed to any particular subscriber or in view of the particular circumstances of any particular person.</Col></p>
    </Row>
    <Row>
        <p><Col fluid={true} md="8">EPB Newsletter does not guarantee that you will out-perform the stock market.</Col></p>
    </Row>
    <Row>
        <p><Col fluid={true} md="8">The information provided by EPB Newsletter is obtained from sources believed to be reliable but is not guaranteed as to accuracy or completeness.</Col></p>
    </Row>
    <Row>
        <p><Col fluid={true} md="8">At various times, the publishers and employees of EPB Newsletter may own, buy or sell the securities discussed for purposes of investment or trading.  Eric Basmajian invests his own portfolio primarily in trade ideas recommended in the EPB Newsletter.</Col></p>
    </Row>
    <Row>
        <p><Col fluid={true} md="8">EPB Newsletter and its publishers, owners and agents, are not liable for any losses or damages, monetary or otherwise, that result from the content of EPB Newsletter.</Col></p>
    </Row>
    <Row>
        <p><Col fluid={true} md="8">Past results are not necessarily indicative of future performance.</Col></p>
    </Row>
    </div>
</Container>

module.exports = Disclaimer;
