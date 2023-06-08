import styled from "styled-components";
import UserInput from "../components/UserInput";
import { useState } from "react";
import Message from "../components/ChatBoxes/Message";

export default function ChatPage() {
	const [chatStarted, setChatStarted] = useState(false);
	const nowDate = new Date().getTime();
	const messages = [
		{
			from: "Higor",
			to: "TalkToAnything",
			message: "Hello!",
			sent: nowDate,
		},
		{
			from: "TalkToAnything",
			to: "Higor",
			message: "Hello There!",
			sent: nowDate,
		},
		{
			from: "Higor",
			to: "TalkToAnything",
			message: "Are you Obi Wan Kenobi? KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK",
			sent: nowDate,
		},
		{
			from: "TalkToAnything",
			to: "Higor",
			message:
				"Are you Obi Wan Kenobi? HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH",
			sent: nowDate,
		},
	];
	// const messages = [];
	return (
		<StyledPage>
			{!chatStarted ? (
				<StyledHeader>
					<h1>Talk To Anything</h1>
				</StyledHeader>
			) : (
				""
			)}

			<ChatContainer>
				{messages.map((m) => (
					<Message from={m.from} text={m.message} />
				))}
			</ChatContainer>

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

const StyledHeader = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: white;
	/* margin-top: 10px; */
	background-color: #0c232f;
	width: 100%;
	padding: 10px 0;
	/* border-bottom: 1px solid white; */
	box-shadow: ;
`;

const ChatContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	margin-top: 15px;
	padding: 0 10px;
	box-sizing: border-box;
`;
