import React from "react";
import "./footer.css";

function Footer() {
	return (
		<div className='footerbody'>
			<p>Built by 🐝 for the Joy of React Course</p>
			<p>
				Code available on{" "}
				<a
					className='footer-link'
					href='https://github.com/TokiLoshi/project-wordle'>
					Github
				</a>
			</p>
		</div>
	);
}

export default Footer;
