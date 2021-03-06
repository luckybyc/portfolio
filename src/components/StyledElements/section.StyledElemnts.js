import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#2C3E50  ")};
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  @media screen and (max-width: 768px) {
    height: 100vh;
  }
`;

export const InfoRow = styled.div`
 
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
  imgStart ? 
  "'col1' 'col2'"
  : 
  "'col1 col1' 'col2 col2'"
  };
  }
`;
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #ffd700;
  font-size: 24px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 10px;
  font-weight: 600px;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const Tags=styled.div`
display: flex;
flex-wrap: wrap;
`;
export const SocialContainer=styled.div`
   display:inline;
   padding: 25px 50px;
 @media screen and (max-width: 480px) {
    font-size: 32px;
    display: flex;
    justify-content:center;
 
  }
 
  
  `;

export const Label=styled.label`
  padding: 4px 8px;
  background-color: #ffd700;
  border-radius: 4px;
  margin-right: 6px;
  margin-bottom: 4px;
  color:#010606;
`;
export const Subtitle = styled.p`
  max-width: 540px;
  margin-bottom:10px;
  font-size: 20px;
  line-height: px;
  color: ${({ darkText }) => (darkText ? "#010606"  :  "#f7f8fa")};
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
