import {
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";

import { NavLink } from "react-router-dom";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

function Footer(props) {
  return (
    <Container>
      <Left>
        <Logo>Funderr</Logo>
        <Desc>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Voluptatibus, facilis vero. Deserunt blanditiis culpa dolores
          reprehenderit quaerat consequuntur ratione, similique quas dignissimos
          quia tenetur eaque rerum ducimus fugiat enim quod. Repellat rerum
          aspernatur quae beatae deleniti sed itaque similique veniam fugiat ab
          veritatis sit nihil, quod et eos officiis omnis ea sequi iure
          accusamus, nobis sunt illum tempore animi. Eos.
        </Desc>
        <SocialContainer>
          <SocialIcon
            href="https://www.facebook.com/campaign/landing.php?campaign_id=825696414251398&keyword=WXbGPmop5DEaW5M0Gy2RMGoo4DMKbMZ3ES2SMhQvmjIcL5sxGi%2BXNBgthGxKecdxEVnDYEl9zWxHQPVmTn7Scwp80GAfLZ8yFC2XOhQtlzP%2BUAAAACwfogM%3D&extra_2=PK&placement=100&creative=bookmark"
            color="3178F1"
          >
            <FacebookRoundedIcon color="white" htmlColor="white" />
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com/" color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon href="https://twitter.com/@TechTrop" color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon href="https://www.pinterest.com/" color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            <NavLink to="/home">Home</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/about">About</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/contactus">Contact&nbsp;Us</NavLink>
          </ListItem>
          {/* <ListItem>
              <NavLink to="/howitwork">How&nbsp;it&nbsp;Works</NavLink>
            </ListItem> */}
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "1rem", fontSize: "2rem" }} />
          25 COMSATS LAHORE
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "1rem", fontSize: "2rem" }} />
          +923317841345
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "1rem", fontSize: "2rem" }} />
          info@funderr.com
        </ContactItem>
      </Right>
    </Container>
  );
}

export default Footer;
const Container = styled.div`
  display: flex;
  background-color: #242f9b;
  justify-content: space-evenly;
  margin-top: 10rem;

  color: white;
  width: 100%;
  padding-inline: 7%;
  border-radius: 40px 40px 0px 0px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 2rem 0rem;
  text-align: justify;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.a`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.8rem;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
const Center = styled.div`
  flex: 0.5;
  padding: 2rem;
`;
const Title = styled.h3`
  margin-bottom: 3rem;
  font-size: 1.6rem;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  a {
    text-decoration: none;
    color: #ffffff;
    margin-block: 1rem;
    width: 10rem;
    font-size: 1.2rem;
  }
  a:hover {
    color: #7d7d7d;
  }
  a.active {
    color: #ffd900;
  }
`;
const ListItem = styled.li`
  width: 100%;
  margin-bottom: 0.8rem;
  cursor: pointer;
`;
const Right = styled.div`
  padding: 2rem;
  flex: 1;
  img {
    width: 70%;
    max-width: 25rem;
  }
`;
const ContactItem = styled.div`
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
`;
