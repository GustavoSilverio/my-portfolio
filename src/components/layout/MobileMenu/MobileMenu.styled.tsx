import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const MobileMenu = styled(Box)(({ theme  }) => ({
    position: 'fixed',
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.grey[200],
    
    zIndex: 9999,
    border: '1px solid red',
}))