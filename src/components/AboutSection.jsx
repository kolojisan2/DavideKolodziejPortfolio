import { Briefcase, Code, Award, Shield } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Colonna Sinistra: Profilo Personale */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Sviluppatore Tech, Designer CAD & Creativo
            </h3>

            <p className="text-muted-foreground">
              Ho appena concluso il mio percorso scolastico all'iis marconi pieralisi. Questo portfolio rappresenta l'unione tra la mia passione per lo sviluppo software e la mia attitudine a realizzare progetti concreti, unendo mondo digitale e mondo reale.
            </p>

            <p className="text-muted-foreground">
              La disciplina, la resilienza e la gestione della pressione che applico ogni giorno nella tecnologia e nel lavoro arrivano anche dallo sport: pratico boxe da 12 anni, un percorso che mi ha portato a vincere per ben 3 volte i campionati regionali.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button text-center">
                contattami!
              </a>
              <a
                href="/CV_Nome_Cognome.pdf" // <-- Sostituisci con il nome esatto del tuo file PDF
                download="CV_IlMioNome.pdf"  // <-- Questo sarà il nome del file una volta scaricato
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Colonna Destra: Competenze Reali */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Rappresentanza & Business</h4>
                  <p className="text-muted-foreground">
                    Rappresentante ufficiale in Italia per l'azienda polacca <strong>MM Pawilony Michał Florek</strong>. Gestisco la vendita di moduli prefabbricati e ho curato personalmente il design del loro sito e delle loro pubblicità.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Progettazione CAD & Fitting</h4>
                  <p className="text-muted-foreground">
                    Sviluppo modelli strutturali complessi in ambiente CAD e mi occupo direttamente della logistica e del montaggio in cantiere delle strutture multi-modulo sul territorio italiano.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Servizio Militare</h4>
                  <p className="text-muted-foreground">
                    Inizio del percorso di addestramento e arruolamento presso l'Esercito Polacco, con avvio ufficiale delle attività previsto per il 12 luglio per una durata complessiva di 3 mesi.
                  </p>
               </div>
              </div>
            </div>
          </div>
        </div>

         {/* --- Sezione sportiva */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
            Il mio impegno nello sport
          </h3>
          <p className="text-muted-foreground mb-8 text-center md:text-left">
            Alcuni scatti che raffigurano la mia passione per la boxe, disciplina che pratico da 12 anni e che mi ha portato a vincere per ben 3 volte i campionati regionali.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Foto 1 */}
            <div className="overflow-hidden rounded-xl bg-muted aspect-video relative group border border-primary/10">
              <img 
                src="../../public/about/boxe1.jpg" 
                alt="Vittoria ai regionali" 
                className="image-fit-box transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t brown-900 from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium">Vittoria ai campionati</p>
              </div>
            </div>

            {/* Foto 2 */}
            <div className="overflow-hidden rounded-xl bg-muted aspect-video relative group border border-primary/10">
              <img 
                src="../../public/about/boxe2.jpg" 
                alt="Combattimento a Napoli" 
                className="image-fit-box transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium">Torneo Italia - belgio</p>
              </div>
            </div>

            {/* Foto 3 */}
            <div className="overflow-hidden rounded-xl bg-muted aspect-video relative group border border-primary/10">
              <img 
                src="../../public/about/boxe3.jpg" 
                alt="Torneo Esino" 
                className="image-fit-box transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium">Premiazione miglior pugile esino</p>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------- */}

        {/* --- Sezione lavoro */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
            I Miei Progetti sul Campo
          </h3>
          <p className="text-muted-foreground mb-8 text-center md:text-left">
            Alcuni scatti durante la progettazione, l'assemblaggio e la posa in opera dei moduli abitativi prefabbricati.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Foto 1 */}
            <div className="overflow-hidden rounded-xl bg-muted aspect-video relative group border border-primary/10">
              <img 
                src="../../public/about/lavoro1.jpg" 
                alt="Costruzione moduli prefabbricati" 
                className="image-fit-box transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t brown-900 from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium">Fase di assemblaggio della struttura</p>
              </div>
            </div>

            {/* Foto 2 */}
            <div className="overflow-hidden rounded-xl bg-muted aspect-video relative group border border-primary/10">
              <img 
                src="../../public/about/lavoro2.png" 
                alt="Dettaglio cantiere moduli" 
                className="image-fit-box transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium">Posa in opera e allineamento strutture</p>
              </div>
            </div>

            {/* Foto 3 */}
            <div className="overflow-hidden rounded-xl bg-muted aspect-video relative group border border-primary/10">
              <img 
                src="../../public/about/lavoro2.jpg" 
                alt="Rendering CAD e progetto finito" 
                className="image-fit-box transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium">Configurazione finale multi-modulo completata</p>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------- */}

      </div>
    </section>
  );
};