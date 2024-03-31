import Lutador from "./Relacionamento Entre Classes/Lutador/Lutador";

let lutadores: Lutador[] = [];

lutadores[0] = new Lutador("Pretty Boy", "França", 1.75, 68.9, 11, 3, 1);
lutadores[1] = new Lutador("Putscript", "Brasil", 1.68, 57.8, 14, 2, 3);
lutadores[2] = new Lutador("Snapshadow", "EUA", 1.65, 80.9, 12, 2, 1);
lutadores[3] = new Lutador("Dead Code", "Austrália", 1.93, 81.6, 13, 0, 2);
lutadores[4] = new Lutador("Ufocobol", "Brasil", 1.70, 119.3, 5, 4, 3);
lutadores[5] = new Lutador("Nerdaard", "EUA", 1.81, 105.7, 12, 2, 4);


lutadores[0].apresentar();
lutadores[2].status