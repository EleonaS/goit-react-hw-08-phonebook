import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  margin: 10vh auto;
  max-width: 800px;
  padding: 30px;
  background-color: #e9dfff;
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 10px 5px;
  border-radius: 5px;
`;

const Title = styled.h1`
  max-width: 300px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  font-size: 40px;
  text-align: center;
  color: #b479ff;
  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
    font-size: 30px;
  }
`;

const Text = styled.p`
  font-size: 22px;
  line-height: 1.8;
  text-align: center;
  color: #b479ff;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
  color: violet;
`;

export { Container, Title, Text, StyledLink };
