import styled from 'styled-components';


const SliderContent = styled.div`
  transform: translateX(-${(props) => props.translate}px);
  transition: transform ease-out ${(props) => props.transition}s;
  width: ${(props) => props.width}px;
  display: flex;
`;


export default SliderContent;
