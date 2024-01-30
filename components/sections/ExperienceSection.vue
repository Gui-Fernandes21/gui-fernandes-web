<template>
	<div id="experience" class="section-wrapper">
		<SectionToast>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="13"
				height="11"
				viewBox="0 0 13 11"
				fill="none"
			>
				<path
					d="M1.3 11C0.9425 11 0.636567 10.8867 0.3822 10.6602C0.127833 10.4336 0.000433333 10.1609 0 9.8421V3.47368C0 3.15526 0.1274 2.88277 0.3822 2.65621C0.637 2.42965 0.942933 2.31618 1.3 2.31579H3.9V1.15789C3.9 0.839474 4.0274 0.566982 4.2822 0.340421C4.537 0.11386 4.84293 0.000385965 5.2 0H7.8C8.1575 0 8.46365 0.113474 8.71845 0.340421C8.97325 0.567368 9.10043 0.83986 9.1 1.15789V2.31579H11.7C12.0575 2.31579 12.3636 2.42926 12.6184 2.65621C12.8732 2.88316 13.0004 3.15565 13 3.47368V9.8421C13 10.1605 12.8728 10.4332 12.6184 10.6602C12.3641 10.8871 12.0579 11.0004 11.7 11H1.3ZM5.2 2.31579H7.8V1.15789H5.2V2.31579Z"
					fill="#B1B1B1"
				/>
			</svg>
			<span class="body-text bold">Experience</span>
		</SectionToast>
		<div class="content-wrapper">
			<div class="content">
				<div class="cxp-experience" data-aos="fade-left">
					<div class="dot"></div>
					<header>
						<h1 class="heading-3 bold">
							CXP Brasil Consulting, <span class="italic">Brazil</span> —
							<span class="primary-text italic">Lead Front End Developer</span>
						</h1>
						<span class="body-text italic">April 2022 - Present</span>
					</header>
					<p class="body-text">
						<span class="primary-text">Lead Developer</span> of the <span class="primary-text">Front End</span> Squad in the development of Web
						Applications for <span class="primary-text">Unimed</span>, the biggest Brazilian medical work
						cooperative and health insurance operator.
					</p>
					<p class="body-text">
						I led a dynamic team of front-end developers to deliver <span class="primary-text">high-quality</span>
						and responsive user interfaces utilizing <span class="primary-text">Vue.js Framework</span>. In this
						role I have also implemented <span class="primary-text">performance optimization strategies</span> to
						enhance the speed and responsiveness of web applications for
						<span class="primary-text">improved user satisfaction.</span>
					</p>
					<p class="body-text">
						Collaborated with <span class="primary-text">clients</span> to understand their requirements, provided
						technical insights, and ensured the successful delivery of the
						Front-End that <span class="primary-text">exceeded expectations.</span>
					</p>
				</div>

				<div class="sparks-experience" data-aos="fade-left">
					<div class="dot"></div>
					<header>
						<h1 class="heading-3 bold">
							SparkSignals, <span class="italic">USA </span> —
							<span class="primary-text italic">Web Developer</span>
						</h1>
						<span class="body-text italic">March 2020 - April 2022</span>
					</header>
					<p class="body-text">
						As a <span class="primary-text">Web Developer </span>at
						SparkSignals, I played a vital role in designing, implementing, and
						maintaining dynamic
						<span class="primary-text"> Web Applications.</span>
						Engaging in
						<span class="primary-text">Full-Stack </span>development, I oversaw
						projects from
						<span class="primary-text">concept to deployment.</span>
					</p>
					<p class="body-text">
						In <span class="primary-text">Front-End </span>development, I
						created
						<span class="primary-text"
							>visually appealing interfaces using Vue.js </span
						>, ensuring responsive design for optimal user experience.
					</p>
					<p class="body-text">
						For <span class="primary-text">Back-End </span>integration, I used
						<span class="primary-text"
							>Node.js with Express.js and RESTful APIs </span
						>, implementing data storage solutions (e.g., MySQL, MongoDB) for
						dynamic content. Upholding
						<span class="primary-text">high code quality </span>, I optimized
						performance, enhancing web application
						<span class="primary-text">speed and efficiency. </span>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
header > span {
	color: var(--gray-500);
}
header h1 {
	margin: 0;
}
.content {
	display: flex;
	flex-direction: column;
	width: 100vw;
}
.content p {
	color: var(--gray-500);
}

.cxp-experience,
.sparks-experience {
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
