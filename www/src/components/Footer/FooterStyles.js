import styled from 'styled-components';

export const Box = styled.div`
padding: 20px 20px;
width: 100%;


@media (max-width: 1000px) {
	padding: 20px 0px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 50%;
	margin: 0 auto;
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
// margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(31%, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
display: flex;
align-items: center;
color: #9b9999;
// margin-bottom: 20px;
text-decoration: none;

&:hover {
	color: #575b88;
	transition: 200ms ease-in;
}
`;
