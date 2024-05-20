import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage, PokemonPage, SearchPage } from './pages'; // estan en la misma carpeta, se puede hacer porque existe index.js

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}> 
				<Route index element={<HomePage />} /> {/* ruta del indice */}
				<Route path='pokemon/:id' element={<PokemonPage />} /> {/* Localhost:3000/pokemon/id dinamico */}
				<Route path='search' element={<SearchPage />} /> {/* ruta de la busqueda */}
			</Route>

            <Route path='*' element={<Navigate to='/' />} /> {/* ruta cuando no encuentre algo */}
		</Routes>
	);
};
