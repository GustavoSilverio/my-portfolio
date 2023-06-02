import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const MobileMenu = styled(Box)(({ theme  }) => ({
    position: 'fixed',
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.grey[200],
    
    zIndex: 9999,
    transform: "translateX(-100%)",
    transition: 'transform .7s ease',
    padding: theme.spacing(3),

    "&.active": {
        transform: 'translateX(0)',
    },
}))