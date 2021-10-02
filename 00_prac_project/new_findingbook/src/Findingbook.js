import React from "react";

// CSS
import './App.css';
import { Card } from 'react-bootstrap';
import styled from "styled-components";


const FindingBook = (props) => {
    return (
        <div>
            <div className="figure">
                <div className="figureImg">
                    <Title>오늘 뭐 읽지?</Title>
                    <Input></Input>
                </div>
            </div>
            <BookList>
                <Card style={{ width: '30%' }}>
                    <Card.Img variant="top" src="http://image.kyobobook.co.kr/images/book/large/796/l9791188331796.jpg" />
                    <Card.Title>돈의 속성</Card.Title>
                </Card>

                <Card style={{ width: '30%' }}>
                    <Card.Img variant="top" src="http://image.kyobobook.co.kr/images/book/large/796/l9791188331796.jpg" />
                    <Card.Title>돈의 속성</Card.Title>
                </Card>

                <Card style={{ width: '30%' }}>
                    <Card.Img variant="top" src="http://image.kyobobook.co.kr/images/book/large/796/l9791188331796.jpg" />
                    <Card.Title>돈의 속성</Card.Title>
                </Card>

                <Card style={{ width: '30%' }}>
                    <Card.Img variant="top" src="http://image.kyobobook.co.kr/images/book/large/796/l9791188331796.jpg" />
                    <Card.Title>돈의 속성</Card.Title>
                </Card>
            </BookList>
        </div>
    )
}

const BookList = styled.div`
    margin: auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const Title = styled.h1`
    font-size: 30px;
    color: white;
`;

const Input = styled.input`
    width: 60%;
    height: 30px;
    max-width: 400px;
    border-style: none;
    border-radius: 3px;
    margin-top: 10px;
`;


export default FindingBook;