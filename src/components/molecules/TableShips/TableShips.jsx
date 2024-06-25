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
						<TableCell ></TableCell>
						<TableCell ><h2 className='font-bold'>Nombre</h2></TableCell>
						<TableCell align="center" ><h2 className='font-bold'>Ubicacion</h2></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((row) => (
						<TableRow
							key={row.id}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell align="left"><img src={row.images[0].imageName} width={100} /></TableCell>
							<TableCell  >
								{row.name}
							</TableCell>
							<TableCell align="center">{row.location}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
