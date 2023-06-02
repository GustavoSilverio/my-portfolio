import { useMobileMenuContext } from '../../../contexts/MobileMenuContext'
import * as Styled from './MobileMenu.styled'
// import { IoClose } from 'react-icons/io5'

export const MobileMenu = () => {
    
    const { showMenu, setShowMenu } = useMobileMenuContext();

    return (
        <Styled.MobileMenu className={showMenu? "active" : undefined}>
            <h1>Hello, mobile</h1>
            <button onClick={() => setShowMenu(false)}>
                {/* <IoClose/> */}
                Fechar
            </button>
        </Styled.MobileMenu>
    )
}