import Project from "./project-class";

export default class ProjectManager {
    constructor(storageService) {
        this.storageService = storageService;
        this.projects = this.loadProjects();
    }

    loadProjects() {
        const projects = this.storageService.getProjectsFromLocalStorage();
        return projects.map(project => Object.assign(new Project(), project));
    }

    createProject(title, desc, dueDate) {
        const project = new Project(title, desc, dueDate);
        this.addProjectToList(project);
    }

    addProjectToList(project) {
        this.projects.push(project);
        this.saveProjects();
    }

    saveProjects() {
        this.storageService.saveProjectsToLocalStorage(this.projects);
    }

    getAllProjects() {
        return this.projects;
    }

}