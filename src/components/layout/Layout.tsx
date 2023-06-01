import { Outlet } from 'react-router-dom'
import { Header } from '../Header/index'
import { Footer } from '../Footer/'
import { useEffect } from 'react';
import { MobileMenu } from './MobileMenu/index';
import { useMobileMenuContext } from '../../contexts/MobileMenuContext';
import Chalk from 'chalk';

export const Layout = () => {

	const { showMenu } = useMobileMenuContext();
	const slctedColor = Chalk.rgb(255, 0, 92)

	useEffect(() => {
		console.log(slctedColor(`Developed by:

			 ██████╗  █████╗            ██╗  
			██╔════╝ ██╔══██╗    ██████╗╚██╗ 
			██║  ██╗ ██║  ██║    ╚═════╝ ╚██╗
			██║  ╚██╗██║  ██║    ██████╗ ██╔╝
			╚██████╔╝╚█████╔╝    ╚═════╝██╔╝ 
			 ╚═════╝  ╚════╝            ╚═╝  
		`))
	})

	return (
		<>
			{ showMenu && <MobileMenu/> }
			<Header/>
			<Outlet/>
			<Footer/>
		</>
	)
}