import { useState } from "react";
import {
	createStyles,
	Header,
	Group,
	ActionIcon,
	Container,
	Burger,
	Image,
	useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
	IconBrandTwitter,
	IconBrandYoutube,
	IconBrandInstagram,
	IconBrandGithub,
} from "@tabler/icons";
import { Close } from "./Close";
import "./App.css";

const useStyles = createStyles((theme) => ({


	inner: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		height: 56,

		[theme.fn.smallerThan("sm")]: {
			justifyContent: "flex-start",
		},
	},

	links: {
		width: 260,

		[theme.fn.smallerThan("sm")]: {
			display: "none",
		},
	},

	social: {
		width: 260,

		[theme.fn.smallerThan("sm")]: {
			width: "auto",
			marginLeft: "auto",
		},
	},

	burger: {
		marginRight: theme.spacing.md,

		[theme.fn.largerThan("sm")]: {
			display: "none",
		},
	},

	link: {
		display: "block",
		lineHeight: 1,
		padding: "8px 12px",
		borderRadius: theme.radius.sm,
		textDecoration: "none",
		color:
			theme.colorScheme === "dark"
				? theme.colors.dark[0]
				: theme.colors.gray[7],
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,

		"&:hover": {
			backgroundColor:
				theme.colorScheme === "dark"
					? theme.colors.dark[6]
					: theme.colors.gray[0],
		},
	},

	linkActive: {
		"&, &:hover": {
			backgroundColor: theme.fn.variant({
				variant: "light",
				color: theme.primaryColor,
			}).background,
			color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
				.color,
		},
	},
}));

interface HeaderMiddleProps {
	links: { link: string; label: string }[];
}

export function HeaderMiddle() {
	const theme = useMantineTheme();
	const getColor = (color: string) =>
		theme.colors[color][theme.colorScheme === "dark" ? 5 : 7];
	const [opened, { toggle }] = useDisclosure(false);

	const { classes, cx } = useStyles();

	return (
		<Header className="header" height={56} color={theme.fn.rgba("#ff00a0", 0.9)}>
			<div data-tauri-drag-region className="titlebar"></div>
			<Container
				size={2000}
				className={classes.inner}
				color={theme.fn.linearGradient(24, "teal", "orange")}>
				<Burger
					opened={opened}
					onClick={toggle}
					size="sm"
					className={classes.burger}
				/>
				<Group className={classes.links} spacing={5}></Group>

				<Image
					src="../src-tauri/icons/Square44x44Logo.png"
					width="44"
					height="44"
				/>

				<Group spacing={0} className={classes.social} position="right" noWrap>
					<ActionIcon size="lg" className="gh-options">
						<IconBrandGithub
							href="https://github.com/stelmanjones"
							className="gh-options"
							size={40}
							stroke={1.5}
						/>
					</ActionIcon>
					<Close />
				</Group>
			</Container>
		</Header>
	);
}
