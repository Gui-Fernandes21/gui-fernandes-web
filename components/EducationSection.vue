<template>
	<div class="education-section">
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
			<svg
				width="16"
				height="293"
				viewBox="0 0 16 293"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M8 12L7.99999 289"
					stroke="#484848"
					stroke-width="8"
					stroke-linecap="round"
				/>
				<circle cx="8" cy="8" r="8" fill="#2AEA8C" />
				<circle cx="8" cy="119" r="8" fill="#2AEA8C" />
			</svg>
      <div class="content">
        <div class="uol-education">
          <header>
						<h1 class="heading-3 bold">
							University of London, <span class="italic">UK</span> —
							<span class="primary-text italic">BSc Computer Science</span>
						</h1>
					</header>
          <p class="body-text">
            <span class="primary-text">Performance</span> Base Admission
          </p>
        </div>
        <div class="imd-education">
          <header>
						<h1 class="heading-3 bold">
							Instituto Metropole Digital, <span class="italic">Brazil</span> —
							<span class="primary-text italic">Web Developer Bootcamp</span>
						</h1>
						<span class="body-text italic">March 2020 - April 2022</span>
					</header>
        </div>
      </div>
		</div>
	</div>
</template>


<style scoped>
.education-section {
  margin-top: 5rem;
}
.content-wrapper {
	display: flex;
	margin-top: 2rem;
	gap: 10px;
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
	gap: 4rem;
}
.content p {
	color: var(--gray-500);
}
</style>