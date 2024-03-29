import styled from "styled-components";

export const BaseFLEX = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 991.98px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const HeaderTOP = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #b00b2c;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  @media (max-width: 991.98px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: #b0080b;
  }
`;

export const HeaderTopLeft = styled(BaseFLEX)`
  > a {
    padding-left: 8px;
    padding-right: 8px;
  }

  @media (max-width: 991.98px) {
    > a {
      padding-top: 8px;
      padding-bottom: 8px;
    }
  }
`;

export const HeaderTopRigth = styled(BaseFLEX)`
  > div {
    padding-left: 8px;
    padding-right: 8px;
  }

  @media (max-width: 991.98px) {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

export const Dropdown = styled.li`
  color: #fff;
  display: block;
  float: left;
  padding: 0.8rem 1.2rem;
  position: relative;
  text-decoration: none;
  transition-duration: 0.5s;

  a {
    color: #fff;
    margin: 0px;
    display: block;
    width: 100%;
    height: 100%;
  }

  :hover {
    background: #b00b2c;
    cursor: pointer;
  }

  :focus-within a {
    outline: none;
  }
`;

export const DropdownMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;

  li ul {
    width: 13rem;
    background: #b00b2c;
    visibility: hidden;
    opacity: 0;
    position: absolute;
    transition: all 0.5s ease;
    margin-top: 0.8rem;
    left: 0;
    display: none;
  }

  ul li {
    display: flex;
    flex-direction: row;
  }

  ul li a {
    font-size: 0.8rem;
    padding-left: 5px;
  }
  li:hover > ul,
  li:focus-within > ul,
  li ul:hover,
  li ul:focus {
    background: #ec0f3c;
    visibility: visible;
    opacity: 1;
    display: block;
  }

  li ul li {
    clear: both;
    width: 100%;
  }
`;

export const TagLink = styled.a`
  position: relative;
  color: #dbdbdb;
  text-decoration: none;
  text-align: center;

  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #fff;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }
  :hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
`;

export const TitleAPP = styled.a`
  font-size: 1.1rem;
  line-height: inherit;
  white-space: nowrap;
  color: #fff;
  font-weight: bolder;

  cursor: pointer;
`;

export const Lista = styled.div`
  position: relative;
  display: inline-block;
  div {
    display: none;
    position: absolute;
    background-color: #f2f2f2;
    min-width: 100px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
    z-index: 1;
    border-radius: 15px;

    a {
      color: #304946;
    }
  }
  :hover div {
    display: block;
  }
  :hover div:hover {
    background-color: #fcaa83;
  }
`;

export const ImageRaduis = styled.div`
  background: #930924;
  width: 40px;
  height: 40px;
  padding: 1px;
  border-radius: 20px;
  cursor: pointer;
  transition: 1s;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
  :hover {
    background: #930924;
  }
`;
