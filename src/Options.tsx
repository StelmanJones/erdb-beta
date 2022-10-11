import React from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { AppShell, Stack, Center, Divider, Image, Space, useMantineTheme } from "@mantine/core";
import { HeaderMiddle } from "./db-header";
import { FaqSimple } from "./Faq";
import Logo from "../banner.svg";
import { FooterCentered } from "./Foot";
const theme = useMantineTheme;
const Options = () => (
	<AppShell
	
	fixed={true}
	padding="md"
	header={<HeaderMiddle/>}
	styles={(theme) => ({
		header: {
			background: theme.fn.rgba('#171a21', 1.0)
		},
		main: {
			
			background: theme.fn.linearGradient( 25,"#ff00a0", "#9600ff"),
			Title: theme.fn.rgba("#ffffff", 1),
		},
		
		
	})}>
			
			<Space h={75} />
			<FaqSimple />
		
	</AppShell>
);

export default Options;
