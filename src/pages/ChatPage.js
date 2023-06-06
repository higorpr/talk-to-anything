import styled from "styled-components";
import UserInput from "../components/UserInput";

export default function ChatPage() {
	const entryText = `I'm here to help you =)`;
	return (
		<StyledPage>
			<h1>Talk To Anything</h1>
			<p>{entryText}</p>
			<UserInput />
		</StyledPage>
	);
}

const StyledPage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;

	h1 {
		font-size: 30px;
	}

	p {
		font-size: 18px;
	}
`;
