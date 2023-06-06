import QRCode from "react-qr-code";
import styled from "styled-components";

export default function CodePage() {
	return (
		<StyledPage>
			<QRCode value={"https://google.com"} size={250}/>
		</StyledPage>
	);
}

const StyledPage = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;
