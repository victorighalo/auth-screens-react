import { injectGlobal } from 'styled-components';

injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    font-family: 'Poppins', sans-serif;
  }

  // body {
  //   font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  // }

  // body.fontLoaded {
  //   font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  // }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    // font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  h1,h2,h3,h4,h5,p,span,label{
    font-family: 'Poppins', sans-serif;
  }
  .btn-wrap:hover .btn-bg {
    left: 0;
  }
  .focus-input::before{
      content: "";
      display: block;
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background: #7f7f7f;
      -webkit-transition: all 0.4s;
      -o-transition: all 0.4s;
      -moz-transition: all 0.4s;
      transition: all 0.4s;
  }
`;