import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
} from "./FooterStyles";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <Box>
            <Container>
                <Row>
                    <Column>
                        <FooterLink
                            href="https://github.com/vvvmilan?tab=repositories"
                        >
                            <GitHubIcon style={{marginRight: '6px'}}/>
                            vvvmilan
                        </FooterLink>
                    </Column>
                    <Column>
                        <FooterLink
                            href="https://www.linkedin.com/in/milanexpo/"
                        >
                            <LinkedInIcon style={{marginRight: '6px'}}/>
                            Milan Videnović
                        </FooterLink>
                    </Column>
                    <Column>
                        <FooterLink
                            href="mailto:milan@expostudio.rs"
                        >
                            <EmailIcon style={{marginRight: '6px'}}/>
                            milan@expostudio.rs
                        </FooterLink>
                    </Column>

                </Row>
            </Container>
        </Box>
    );
};
export default Footer;
