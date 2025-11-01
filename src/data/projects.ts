// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	visitUrl?: string; // 添加前往项目链接字段
}

export const projectsData: Project[] = [
	
	// {
	// 	id: "portfolio-website",
	// 	title: "Personal Portfolio",
	// 	description:
	// 		"Personal portfolio website showcasing project experience and technical skills.",
	// 	image: "",
	// 	category: "web",
	// 	techStack: ["React", "Next.js", "TypeScript", "Framer Motion"],
	// 	status: "completed",
	// 	liveDemo: "https://portfolio.example.com",
	// 	sourceCode: "https://github.com/example/portfolio",
	// 	visitUrl: "https://portfolio.example.com", // 添加前往项目链接
	// 	startDate: "2023-09-01",
	// 	endDate: "2023-12-01",
	// 	featured: true,
	// 	tags: ["Portfolio", "React", "Animation"],
	// },

	
	
];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter((p) => p.status === "completed").length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => {
			techSet.add(tech);
		});
	});
	return Array.from(techSet).sort();
};
