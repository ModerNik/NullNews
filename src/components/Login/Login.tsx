import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
    createStyles,
    Center,
    Box,
    Progress,
    Stack,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { upperFirst, useInputState, useToggle } from '@mantine/hooks';
import { IconCheck, IconX } from '@tabler/icons';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({

    form: {
        borderRight: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
            }`,
        minHeight: 900,
        maxWidth: 450,
        paddingTop: 80,

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            maxWidth: '100%',
        },
    },

    text: {
        ...theme.fn.hover({
            textDecoration: 'underline',
        }),
    },
}));

const requirements = [
    { re: /[0-9]/, label: 'Includes number' },
    { re: /[a-z]/, label: 'Includes lowercase letter' },
    { re: /[A-Z]/, label: 'Includes uppercase letter' },
    { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
];

function PasswordRequirement({ meets, label }: { meets: boolean; label: string }) {
    return (
        <Text color={meets ? 'teal' : 'red'} mt={5} size="sm">
            <Center inline>
                {meets ? <IconCheck size={14} stroke={1.5} /> : <IconX size={14} stroke={1.5} />}
                <Box ml={7}>{label}</Box>
            </Center>
        </Text>
    );
}

function getStrength(password: string) {
    let multiplier = password.length > 5 ? 0 : 1;

    requirements.forEach((requirement) => {
        if (!requirement.re.test(password)) {
            multiplier += 1;
        }
    });

    return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 0);
}

export function Login() {
    const { classes, theme } = useStyles();
    const [type, toggle] = useToggle(['login', 'register']);
    const form = useForm({
        initialValues: {
            email: '',
            name: '',
            password: '',
            terms: true,
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
            password: (val) => (val.length < 6 ? 'Password should include at least 6 characters' : null),
        },
    });

    const strength = getStrength(form.values.password);
    const checks = requirements.map((requirement, index) => (
        <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(form.values.password)} />
    ));
    const bars = Array(4)
        .fill(0)
        .map((_, index) => (
            <Progress
                styles={{ bar: { transitionDuration: '0ms' } }}
                value={
                    form.values.password.length > 0 && index === 0 ? 100 : strength >= ((index + 1) / 4) * 100 ? 100 : 0
                }
                color={strength > 80 ? 'teal' : strength > 50 ? 'yellow' : 'red'}
                key={index}
                size={4}
            />
        ));

    return (
        <Container size={420} my={40} >
            <Title align="center" sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}>
                Welcome back!
            </Title>
            <Text color="dimmed" size="sm" align="center" mt={5}>
                <Anchor
                    component="button"
                    type="button"
                    color="dimmed"
                    onClick={() => toggle()}
                    size="xs"
                >
                    {type === 'register'
                        ? 'Already have an account? Login'
                        : "Don't have an account? Register"}
                </Anchor>
            </Text>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <form onSubmit={form.onSubmit(() => { })}>
                    <Stack>
                        {type === 'register' && (
                            <TextInput
                                required
                                label="Name"
                                placeholder="Your name"
                                value={form.values.name}
                                onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                            />
                        )}

                        <TextInput
                            required
                            label="Email"
                            placeholder="info@nullnews.com"
                            value={form.values.email}
                            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                            error={form.errors.email && 'Invalid email'}
                        />
                        {type === 'login' && (
                            <PasswordInput
                                required
                                label="Password"
                                placeholder="Your password"
                                value={form.values.password}
                                onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                            />
                        )}

                        {type === 'register' && (
                            <div>
                                <PasswordInput
                                    required
                                    value={form.values.password}
                                    placeholder="Your password"
                                    label="Password"
                                    onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                                    error={form.errors.password && 'Password should include at least 6 characters'}
                                />

                                <Group spacing={5} grow mt="xs" mb="md">
                                    {bars}
                                </Group>

                                <PasswordRequirement label="Has at least 6 characters" meets={form.values.password.length > 5} />
                                {checks}
                            </div>
                        )}

                        {type === 'register' && (
                            <Checkbox
                                required
                                label="I accept terms and conditions"
                                checked={form.values.terms}
                                onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                            />
                        )}
                    </Stack>
                    {type === 'login' && (
                        <Group position="apart" mt="lg">
                            <Checkbox label="Remember me" sx={{ lineHeight: 1 }} />
                            <Link to="/forgot">
                                <Text className={classes.text} size="sm" color={theme.colors.cyan[4]}>
                                    Forgot password?
                                </Text>
                            </Link>
                        </Group>
                    )}

                    <Button type="submit" fullWidth mt="xl">
                        {upperFirst(type)}
                    </Button>
                </form>
            </Paper>
        </Container >
    );
}

export default Login;