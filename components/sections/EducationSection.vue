<template>
	<div id="education" class="section-wrapper">
		<SectionToast>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="17"
				height="15"
				viewBox="0 0 17 15"
				fill="none"
			>
				<path
					d="M8.5 0.5L0 5.16667L8.5 9.83333L15.4545 6.01444V11.3889H17V5.16667M3.09091 8.41778V11.5289L8.5 14.5L13.9091 11.5289V8.41778L8.5 11.3889L3.09091 8.41778Z"
					fill="#B1B1B1"
				/>
			</svg>
			<span class="body-text bold">Education</span>
		</SectionToast>

		<div class="content-wrapper">
			<div class="content">
				<div class="uol-education" data-aos="fade-left">
					<div class="dot"></div>
					<header>
						<h1 class="heading-3 bold">
							University of London, <span class="italic">UK</span> —
							<span class="primary-text italic">BSc Computer Science</span>
						</h1>
						<span class="body-text">April 2026 - 3.5 GPA (Current)</span>
					</header>
					<div class="courses">
						<h4 class="heading-4">Courses:</h4>
						<ul>
							<li class="body-text">Data Structure & Algorithms.</li>
							<li class="body-text">
								Object-Oriented Programming (OOP with C++).
							</li>
							<li class="body-text">
								Software Development & Agile Practices (JavaScript).
							</li>
							<li class="body-text">Fundamentals of Computer Science.</li>
							<li class="body-text">Programming with Data (Python).</li>
							<li class="body-text">Machine Learning / Data Analysis.</li>
						</ul>
					</div>
					<div class="achievements">
						<h4 class="heading-4">Key Achievements::</h4>
						<ul>
							<li class="body-text">
								Developed a climate change analysis report using Python and data
								analysis techniques.
							</li>
							<li class="body-text">
								Created a habit tracker app as part of an Agile project team.
							</li>
							<li class="body-text">
								Designed a technical analysis toolkit for weather data
								visualization with candlestick graphs in C++
							</li>
							<li class="body-text">
								Developed a web-based music visualization application using the
								p5.js library, integrating real-time audio input through the
								computer's microphone for an interactive user experience.
							</li>
						</ul>
					</div>
				</div>
				<div class="imd-education" data-aos="fade-left">
					<div class="dot"></div>
					<header>
						<h1 class="heading-3 bold">
							Instituto Metropole Digital, <span class="italic">Brazil</span> —
							<span class="primary-text italic">Web Developer Bootcamp</span>
						</h1>
						<!-- <span class="body-text italic">January 2020 - July 2020</span> -->
					</header>
					<p class="body-text">- Structured Programming.</p>
					<p class="body-text">- Object-Oriented Programming.</p>
					<p class="body-text">- Database Concepts.</p>
					<p class="body-text">- Web Authoring (JS, JQuery, HTML, CSS).</p>
					<p class="body-text">- Web development.</p>
					<p class="body-text">- Web Development II.</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
ul {
	padding-left: 1rem;
}
li {
	list-style: circle;
	color: var(--gray-500);
}
h4 {
	margin-top: 1rem;
	margin-bottom: 0.5rem;
}
header > span {
	color: var(--gray-500);
}
header h1 {
	margin: 0;
}
.content {
	display: flex;
	flex-direction: column;
}
.content p {
	color: var(--gray-500);
	margin: 5px 0;
}
.uol-education,
.imd-education {
	border-left: 3px solid gray;
	padding-left: 2rem;
	padding-bottom: 1.5rem;
	padding-top: 0;
	position: relative;
}
.dot {
	position: absolute;
	width: 14px;
	height: 14px;
	border-radius: 50%;
	background-color: var(--primary);
	top: 6px;
	left: -8px;
}
</style>
