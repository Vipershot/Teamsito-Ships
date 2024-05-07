import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export const TableShips = ({ data }) => {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 700 }} aria-label="customized table">
				<TableHead>
					<TableRow>
						<TableCell >Image</TableCell>

						<TableCell >Nombre</TableCell>
						<TableCell align="center" >Modelo</TableCell>
						<TableCell align="center" >Color</TableCell>
						<TableCell align="center" >Año</TableCell>

					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((row) => (
						<TableRow
							key={row.id}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell align="left"><img src={row.img} width={100} /></TableCell>
							<TableCell  >
								{row.name}
							</TableCell>
							<TableCell align="center">{row.calories}</TableCell>
							<TableCell align="center">{row.fat}</TableCell>
							<TableCell align="center">{row.carbs}</TableCell>

						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
