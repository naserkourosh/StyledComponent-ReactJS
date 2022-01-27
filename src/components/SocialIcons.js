import { FaGithub, FaFacebook, FaLinkedin} from "react-icons/fa";
import {StyledSocialIcons} from "./styles/SocialIcons.Styled";

export default function SocialIcons(){
  return(
    <StyledSocialIcons>
      <ul>
        <li>
          <a href="https://github.com">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://facebook.com">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com">
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </StyledSocialIcons>
  )
}