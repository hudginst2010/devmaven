// Create a class named DevMaven
class DevMaven {
    constructor() {
        this.tools = [];
    }

    // Method: add a tool to the DevMaven's toolkit
    addTool(tool) {
        this.tools.push(tool);
        console.log(`Added ${tool} to the DevMaven's toolkit.`);
    }

    // Method: remove a tool from the DevMaven's toolkit
    removeTool(tool) {
        const index = this.tools.indexOf(tool);
        if (index !== -1) {
            this.tools.splice(index, 1);
            console.log(`Removed ${tool} from the DevMaven's toolkit.`);
        } else {
            console.log(`${tool} is not found in the DevMaven's toolkit.`);
        }
    }

    // Method: list all tools in the DevMaven's toolkit
    listTools() {
        console.log("Tools in the DevMaven's toolkit:");
        this.tools.forEach(tool => {
            console.log(tool);
        });
    }
}

// Create an instance of DevMaven named myDevMaven
const myDevMaven = new DevMaven();

// Add tools to the DevMaven's toolkit
myDevMaven.addTool("IDE");
myDevMaven.addTool("Debugger");
myDevMaven.addTool("Version Control");

// List all tools in the DevMaven's toolkit
myDevMaven.listTools();

// Remove a tool from the DevMaven's toolkit
myDevMaven.removeTool("Debugger");

// List all tools in the DevMaven's toolkit after removal
myDevMaven.listTools();
