//import Section from "components/Section/Section";
import { Container, StyledLink, Text, Title } from './HomeView.styled';

const HomeView = () => {
  return (
    <div>
      <Container>
        <Title>Welcome to the Phonebook!</Title>
        <Text>
          <br />
          {'\u00A0'}
          <StyledLink to="/register">Create </StyledLink>
          {'\u00A0'}your account or{'\u00A0'}
          <StyledLink to="/login">log in</StyledLink>
          {'\u00A0'}, if you already have one.
        </Text>
      </Container>
    </div>
  );
};

export default HomeView;
