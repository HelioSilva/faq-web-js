import styled from "styled-components";

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

export const TitleAPP = styled.h3`
  font-size: 1.1rem;
  line-height: inherit;
  white-space: nowrap;
  color: #fff;
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
  /* display: flex;
  justify-content: center;
  align-items: center; */
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
