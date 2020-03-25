const testmenu = { name: "test", items: [
    { name: "Studio", items: [
        { name: "About Us", app:"textviewer", options:{  } },
        { name: "Team" },
        { name: "Exhibitions" }
    ] },
    { name: "Projects", items: [
        { name: "Project 1", app:"propjectviewer", options:{ location:"/data/projects/project1.md" } },
        { name: "Project 2" },
        { name: "Project 3" },
        { name: "Project 4" },
        { name: "Project 5" },
        { name: "Project 6" }
    ] },
    { name: "Contact", items: [
        { name: "Contact Us" }
    ]}
]}

export default testmenu