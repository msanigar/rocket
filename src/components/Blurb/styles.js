import styled from 'styled-components';

export const Container = styled.div`
    padding: 4em;
    background: papayawhip;
    margin: 1rem;
`;

export const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

export const SubTitle = Title.extend`
    color: tomato;
`;