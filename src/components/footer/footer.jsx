import React from "react";
import {
  BackgroundShape,
  FootLink,
  FooterLine,
  FooterLink,
  FooterLinkWrapper,
  FooterWrapper,
  InputWrapper,
  NewslettersInput,
  NewslettersTitle,
  NewslettersWrapper,
} from "./footerStyle";
import { Box, Button } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <FooterWrapper>
      <BackgroundShape />
      <NewslettersWrapper>
        <NewslettersTitle>Subscribe Newsletters</NewslettersTitle>
        <InputWrapper>
          <NewslettersInput
            type="text"
            name="newsletter"
            id="newsletterID"
            placeholder="Enter your email"
          />
          <Button variant="contained" className="Button">
            Sign Up
          </Button>
        </InputWrapper>
      </NewslettersWrapper>
      <FooterLinkWrapper>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", gap: "100px" }}>
            <FootLink to="/">
              <FooterLink>Home</FooterLink>
            </FootLink>
            <FootLink>
              <FooterLink>Mosques</FooterLink>
            </FootLink>
            <FootLink>
              <FooterLink>Restaurants</FooterLink>
            </FootLink>
            <FootLink>
              <FooterLink>Markets</FooterLink>
            </FootLink>
          </Box>
          <Box sx={{ display: "flex", gap: "50px" }}>
            <TelegramIcon
              sx={{ cursor: "pointer" }}
              color="primary"
              fontSize="large"
            />
            <YouTubeIcon
              sx={{ cursor: "pointer" }}
              color="primary"
              fontSize="large"
            />
            <FacebookIcon
              sx={{ cursor: "pointer" }}
              color="primary"
              fontSize="large"
            />
            <TwitterIcon
              sx={{ cursor: "pointer" }}
              color="primary"
              fontSize="large"
            />
          </Box>
        </Box>
        <FooterLine />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", gap: "100px" }}>
            <FooterLink>© 2024 . All rights reserved.</FooterLink>
          </Box>
          <Box sx={{ display: "flex", gap: "50px" }}>
            <FooterLink>Terms of Service</FooterLink>
            <FooterLink>Privacy Policy</FooterLink>
          </Box>
        </Box>
      </FooterLinkWrapper>
    </FooterWrapper>
  );
};

export default Footer;
