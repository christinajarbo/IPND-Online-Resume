var bio = {
	"name": "Christina Jarbo",
	"role": "Web Developer",
	"contacts": {
		"email": "crkashat@yahoo.com",
		"github": "christinajarbo",
		"twitter": "@christinajarbo",
		"location": "West Bloomfield, MI, US"
	},
	"picture": "images/016.jpg",
	"welcomeMessage": "I am an exceedingly driven and ambitious individual with a passion for science, health, and technology. "+
	   "My goal is to grow in knowledge of computer science and programming, with the hopes of one day attaining an established "+
		 "and professional career in the field, in which my education, strengths and talents can be used for the advancement of "+
		 "computer science.",
	"skills": ["Beginner in HTML", "Beginner in Java", "Beginner in python", "Beginner in CSS", "Effective decision-making ability and problem-solving skills",
	"Exceedingly detail oriented", "Self-driven and goal-oriented", "Can handle multiple tasks simultaneously", "Willing and able to learn new ideas and tasks quickly"]
};

var work = {
	"jobs": [
		{
			"employer": "Auntie Anne's Pretzels",
			"title": "Owner/Operations Manager",
			"location": "Allen Park, MI, US",
			"datesWorked": "April 2015 - Present",
			"description": "Responsible for recruiting and training new staff; Professional development of existing staff; Maintaining "+
			"continuing education of employees on hygiene, health, food safety, and work-place safety to ensure compliance with established "+
			"regulations; Coordinating staff scheduling and meetings; Maintaining employee records and files in correspondence with state and "+
			"federal guidelines; Handling all human resource and operations needs of the employees and business."
		},
		{
			"employer": "J&B Medical Supply",
			"title": "Quality Assurance Team Member",
			"location": "Wixom, MI, US",
			"datesWorked": "Feb 2014 - April 2015",
			"description": "Communicated with physicians, nurses, care givers, and social workers to ensure that we had all documentation and "+
			"information necessary to service the client in the fastest way possible, while ensuring we adhere to state and commercial insurance "+
			"rules and regulations."
		},
		{
			"employer": "Sunrise Assisted Living",
			"title": "Care Manager",
			"location": "West Bloomfield, MI, US",
			"datesWorked": "September 2008 - April 2009",
			"description": "Provided all aspects of personal care to an assigned team of ten to twelve residents."
		},
		{
			"employer": "Sears Holdings Corporation",
			"title": "Lands' End Sales Associate",
			"location": "Novi, MI, US",
			"datesWorked": "June 2007 - Feb 2014",
			"description": "Extensive work in merchandising women's, men's, and children's apparel and accessories."
		},
	]
};

var education = {
	"schools": [
		{ "name": "Oakland University",
			"datesAttended": "2013",
			"location": "Rochester, MI, US",
			"degree": "Bachelor of Science",
			"major": "Health Science",
			"minor": "Pre-Health Professional",
			"url": "https://www.oakland.edu/"
		}
	],
	"onlineCourses": [
		{ "school": "Udacity",
			"title": "Into to Programming",
			"completed": "May 2017",
			"url": "https://www.udacity.com"
		},
	]
};

var projects = {
	"projects": [
		{
			"title": "HTML Website",
			"datesWorked": "March 2017",
			"description": "I created an HTML website during my Udacity Intro to Programming " +
			"Nanodegree.",
			"images": ["images/stage1.jpg"],
			"url": ""
		},
		{
			"title": "Python Quiz",
			"datesWorked": "May 2017",
			"description": "I created a python fill-in-the-blank quiz for my Udacity Into to Programming " +
			"Nanodegree.",
			"images": ["images/stage2.jpg"],
			"url": ""
		},
		{
			"title": "Movie Website",
			"datesWorked": "May 2017",
			"description": "I created a website of my favorite movies during my Udacity Intro to Programming " +
			"Nanodegree.",
			"images": ["images/stage3.jpg"],
			"url": ""
		}
	]
};

function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
	// if I console.log this in dev tools, it lists an array of all of the places I've worked.
}

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
		name[0].slice(1).toLowerCase();

	return name[0] + " "+name[1];
}
// This is not working for me. Not sure if I'm supposed to change something in helper.js
// starting at line 63?


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}


function displayWork() {

	if(work.jobs.length > 0) {

		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			// creates a new div for work experience.
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}

}

displayWork();
// don't need to pass in a parameter because its using an object that's in the global scope.

projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}


		}
	}
}

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			$(".education-entry:last").append(formattedSchoolMinor);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}

	}
}

education.display();


$("#mapDiv").prepend(googleMap); // google map shows up, but my location pins do not.
('#main').append(internationalizeButton); // I am not sure where this is supposed to go
// The internationalize button that is supposed to change my name doesn't work. line 117
