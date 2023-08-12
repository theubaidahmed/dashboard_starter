import HomeIcon from '@mui/icons-material/HomeOutlined';
import HeadsetIcon from '@mui/icons-material/HeadsetOutlined';
import ChatBubbleIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import TvIcon from '@mui/icons-material/TvOutlined';
import GridViewIcon from '@mui/icons-material/GridView';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import SmartButtonOutlinedIcon from '@mui/icons-material/SmartButtonOutlined';

const NavLinks = {
    dashboard: [
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
    ],
    apps: [
        {
            name: 'Apps',
            icon: <GridViewIcon fontSize='small' />,
            to: '/',
        },
        {
            name: 'Components',
            icon: <SmartButtonOutlinedIcon fontSize='small' />,
            to: '/about',
        },
        {
            name: 'Elements',
            icon: <LayersOutlinedIcon fontSize='small' />,
            to: '/recent',
        },
    ],
};

export default NavLinks;
