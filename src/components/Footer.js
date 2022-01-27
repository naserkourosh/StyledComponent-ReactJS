import {Container} from "./styles/Container.Styled";
import {Flex} from "./styles/Flex.Styled";
import {StyledFooter} from "./styles/Footer.Styled";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return(
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" alt=""/>
      </Container>
      <Flex>
        <ul>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </li>
          <li>+98-919-621-2564</li>
          <li>naserkorosh2008@gmail.com</li>
        </ul>
        <ul>
          <li>About Us</li>
          <li>What We Do</li>
          <li>FAQ</li>
        </ul>

        <ul>
          <li>Career</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>

        <SocialIcons />
      </Flex>

      <p>&copy; 2021 Naser. All right reserves</p>
    </StyledFooter>
  )
}