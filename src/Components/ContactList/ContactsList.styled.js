import styled from 'styled-components';

const StyledList = styled.ul`
  list-style: none;
  padding-left: 0;
  font-size: 18px;
`;

const ListItem = styled.li`
  width: 500px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: green;
    /*font-weight:600;    
  font-size: 24px;*/
  }
`;

export { StyledList, ListItem };
