import React, { useState, useEffect } from 'react';
import ReactApexChart from "react-apexcharts";
import styled from 'styled-components';

const StyleGraph = styled.div`
	overflow-x: scroll;

	&::-webkit-scrollbar {
	    width: 8px;     
	    height: 8px;    
	}

	&::-webkit-scrollbar-thumb {
	    background: #797979;
	    border-radius: 4px;
	}
	
	&::-webkit-scrollbar-thumb:hover {
	    background: #b3b3b3;
	    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
	}
	
	&::-webkit-scrollbar-thumb:active {
	    background-color: #999999;
	}

	&::-webkit-scrollbar-track {
	    background: #e1e1e1;
	    border-radius: 4px;
	}

	
	&::-webkit-scrollbar-track:hover,
	&::-webkit-scrollbar-track:active {
	  background: #d4d4d4;
	}

	.apexcharts-text {
		fill: #DEDEDE;
	}

	.apexcharts-toolbar {
		display: none;
	}

	@media (min-width: 992px) {
		overflow-x: hidden;
	}
`;

const GraphStatistics = ({ stats }) => {

	const [graph, setGraph] = useState({   
		options: {
			chart: {
				height: 350,
				type: 'radar',
				dropShadow: {
					enabled: true,
					blur: 1,
					left: 1,
					top: 1
				}
			},
			xaxis: {
				categories: ["HP", "Attack", "Defending", "Super defe..", "Super atta...", "Speed"],
				labels: {
					show: true,
					style: {
						colors: ["#A8A8A8", "#A8A8A8", "#A8A8A8", "#A8A8A8", "#A8A8A8", "#A8A8A8"],
						fontFamily: 'Arial'
					}
				}
			},
			fill: {
				opacity: 0.2,
				colors: ["#B22C3E", "#9C25A7", "#3065AB", "#57468B"]
			},
			stroke: {
				show: true,
				width: 2,
				colors: ["#B22C3E", "#9C25A7", "#3065AB", "#57468B"],
      			dashArray: 0
			},
			markers: {
				colors: ["#B22C3E", "#9C25A7", "#3065AB", "#57468B"]
			},
			plotOptions: {
				radar: {
					polygons: {
						strokeColor: '#B22C3E',
						fill: {
							colors: ['#424242', '#424242']
						}
					}
				}
			},
			legend: {
				markers: {
		          strokeColor: ["#B22C3E", "#9C25A7", "#3065AB", "#57468B"],
		          fillColors: ["#B22C3E", "#9C25A7", "#3065AB", "#57468B"],
		        },
			}, 
		},     
		series: [] 
	});
	
	const chartRowRef = React.createRef();
	const widthGraphRef = React.createRef();

	useEffect(() => {

		if (chartRowRef.current === null || widthGraphRef.current === null) return;

		chartRowRef.current.scrollTo((widthGraphRef.current.offsetWidth / 2) - 160, 0);

	}, [chartRowRef, widthGraphRef]);

	useEffect(() => {

		if (stats === undefined) return;

		if (stats.length === 6) {
			setGraph(() => ({
				...graph,
				series: [
					{
						name: "serie-1",
						data: stats
					}
				]
			}));
		} else {
			setGraph(() => ({
				...graph,
				series: [
					...stats,
				]
			}));
		}

	}, [stats]);

	return (
		<StyleGraph className="app" ref={chartRowRef}>
			<div className="row">
				<div className="mixed-chart" ref={widthGraphRef}>
					<ReactApexChart 
						options={graph.options}
						series={graph.series}
						type="radar"
						width="500"
					/>
				</div>
			</div>
		</StyleGraph>
	)
}

export default React.memo(GraphStatistics);