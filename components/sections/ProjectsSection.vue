<template>
	<div class="section-wrapper" id="projects">
		<SectionToast>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="17"
				height="16"
				viewBox="0 0 17 16"
				fill="none"
			>
				<path
					d="M9.41306 0.206256C8.86387 -0.0656901 8.11056 -0.0700343 7.55771 0.201043C5.19802 1.35834 3.05892 2.68418 1.1871 4.15252C0.936302 4.34888 0.771545 4.62256 0.774291 4.93621C0.777037 5.24899 0.94637 5.5192 1.19534 5.71295C3.05252 7.15523 5.19344 8.48194 7.51103 9.62968C8.06022 9.90162 8.81353 9.90597 9.36638 9.63489C11.7261 8.4776 13.8652 7.15175 15.737 5.68341C15.9878 5.48706 16.1525 5.21337 16.1498 4.89972C16.1471 4.58694 15.9777 4.31673 15.7288 4.12298C13.8716 2.68071 11.7306 1.35399 9.41306 0.206256Z"
					fill="#B1B1B1"
				/>
				<path
					d="M16.6615 9.0241C16.7405 8.97999 16.8094 8.9213 16.8642 8.85149C16.9189 8.78168 16.9584 8.70218 16.9802 8.61766C17.0021 8.53314 17.0059 8.44532 16.9914 8.35939C16.9769 8.27345 16.9444 8.19115 16.8959 8.11732C16.8473 8.0435 16.7837 7.97965 16.7087 7.92955C16.6337 7.87945 16.549 7.84411 16.4594 7.82562C16.3698 7.80713 16.2772 7.80586 16.1871 7.82189C16.097 7.83791 16.0112 7.87091 15.9347 7.91893L10.3439 11.2318C9.846 11.5272 9.16958 11.6914 8.46204 11.6914C7.75359 11.6914 7.07717 11.5264 6.57924 11.2318L1.05072 7.95629C0.896202 7.86481 0.709731 7.83534 0.532325 7.87437C0.354919 7.91339 0.20111 8.01771 0.104736 8.16438C0.00836109 8.31105 -0.0226854 8.48805 0.0184261 8.65645C0.0595375 8.82485 0.169439 8.97084 0.323954 9.06232L5.85247 12.3378C6.61127 12.787 7.55222 12.9947 8.46113 12.9947C9.37187 12.9947 10.3128 12.7862 11.0716 12.337L16.6615 9.0241Z"
					fill="#B1B1B1"
				/>
				<path
					d="M16.6615 12.2866C16.7405 12.2425 16.8094 12.1838 16.8642 12.114C16.9189 12.0442 16.9584 11.9647 16.9802 11.8801C17.0021 11.7956 17.0059 11.7078 16.9914 11.6219C16.9769 11.5359 16.9444 11.4536 16.8959 11.3798C16.8473 11.306 16.7837 11.2421 16.7087 11.192C16.6337 11.1419 16.549 11.1066 16.4594 11.0881C16.3698 11.0696 16.2772 11.0683 16.1871 11.0844C16.097 11.1004 16.0112 11.1334 15.9347 11.1814L11.0927 14.0512C10.386 14.47 9.4396 14.6967 8.46204 14.6967C7.48448 14.6967 6.53805 14.4708 5.83051 14.0512L1.05072 11.2188C0.974209 11.1734 0.889039 11.1428 0.80007 11.1287C0.711101 11.1146 0.620075 11.1173 0.53219 11.1365C0.444305 11.1558 0.361282 11.1914 0.287861 11.2411C0.21444 11.2908 0.152058 11.3538 0.104278 11.4264C0.0564981 11.4991 0.0242553 11.5799 0.00939072 11.6644C-0.00547386 11.7488 -0.00266905 11.8352 0.0176448 11.9186C0.0379586 12.0021 0.0753837 12.0809 0.127783 12.1506C0.180183 12.2202 0.246531 12.2795 0.323039 12.3248L5.10283 15.1572C6.07123 15.7307 7.2822 16 8.46204 16C9.64189 16 10.8519 15.7307 11.8213 15.1564L16.6615 12.2866Z"
					fill="#B1B1B1"
				/>
			</svg>
			<span class="body-text bold">Projects</span>
		</SectionToast>

    <div class="content-wrapper">
      <div class="content">
				<div class="carousel-container">
					<ClientOnly>
					<Splide :options="{ perPage: 3, gap: '1rem', autoplay: true, pagination: true, breakpoints: { 768: { perPage: 1 }, 1024: { perPage: 2 } } }" class="splide">
						<SplideSlide v-for="project in data" class="slide">
							<div class="card" >
								<img :src="project.imageURL" :alt="project.title">
								<div class="description">
									<h1 class="primary-text">{{ project.title }}</h1>
									<p class="body-text">{{ project.summary }}</p>
									<div class="tags">
										<div class="tag_item" v-for="tech in project.technologies">{{ tech }}</div>
									</div>
								</div>
								<div class="backdrop"></div>
							</div>
						</SplideSlide>
					</Splide>
				</ClientOnly>
				</div>
			</div>
    </div>
	</div>
</template>

<script setup lang="ts">
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
// import '@splidejs/splide/css/skyblue';

const data = ref([
	{ 
		title: "Icon BJJ Website",
		imageURL: "/images/iconbjj-2.png",
		summary: "A fully responsive Vue.js website for a Brussels-based BJJ academy, featuring SEO-optimized content, fast load times, and secure Firebase Hosting for seamless student engagement.",
		technologies: ["Vue.Js","SEO","Firebase"]
	},
	{ 
		title: "Habit Tracker App",
		imageURL: "/images/dashboard-htk.png",
		summary: "A full-stack habit tracker built as university coursework, featuring a Nuxt 3 frontend, an Express/Node.js REST API, and MongoDB for data persistence. Users can sign up, log habits, set reminders, and view progress analytics in a responsive, performant interface.",
		technologies: ["Nuxt","NodeJs","MongoDB"]
	},
	{ 
		title: "Menutz App",
		imageURL: "/images/menutz-landing.png",
		summary: "A digital menu platform for restaurants, featuring a Nuxt 3 website optimized for SEO and hosted on Firebase, alongside a cross-platform Flutter mobile app that lets customers browse and engage with menus seamlessly.",
		technologies: ["Nuxt","Flutter","TypeScript"]
	}
	 
])
</script>

<style scoped>
::v-deep(.splide__pagination__page.is-active) {
	background: var(--primary);
}

::v-deep(.splide__arrow svg) {
	fill: var(--primary-light) !important;
}
.card {
	position: relative;

	border-radius: 1rem;
	overflow: hidden;

	transition: all 250ms ease-in-out;

	height: 28rem;
	width: 100%;

	/* ----------------------------------------- */
	/* TODO When Project detail modal is ready */
	/* cursor: pointer; */
	/* ----------------------------------------- */

	img, .description, .backdrop {
		position: absolute;
		top: 0;
		left: 0;
	}

	img {
		width: 100%;
		height: 100%;
		z-index: 0;
		filter: saturate(0);
		transition: all 250ms ease-in-out;
	}
}

.content,
.splide {
	width: 100%;
}

.tags {
	display: flex;
	justify-content: flex-end;
	align-items: center;

	gap: 5px;

	.tag_item {
		color: var(--gray-300);
		font-size: 12px;
		padding: 5px 15px;
		border-radius: 1rem;
		background: var(--gray-900);
	}
}

.card:hover {
	transform: scale(1.01);

	img {
		filter: none;
	}
}

.description {
	z-index: 10;
	top: 50% !important;

	display: grid;
	grid-template-rows: 25% 50% 20%;

	padding: 0 1rem;
	width: 100%;
	height: 50%;	
}

h1 {
	font-family: 'Bebas Neue', sans-serif;
	margin: 0;
}

p {
	color: #fff;
}

.backdrop {
	background: #00000056;
	z-index: 5;
	width: 100%;
	height: 100%;
}

.carousel-container {
	display: flex;
	gap: 1rem;
}

</style>