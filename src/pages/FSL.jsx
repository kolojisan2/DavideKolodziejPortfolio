import { Navbar } from "@/components/Navbar"; 
import { ThemeToggle } from "@/components/ThemeToggle"; 
import { StarBackground } from "@/components/StarBackground"; 
import { Briefcase, Code, Layers, ExternalLink, TrendingDown, Image as ImageIcon } from "lucide-react";

export const FSL = () => {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle />
        
        {/* Background Effects */}
        <StarBackground />
        
        <Navbar />
        
        <main className="pt-32 pb-24 px-4 min-h-screen bg-background relative z-10">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl font-bold mb-4 text-center">
              Formazione <span className="text-primary">Scuola Lavoro</span>
            </h1>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              L'esperienza di PCTO focalizzata sullo sviluppo software, la digitalizzazione aziendale e l'ottimizzazione dei processi operativi.
            </p>

            <div className="space-y-16">
              
              {/* --- SEZIONE INTRODUZIONE E AZIENDA --- */}
              <div className="gradient-border p-8 rounded-2xl bg-card/50 backdrop-blur-xs">
                <div className="flex items-center gap-3 mb-6 border-b border-primary/20 pb-4">
                  <Briefcase className="text-primary h-8 w-8" />
                  <h2 className="text-2xl font-bold">L'Esperienza presso AB srl</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Testo Azienda */}
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Durante il percorso di Formazione Scuola Lavoro, ho collaborato con la ditta <strong>AB srl</strong>, un'azienda leader specializzata nella <strong>vendita all'ingrosso di accessori per la moda</strong>.
                    </p>
                    <p>
                      L'obiettivo principale del progetto è stato quello di digitalizzare e ottimizzare la presentazione dei loro cataloghi e la gestione dei flussi di informazione interni, traducendo i requisiti di business dell'azienda in una piattaforma web moderna, veloce e scalabile.
                    </p>
                    <div className="p-4 bg-primary/5 rounded-xl border border-primary/10 mt-4">
                      <span className="text-foreground font-semibold block mb-1">Competenze Acquisite:</span>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Analisi dei requisiti e specifiche del cliente</li>
                        <li>Progettazione di interfacce orientate all'utente (UI/UX)</li>
                        <li>Ottimizzazione delle performance di caricamento</li>
                      </ul>
                    </div>
                  </div>

                  {/* Foto 1 - Interfaccia Sito o Mockup */}
                  <div className="space-y-2">
                    <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      <ImageIcon size={14} className="text-primary" /> Screenshot Piattaforma AB srl:
                    </span>
                    <div className="overflow-hidden rounded-xl bg-muted border border-primary/20 shadow-lg p-2 bg-white/5">
                      <img 
                        src="/projects/fsl1.png" 
                        alt="Interfaccia web realizzata per AB srl" 
                        className="w-full h-auto rounded-lg object-contain max-h-[350px] mx-auto"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                      />
                      <div className="text-center text-xs text-muted-foreground mt-2 italic">
                        Home page o catalogo digitale sviluppato per l'ingrosso accessori moda.
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              {/* --- IMPATTO DI BUSINESS E RISPARMIO ECONOMICO --- */}
              <div className="gradient-border p-8 rounded-2xl bg-card/50 backdrop-blur-xs border-l-4 border-l-primary">
                <div className="flex items-center gap-3 mb-6 border-b border-primary/20 pb-4">
                  <TrendingDown className="text-primary h-8 w-8" />
                  <h2 className="text-2xl font-bold">Impatto di Business: Digitalizzazione delle Cartelle Colore</h2>
                </div>
                
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Oltre all'implementazione puramente tecnica, il valore aggiunto del progetto risiede nell'introduzione di una logica di **ottimizzazione dei costi di gestione (Opex)**. Precedentemente, l'azienda faceva forte affidamento sulla produzione e sulla spedizione fisica di "cartelle colore" e campionari cartacei ai propri clienti B2B dislocati sul territorio, affrontando costi ingenti di stampa, logistica e tempi di attesa prolungati.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div className="p-5 bg-card rounded-xl border border-border">
                      <h4 className="text-foreground font-semibold mb-2 text-sm uppercase tracking-wider text-primary">Efficienza Operativa e ROI</h4>
                      <p className="text-sm">
                        Ideando e integrando nel sistema una sezione dedicata alle **cartelle colore digitali ad alta fedeltà cromatica**, ho azzerato la necessità di invii cartacei multipli durante la fase di pre-ordine. Questo ha generato un **risparmio economico immediato e scalabile** sui costi vivi di spedizione e produzione del materiale informativo.
                      </p>
                    </div>

                    <div className="p-5 bg-card rounded-xl border border-border">
                      <h4 className="text-foreground font-semibold mb-2 text-sm uppercase tracking-wider text-primary">Time-to-Market e Sostenibilità</h4>
                      <p className="text-sm">
                        La digitalizzazione ha ridotto drasticamente il *time-to-market*: i clienti possono visualizzare istantaneamente le varianti dei prodotti non appena disponibili a magazzino, velocizzando il processo decisionale d'acquisto. Inoltre, il progetto ha migliorato il profilo di **sostenibilità ambientale** dell'azienda, riducendo l'impronta di carbonio legata alla logistica e allo spreco di cellulosa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>


              {/* --- SEZIONE ARCHITETTURA TECNICA --- */}
              <div className="gradient-border p-8 rounded-2xl bg-card/50 backdrop-blur-xs">
                <div className="flex items-center gap-3 mb-6 border-b border-primary/20 pb-4">
                  <Layers className="text-primary h-8 w-8" />
                  <h2 className="text-2xl font-bold">Stack Tecnologico: Vite & React</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  
                  {/* Foto 2 - Codice o Architettura */}
                  <div className="space-y-2 lg:order-last">
                    <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      <ImageIcon size={14} className="text-primary" /> Struttura del Codice sorgente:
                    </span>
                    <div className="overflow-hidden rounded-xl bg-muted border border-primary/20 shadow-lg p-2 bg-white/5">
                      <img 
                        src="/projects/fsl2.png" 
                        alt="Struttura dei componenti React" 
                        className="w-full h-auto rounded-lg object-contain max-h-[350px] mx-auto"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                      />
                      <div className="text-center text-xs text-muted-foreground mt-2 italic">
                        Organizzazione dei componenti e gestione dello stato in React.
                      </div>
                    </div>
                  </div>

                  {/* Testo Tecnico */}
                  <div className="space-y-6 text-muted-foreground text-sm leading-relaxed">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Code size={18} className="text-primary" /> Sviluppo con React
                      </h3>
                      <p>
                        L'applicazione è stata sviluppata utilizzando <strong>React</strong>, la libreria JavaScript più diffusa per la creazione di interfacce utente dinamiche. L'applicazione sfrutta un'<strong>architettura a componenti riutilizzabili</strong> (Navbar, Card di Prodotto, Footer), permettendo una manutenzione del codice snella. La reattività dell'interfaccia garantisce transizioni istantanee e una navigazione fluida tra le categorie merceologiche degli accessori senza ricaricare la pagina.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                        <ExternalLink size={18} className="text-primary" /> Build Tool: Vite
                      </h3>
                      <p>
                        Come build tool e server di sviluppo è stato scelto <strong>Vite</strong>. A differenza dei vecchi strumenti come Create React App (basati su Webpack), Vite sfrutta i moduli ES nativi del browser (ESM). 
                      </p>
                      <p className="mt-2">
                        Questo garantisce un avvio del server di sviluppo quasi istantaneo e un meccanismo di <strong>Hot Module Replacement (HMR)</strong> velocissimo, che aggiorna lo schermo in tempo reale durante la scrittura del codice. In fase di produzione, esegue il bundling ottimizzato minimizzando i file per garantire tempi di caricamento ridotti al minimo.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </>
  );
};