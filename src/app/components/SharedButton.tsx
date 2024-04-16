import styled from "styled-components";
import Link from "next/link";

const SharedButton = styled(Link)`
  background: linear-gradient(180deg, #fe71fe 16.42%, #7199ff 100%);
  box-shadow: inset 0px -5px 0px -1px rgba(157, 45, 245, 0.25);
  border-radius: 999px;
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  transition: background 2s ease-in-out;
  img {
    width: 17.45px;
    height: 16.17px;
    margin: auto;
  }
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: linear-gradient(
          0deg,
          rgba(255, 255, 255, 0.25),
          rgba(255, 255, 255, 0.25)
        ),
        linear-gradient(180deg, #fe71fe 16.42%, #7199ff 100%);
    }
  }
  @media only screen and (min-width: 768px) {
    height: 4rem;
    width: 4rem;
    margin: auto 0;
    img {
      width: 27.91px;
      height: 25.87px;
    }
  }
  @media only screen and (min-width: 1024px) {
    height: 5.875rem;
    width: 5.875rem;
    margin-top: 0;
    img {
      width: 41px;
      height: 38px;
    }
  }
`;

export default SharedButton;
