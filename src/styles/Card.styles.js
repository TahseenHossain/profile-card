import styled from "styled-components";

export const CardWrapper = styled.div`
  width: ${(props) => (props.isLarge ? "400px" : "250px")};
  background-color: ${(props) => props.theme.secondary};
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  padding: 24px;
  text-align: center;
  transition: all 0.3s ease;
`;

export const ProfileImg = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 6px solid ${(props) => props.theme.primary};
  margin: 0 auto;
  display: block;
`;

export const Name = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${(props) => props.theme.primary};
  margin-top: 12px;
`;

export const Bio = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.primary}
  margin-top: 8px;
`;

export const ToggleButton = styled.button`
  margin-top: 16px;
  padding: 10px 16px;
  background-color: ${(props) => props.theme.primary};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;

  &:hover {
    background-color: #fb923c;
  }
`;
