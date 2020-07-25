import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		// if [], run one when the row loads, and dont run again
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			// console.table(request);
			console.table(request.data.results);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [fetchUrl]);

	return (
		<div className="row">
			<h2 className="title">{title}</h2>
			<div className="row_posters">
				{/* {movies.map()} */}
				{movies.map((movie) => (
					<img
						key={movie.id}
						className={`row_poster ${isLargeRow && "row_posterLarge"}`}
						src={`${base_url}${
							isLargeRow ? movie.poster_path : movie.backdrop_path
						}`}
						alt={movie.name}
					/>
				))}
			</div>
		</div>
	);
}

export default Row;
