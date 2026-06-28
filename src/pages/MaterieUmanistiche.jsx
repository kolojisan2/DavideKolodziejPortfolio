import { Navbar } from "@/components/Navbar"; 
import { ThemeToggle } from "@/components/ThemeToggle"; 
import { StarBackground } from "@/components/StarBackground"; 
import { BookOpen, Globe, History, Image as ImageIcon } from "lucide-react";

export const MaterieUmanistiche = () => {
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
              Materie <span className="text-primary">Umanistiche</span>
            </h1>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Analisi delle connessioni letterarie, storiche e culturali: dall'analisi della psiche umana alle grandi trasformazioni del Novecento.
            </p>

            <div className="space-y-16">
              
              {/* --- SEZIONE ITALIANO --- */}
              <div className="gradient-border p-8 rounded-2xl bg-card/50 backdrop-blur-xs">
                <div className="flex items-center gap-3 mb-6 border-b border-primary/20 pb-4">
                  <BookOpen className="text-primary h-8 w-8" />
                  <h2 className="text-2xl font-bold">Italiano: La Figura dell'Inetto e Italo Svevo</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Testo Italiano */}
                  <div className="space-y-6 text-muted-foreground">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Chi è l'Inetto?</h3>
                      <p>
                        L'<strong>inetto</strong> è la figura centrale della produzione letteraria di <strong>Italo Svevo</strong>. Non si tratta di un semplice fallito, ma di un uomo paralizzato dalla propria iper-analisi psicologica, incapace di integrarsi nella società borghese, di prendere decisioni o di lottare per la vita. A differenza del "vinto" di Verga, l'inetto sveviano vive il proprio disagio tutto a livello psicologico ed esistenziale.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">La Coscienza di Zeno e il Vizio del Fumo</h3>
                      <p>
                        Nel capolavoro <em>La Coscienza di Zeno</em> (1923), il protagonista Zeno Cosini scrive la propria autobiografia come terapia psicanalitica. La questione della <strong>U.S. (Ultima Sigaretta)</strong> rappresenta il fulcro della sua inettitudine. 
                      </p>
                      <p className="mt-2">
                        Zeno passa la vita a tentare di smettere di fumare, riempiendo diari e pareti con la data dell' "ultima sigaretta". In realtà, <strong>il fumo è un alibi perfetto</strong>: Zeno non vuole davvero guarire. Proibire a se stesso il fumo carica ogni sigaretta di un sapore delizioso di "trasgressione". Rimandare la guarigione gli permette di vivere nel limbo delle infinite possibilità future, attribuendo la colpa di tutti i suoi fallimenti personali, professionali e sentimentali al solo vizio del fumo.
                      </p>
                    </div>
                  </div>

                  {/* Immagine Italiano */}
                  <div className="space-y-2">
                    <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      <ImageIcon size={14} className="text-primary" /> Rappresentazione Visiva:
                    </span>
                    <div className="overflow-hidden rounded-xl bg-muted border border-primary/20 shadow-lg p-2 bg-white/5">
                      <img 
                        src="/materie/italiano.png" // <-- Metti un'immagine di Svevo o legata al fumo/inettitudine in public/
                        alt="Italo Svevo e il fumo" 
                        className="w-full h-auto rounded-lg object-contain max-h-[400px] mx-auto"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                      <div className="text-center text-xs text-muted-foreground mt-2 italic">
                        Il paradosso dell' "Ultima Sigaretta" come dinamica di autoinganno psicologico.
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              {/* --- SEZIONE INGLESE --- */}
              <div className="gradient-border p-8 rounded-2xl bg-card/50 backdrop-blur-xs">
                <div className="flex items-center gap-3 mb-6 border-b border-primary/20 pb-4">
                  <Globe className="text-primary h-8 w-8" />
                  <h2 className="text-2xl font-bold">Inglese: The Victorian Age & Charles Dickens</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Testo Inglese */}
                  <div className="space-y-6 text-muted-foreground">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">The Victorian Background</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Early years of Queen Victoria's reign:</strong> A period of massive industrial expansion, colonial conquest, and economic progress.</li>
                        <li><strong>City life in Victorian Britain:</strong> Dramatic urbanization led to overcrowded slums, terrible sanitary conditions, and child exploitation in factories.</li>
                        <li><strong>The Victorian frame of mind:</strong> Characterized by a deep contradiction (the <em>Victorian Compromise</em>) between outer morality, respectability, and industrial progress versus the hidden reality of poverty and injustice.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Charles Dickens & "Oliver Twist"</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>The age of fiction:</strong> The novel became the most popular art form, published in monthly installments to reach a broader audience.</li>
                        <li><strong>Charles Dickens:</strong> Focused on social criticism with a didactic aim. He used vivid style and unforgettable caricatures to expose the flaws of the education system and workhouses.</li>
                        <li><strong>Oliver Twist:</strong> Set in a grim London, the plot follows an orphan escaping hunger and crime. In the famous extract <em>"Oliver wants some more"</em> (Chapter 2), Dickens brilliantly denounces the cruel, hypocritical management of poor laws and charity.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Immagine Inglese (image_408efe.png) */}
                  <div className="space-y-2">
                    <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      <ImageIcon size={14} className="text-primary" /> Module 2 Syllabus:
                    </span>
                    <div className="overflow-hidden rounded-xl bg-white border border-primary/20 shadow-lg p-1">
                      <img 
                        src="/materie/inglese.png" // <-- Riferimento allo screenshot del programma d'esame inserito in public/
                        alt="English Program: Compact Performer Module 2" 
                        className="w-full h-auto rounded-lg object-contain shadow-xs"
                      />
                    </div>
                  </div>
                </div>
              </div>


              {/* --- SEZIONE STORIA --- */}
              <div className="gradient-border p-8 rounded-2xl bg-card/50 backdrop-blur-xs">
                <div className="flex items-center gap-3 mb-6 border-b border-primary/20 pb-4">
                  <History className="text-primary h-8 w-8" />
                  <h2 className="text-2xl font-bold">Storia: Il Novecento e i Totalitarismi</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Testo Storia */}
                  <div className="space-y-6 text-muted-foreground text-sm leading-relaxed">
                    <div>
                      <h3 className="text-base font-semibold text-foreground mb-1">Dall'Unità d'Italia alla Grande Guerra</h3>
                      <p>
                        Il percorso parte dalle fondamenta della nazione con l'<strong>età del Risorgimento</strong> e l'<strong>Unità d'Italia</strong>, proseguendo con la modernizzazione e le contraddizioni dell'<strong>età giolittiana</strong>, fino allo scoppio della <strong>Prima Guerra Mondiale</strong>, catalizzatore delle crisi europee.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-foreground mb-1">Rivoluzione Russa e l'Ascesa dei Totalitarismi</h3>
                      <p>
                        Nel 1917 la <strong>Rivoluzione Russa</strong> abbatte lo zarismo e fa nascere lo stato sovietico. Il collasso economico e sociale del primo dopoguerra apre la strada ai regimi totalitari basati sul controllo assoluto della società, sul culto del leader e sul terrore: l'<strong>ascesa del Fascismo</strong> in Italia e del <strong>Nazismo</strong> in Germania.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-foreground mb-1">La Seconda Guerra Mondiale e la Guerra Fredda</h3>
                      <p>
                        L'espansionismo nazifascista porta alla tragica esplosione della <strong>Seconda Guerra Mondiale</strong>. Con la sconfitta dei totalitarismi, il <strong>secondo dopoguerra</strong> ridisegna i confini geopolitici globali, inaugurando la <strong>Guerra Fredda</strong>: il lungo confronto ideologico, economico e militare tra il blocco occidentale (USA) e quello sovietico (URSS).
                      </p>
                    </div>
                  </div>

                  {/* Immagine Storia */}
                  <div className="space-y-2">
                    <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      <ImageIcon size={14} className="text-primary" /> Linea del Tempo del Novecento:
                    </span>
                    <div className="overflow-hidden rounded-xl bg-muted border border-primary/20 shadow-lg p-2 bg-white/5">
                      <img 
                        src="/materie/storia.png" // <-- Inserisci un'immagine/mappa storica sui totalitarismi in public/
                        alt="Il Novecento e i Totalitarismi" 
                        className="w-full h-auto rounded-lg object-contain max-h-[400px] mx-auto"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                      <div className="text-center text-xs text-muted-foreground mt-2 italic">
                        Le tappe cruciali del XX secolo: dalle trincee della Grande Guerra ai blocchi contrapposti.
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