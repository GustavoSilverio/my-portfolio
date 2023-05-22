import { Outlet } from 'react-router-dom'
import { Header } from '../Header/index'
import { Footer } from '../Footer/'

export const Layout = () => {

	return (
		<>
			<Header/>
			<Outlet/>
			<Footer/>
		</>
	)
}