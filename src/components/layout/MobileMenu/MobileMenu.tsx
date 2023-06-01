import { useMobileMenuContext } from '../../../contexts/MobileMenuContext'
import * as Styled from './MobileMenu.styled'

export const MobileMenu = () => {
    
    const { showMenu, setShowMenu } = useMobileMenuContext();

    return ( showMenu &&
        <Styled.MobileMenu>
            <h1>Hello, mobile</h1>
            <button onClick={() => setShowMenu(false)}>
                fechar
            </button>
        </Styled.MobileMenu>
    )
}