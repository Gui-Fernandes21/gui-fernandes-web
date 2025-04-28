<template>
	<section id="about" class="section-wrapper">
		<SectionToast>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="12"
				height="13"
				viewBox="0 0 12 13"
				fill="none"
			>
				<path
					d="M8.02648 1.37267C7.51193 0.809909 6.79325 0.5 6 0.5C5.20252 0.5 4.48146 0.808034 3.96929 1.36732C3.45156 1.93276 3.19931 2.70124 3.25854 3.53105C3.37594 5.16819 4.60574 6.49997 6 6.49997C7.39426 6.49997 8.62195 5.16845 8.7412 3.53159C8.80122 2.70927 8.54738 1.9424 8.02648 1.37267ZM10.6537 12.4999H1.34628C1.22446 12.5015 1.10381 12.4756 0.993118 12.424C0.882428 12.3725 0.784478 12.2965 0.706396 12.2018C0.534525 11.9937 0.465248 11.7095 0.516545 11.4221C0.739712 10.168 1.43618 9.1145 2.53086 8.37495C3.50339 7.71844 4.7353 7.3571 6 7.3571C7.2647 7.3571 8.49661 7.71871 9.46914 8.37495C10.5638 9.11424 11.2603 10.1677 11.4835 11.4218C11.5348 11.7092 11.4655 11.9934 11.2936 12.2015C11.2155 12.2963 11.1176 12.3723 11.0069 12.4239C10.8962 12.4755 10.7756 12.5015 10.6537 12.4999Z"
					fill="#B1B1B1"
				/>
			</svg>
			<span class="body-text bold">About</span>
		</SectionToast>

		<div class="about-wrapper" data-aos="fade-left">
			<h1 class="heading-1">
				Nice to meet <span class="primary-text">you!</span>
			</h1>
			<p class="body-text center">
				I have started my <span class="primary-text">professional </span>Web
				Development journey <span class="primary-text">5 years</span> ago. Since
				then, I have worked remotely for companies in
				<span class="primary-text">Brazil and in the USA</span>, created digital
				products for both
				<span class="primary-text">business and consumer</span> use, built many
				<span class="primary-text">personal projects</span>, and dived deep in
				many courses to improve my <span class="primary-text">skills</span>.
			</p>
		</div>
	</section>
</template>

<style scoped>
.about-section {
	margin-top: 8rem;
}
.about-wrapper {
	text-align: center;
	width: 80%;
	margin: auto;
}
.about-wrapper h1 {
	margin: 1rem 0;
}
.about-wrapper p {
	margin: 0 auto;
	color: var(--gray-300);
}
@media only screen and (max-width: 680px) {
	.about-wrapper {
		width: 100%;
	}
}
</style>
