import React, { useEffect } from "react";
import "./App.css";

const Star = (props) => {
	const [selected, setSelected] = useState(props.selected);
	const [showTooltip, setShowTooltip] = useState(false);

	// componentDidUpdate(PrevProps) {
	//     const { selected } = this.props;
	//     if (selected !== PrevProps.selected) {
	//         this.setState({
	//             selected: selected
	//         })
	//     }
	// }
	useEffect(() => {
		const { selected: prevSelected } = props;
		if (prevSelected !== selected) {
			setSelected(prevSelected);
		}
	}, []);
	const onHover = () => {
		props.onHover(props.index);

		setShowTooltip(true);
	};
	const onMouseLeave = () => {
		props.onMouseLeave();
		setShowTooltip(false);
	};
	const selectStar = () => {
		props.selectStar(props.index);
	};

	return (
		<div
			key={props.key}
			onClick={selectStar}
			onKeyDown={selectStar}
			onMouseOver={onHover}
			onFocus={onHover}
			onMouseOut={onMouseLeave}
			className="tp-container"
		>
			{selected ? props.ActiveComponent : props.InActiveComponent}
			{showTooltip && props.tpText && (
				<span className="tooltiptext" style={props.tooltipStyle}>
					{props.tpText}
				</span>
			)}
		</div>
	);
};

export default Star;
