import { createStyles, Card, Image, ActionIcon, Group, Text, Avatar, Badge } from '@mantine/core';
import { IconHeart, IconBookmark, IconShare, IconEye } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        maxWidth: 300,
    },

    footer: {
        padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
        marginTop: theme.spacing.md,
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
            }`,
    },

    icon: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
    },
}));

interface ArticleCardProps {
    id: number;
    image: string;
    category: string;
    title: string;
    views: number;
    author: {
        name: string;
        description: string;
        image: string;
    };
}

export default function ArticleCard({ props }: { props: ArticleCardProps; }) {
    const { classes, theme } = useStyles();

    return (
        <Card withBorder p="lg" radius="md" className={classes.card}>
            <Card.Section mb="sm">
                <Image src={props.image} alt={props.title} height={180} />
            </Card.Section>

            <Badge>{props.category}</Badge>

            <Text weight={700} mt="xs">
                {props.title}
            </Text>

            <Group mt="lg">
                <Avatar src={props.author.image} radius="sm" />
                <div>
                    <Text weight={500}>{props.author.name}</Text>
                    <Text size="xs" color="dimmed">
                        {props.author.description}
                    </Text>
                </div>
            </Group>

            <Card.Section className={classes.footer}>
                <Group position="apart">
                    <Group noWrap spacing={10} mt={3}>
                        <IconEye stroke={1.5} size={16} className={classes.icon} />
                        <Text size="xs" color="dimmed">
                            {props.views}
                        </Text>
                    </Group>
                    <Group spacing={0}>
                        <ActionIcon>
                            <IconHeart size={18} color={theme.colors.red[6]} stroke={1.5} />
                        </ActionIcon>
                        <ActionIcon>
                            <IconBookmark size={18} color={theme.colors.yellow[6]} stroke={1.5} />
                        </ActionIcon>
                        <ActionIcon>
                            <IconShare size={16} color={theme.colors.blue[6]} stroke={1.5} />
                        </ActionIcon>
                    </Group>
                </Group>
            </Card.Section>
        </Card>
    );
}