import { Box, createStyles } from '@mantine/core';
import ContactCard from '../../components/ContactCard/ContactCard'

const useStyles = createStyles((theme) => ({
    contactBox: {
        justifyContent: 'right',
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
        <Box pl={40} pr={40}>
            {contact}
        </Box>
    )
}