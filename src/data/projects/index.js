import { malqaProject } from "@/data/projects/malqa";
import { qayrawanProject } from "@/data/projects/qayrawan";
import { ramProject } from "@/data/projects/ram";

// Adding a third project means adding one entry here (plus its own data
// module) - nothing else in the dashboard references a project by name.
export const projects = {
  ram: ramProject,
  malqa: malqaProject,
  qayrawan: qayrawanProject,
};

export const projectOrder = ["ram", "malqa", "qayrawan"];
export const DEFAULT_PROJECT_ID = "ram";
export const DEFAULT_OPTION_ID = "option1";

export default projects;
