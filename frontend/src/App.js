import Router from './router';
import { Helmet } from 'react-helmet';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import Footer from './components/atom/Footer';
// import { useRecoilState } from 'recoil';
// import { deferredPromptState } from './recoil/deferredPrompt/deferredPrompt';

const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/


html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
input{
    font-family: 'Noto Serif KR', serif;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
html,body {
    font-family: 'Noto Serif KR', serif;
	line-height: 1;
    min-height:800px;
}



button{
    font-family: 'Noto Serif KR', serif;
}
ol, ul {
	list-style: none;
}

input::placeholder{
    font-family: 'Noto Serif KR', serif;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
body{
    
    max-width:800px;
    margin:auto;
}


html {
    color: #000;
    background: #fff;
    overflow-y: scroll;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%
}
html * {
    outline: 0;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
}
html,
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
input,
textarea,
p,
blockquote,
th,
td,
hr,
button,
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    margin: 0;
    padding: 0
}
input,
select,
textarea {
    font-size: 100%
}
table {
    border-collapse: collapse;
    border-spacing: 0
}
fieldset,
img {
    border: 0
}
abbr,
acronym {
    border: 0;
    font-variant: normal
}
del {
    text-decoration: line-through
}
address,
caption,
cite,
code,
dfn,
em,
th,
var {
    font-style: normal;
    font-weight: 500
}
ol,
ul {
    list-style: none
}
caption,
th {
    text-align: left
}
h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: 100%;
    font-weight: 500
}
q:before,
q:after {
    content: ''
}
sub,
sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline
}
sup {
    top: -.5em
}
sub {
    bottom: -.25em
}
a:hover {
    text-decoration: underline
}
ins,
a {
    text-decoration: none
}
`;

function App() {
    return (
        <>
            <Helmet>
                <link
                    rel='stylesheet'
                    href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0'
                />
                <link
                    href='https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@200;300;400;500;600;700;900&display=swap'
                    rel='stylesheet'
                />
            </Helmet>
            <>
                <GlobalStyle />
                <Router />
            </>
            {ReactDOM.createPortal(
                <Footer />,
                document.querySelector('#footer')
            )}
        </>
    );
}

export default App;
