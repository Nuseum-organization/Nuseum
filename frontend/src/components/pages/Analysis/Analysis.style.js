import styled from 'styled-components';

export const Box = styled.div`
    width: 80%;
    padding-top: 50px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    padding-bottom: 100px;
`;

export const IconBox = styled.div`
    height: 7rem;
    width: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const Icon = styled.img`
    width: 2.5rem;
    margin-bottom: 15px;
`;
export const ButtonBox = styled.div`
    display: flex;
    padding-top: 50px;
    justify-content: space-between;
    width: 360px;
`;

export const FetchButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => (props.isClicked ? '#8D8D8D' : '#F9F9F9')};
    border-radius: 80px;
    color: ${(props) => (props.isClicked ? 'white' : 'black')};
    height: 50px;
    width: 170px;
    border: none;
    cursor: pointer;
`;
