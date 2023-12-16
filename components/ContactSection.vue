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
					<div class="form-control">
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
.icon :deep(svg) {
	font-size: 1rem;
}
.content-wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
form {
	margin-top: 1rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 5px;
}
.row {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
	width: 100%;
}
.form-control {
	width: 100%;
	display: flex;
	flex-direction: column;
}
.form-control > input,
.form-control > textarea {
	padding: 15px 10px;
	background: #4848487d;
	border: none;
	border-radius: 5px;
	color: var(--gray-100);
	font-family: "Source Sans 3", sans-serif;
}
.form-control > label {
	color: var(--gray-100);
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
}
</style>
