import { createGlobalStyle } from 'styled-components'
import { variables } from './themes/variables'

export const GlobalStyle = createGlobalStyle`
${variables}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
html {
	scroll-behavior: smooth;

}

body {

	font-family: var(--ff-primary);
	background-color: var(--gray-900);

}
h1,
h2 {
	font-family: var(--ff-title);
	line-height: 1;
}

p,
span,
button,
a,
input,
textarea,
label {
	font-family: var(--ff-primary);
}

.container {
	margin: 0 auto;
	width: 100%;
	max-width: 70rem;
	min-height: 100vh;
	display: grid;
	grid-template-rows: auto;
	padding: 4rem 4rem 0;
}
	`
