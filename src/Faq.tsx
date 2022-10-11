import { Container, Title, Accordion, createStyles, Kbd } from "@mantine/core";

const useStyles = createStyles((theme) => ({
	wrapper: {
		paddingTop: theme.spacing.xl * 1,
		paddingBottom: theme.spacing.xl * 1,
		minHeight: 500,
	},

	title: {
		marginBottom: theme.spacing.xl * 1,
		color: "white",
	},

	item: {
		borderRadius: theme.radius.md,
		marginBottom: theme.spacing.lg,

		border: `1px solid ${
			theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
		}`,
	},
}));

const rightSection = (
	<div style={{ display: "inline", alignItems: "normal" }}>
		<Kbd>Ctrl</Kbd>
		<span style={{ margin: "0 5px" }}>+</span>
		<Kbd>shift</Kbd>
		<span style={{ margin: "0 5px" }}>+</span>
		<Kbd>H</Kbd>
	</div>
);

export function FaqSimple() {
	const { classes } = useStyles();
	return (
		<Container size="sm" className={classes.wrapper}>
			<Title align="center" className={classes.title}>
				Frequently Asked Questions
			</Title>

			<Accordion variant="separated">
				<Accordion.Item className={classes.item} value="how">
					<Accordion.Control>How do I use it?</Accordion.Control>
					<Accordion.Panel>
						You can toggle the overlay with {rightSection}. Custom keybinds for
						the overlay are a WIP. The overlay only works in Borderless Windowed
						mode!
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item className={classes.item} value="what-is-this">
					<Accordion.Control>What is ERDB?</Accordion.Control>
					<Accordion.Panel>
						ERDB is an application that renders a toggleable overlay on your
						screen when you are playing Elden Ring. In the overlay you can
						search for items in Elden Ring and the overlay will display the item
						and it's stats, etc.
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item className={classes.item} value="reset-password">
					<Accordion.Control>Is this a complete application?</Accordion.Control>
					<Accordion.Panel>
						No, not right now. This is my hobby project and i'll be building new
						features as i go. Right now i'm working on making sure the core
						features are running smoothly.
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item className={classes.item} value="tech">
					<Accordion.Control>Technologies</Accordion.Control>
					<Accordion.Panel>
						I wanted to use a relatively young and modern tech stack in rust as
						it's exciting and a good excuse to practice my Rust programming.
						ERDB uses a SurrealDB database for storing all data as it's highly
						flexible, fast and secure. The data from SurrealDB then makes it's
						way to a Meilisearch Search Engine Server where the data gets
						indexed and later served to the user. The Application itself is a
						Tauri App with Vite and ReactJS.
					</Accordion.Panel>
				</Accordion.Item>

				<Accordion.Item className={classes.item} value="another-account">
					<Accordion.Control>
						Where can I report items that are missing?
					</Accordion.Control>
					<Accordion.Panel>
						I'll implement a way for users to submit bugs, items that are
						missing or data that is wrong.
					</Accordion.Panel>
				</Accordion.Item>
			</Accordion>
		</Container>
	);
}
