import React from 'react'
import { Container, FooterContainer,Link,Text} from './FooterStyled'
import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillInstagram,
    AiFillTwitterCircle,
  } from "react-icons/ai";
import Styles from "./Footer.module.css"
const Footer = () => {
    return (
        <Container>
            <FooterContainer>
                <Link href="https://github.com/yemresalcan" target="_blank">
                    <AiFillGithub className={Styles.icon} />
                </Link>
                <Link href="https://www.instagram.com/yemresalcan/" target="_blank">
                    <AiFillInstagram className={Styles.icon} />
                </Link>
                <Link href="https://twitter.com/yesdev_exe" target="_blank">
                    <AiFillTwitterCircle className={Styles.icon} />
                </Link>
                <Link href="https://www.linkedin.com/in/yunusemresalcan/" target="_blank">
                    <AiFillLinkedin className={Styles.icon} />
                </Link>

                <Text href="">
          Designed & Built by <br />{" "}
          <span style={{ fontSize: "1rem" }}>Yemresalcan</span>
        </Text>


            </FooterContainer>

        </Container>
    )
}

export default Footer
