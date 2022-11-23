import {
    createStyles,
    Paper,
    Title,
    Text,
    TextInput,
    Button,
    Container,
    Group,
    Anchor,
    Center,
    Box,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconArrowLeft } from '@tabler/icons';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
    title: {
        fontSize: 26,
        fontWeight: 900,
    },

    controls: {
        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column-reverse',
        },
    },

    control: {
        [theme.fn.smallerThan('xs')]: {
            width: '100%',
            textAlign: 'center',
        },
    },
    text: {
        ...theme.fn.hover({
            textDecoration: 'underline',
        }),
    },
}));

export function ForgotPassword() {
    const { classes, theme } = useStyles();
    const form = useForm({
        initialValues: {
            email: '',
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
        },
    });

    return (
        <Container size={460} my={30}>
            <Title className={classes.title} align="center">
                Forgot your password?
            </Title>
            <Text color="dimmed" size="sm" align="center">
                Enter your email to get a reset link
            </Text>

            <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
                <TextInput
                    required
                    label="Email"
                    placeholder="info@nullnews.com"
                    value={form.values.email}
                    onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                    error={form.errors.email && 'Invalid email'}
                />
                <Group position="apart" mt="lg" className={classes.controls}>
                    <Link to='/login'>
                        <Text size="sm" color='dimmed' className={classes.text}>
                            <Center inline>
                                <IconArrowLeft size={12} stroke={1.5} />
                                <Box ml={5}>Back to login page</Box>
                            </Center>
                        </Text>
                    </Link>
                    <Button type='submit' className={classes.control}>Reset password</Button>
                </Group>
            </Paper>
        </Container>
    );
}