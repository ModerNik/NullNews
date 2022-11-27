import { createStyles, Avatar, Text, Group, Box, Paper, Anchor } from '@mantine/core';
import { IconBrandGithub, IconAt } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
    icon: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
    },

    avatar: {
        [theme.fn.smallerThan(400)]: {
            display: 'none',
        },
    },
}));

interface ContactCardProps {
    avatar: string;
    name: string;
    title: string;
    email: string;
    github: string;
}

export default function ContactCard({ avatar, name, title, email, github }: ContactCardProps) {
    const { classes } = useStyles();
    return (
        <Paper withBorder shadow="md" p={30} radius="md" mb="xl"
            sx={(theme) => ({
                maxWidth: 400,
            })}>
            <Group noWrap>
                <Avatar className={classes.avatar} src={avatar} size={94} radius="md" />
                <div>
                    <Text size="xs" sx={{ textTransform: 'uppercase' }} weight={700} color="dimmed">
                        {title}
                    </Text>

                    <Text size="lg" weight={500}>
                        {name}
                    </Text>

                    <Group noWrap spacing={10} mt={3}>
                        <IconAt stroke={1.5} size={16} className={classes.icon} />
                        <Text size="xs" color="dimmed">
                            {email}
                        </Text>
                    </Group>

                    <Group noWrap spacing={10} mt={5}>
                        <IconBrandGithub stroke={1.5} size={16} className={classes.icon} />
                        <Anchor<'a'> href={'https://' + github} target="_blank" size="xs" color="dimmed">
                            {github}
                        </Anchor>
                    </Group>
                </div>
            </Group>
        </Paper>
    );
}