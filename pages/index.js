import {
    Box,
    Button,
    Card,
    Divider,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Stack,
    Typography,
} from '@mui/material';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <Grid
                container
                spacing={2}
                alignItems='center'
                justifyContent='space-between'
                flexWrap='wrap'
                py={5}>
                <Grid item xs display='inline-flex'>
                    <Typography variant='h5' fontWeight={500} mr={1}>
                        Employee
                    </Typography>
                    <Typography variant='h5' color='text.tertiary'>
                        Dashboard
                    </Typography>
                </Grid>
                <Grid item>
                    <Grid container spacing={1.5}>
                        <Grid item>
                            <Button variant='contained'>Apply Leaves</Button>
                        </Grid>
                        <Grid item>
                            <Button variant='contained'>Clock in</Button>
                        </Grid>
                        <Grid item>
                            <IconButton disableRipple sx={{ padding: '10px', borderRadius: '6px' }}>
                                <EmailOutlinedIcon sx={{ fontSize: 18 }} />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton disableRipple sx={{ padding: '10px', borderRadius: '6px' }}>
                                <PhoneInTalkIcon sx={{ fontSize: 18 }} />
                            </IconButton>
                        </Grid>

                        <Grid item>
                            <IconButton
                                disableRipple
                                sx={{
                                    padding: '10px',
                                    borderRadius: '6px',
                                    backgroundColor: 'primary.main',
                                    '&:hover': { backgroundColor: 'primary.dark' },
                                }}>
                                <InfoOutlinedIcon sx={{ fontSize: 18 }} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                {Array(4)
                    .fill(0)
                    .map((_, i) => (
                        <Grid item xs={12} md={6} xl={3} key={i}>
                            <Card sx={{ borderRadius: '10px', p: 2.8 }}>
                                <Stack direction='row' justifyContent='space-between'>
                                    <Box>
                                        <Typography variant='body1' fontWeight={500}>
                                            Completed Projects
                                        </Typography>
                                        <Typography variant='h6' sx={{ color: '#FE7F00' }}>
                                            51
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            width: '54px',
                                            background: '#FE7F00',
                                            borderRadius: '6px',
                                            display: 'inline-flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                        <EmailOutlinedIcon />
                                    </Box>
                                </Stack>
                            </Card>
                        </Grid>
                    ))}
            </Grid>

            <Grid container spacing={3} my={1} height='480px'>
                <Grid item xs={12} xl={8}>
                    <Card
                        sx={{
                            borderRadius: '10px',
                            p: 2.8,
                            height: '100%',
                            position: 'relative',
                        }}>
                        <Stack direction='row' justifyContent='space-between'>
                            <Typography
                                variant='body1'
                                fontWeight={500}
                                sx={{
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        left: '0px',
                                        padding: '2px',
                                        height: '25px',
                                        backgroundColor: 'primary.main',
                                    },
                                }}>
                                Salary And Attendance Chart
                            </Typography>
                        </Stack>
                    </Card>
                </Grid>
                <Grid item xs={12} xl={4}>
                    <Card
                        sx={{ borderRadius: '10px', p: 2.8, height: '100%', position: 'relative' }}>
                        <Typography
                            variant='body1'
                            fontWeight={500}
                            sx={{
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    left: '0px',
                                    padding: '2px',
                                    height: '25px',
                                    backgroundColor: 'primary.main',
                                },
                            }}>
                            Recent Activity
                        </Typography>
                        <List>
                            {Array(4)
                                .fill(0)
                                .map((_, i) => (
                                    <ListItem
                                        alignItems='center'
                                        divider
                                        key={i}
                                        secondaryAction={
                                            <Typography variant='body2' color='text.tertiary'>
                                                Just Now
                                            </Typography>
                                        }>
                                        <ListItemIcon>
                                            <InfoOutlinedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary='You Late to day'
                                            secondary={
                                                <Typography variant='body2' color='text.tertiary'>
                                                    Your office intime is 9:42 <br />
                                                    Late time 14min
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                ))}
                        </List>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}
