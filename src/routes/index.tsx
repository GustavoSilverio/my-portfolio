import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/index'
import { Layout } from '../components/layout';
import { Projects } from '../pages/Projects/index';

export const Rotas = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout/>}>
				<Route path='/' element={<Home/>} />
				<Route path='/projects' element={<Projects/>} />
			</Route>
		</Routes>
	)
}