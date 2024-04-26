import React from 'react'

export const AppText = ({ text, variant, bold }) => {
	const stylesProps = `${bold && 'font-bold'} `
	return (
		<>
			{variant == 'h1' && <h1 className={`text-3xl text-bold ${stylesProps}`}>{text}</h1>}
			{variant == 'h2' && <h2 className={`text-lg ${stylesProps}`}>{text}</h2>}
			{variant == 'h3' && <h3 className={`text-base ${stylesProps}`}>{text}</h3>}
			{variant == 'p' && <p className={`text-base ${stylesProps}`}>{text}</p>}
		</>
	)
}
