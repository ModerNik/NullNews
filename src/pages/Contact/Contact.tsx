import { Box, createStyles } from '@mantine/core';
import ContactCard from '../../components/ContactCard/ContactCard'

const useStyles = createStyles((theme) => ({
    contactBox: {
        justifyContent: 'center',
    },

}));

const contacts = [
    {
        avatar: 'null.png',
        name: 'ModerNik',
        title: 'FrontEnd Developer',
        phone: '+7 916 680 50-25',
        email: 'oleg@detinkin.ru',
    }, {
        avatar: 'null.png',
        name: 'GodMod',
        title: 'BackEnd Developer',
        phone: '+7 000 000 00-00',
        email: 'godmod@null.dev',
    },
];

export const Contact = () => {
    const { classes } = useStyles();
    const contact = contacts.map((item) => (
        <ContactCard avatar={item.avatar} name={item.name} title={item.title} phone={item.phone} email={item.email} />
    ));

    return (
        <Box pl={40} pr={40}>
            <Box className={classes.contactBox}>
                {contact}
            </Box>
        </Box>
    )
}