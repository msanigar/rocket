import React from 'react';
import { Container, Title, SubTitle } from './styles';

const Blurb = (props) => {
    return(
        <Container>
            <Title>This is a test component fully styled with 'Styled Component!'</Title>
            <SubTitle>it's f**king awesome!</SubTitle>
        </Container>
    );
}

export default Blurb;