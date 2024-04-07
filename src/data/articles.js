import React from "react";

function article_3() {
	return {
		date: "2021",
		title: "Education",
		description:
			"Completed My BSc in Computer Science from BRAC University in 2021",
		keywords: [
			"Shahriar Hossain",
			"BRAC Univeristy"
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<h1>BRAC Univeristy</h1>
					<div className="paragraph">Bachelors in Computer Science, 2018-2021</div>
					<div className="paragraph">CGPA: 3.72</div>
					
				</div>
				<div className="article-content">
					<h1>|</h1>
				</div>
				<div className="article-content">
					<h1>Dhaka City College</h1>
					<div className="paragraph">Higher Secondary Certificate (HSC), 2017</div>
					<div className="paragraph">Science, GPA: 5.00</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_1() {
	return {
		date: "January 09, 2022 - Present",
		title: "Junior Software Engineer at Orbit Informatics",
		description:
			"I started working at Orbit Informatics right after my graduation. Currently I am working as a Junior Software Engineer. During this time period with this company, I have contributed on their several projects. For Example, Aquila PQMS, Prepmock, Oceandocs, VoucherMe and JOE.",
		keywords: [
			"Shahriar Hossain",
			"Orbit Informatics",
			"Junior Software Engineer",
			"Jr Software Engineer",
			"Jr. Software Engineer",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: start;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<li className="paragraph">During my tenure at Orbit Informatics, I thrived in an agile environment, actively contributing to various projects primarily centered around PHP, each utilizing different frameworks. Additionally, I provided support for React applications, facilitating modifications to existing projects.</li>
					<li className="paragraph">Used project management tools such as, Jira & Version Control tools such as, Git & Github. </li>
					<li className="paragraph">Worked with cloud, third party services & API. Such as, MangoPay Payment Gateway SendGrid and MailGun DocRaptor, CloudConvert. </li>
					<li className="paragraph">Have Experience With AWS EC2, ASG, SQS, Scheduler etc. </li>
					<li className="paragraph">Projects I have Worked On: Aquila PQMS, Prepmock, JOE, OceadDocs, VoucherMe, Jambura a Custom Framework, etc. </li>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "N/A",
		title: "Certifications",
		description:
			"Learning new technologies always excites me. I do search for courses with certifications and try to obtain that for my further growth. I have completed some courses and currently doing one.",
		keywords: [
			"Shahriar Hossain",
			"UDEMY",
			"MERN",
			"Laravel"
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: start;
				}

				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<li className="paragraph">React, NodeJS, Express & MongoDB - The MERN Fullstack Guide - <a href={"https://www.udemy.com/certificate/UC-3e62f773-b0d6-411b-b0bf-2024b731e385/"}>Certificate</a> </li>
					<li className="paragraph">Master Laravel for Beginners & Intermediate 2024 - Currently Doing - <a href={"https://www.udemy.com/course/laravel-beginner-fundamentals/?couponCode=ACCAGE0923"}>Course Link	</a> </li>
					<li className="paragraph">Spring Boot For Beginners - <a href={"../spring-boot-cert.pdf"}>Certificate</a> </li>
					<li className="paragraph">More To Come ... </li>
				</div>
			</React.Fragment>
		),
	};
}

// function article_2() {
// 	return {
// 		date: "7 May 2023",
// 		title: "Artificial Intelligence in Healthcare",
// 		description:
// 			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
// 		style: ``,
// 		keywords: [
// 			"Artificial Intelligence in Healthcare",
// 			"Tharindu",
// 			"Tharindu N",
// 			"Tharindu Nayanajith",
// 		],
// 		body: (
// 			<React.Fragment>
// 				<h1>Content of article 2</h1>
// 			</React.Fragment>
// 		),
// 	};
// }

const myArticles = [article_1, article_2, article_3];

export default myArticles;
