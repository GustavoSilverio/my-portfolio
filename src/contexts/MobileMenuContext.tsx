import {
	createContext,
	useContext,
	useState,
	Dispatch,
	SetStateAction
} from 'react';

interface ProviderProps {
	children: React.ReactNode;
}

interface MobileMenuState {
	showMenu: boolean;
	setShowMenu: Dispatch<SetStateAction<boolean>>;
}

export const MobileMenuContext = createContext<MobileMenuState>({
	showMenu: false,
	setShowMenu: () => null
})

export const MobileMenuProvider = ({ children }: ProviderProps) => {
	const [ showMenu, setShowMenu ] = useState(false);

	return (
		<MobileMenuContext.Provider value={{
			showMenu,
			setShowMenu
		}}>
	
			{children}
		</MobileMenuContext.Provider>
	)
}

export const useMobileMenuContext = () => {
	const context = useContext(MobileMenuContext);
	const { showMenu, setShowMenu } = context;
	return { showMenu, setShowMenu };
}