import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 100px;
  padding: 0px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to bottom, #1b2838, transparent);
  top: 0px;
  left: 0px;
  position: fixed;
  border-bottom: 1px solid #c7d5e020;
`;

export const LogoFont = styled.span`
  font-size: 35px;
  color: transparent;
  font-family: "Press Start 2P", sans-serif !important;
  background-color: ${({ bColor }) => (bColor ? bColor : "white")};
  user-select: none;
  background-clip: text;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  text-shadow: 0px 3px 1px rgba(0, 0, 0, 0.15);
`;

export const ButtonsContainer = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-between;
`;

export const ProfilePicture = styled.div`
  width: 70px;
  height: 70px;
  margin-left: 10px;
  border-radius: 25px;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.2);
  background: ${({ src }) => `url(${src})`} no-repeat center;
  overflow: hidden;
  background-size: cover;
  background-color: #c7d5e0;
  ::after {
    font-weight: 600;
    font-size: 14px;
    color: white;
    content: "";
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  :hover::after {
    content: "change";
    backdrop-filter: contrast(0.7);
  }
`;
