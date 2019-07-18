import styled from 'styled-components';
//to app
export const Container = styled.div`
    padding : 4rem 7rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: blueviolet;
    display: flex;
    flex-flow: column nowrap;
    justify-items: center;
    align-items: center;
    margin: 0;
`;

// to MainContentDisplay
export const ImgStyle = styled.div`
     
     margin: 0;
     animation: App-logo-spin infinite 20s linear;
     pointer-events: none;
     padding: 0 20rem;

     img{
       border-radius: 50%;  
     }
`;