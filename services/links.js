import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const NavLinks = [
    {
        name: 'My Files',
        icon: <CloudOutlinedIcon fontSize='small' />,
        to: '/about',
    },
    {
        name: 'Recents',
        icon: <AccessTimeOutlinedIcon fontSize='small' />,
        to: '/recent',
    },
    {
        name: 'Favorite',
        icon: <GradeOutlinedIcon fontSize='small' />,
        to: '/favorite',
    },
    {
        name: 'Trase',
        icon: <DeleteOutlinedIcon fontSize='small' />,
        to: '/trase',
    },
];

export default NavLinks;
