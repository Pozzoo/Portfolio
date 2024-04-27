const projectsArea = document.getElementById("projectsArea");

class Project {
    constructor(imgPath, projectTitle, projectType, projectDescription) {
        this.imgPath = imgPath;
        this.projectTitle = projectTitle;
        this.projectType = projectType;
        this.projectDescription = projectDescription;
    }
}

const projectArray = new Array();

fetch('./test/projects.json')
    .then((response) => response.json())
    .then((json) => {
        json.projects.forEach(Project => {
            projectArray.push(Project);
            
        });
        loadProjects();
    });

    
function loadProjects() {
    projectArray.forEach(Project => {
        const project = document.createElement("a");
        project.setAttribute("class", "project");

        const projectBanner = document.createElement("div");
        projectBanner.setAttribute("class", "projectBanner");
        project.appendChild(projectBanner);

        const banner = document.createElement("img");
        banner.setAttribute("src", Project.imgPath);
        projectBanner.appendChild(banner);

        const projectTitle = document.createElement("div");
        projectTitle.setAttribute("class", "projectTitle");
        const title = document.createElement("h2");
        title.innerText = Project.projectTitle;
        projectTitle.appendChild(title);

        project.appendChild(projectTitle)

        projectsArea.appendChild(project)
    });
}


