import React from "react";

export default function Card(props) {
	return (
		<div className="card">
			<img src={props.img} alt={props.title} className="card-photo"></img>
			<div className="card-infos">

				<div className="card-location">
					<span class="material-symbols-outlined location">location_on</span>
					<h4>{props.location}</h4>
					<a href={`https://www.google.com/maps/place/${props.location}`}  target="_blank" rel="noreferrer">View on Google Maps</a>
				</div>
				<div className="card-text">
					<h2>{props.title}</h2>
					<h4>{props.date}</h4>
					<p>{props.text}</p>
				</div>
			</div>
		</div>
	)
}