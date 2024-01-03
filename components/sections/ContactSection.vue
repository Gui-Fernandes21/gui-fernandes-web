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
				<h4 class="heading-4">GuiFernandesPro@gmail.com</h4>
			</header>

			<form @submit.prevent>
				<div class="row">
					<div class="form-control input">
						<!-- <label class="body-text" for="name">Full Name</label> -->
						<input
							placeholder="Full Name"
							name="name"
							v-model="name"
							type="text"
						/>
					</div>
				</div>
				<div class="row">
					<div class="form-control">
						<!-- <label class="body-text" for="phone">Phone</label> -->
						<input
							placeholder="Phone"
							name="phone"
							v-model="phone"
							type="tel"
						/>
					</div>
					<div class="form-control">
						<!-- <label class="body-text" for="email">Email</label> -->
						<input
							placeholder="Email"
							name="email"
							v-model="email"
							type="email"
						/>
					</div>
					<!-- <div class="form-control">
						<label class="body-text" for="subject">Subject</label>
						<input name="subject" type="text" v-model="subject" />
					</div> -->
				</div>
				<div class="row">
					<div class="form-control textArea">
						<!-- <label class="body-text" for="message">Message</label> -->
						<textarea
							placeholder="Message"
							name="message"
							id="message"
							cols="30"
							rows="10"
							v-model="message"
						></textarea>
					</div>
				</div>
				<div class="row action">
					<button class="body-text bold" @click="sendMail">send message</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import { mapActions } from "pinia";
export default {
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
						throw new Error('Back end problem');
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
	align-items: center;
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
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 10px;

	width: 100%;
}
.form-control {
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
}
.form-control > input,
.form-control > textarea {
	background: #272729;
	border: none;
	border-bottom: 1px solid var(--primary-dark);
	border-radius: 5px;
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
	justify-content: flex-start;
	margin-top: 1rem;
}
.action > button {
	border-radius: 43px;
	background: var(--primary);
	border: none;
	padding: 14px 25px;
	text-transform: uppercase;
	cursor: pointer;
	color: var(--dark);
	text-decoration: none;
}

@media only screen and (max-width: 680px) {
	form {
		width: 90vw;
	}
	.form-control {
		width: 100%;
	}
}
</style>
