import HomeIcon from '@mui/icons-material/HomeOutlined';
import HeadsetIcon from '@mui/icons-material/HeadsetOutlined';
import ChatBubbleIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import TvIcon from '@mui/icons-material/TvOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const NavLinks = [
    {
        name: 'Dashboards',
        icon: <HomeIcon fontSize='small' />,
        to: '/',
    },
    {
        name: 'Support System',
        icon: <HeadsetIcon fontSize='small' />,
        to: '/about',
    },
    {
        name: 'Chat',
        icon: <ChatBubbleIcon fontSize='small' />,
        to: '/recent',
    },
    {
        name: 'Admin',
        icon: <TvIcon fontSize='small' />,
        to: '/trase',
    },
];

export default NavLinks;
