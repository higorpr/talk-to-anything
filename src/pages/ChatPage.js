import styled from "styled-components";
import UserInput from "../components/UserInput";
import { useEffect, useState } from "react";
import Message from "../components/ChatBoxes/Message";
import useGetChat from "../hooks/api/useGetChat";

export default function ChatPage() {
	const [chatStarted, setChatStarted] = useState(false);
	const [messages, setMessages] = useState([]);
	const [updatePage, setUpdatePage] = useState(false);
	const { getChat } = useGetChat();

	async function retrieveChat(user) {
		try {
			const chat = await getChat(user);
			console.log(chat);
			setMessages(chat);
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		const user = "You";
		retrieveChat(user);
	}, [updatePage]);

	// const nowDate = new Date().getTime();
	// const messages = [
	// 	{
	// 		from: "Higor",
	// 		to: "TalkToAnything",
	// 		text: "Hello!",
	// 		sent: nowDate,
	// 	},
	// 	{
	// 		from: "TalkToAnything",
	// 		to: "Higor",
	// 		text: "Hello There!",
	// 		sent: nowDate,
	// 	},
	// 	{
	// 		from: "Higor",
	// 		to: "TalkToAnything",
	// 		text:
	// 			"Are you Obi Wan Kenobi? KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK",
	// 		sent: nowDate,
	// 	},
	// 	{
	// 		from: "TalkToAnything",
	// 		to: "Higor",
	// 		text:
	// 			"Are you Obi Wan Kenobi? HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH",
	// 		sent: nowDate,
	// 	},
	// ];
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
					<Message key={m.id} from={m.from} text={m.text} />
				))}
			</ChatContainer>

			<UserInput updatePage={updatePage} setUpdatePage={setUpdatePage} />
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
	background-color: #0c232f;
	width: 100%;
	padding: 10px 0;
	position: fixed;
	top: 0;
	left: 0;
`;

const ChatContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	margin-top: 15px;
	padding: 0 10px;
	box-sizing: border-box;
	z-index: 0;
`;
