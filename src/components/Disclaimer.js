import React from 'react'
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
const headerStyle = {
    'textAlign':'center'
}
const Disclaimer = props =>
<div className='disclaimer-div-container'>
<Container className='disclaimer-container-text'>
    <div className='disclaimer-body'>
    <Row>
        <Col fluid={true} md="8" style={headerStyle}><p>Disclaimer</p></Col>
     </Row>
        <Row>
        <Col fluid={true} md="8"><p>EPB Newsletter is published as an information service.  It includes opinions as to buying, selling and holding various stocks and other securities.</p></Col>
    </Row>
    <Row>
        <Col fluid={true} md="8"><p>However, the publishers of EPB Newsletter are not brokers or acting as investment advisers and do not provide investment advice or recommendations directed to any particular subscriber or in view of the particular circumstances of any particular person.</p></Col>
    </Row>
    <Row>
        <Col fluid={true} md="8"><p>EPB Newsletter does not guarantee that you will out-perform the stock market.</p></Col>
    </Row>
    <Row>
        <Col fluid={true} md="8"><p>The information provided by EPB Newsletter is obtained from sources believed to be reliable but is not guaranteed as to accuracy or completeness.</p></Col>
    </Row>
    <Row>
        <Col fluid={true} md="8"><p>At various times, the publishers and employees of EPB Newsletter may own, buy or sell the securities discussed for purposes of investment or trading.  Eric Basmajian invests his own portfolio primarily in trade ideas recommended in the EPB Newsletter.</p></Col>
    </Row>
    <Row>
        <Col fluid={true} md="8"><p>EPB Newsletter and its publishers, owners and agents, are not liable for any losses or damages, monetary or otherwise, that result from the content of EPB Newsletter.</p></Col>
    </Row>
    <Row>
        <Col fluid={true} md="8"><p>Past results are not necessarily indicative of future performance.</p></Col>
    </Row>
   </div>
</Container>
</div>

module.exports = Disclaimer;
