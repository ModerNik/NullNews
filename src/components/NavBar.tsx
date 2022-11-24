import { LightModeOutlined } from "@mui/icons-material";
import { DarkModeOutlined } from "@mui/icons-material";
import {
    createStyles,
    Header,
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Anchor,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    ActionIcon,
    useMantineColorScheme,
    Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
    IconNotification,
    IconCode,
    IconDevices,
    IconSettings,
    IconChevronDown,
    IconSchool,
    IconDeviceGamepad,
    IconBusinessplan,
    IconSun,
    IconMoon,
    IconHeart,
    IconBookmarks
} from '@tabler/icons';
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
    link: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontWeight: 500,

        [theme.fn.smallerThan('sm')]: {
            height: 42,
            display: 'flex',
            alignItems: 'center',
            width: '100%',
        },

        ...theme.fn.hover({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        }),
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        [theme.fn.smallerThan('sm')]: {
            height: 42,
            display: 'flex',
            alignItems: 'center',
            width: '100%',
        },
    },

    subLink: {
        width: '100%',
        padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
        borderRadius: theme.radius.md,

        ...theme.fn.hover({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
        }),

        '&:active': theme.activeStyles,
    },

    dropdownFooter: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
        margin: -theme.spacing.md,
        marginTop: theme.spacing.sm,
        padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
        paddingBottom: theme.spacing.xl,
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
            }`,
    },

    hiddenMobile: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    hiddenDesktop: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    navBarBox: {
        border: 'none',
        position: 'fixed',
    },

}));

const mockdata = [
    {
        icon: IconSettings,
        title: 'Tech',
        description: 'Latest tech news',
    },
    {
        icon: IconCode,
        title: 'Code',
        description: 'Code news and tutorials',
    },
    {
        icon: IconDevices,
        title: 'Gadgets',
        description: 'New gadgets and tech',
    },
    {
        icon: IconSchool,
        title: 'Sience',
        description: 'Sience news and discoveries',
    },
    {
        icon: IconBusinessplan,
        title: 'Business',
        description: 'News from buisness world',
    },
    {
        icon: IconDeviceGamepad,
        title: 'Games',
        description: 'Game industry reviews, updates and insights',
    },
];

export const NavBar = () => {
    const { toggleColorScheme } = useMantineColorScheme();
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const { classes, theme } = useStyles();

    const links = mockdata.map((item) => (
        <UnstyledButton className={classes.subLink} key={item.title}>
            <Group noWrap align="flex-start">
                <ThemeIcon size={34} variant="default" radius="md">
                    <item.icon size={22} color={theme.fn.primaryColor()} />
                </ThemeIcon>
                <div>
                    <Text size="sm" weight={500}>
                        {item.title}
                    </Text>
                    <Text size="xs" color="dimmed">
                        {item.description}
                    </Text>
                </div>
            </Group>
        </UnstyledButton>
    ));

    return (
        <Box pb={100} >
            <Header className={classes.navBarBox} height={60} px="md" >
                <Group position="apart" sx={{ height: '100%' }}>
                    <Group sx={{ height: '100%' }} spacing={0}>
                        <Link to='/'>
                            <Title className={classes.title} order={4}>
                                Null News
                            </Title>
                        </Link>
                    </Group>
                    <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
                        <Link to="latest" className={classes.link}>
                            Latest
                        </Link>
                        <Link to="popular" className={classes.link}>
                            Popular
                        </Link>
                        <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                            <HoverCard.Target>
                                <Link to="all" className={classes.link}>
                                    <Center inline>
                                        <Box component="span" mr={5}>
                                            More
                                        </Box>
                                        <IconChevronDown size={16} color={theme.fn.primaryColor()} />
                                    </Center>
                                </Link>
                            </HoverCard.Target>

                            <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
                                <Group position="apart" px="md">
                                    <Text weight={500}>More topics</Text>
                                    <Anchor type="button" href="#" size="xs">
                                        View all
                                    </Anchor>
                                </Group>

                                <Divider
                                    my="sm"
                                    mx="-md"
                                    color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
                                />

                                <SimpleGrid cols={2} spacing={0}>
                                    {links}
                                </SimpleGrid>

                                {/* <div className={classes.dropdownFooter}>
                                    <Group position="apart">
                                        <div>
                                            <Text weight={500} size="sm">
                                                Get started
                                            </Text>
                                            <Text size="xs" color="dimmed">
                                                Their food sources have decreased, and their numbers
                                            </Text>
                                        </div>
                                        <Button variant="default">Get started</Button>
                                    </Group>
                                </div> */}
                            </HoverCard.Dropdown>
                        </HoverCard>
                    </Group>

                    <Group className={classes.hiddenMobile}>
                        <ActionIcon onClick={() => toggleColorScheme()}>
                            {theme.colorScheme === 'light' ? <IconSun /> : <IconMoon />}
                        </ActionIcon>
                        <Link to="login"><Button>Sign up</Button></Link>
                    </Group>

                    <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
                </Group>
            </Header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="Null News"
                className={classes.hiddenDesktop}
                zIndex={1000000}
            >
                <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
                    <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
                    <Link to="latest" className={classes.link}>
                        Latest
                    </Link>
                    <Link to="popular" className={classes.link}>
                        Popular
                    </Link>
                    <UnstyledButton className={classes.link} onClick={toggleLinks}>
                        <Center inline>
                            <Box component="span" mr={5}>
                                More
                            </Box>
                            <IconChevronDown size={16} color={theme.fn.primaryColor()} />
                        </Center>
                    </UnstyledButton>
                    <Collapse in={linksOpened}>{links}</Collapse>
                    <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

                    <Group position="center" grow pb="xl" px="md">
                        <ActionIcon onClick={() => toggleColorScheme()}>
                            {theme.colorScheme === 'light' ? <LightModeOutlined /> : <DarkModeOutlined />}
                        </ActionIcon>
                        <Button>Sign up</Button>
                    </Group>
                </ScrollArea>
            </Drawer>
        </Box>
    )
}

export default NavBar;