import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "MM Pawilony Michał Florek",
    description: "Sito realizzato per l'azienda polacca MM Pawilony Michał Florek, specializzata nella vendita di moduli prefabbricati.",
    image: "/projects/project1.png",
    tags: ["WebDevelopment", "Architettura"],
    demoUrl: "https://mmpawilony.pl/",

  },
  {
    id: 2,
    title: "AB SRL sito aziendale",
    description:
      "Sito interattivo realizzato per l'azienda AB SRL, durante il periodo di FSL",
    image: "/projects/project2.png",
    tags: ["React", "Node.js", "tailwindcss"],
    demoUrl: "https://a-bsito-web-jor2-df1kdq645-davide-kolodziejs-projects.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Progettazione Modulo prefabbricato",
    description:
      "Prcesso di progettazione di un modulo prefabbricato, dalla fase di progettazione CAD alla realizzazione del modello 3D.",
    image: "/projects/project3.png",
    tags: ["AutoCAD", "Sviluppo 3D", "Design"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Qui potete trovare alcuni dei miei progetti più recenti e significativi, 
          che mostrano le mie competenze e la mia passione per lo sviluppo software e il design.
          Ogni progetto è stato realizzato con cura e attenzione ai dettagli, riflettendo il mio impegno per 
          l'eccellenza e l'innovazione.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="image-fit-box transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
