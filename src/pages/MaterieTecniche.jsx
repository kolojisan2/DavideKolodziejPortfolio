import { Navbar } from "@/components/Navbar"; 
import { ThemeToggle } from "@/components/ThemeToggle"; 
import { StarBackground } from "@/components/StarBackground"; 
import { 
  Code, 
  Server, 
  ShieldAlert, 
  ShieldCheck, 
  Key, 
  Lock, 
  Sigma, 
  Smartphone, 
  Brain, 
  Image as ImageIcon 
} from "lucide-react";

export const MaterieTecniche = () => {
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
              Materie <span className="text-primary">Tecniche</span>
            </h1>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Focus approfondito sui programmi d'esame per le discipline di indirizzo e scientifiche: dallo sviluppo software alla sicurezza, passando per l'intelligenza artificiale e i modelli matematici.
            </p>

            <div className="space-y-16">
              
            {/* --- SEZIONE INFORMATICA --- */}
              <div className="gradient-border p-8 rounded-2xl bg-card/50 backdrop-blur-xs">
                <div className="flex items-center gap-3 mb-6 border-b border-primary/20 pb-4">
                  <Code className="text-primary h-8 w-8" />
                  <h2 className="text-2xl font-bold">Informatica: Servizi Web e Comunicazione Dati</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Testo Informatica */}
                  <div className="space-y-6 text-muted-foreground">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Servizi Web: REST vs SOAP</h3>
                      <p>
                        I <strong>Web Services</strong> permettono l'interoperabilità e lo scambio di dati tra applicazioni diverse su una rete. 
                      </p>
                      <ul className="list-disc pl-6 mt-1 space-y-1">
                        <li><strong>SOAP (Simple Object Access Protocol):</strong> Protocollo rigido e standardizzato basato esclusivamente su formato XML, che garantisce elevata sicurezza transazionale ed è molto usato in ambito enterprise.</li>
                        <li><strong>REST (Representational State Transfer):</strong> Architettura software più leggera e flessibile che sfrutta direttamente i metodi HTTP (GET, POST, PUT, DELETE) e predilige lo scambio di dati in formato JSON.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Formati di Interscambio: JSON e XML</h3>
                      <p>
                        La serializzazione dei dati per il transito sulla rete avviene principalmente tramite due formati:
                      </p>
                      <ul className="list-disc pl-6 mt-1 space-y-1">
                        <li><strong>XML (eXtensible Markup Language):</strong> Basato su tag personalizzabili strutturati gerarchicamente, molto descrittivo ma più pesante da elaborare e trasmettere.</li>
                        <li><strong>JSON (JavaScript Object Notation):</strong> Formato leggero basato su coppie chiave-valore, estremamente facile da leggere per gli umani e nativamente integrato in JavaScript, diventato lo standard di fatto per le moderne API web.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Asincronismo: AJAX e Fetch API</h3>
                      <p>
                        <strong>AJAX (Asynchronous JavaScript and XML)</strong> è una tecnica di sviluppo che consente di aggiornare asincronamente parti di una pagina web scambiando dati con il server in background, senza ricaricare l'intero documento.
                      </p>
                      <p className="mt-2">
                        Oggi l'approccio classico con <code>XMLHttpRequest</code> è stato sostituito dalla moderna <strong>Fetch API</strong>, basata sulle <em>Promises</em> di JavaScript, che fornisce un'interfaccia molto più pulita, snella e scalabile per eseguire richieste HTTP asincrone e manipolare le risposte.
                      </p>
                    </div>
                  </div>

                  {/* Immagine Servizi Web */}
                  <div className="space-y-2">
                    <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      <ImageIcon size={14} className="text-primary" /> Architettura Web API:
                    </span>
                    <div className="overflow-hidden rounded-xl bg-muted border border-primary/20 shadow-lg p-2 bg-white/5">
                      <img 
                        src="/materie/informatica.png" // <-- Lascia pure questo percorso o aggiorna l'immagine nella cartella public
                        alt="Architettura AJAX, Fetch e API REST/SOAP" 
                        className="w-full h-auto rounded-lg object-contain max-h-[400px] mx-auto"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                      />
                      <div className="text-center text-xs text-muted-foreground mt-2 italic">
                        Modello di comunicazione asincrona tra Client e Server tramite formati JSON/XML.
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              {/* --- SEZIONE SISTEMI E RETI --- */}
              <div className="gradient-border p-8 rounded-2xl bg-card/50 backdrop-blur-xs">
                <div className="flex items-center gap-3 mb-6 border-b border-primary/20 pb-4">
                  <Server className="text-primary h-8 w-8" />
                  <h2 className="text-2xl font-bold">Sistemi e Reti: Sicurezza e Protezione delle Reti</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Testo Sistemi */}
                  <div className="space-y-6 text-muted-foreground text-sm leading-relaxed">
                    
                    <div>
                      <h3 className="text-base font-semibold text-foreground mb-1 flex items-center gap-2">
                        <ShieldAlert className="text-destructive h-4 w-4" /> Minacce e Attacchi
                      </h3>
                      <p>
                        <strong>Malware & Virus</strong> (ransomware, logic bomb) infettano i sistemi. Il <strong>Phishing</strong> sfrutta l'ingegneria sociale, mentre l'<strong>SQL Injection (SQLi)</strong> colpisce direttamente i database inserendo codice maligno negli input web.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-foreground mb-1 flex items-center gap-2">
                        <ShieldCheck className="text-primary h-4 w-4" /> Architetture di Sicurezza
                      </h3>
                      <p>
                        Il <strong>Firewall</strong> filtra i pacchetti. Il <strong>Proxy Server</strong> fa da intermediario fornendo caching e filtraggio contenuti. La <strong>DMZ (Demilitarized Zone)</strong> isola i server pubblici (Web, Mail) proteggendo la LAN interna.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-foreground mb-1 flex items-center gap-2">
                        <Key className="text-primary h-4 w-4" /> Crittografia e Autenticazione
                      </h3>
                      <p>
                        La cifratura <strong>Simmetrica</strong> usa un'unica chiave; la <strong>Asimmetrica</strong> usa una coppia di chiavi (Pubblica/Privata). Le funzioni di <strong>Hash</strong> creano impronte digitali dei dati, usate insieme alle chiavi nelle <strong>Firme Digitali</strong> per garantire autenticità e non ripudio.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-foreground mb-1 flex items-center gap-2">
                        <Lock className="text-primary h-4 w-4" /> Access Control Lists (ACL)
                      </h3>
                      <p>
                        Regole sequenziali configurate sui router per applicare politiche di <code>permit</code> o <code>deny</code> sul traffico in transito basandosi su IP sorgente/destinazione, porte e protocolli (TCP/UDP).
                      </p>
                    </div>

                  </div>

                  {/* Immagine Infografica Sistemi */}
                  <div className="space-y-2">
                    <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      <ImageIcon size={14} className="text-primary" /> Mappa Concettuale della Sicurezza:
                    </span>
                    <div className="overflow-hidden rounded-xl bg-white border border-primary/20 shadow-lg p-1">
                      <img 
                        src="/materie/sistemiereti.png" 
                        alt="Sistemi e Reti: Sicurezza e Protezione delle Reti" 
                        className="w-full h-auto rounded-lg object-contain shadow-xs"
                      />
                    </div>
                  </div>
                </div>
              </div>


              {/* --- SEZIONE TPSIT --- */}
              <div className="gradient-border p-8 rounded-2xl bg-card/50 backdrop-blur-xs">
                <div className="flex items-center gap-3 mb-6 border-b border-primary/20 pb-4">
                  <Smartphone className="text-primary h-8 w-8" />
                  <h2 className="text-2xl font-bold">TPSIT: Sviluppo Mobile con Android Studio</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Testo TPSIT */}
                  <div className="space-y-6 text-muted-foreground">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">L'IDE Android Studio</h3>
                      <p>
                        <strong>Android Studio</strong> è l'ambiente di sviluppo integrato (IDE) ufficiale per la piattaforma Android. Basato su IntelliJ IDEA, offre strumenti avanzati per il design delle interfacce grafiche, il debugging del codice e la gestione degli emulatori di dispositivi mobili.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Sviluppo in Linguaggio Java e Framework Oreo</h3>
                      <p>
                        La programmazione nativa delle applicazioni sfrutta il linguaggio <strong>Java</strong>, gestendo il ciclo di vita delle componenti principali come le <code>Activity</code> e i <code>Fragment</code>. 
                      </p>
                      <p className="mt-2">
                        Il focus si concentra sullo sviluppo di applicativi conformi alle specifiche del framework <strong>Android Oreo (API 26/27)</strong>, ottimizzando la gestione dei canali di notifica (Notification Channels), i limiti di esecuzione in background per il risparmio energetico e l'interazione con i layout XML attraverso l'architettura dei componenti nativi.
                      </p>
                    </div>
                  </div>

                  {/* Immagine TPSIT */}
                  <div className="space-y-2">
                    <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      <ImageIcon size={14} className="text-primary" /> Interfaccia App Mobile:
                    </span>
                    <div className="overflow-hidden rounded-xl bg-muted border border-primary/20 shadow-lg p-2 bg-white/5">
                      <img 
                        src="/materie/tpsit.png" // <-- Inserisci l'immagine del progetto Android Studio in public/materie/tpsit.png
                        alt="Sviluppo Applicazione Android" 
                        className="w-full h-auto rounded-lg object-contain max-h-[400px] mx-auto"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                      <div className="text-center text-xs text-muted-foreground mt-2 italic">
                        Struttura dei componenti grafici ed esecuzione logica su ambiente Java.
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              {/* --- SEZIONE ARTIFICIAL INTELLIGENCE --- */}
              <div className="gradient-border p-8 rounded-2xl bg-card/50 backdrop-blur-xs">
                <div className="flex items-center gap-3 mb-6 border-b border-primary/20 pb-4">
                  <Brain className="text-primary h-8 w-8" />
                  <h2 className="text-2xl font-bold">ArtificiaI Intelligence: Machine Learning e Reti Neurali</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Testo AI */}
                  <div className="space-y-6 text-muted-foreground">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Apprendimento Supervisionato</h3>
                      <p>
                        L'<strong>Apprendimento Supervisionato (Supervised Learning)</strong> è un paradigma del Machine Learning in cui l'algoritmo viene addestrato su un dataset etichettato (ovvero composto da coppie di input e output corretti). Gli algoritmi principali includono la regressione (lineare/logistica) per la predizione di valori continui o categorie, e gli alberi di decisione.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Le Reti Neurali Artificiali (ANN)</h3>
                      <p>
                        Ispirate alla struttura biologica del cervello umano, le <strong>Reti Neurali</strong> sono composte da nodi interconnessi disposti in strati: uno strato di input, uno o più strati nascosti (Hidden Layers) e uno strato di output.
                      </p>
                      <p className="mt-2">
                        I dati fluiscono attraverso la rete in cui ogni connessione possiede un <strong>peso</strong> modificabile. Tramite i processi di <em>Forward Propagation</em> e l'algoritmo di ottimizzazione della <em>Backpropagation</em>, la rete apprende dagli errori minimizzando la funzione di costo e ottimizzando l'accuratezza delle risposte.
                      </p>
                    </div>
                  </div>

                  {/* Immagine AI */}
                  <div className="space-y-2">
                    <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      <ImageIcon size={14} className="text-primary" /> Architettura di una Rete Neurale:
                    </span>
                    <div className="overflow-hidden rounded-xl bg-muted border border-primary/20 shadow-lg p-2 bg-white/5">
                      <img 
                        src="/materie/inteligenzaartificiale.png" // <-- Inserisci l'immagine delle reti neurali in public/materie/ai.png
                        alt="Struttura Reti Neurali e Deep Learning" 
                        className="w-full h-auto rounded-lg object-contain max-h-[400px] mx-auto"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                      <div className="text-center text-xs text-muted-foreground mt-2 italic">
                        Visualizzazione dei nodi e dei flussi di peso tra gli strati della rete.
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              {/* --- SEZIONE MATEMATICA --- */}
              <div className="gradient-border p-8 rounded-2xl bg-card/50 backdrop-blur-xs">
                <div className="flex items-center gap-3 mb-6 border-b border-primary/20 pb-4">
                  <Sigma className="text-primary h-8 w-8" />
                  <h2 className="text-2xl font-bold">Matematica: Teoria della Probabilità</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Testo Matematica */}
                  <div className="space-y-6 text-muted-foreground">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Definizione Classica e Assiomatica</h3>
                      <p>
                        La <strong>Probabilità</strong> studia la frequenza e la certezza del verificarsi di un determinato evento casuale. Secondo la definizione classica, la probabilità $P(A)$ di un evento $A$ è il rapporto tra il numero dei casi favorevoli $f$ e il numero dei casi possibili $n$, ipotizzando che siano tutti ugualmente possibili:
                      </p>
                      <p className="my-2 text-center text-foreground font-mono bg-white/5 p-2 rounded-sm">
                        {"$$P(A) = \\frac{f}{n}$$"}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Probabilità Condizionata e Composta</h3>
                      <p>
                        La <strong>Probabilità Condizionata</strong> valuta il verificarsi di un evento $A$ sapendo che un evento $B$ si è già verificato. Viene espressa matematicamente come:
                      </p>
                      <p className="my-2 text-center text-foreground font-mono bg-white/5 p-2 rounded-sm">
                        {"$$P(A | B) = \\frac{P(A \\cap B)}{P(B)}$$"}
                      </p>
                      <p className="mt-2">
                        Questi concetti sono le fondamenta logiche utilizzate anche nell'informatica per l'elaborazione dei filtri statistici antispam (come i classificatori Naive Bayes) e nello studio dell'affidabilità dei sistemi hardware e di rete.
                      </p>
                    </div>
                  </div>

                  {/* Immagine Matematica */}
                  <div className="space-y-2">
                    <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      <ImageIcon size={14} className="text-primary" /> Rappresentazione Grafica:
                    </span>
                    <div className="overflow-hidden rounded-xl bg-muted border border-primary/20 shadow-lg p-2 bg-white/5">
                      <img 
                        src="/materie/matematica.png" // <-- Inserisci l'immagine di formule/grafici probabilistici in public/materie/matematica.png
                        alt="Grafici di Distribuzione della Probabilità" 
                        className="w-full h-auto rounded-lg object-contain max-h-[400px] mx-auto"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                      <div className="text-center text-xs text-muted-foreground mt-2 italic">
                        Insiemistica ed elaborazione delle distribuzioni stocastiche.
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