<template>
	<div class="section-wrapper" id="contact">
		<SectionToast>
			<nuxt-icon class="icon" name="contact"></nuxt-icon>
			<span class="body-text bold">Contact</span>
		</SectionToast>

		<div class="content-wrapper">
			<header>
				<h2 class="heading-2 bold">
					Let's Work <span class="primary-text">Together</span>
				</h2>
				<!-- <h4 class="heading-4">GuiFernandesPro@gmail.com</h4> -->
			</header>

			<form @submit.prevent class="form-grid">
				<div class="form-control input full-width">
					<input
						placeholder="Full Name"
						name="name"
						v-model="name"
						type="text"
					/>
				</div>
				<div class="form-control">
					<input placeholder="Phone" v-maska="'+1 (###) ###-####'" name="phone" v-model="phone" type="tel" />
				</div>
				<div class="form-control">
					<input
						placeholder="Email"
						name="email"
						v-model="email"
						type="email"
					/>
				</div>
				<div class="form-control full-width">
					<textarea
						placeholder="Message"
						name="message"
						v-model="message"
					></textarea>
				</div>
			</form>
			<div class="row action">
				<button class="body-text" @click="sendMail" type="submit">
					Send Message
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import { mapActions } from "pinia";
import { vMaska } from 'maska/vue';

export default {
	directives: { maska: vMaska },
	data() {
		return {
			name: "",
			email: "",
			phone: "",
			message: "",
		};
	},
	methods: {
		...mapActions(useModalStore, ["setLoading"]),
		sendMail() {
			this.setLoading(true);
			axios
				.post("https://formspree.io/f/mayryokq", {
					message: this.message,
					name: this.name,
					phone: this.phone,
					email: this.email,
					subject: this.subject,
				})
				.then((result) => {
					console.log(result);
					if (result.status == 200) {
						this.clearFields();
						this.setLoading(false);
					} else {
						throw new Error("Back end problem");
					}
				})
				.catch((err) => console.log(err));
		},
		clearFields() {
			this.name = "";
			this.email = "";
			this.phone = "";
			this.message = "";
		},
	},
};
</script>

<style scoped>
header {
	text-align: center;
}
header > h4 {
	font-size: 12px;
}
.icon :deep(svg) {
	font-size: 1rem;
}
.content-wrapper {
	justify-content: center;
	flex-direction: column;
}
form {
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 10px;

	align-items: center;
	margin-top: 1rem;
}
.row {
	display: flex;
	gap: 10px;

	width: 100%;
}
.form-control {
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
}
.form-control > textarea {
	min-height: 150px;
}
.form-control > input,
.form-control > textarea {
	background: #272729;
	border: none;
	border-bottom: 1.5px solid var(--primary-dark);
	border-radius: 2px;
	color: var(--gray-100);
	font-family: "Source Sans 3", sans-serif;
	padding: 10px 12px;

	outline: none;
}

.form-control {
	textarea:hover,
	input:hover,
	textarea:focus,
	input:focus {
		background: rgba(91, 91, 91, 0.39);
		border-bottom: 1.5px solid var(--primary-light);
	}
}
.form-control > label {
	color: var(--gray-100);
	margin-bottom: 4px;
}
.textArea {
	width: 100%;
}
.input {
	width: 100%;
}
.row.action {
	display: flex;
	margin-top: 1rem;
}
.action > button {
	border-radius: 10px;
	background: var(--primary);
	border: 1px solid var(--primary);
	padding: 1rem 2rem;
	text-transform: uppercase;
	cursor: pointer;
	color: var(--dark);

	width: 100%;

	font-weight: bold;
	font-family: "Source Sans 3", sans-serif;

	&:hover {
		background: var(--dark);
		color: var(--primary);
	}
}

@media only screen and (max-width: 680px) {
	.form-grid {
		display: flex !important;
		flex-direction: column;
		gap: 1rem;
	}
	.form-control {
		width: 100%;
	}
}

.form-grid {
	display: grid;
	grid-template-columns: 1fr;
	gap: 1rem;
}

.form-control.full-width {
	grid-column: span 2;
}

@media (min-width: 768px) {
	.form-grid {
		grid-template-columns: 1fr 1fr;
	}

	.form-control.full-width {
		grid-column: span 2;
	}
}
</style>
