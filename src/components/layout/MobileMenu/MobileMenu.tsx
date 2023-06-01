import { useMobileMenuContext } from '../../../contexts/MobileMenuContext'
import * as Styled from './MobileMenu.styled'

export const MobileMenu = () => {
    
    const { setShowMenu } = useMobileMenuContext();

    return (
        <Styled.MobileMenu>
            <h1>Hello, mobile</h1>
            <button onClick={() => setShowMenu(false)}>
                fechar
            </button>
        </Styled.MobileMenu>
    )
}