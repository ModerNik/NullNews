import { Box, Button, createStyles, Group, Textarea, TextInput } from '@mantine/core';
import ContactCard from '../../components/ContactCard'

const useStyles = createStyles((theme) => ({
    form: {
        border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.gray[8] : theme.colors.gray[3]}`,
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        maxWidth: 400,
        width: '100%',
        marginLeft: theme.spacing.xl,
        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
            marginLeft: 0,
        },
    },

    control: {
        backgroundColor: theme.colors[theme.primaryColor][6],
    },

    contactBox: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing.xl,
        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
        },
    },
}));

const contacts = [
    {
        avatar: 'ModerNik.png',
        name: 'ModerNik',
        title: 'FrontEnd Developer',
        email: 'oleg@detinkin.ru',
        github: 'github.com/ModerNik'
    }, {
        avatar: 'g0dm0d.png',
        name: 'GodMod',
        title: 'BackEnd Developer',
        email: 'ivan.berlin06@gmail.com',
        github: 'github.com/g0dm0d',
    },
];

export const Contact = () => {
    const { classes } = useStyles();
    const contact = contacts.map((item) => (
        <ContactCard key={item.name} avatar={item.avatar} name={item.name} title={item.title} email={item.email} github={item.github} />
    ));

    return (
        <Box pl={40} className={classes.contactBox}>
            <Box>
                {contact}
            </Box>
            <div className={classes.form}>
                <TextInput
                    label="Email"
                    placeholder="your@email.com"
                    required
                />
                <TextInput
                    label="Name"
                    placeholder="Your Name"
                    mt="md"
                />
                <Textarea
                    required
                    label="Your message"
                    placeholder="Your app sucks xd"
                    minRows={4}
                    mt="md"
                />

                <Group position="right" mt="md">
                    <Button className={classes.control}>Send message</Button>
                </Group>
            </div>
        </Box>
    )
}