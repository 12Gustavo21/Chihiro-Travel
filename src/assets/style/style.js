import styled, { keyframes } from "styled-components";

export const SlideAnimationLeft = keyframes`
    0% {
        transform: translateX(-12%);
        opacity: 0;
    }

    100% {
        transform: translateX(0%);
        opacity: 1;
    }
`;

export const SlideAnimationRight = keyframes`
    0% {
        transform: translateX(12%);
        opacity: 0;
    }

    100% {
        transform: translateX(0%);
        opacity: 1;
    }
`;

export const Header = styled.header`
  width: 100%;
  height: 20vh;
  position: absolute;
  top: 0;
  z-index: 1;
  user-select: none;

  @media only screen and (width <= 900px) {
    height: 15vh;
  }
`;

export const HeaderContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media only screen and (width <= 900px) {
    height: 85%;
    padding: 0 1rem;
  }
`;

export const LogoBox = styled.figure`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  animation: ${SlideAnimationLeft} 2s ease-in-out;

  img {
    width: 50%;
    height: 50%;
    object-fit: contain;
  }

  @media only screen and (width <= 900px) {
    width: 50%;

    img {
      width: 70%;
      height: 70%;
    }
  }

  @media only screen and (width <= 675px) {
    justify-content: center;
  }
`;

export const Social = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  animation: ${SlideAnimationRight} 2.5s ease-in-out;

  @media only screen and (width <= 900px) {
    height: 40%;
    align-items: flex-end;
  }

  @media only screen and (width <= 425px) {
    gap: 1.3rem;
  }

  @media only screen and (width <= 675px) {
    display: none;
  }
`;

export const SocialLink = styled.a`
  width: 2.5rem;
  height: 2.5rem;
  padding: 12px;
  border-radius: 50%;
  background: #ffffff33;
  border: 1px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  img {
    width: 1.3rem;
    height: 1.3rem;
    object-fit: contain;

    &:hover {
      cursor: url("https://www.cursor.cc/cursor/734/78/cursor.png"), auto !important;
    }
  }

  &:hover {
    filter: drop-shadow(0 0 0.03rem #fff);
    cursor: url("https://www.cursor.cc/cursor/734/78/cursor.png"), auto !important;

    img {
      transform: scale(1.1);
    }
  }

  @media only screen and (width <= 900px) {
    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  background: url(${(props) => props.background}) no-repeat center center/cover;
  display: grid;
  place-items: end;
`;

export const MainContainer = styled.section`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (width <= 900px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    height: 100%;
  }
`;

export const MovieContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  @media only screen and (width <= 900px) {
    justify-content: flex-start;
    align-items: flex-end;
  }

  @media only screen and (width <= 675px) {
    width: 100%;
  }
`;

export const Movie = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media only screen and (width <= 900px) {
    width: 85%;
    height: 35%;
  }

  @media only screen and (width <= 768px) {
    height: 45%;
  }

  @media only screen and (width <= 675px) {
    width: 95%;
    height: 60%;
  }
`;

export const AboutMovie = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;

  @media only screen and (width <= 1260px) {
    width: 100%;
  }
`;

export const MovieAuthor = styled.h2`
  font: 700 1.25rem/1.6875rem "Open Sans", sans-serif;
  color: #fff;
  letter-spacing: 0.0375rem;
  text-transform: uppercase;
  padding-left: 0.5rem;
  animation: ${SlideAnimationLeft} 2s ease-in-out;

  @media only screen and (width <= 900px) {
    font: 700 1rem/0.875rem "Andada Pro", sans-serif;
  }
`;

export const MovieTittle = styled.h1`
  font: 800 4rem/4.5rem "Andada Pro", sans-serif;
  text-transform: uppercase;
  color: #fff;
  animation: ${SlideAnimationLeft} 2s ease-in-out;

  @media only screen and (width <= 1440px) {
    font-size: 3.5rem;
  }

  @media only screen and (width <= 900px) {
    font: 900 2.5rem/3rem "Andada Pro", sans-serif;
  }
`;

export const MovieSynopsis = styled.p`
  font: 500 1.3rem/2.25rem "Archivo", sans-serif;
  color: #fff;
  animation: ${SlideAnimationLeft} 2.2s ease-in-out;

  @media only screen and (width <= 1440px) {
    font: 400 0.875rem/1.5rem "Andada Pro", sans-serif;
  }

  @media only screen and (width <= 500px) {
    font: 400 0.8rem/1.25rem "Andada Pro", sans-serif;
  }
`;

export const MovieButtons = styled.div`
  width: 70%;
  height: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  animation: ${SlideAnimationLeft} 2.4s ease-in-out;

  button {
    background: #f1a5b1;
    border: none;

    &:active {
      background: #2d1607;
    }
  }

  a {
    text-decoration: none;
    background: transparent;
  }

  a:nth-child(2) {
    button {
      background: transparent;
      border: 0.2rem solid #f1a5b1;
    }
  }

  a button:hover {
    background: #2d1607;
    border-color: #2d1607;

    p {
      color: #fff;
    }

    img {
      filter: invert(0);
    }
  }

  a,
  button,
  img,
  p {
    cursor: url("https://www.cursor.cc/cursor/734/78/cursor.png"), auto !important;
  }

  @media only screen and (width <= 1440px) {
    height: 30%;
  }

  @media only screen and (width <= 900px) {
    width: 85%;
    height: 20%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
      width: 100%;
    }

    button {
      width: 100%;
    }
  }

  @media only screen and (width <= 675px) {
    width: 95%;
    align-items: flex-start;

    a {
      width: 95%;
    }
  }

  @media only screen and (width <= 500px) {
    margin-top: 1rem;
  }
`;

export const MovieButton = styled.button`
  width: 14.5rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 0.25rem;
  gap: 0.5rem;
  transition: all 0.2s ease-in-out;
  overflow: hidden;

  p {
    font: 800 1rem/1.3125rem "Roboto", sans-serif;
    color: #0b0a0a;
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;
  }

  p:nth-child(1) {
    color: #fff;
  }

  img {
    filter: invert(1);
    transition: all 0.3s ease-in-out;
  }

  &:after {
    background: #f1a5b1;
    content: "";
    height: 10rem;
    left: -10rem;
    opacity: 0.4;
    position: absolute;
    top: -3.125rem;
    transform: rotate(35deg);
    transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
    width: 3.125rem;
  }

  &:hover {
    &:after {
      left: 120%;
      transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
    }
  }

  @media only screen and (width <= 1440px) {
    width: 12rem;
    height: 2.5rem;
  }
`;

export const Floating = keyframes`
    0% {
        transform: translateY(1rem);
    }

    100% {
        transform: translateY(-.5rem);
    }
`;

export const NoFaces = styled.figure`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5% 5% 0;
  user-select: none;
  animation: ${SlideAnimationRight} 2s ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    animation: 2s ease-in-out 0s infinite alternate none running ${Floating};
  }

  @media only screen and (width <= 900px) {
    width: 100%;
    height: 50%;
    margin-bottom: 0;
  }

  @media only screen and (width <= 500px) {
    height: 100%;
  }
`;
