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
					<div class="form-control">
						<label class="body-text" for="name">Full Name</label>
						<input name="name" type="text" />
					</div>
					<div class="form-control">
						<label class="body-text" for="email">Email</label>
						<input name="email" type="email" />
					</div>
				</div>
				<div class="row">
					<div class="form-control">
						<label class="body-text" for="phone">Phone</label>
						<input name="phone" type="tel" />
					</div>
					<div class="form-control">
						<label class="body-text" for="subject">Subject</label>
						<input name="subject" type="text" />
					</div>
				</div>
				<div class="row">
					<div class="form-control textArea">
						<label class="body-text" for="message">Message</label>
						<textarea
							name="message"
							id="message"
							cols="30"
							rows="10"
						></textarea>
					</div>
				</div>
				<div class="row action">
					<button class="body-text bold">send message</button>
				</div>
			</form>
		</div>
	</div>
</template>

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
	background: #4848487d;
	border: none;
	border-radius: 5px;
	color: var(--gray-100);
	font-family: "Source Sans 3", sans-serif;
	padding: 10px 12px;
}
.form-control > label {
	color: var(--gray-100);
	margin-bottom: 4px;
}
.textArea {
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

@media only screen and (max-width: 600px) {
	form {
		width: 90vw;
	}
	.form-control {
		width: 100%;
	}
}
</style>
