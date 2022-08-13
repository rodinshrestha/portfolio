import styled from '@emotion/styled';
import { inherits } from 'util';

export const StyledDiv = styled.div`
  .text_zone {
    position: absolute;
    left: 5%;
    top: 55%;
    transform: translateY(-50%);
    max-height: 90%;

    h1 {
      font-size: 56px;
      margin: 0;
      font-weight: 400;
      font-family: 'Coolvetica';
      @media (max-width: 450px) {
        font-size: 26px;
      }
      &::before {
        content: '<h1>';
        position: absolute;
        color: ${(props: any) => (props['data-color-mode'] === 'dark' ? '#ffd700' : '#A9A9A9')};
        font-size: 18px;
        margin-top: -20px;
        font-family: 'La Belle Aurore';
        opacity: 0.8;
        animation: fadeIns 1s 0.2s backwards;
        left: -15px;
      }
      &::after {
        content: '<h1/>';
        font-family: 'La Belle Aurore';
        position: absolute;
        color: ${(props: any) => (props['data-color-mode'] === 'dark' ? '#ffd700' : '#A9A9A9')};
        font-size: 18px;
        opacity: 0.8;
        margin-top: 40px;
        margin-left: 20px;
        animation: 'fadeIn' 1s 4s backwards;
      }
    }

    h2 {
      // color: #8d8d8d;
      margin-top: 20px;
      font-weight: 400;
      font-size: 11px;
      font-family: 'sans-serif';
      letter-spacing: 3px;
      animation: 'fadeIn' 1s 4s backwards;
      @media (max-width: 450px) {
        word-break: break-all;
      }
    }

    .download-btn {
      animation: 'fadeIn' 1s 4s backwards;
      border-color: ${(props: any) =>
        props['data-color-mode'] === 'dark' ? '#A9A9A9' : '#8d8d8d'};
      svg {
        margin-top: 4px;
      }
    }
  }
`;
