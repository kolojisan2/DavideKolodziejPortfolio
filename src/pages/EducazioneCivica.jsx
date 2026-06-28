import { Navbar } from "@/components/Navbar"; 
import { ThemeToggle } from "@/components/ThemeToggle"; 
import { StarBackground } from "@/components/StarBackground"; 
import { ShieldCheck, Leaf, Trash2, Cpu, Image as ImageIcon } from "lucide-react";

export const EducazioneCivica = () => {
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
              Educazione <span className="text-primary">Civica</span>
            </h1>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Cittadinanza digitale e sostenibilità: l'impronta ecologica delle nuove tecnologie e la gestione responsabile del ciclo di vita dei dispositivi.
            </p>

            <div className="space-y-16">
              
              {/* --- SEZIONE 1: IMPATTO AMBIENTALE DI INTERNET --- */}
              <div className="gradient-border p-8 rounded-2xl bg-card/50 backdrop-blur-xs">
                <div className="flex items-center gap-3 mb-6 border-b border-primary/20 pb-4">
                  <Leaf className="text-primary h-8 w-8" />
                  <h2 className="text-2xl font-bold">L'Impronta Ecologica di Internet e le Emissioni di $CO_2$</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Testo Impatto Ambientale */}
                  <div className="space-y-6 text-muted-foreground">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">L'Inquinamento Invisibile della Rete</h3>
                      <p>
                        Spesso consideriamo la tecnologia ed Internet come entità "immateriali" o virtuali, ma l'infrastruttura globale che sostiene il mondo digitale ha un **impatto ecologico massiccio e tangibile**. Ogni ricerca su Google, ogni video in streaming e ogni transazione di rete richiede una quantità impressionante di energia elettrica, contribuendo direttamente alle emissioni globali di **Anidride Carbonica ($CO_2$)**.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">I Data Center e l'Infrastruttura di Rete</h3>
                      <p>
                        Il cuore pulsante di questo consumo è rappresentato dai **Data Center**: enormi complessi di server che operano ininterrottamente a livello globale. Queste strutture non richiedono energia solo per alimentare l'hardware di calcolo, ma consumano quote monumentali di elettricità per i **sistemi di raffreddamento** necessari a evitare il surriscaldamento dei processori. 
                      </p>
                      <p className="mt-2">
                        Se l'energia che alimenta questi centri proviene da fonti fossili non rinnovabili, l'espansione del traffico dati si traduce direttamente in un'accelerazione dell'effetto serra e del cambiamento climatico.
                      </p>
                    </div>
                  </div>

                  {/* Immagine Impatto Ambientale */}
                  <div className="space-y-2">
                    <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      <ImageIcon size={14} className="text-primary" /> Rappresentazione Consumi:
                    </span>
                    <div className="overflow-hidden rounded-xl bg-muted border border-primary/20 shadow-lg p-2 bg-white/5">
                      <img 
                        src="/materie/educazionecivica1.png" // <-- Inserisci un'immagine esplicativa in public/civica/inquinamento-digital.png
                        alt="Impronta di carbonio dei Data Center e di Internet" 
                        className="w-full h-auto rounded-lg object-contain max-h-[400px] mx-auto"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                      <div className="text-center text-xs text-muted-foreground mt-2 italic">
                        L'impatto energetico dell'infrastruttura cloud e dello streaming dati.
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              {/* --- SEZIONE 2: NOZIONI RAEE --- */}
              <div className="gradient-border p-8 rounded-2xl bg-card/50 backdrop-blur-xs">
                <div className="flex items-center gap-3 mb-6 border-b border-primary/20 pb-4">
                  <Trash2 className="text-primary h-8 w-8" />
                  <h2 className="text-2xl font-bold">La Gestione dei RAEE e lo Smaltimento Responsabile</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Immagine RAEE */}
                  <div className="space-y-2 lg:order-last">
                    <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      <ImageIcon size={14} className="text-primary" /> Ciclo di Vita Hardware:
                    </span>
                    <div className="overflow-hidden rounded-xl bg-muted border border-primary/20 shadow-lg p-2 bg-white/5">
                      <img 
                        src="/materie/educazionecivica2.png" // <-- Inserisci un'immagine sui RAEE in public/civica/raee-smaltimento.png
                        alt="Smaltimento e riciclo RAEE" 
                        className="w-full h-auto rounded-lg object-contain max-h-[400px] mx-auto"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                      <div className="text-center text-xs text-muted-foreground mt-2 italic">
                        Il processo di riciclo delle terre rare e dei componenti elettronici obsoleti.
                      </div>
                    </div>
                  </div>

                  {/* Testo RAEE */}
                  <div className="space-y-6 text-muted-foreground">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Cosa sono i RAEE?</h3>
                      <p>
                        I **RAEE** (Rifiuti di Apparecchiature Elettriche ed Elettroniche) rappresentano la categoria di rifiuti a più rapida crescita al mondo. Includono PC, smartphone, server e qualsiasi dispositivo obsoleto. Questi rifiuti costituiscono un rischio severo se dispersi nell'ambiente, poiché contengono sostanze altamente tossiche come piombo, mercurio e cadmio.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Economia Circolare e Recupero delle Risorse</h3>
                      <p>
                        Un corretto smaltimento attraverso le isole ecologiche e i canali autorizzati permette l'attivazione di processi di **Economia Circolare**. All'interno delle schede logiche e dei microprocessori sono presenti metalli preziosi e **terre rare** (come oro, argento, rame e cobalto). 
                      </p>
                      <p className="mt-2">
                        Il recupero e il riciclo di queste materie prime secondarie riduce la necessità di aprire nuove e devastanti miniere estrattive, abbattendo l'impatto ambientale e geopolitico legato alla produzione di nuovo hardware.
                      </p>
                    </div>

                    <div className="p-4 bg-primary/5 rounded-xl border border-primary/10 flex items-start gap-3">
                      <Cpu className="text-primary h-5 w-5 mt-0.5 shrink-0" />
                      <div className="text-sm">
                        <span className="font-semibold text-foreground block mb-0.5">Il Ruolo dello Sviluppatore:</span>
                        Come programmatori, scrivere codice ottimizzato ed efficiente riduce i cicli di clock della CPU, abbassando direttamente l'energia consumata dai server e prolungando la vita utile dei dispositivi client contro l'obsolescenza programmata.
                      </div>
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