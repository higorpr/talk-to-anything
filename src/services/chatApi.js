import api from "./api";

async function sendUserMessage(user, message) {
	const body = { user, message };
	const response = await api.post("/chat", body);
	return response.data;
}

async function getChat(user) {
	const response = await api.get(`/chat/${user}`);
	return response.data;
}

export const chatApi = { sendUserMessage, getChat };
