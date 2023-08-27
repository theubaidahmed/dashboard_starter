import { Box, Container, Stack, Typography, Grid, List, ListItem } from '@mui/material';
import Image from '@/components/Image';
import React from 'react';

const Letter = () => {
    return (
        <Container sx={{ maxWidth: '1216px', mx: 'auto', p: 2 }}>
            <Stack direction='row' justifyContent='space-between' py={8} alignItems='flex-start'>
                <Image src='clikkle/logo/clikkle-text.png' width='100' height='40' />
                <Box
                    sx={{
                        borderStyle: 'solid',
                        borderRight: 'inherit',
                        borderColor: 'common',
                        borderWidth: 'thin',
                        p: 2,
                    }}>
                    <Typography variant='body1'>offer</Typography>
                    <Typography
                        variant='subtitle1'
                        fontWeight={500}
                        textTransform='uppercase'
                        letterSpacing='1.2px'>
                        LETTER
                    </Typography>
                </Box>
            </Stack>
            <Stack direction='row' justifyContent='space-between' spacing={3}>
                <Box position='relative'>
                    <Typography
                        variant='subtitle1'
                        sx={{
                            transform: 'rotate(270deg)',
                            display: 'inline-block',
                            position: 'absolute',
                            top: '120px',
                            left: '-22px',
                        }}>
                        JOB TITLE
                    </Typography>
                    <Typography
                        variant='h3'
                        fontWeight={500}
                        color='primary.main'
                        lineHeight='0.7'
                        textTransform='uppercase'>
                        Product
                    </Typography>
                    <Typography variant='h3' fontWeight={500} textTransform='uppercase'>
                        Manager.
                    </Typography>
                </Box>
                <Image name='letter1.png' height='340' width='540' />
                <Box>
                    <Typography variant='h3' fontWeight={500} color='primary.main' lineHeight='0.7'>
                        Job
                    </Typography>
                    <Typography variant='h3' fontWeight={500} mb={1}>
                        Description.
                    </Typography>
                    <Typography variant='subtitle1' fontWeight={500}>
                        The Product Manager position is a full-time role. The successful candidate
                        will be responsible for [briefly describe the main responsi- bilities and
                        duties of the position]. The position requires excellent
                        [skills/qualifications/experience] and the ability to work collaboratively
                        with cross-functional teams.
                    </Typography>
                </Box>
            </Stack>
            <Box
                sx={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1) ' }}
                display='flex'
                alignItems='center'
                flexDirection='column'
                py={3}
                px={10}>
                <Typography variant='h6' color='primary.main' mb={2}>
                    Greetings Mohammad Ubaid,
                </Typography>
                <Typography variant='h6' textAlign='center' mb={2}>
                    After a thorough assessment of your credentials and thoughtful deliberation, we
                    are delighted to extend an offer for the position of [Position Title]. We kindly
                    request your meticulous review of the attachedjob offer letter, and we encourage
                    you to affix your signature at your earliest convenience. This step marks the
                    initiation of your onboarding joumey.
                </Typography>
                <Typography variant='h6' color='primary.main' mb={2}>
                    We look forword to your positive response.
                </Typography>
            </Box>
            <Box position='relative' textAlign='center' py={8} mt={5}>
                <Typography
                    variant='subtitle1'
                    fontWeight={600}
                    sx={{
                        transform: 'rotate(270deg)',
                        display: 'inline-block',
                        position: 'absolute',
                        top: '120px',
                        left: '-60px',
                    }}>
                    Discover Your Skills
                </Typography>
                <Typography
                    variant='subtitle1'
                    fontWeight={600}
                    sx={{
                        transform: 'rotate(90deg)',
                        display: 'inline-block',
                        position: 'absolute',
                        top: '120px',
                        right: '-60px',
                    }}>
                    Discover Your Skills
                </Typography>
                <Typography variant='h3' fontWeight={500} textTransform='uppercase' gutterBottom>
                    Join Our
                </Typography>
                <Typography
                    variant='h3'
                    fontWeight={500}
                    color='primary.main'
                    lineHeight='0.7'
                    gutterBottom
                    textTransform='uppercase'>
                    Growing
                </Typography>
                <Typography variant='h3' fontWeight={500} textTransform='uppercase'>
                    team
                </Typography>
            </Box>
            <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
                spacing={3}
                pt={8}>
                <Box>
                    <Typography variant='h3' fontWeight={500} mb={1} display='inline-block'>
                        About
                    </Typography>
                    <Typography
                        variant='h3'
                        pl={1}
                        fontWeight={500}
                        color='primary.main'
                        display='inline-block'>
                        Company.
                    </Typography>
                    <Typography variant='subtitle1' fontWeight={500}>
                        Clikkle Technologies disrupts the SaaS sector with practical A1 solutions,
                        empowering businesses to unleash their data's potential. Our innovative A1
                        platforms drive impactful results for global companies, revolutionizing how
                        they operate. We seek ambitious problem solvers to join our rewarding
                        journey. Embrace the impossible with us and unlock your potential at
                        Clikkle.
                    </Typography>
                </Box>
                <Image name='letter1.png' height='340' width='540' />
            </Stack>
            <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
                spacing={3}
                pt={8}>
                <Box>
                    <Typography variant='h1' fontWeight={500} display='inline-block'>
                        MORE
                    </Typography>
                    <Typography variant='h4' pl={1} fontWeight={300} display='inline-block'>
                        information.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        variant='body1'
                        sx={{
                            position: 'relative',
                            '&:before': {
                                content: "''",
                                width: '10px',
                                height: '10px',
                                backgroundColor: 'custom.common',
                                display: 'inline-block',
                                position: 'absolute',
                                left: '-22px',
                                top: '7px',
                            },
                        }}>
                        offer
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        fontWeight={500}
                        textTransform='uppercase'
                        letterSpacing='1.2px'>
                        LETTER
                    </Typography>
                </Box>
            </Stack>
            <Grid
                container
                justifyContent='space-between'
                alignItems='center'
                py={8}
                columnSpacing={6}>
                <Grid item xs={4}>
                    <Typography variant='h6'>Reporting</Typography>
                    <Typography variant='h6' color='primary.main'>
                        Relationship.
                    </Typography>
                    <Typography variant='subtitle1'>
                        The [Job Title] will report directly to [Supervisor/Ma- nager's Name), [Job
                        Title of Supervisor/Manager]. They will collaborate closely with [relevant
                        team/department names].
                    </Typography>
                </Grid>
                <Grid item xs={4} textAlign='right'>
                    <Typography variant='h6'>Probationary</Typography>
                    <Typography variant='h6' color='primary.main'>
                        Period.
                    </Typography>
                    <Typography variant='subtitle1'>
                        The initial probationary period for this position will be [number of
                        months], during which performance and suitability for the role will be
                        evaluated. Employment confirmation will be subject to a satisfactory review
                        at the end of the probationary period.
                    </Typography>
                </Grid>
            </Grid>
            <Box py={8} textAlign='center'>
                <Box
                    sx={{ borderStyle: 'solid', borderColor: 'common', borderWidth: 'thin' }}
                    py={1}
                    px={5}
                    display='inline-flex'
                    mb={1}>
                    <Typography variant='h6' mr={1}>
                        Base{' '}
                    </Typography>
                    <Typography variant='h6' color='primary.main'>
                        Salary
                    </Typography>
                </Box>
                <Typography variant='subtitle1' maxWidth='40ch' mx='auto' fontWeight={500}>
                    The [Job Title] will receive a competitive base salary of [amount] per
                    [hour/month/yearl, payable in [bi-weekly/monthly] installments.
                </Typography>
            </Box>
            <Grid
                container
                justifyContent='space-between'
                alignItems='center'
                py={8}
                columnSpacing={6}>
                <Grid item xs={4}>
                    <Typography variant='h6'>Benefits.</Typography>
                    <Typography variant='subtitle1'>
                        We offer a comprehensive benefits package, including but not limited to:
                    </Typography>
                    <List
                        sx={{
                            '& li:before': {
                                content: '"-"',
                                mr: 1,
                            },
                            '& .MuiListItem-root': {
                                p: 0,
                            },
                        }}>
                        <ListItem>Health insurance</ListItem>
                        <ListItem>Retirement savings plan</ListItem>
                        <ListItem>paid time off</ListItem>
                        <ListItem>Flexible working hours</ListItem>
                        <ListItem>professional development opportunities</ListItem>
                        <ListItem>Employee assistance program</ListItem>
                    </List>
                </Grid>
                <Grid item xs={4} textAlign='right'>
                    <Typography variant='h6'>Allowances</Typography>
                    <Typography variant='subtitle1'>
                        As part of the compensation package, the [Job Title] will receive the
                        following allowances [if applicable]:
                    </Typography>
                    <List
                        sx={{
                            '& li:before': {
                                content: '"-"',
                                mr: 1,
                            },
                            '& .MuiListItem-root': {
                                p: 0,
                            },
                        }}>
                        <ListItem> Travel allowance</ListItem>
                        <ListItem>mobile phone allowance</ListItem>
                        <ListItem>Meal allowance</ListItem>
                    </List>
                </Grid>
            </Grid>
            <Grid
                container
                justifyContent='space-between'
                alignItems='center'
                py={8}
                columnSpacing={6}>
                <Grid item xs={4}>
                    <Typography variant='h6'>Vocation & Personal</Typography>
                    <Typography variant='h6' color='primary.main'>
                        Emergency Time Off.
                    </Typography>
                    <Typography variant='subtitle1'>
                        The [Job Title] will be entitled to [number Of days] Of paid vacation leave
                        per year. Additionally, [number of days] of personal emergency time off will
                        be provided for unforeseen circumstances
                    </Typography>
                </Grid>
                <Grid item xs={4} textAlign='right'>
                    <Typography variant='h6'>Currency &</Typography>
                    <Typography variant='h6' color='primary.main'>
                        Deductions.
                    </Typography>
                    <Typography variant='subtitle1'>
                        All salaries and allowances will be paid in the local currency [currency].
                        Applicable taxes and deductions as per government regulations will be
                        withheld from the salary.
                    </Typography>
                </Grid>
            </Grid>
            <Box py={8} textAlign='center'>
                <Box
                    py={1}
                    px={5}
                    display='inline-flex'
                    mb={1}
                    sx={{ borderStyle: 'solid', borderColor: 'common', borderWidth: 'thin' }}>
                    <Typography variant='h6' mr={1}>
                        Expenses
                    </Typography>
                </Box>
                <Typography variant='subtitle1' maxWidth='75ch' mx='auto' fontWeight={500}>
                    The company will reimburse reasonable and pre-approved expenses incurred by the
                    [Job Title) in the course Of their duti& Proper documentation and approval are
                    required for reimbursement.
                </Typography>
            </Box>
            <Grid
                container
                justifyContent='space-between'
                alignItems='center'
                py={8}
                columnSpacing={6}>
                <Grid item xs={4}>
                    <Typography variant='h6'>Termination</Typography>
                    <Typography variant='h6' color='primary.main'>
                        Conditions.
                    </Typography>
                    <Typography variant='body2'>
                        Termination of employment may occur under the following circumstances:
                    </Typography>
                    <List
                        sx={{
                            '& li:before': {
                                content: '"-"',
                                mr: 1,
                            },
                            '& .MuiListItem-root': {
                                p: 0,
                                fontSize: '0.875rem',
                            },
                        }}>
                        <ListItem>
                            Resignation: The [Job Title] may resign from their position by providing
                            [notice period) notice in writing.
                        </ListItem>
                        <ListItem>
                            Termination for cause: The company reserves the right to terminate
                            employment immediately if the [Job Title) breaches company policies or
                            engages in any misconduct.
                        </ListItem>
                        <ListItem>
                            Termination without cause: The company may terminate employment without
                            cause by providing [notice notice or salary in lieu of notice.
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={4} textAlign='right'>
                    <Typography variant='h6'>
                        Confidentiality of Information and Ownership of
                    </Typography>
                    <Typography variant='h6' color='primary.main'>
                        Proprietary Property.
                    </Typography>
                    <Typography variant='subtitle1'>
                        During the course Of employment, the [Job Title] may have access to
                        confidential and proprietary information Of the company. They will be
                        required to sign a separatNon-Disclosure Agreement (NDA) to protect the com-
                        pany•s sensitive information.
                    </Typography>
                </Grid>
            </Grid>
            <Box
                mx={15}
                my={2}
                border='1px solid rgba(0, 0, 0, 0.5)'
                py={5}
                px={3}
                textAlign='center'>
                <Typography variant='subtitle2' mb={2}>
                    your employment with Clikkle is at-will and either party can terminate the
                    relationship at any time with or without cause and with or without notice. you
                    acknowledge that this Offer letter represents the entire agreement between you
                    and Clikkle.
                </Typography>
                <Typography variant='subtitle2'>
                    If you agree in agreement with the above outline, please sign below. This Offer
                    is in effect for [XX] business days.
                </Typography>
            </Box>
            <Grid container justifyContent='space-between' mt={8}>
                <Grid item xs={4} sx={{ borderTop: '1px solid', borderColor: 'common' }}>
                    <Typography variant='h5' textTransform='uppercase' mt={1}>
                        Candidate's signature
                    </Typography>
                </Grid>
                <Grid item xs={4} sx={{ borderTop: '1px solid', borderColor: 'common' }}>
                    <Typography variant='h5' textTransform='uppercase' mt={1} textAlign='right'>
                        hr signature
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Letter;
