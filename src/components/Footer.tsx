import { createStyles, Anchor, Group, ActionIcon, Title, Text } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons';
import { Link } from 'react-router-dom';

const { height, width } = useViewportSize();

const useStyles = createStyles((theme) => ({
    footer: {
        bottom: 0,
        marginTop: 40,
        width: '100%',
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`,
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: `${theme.spacing.md}px ${theme.spacing.md}px`,

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
        },
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.lg,
            marginBottom: theme.spacing.sm,
        },
    },
    link: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        ...theme.fn.hover({
            textDecoration: 'underline',
        }),
    },
    text: {
        ...theme.fn.hover({
            textDecoration: 'underline',
        }),
    },
}));

const links = [
    { link: 'contact', label: 'Contact' },
    { link: 'privacy', label: 'Privacy' },
    { link: 'about', label: 'About' },
];

export const Footer = () => {
    const { classes } = useStyles();
    const items = links.map((link) => (
        <Link key={link.label} to={link.link}>
            <Text color='dimmed' className={classes.text}>
                {link.label}
            </Text>
        </Link>
    ));

    return (
        <div className={classes.footer}>
            <div className={classes.inner}>
                <Title order={4}>
                    Null News
                </Title>

                <Group className={classes.links}>
                    {items}
                    <Anchor<'a'> href="https://github.com/ModerNik" target="_blank" color="dimmed">
                        Contribute
                    </Anchor>
                </Group>

                <Group spacing="xs" position="right" noWrap>
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandTwitter size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandYoutube size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandInstagram size={18} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </div>
        </div>
    );
}

export default Footer;