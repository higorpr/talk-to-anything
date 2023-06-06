import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import CodePage from "./pages/CodePage";
import ChatPage from "./pages/ChatPage";
import { useState } from "react";

function App() {

	return (
		<div>
			<BrowserRouter>
				<GlobalStyle />
				<Routes>
					<Route path="/" element={<CodePage />} />
					<Route path="/chat" element={<ChatPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
