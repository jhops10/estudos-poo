import { Luta } from "./Relacionamento Entre Classes/Luta/Luta";
import Lutador from "./Relacionamento Entre Classes/Lutador/Lutador";

let lutadores: Lutador[] = [];

lutadores[0] = new Lutador("Marcos Rogério", "França", 1.75, 68.9, 11, 3, 1);
lutadores[1] = new Lutador("Paulo Sérgio", "Brasil", 1.68, 57.8, 14, 2, 3);
lutadores[2] = new Lutador("Francisco Pereira", "EUA", 1.65, 80.9, 12, 2, 1);
lutadores[3] = new Lutador("João Paulo", "Austrália", 1.93, 81.6, 13, 0, 2);
lutadores[4] = new Lutador("Zé Mineiro", "Brasil", 1.70, 119.3, 5, 4, 3);
lutadores[5] = new Lutador("Glauber Silva", "EUA", 1.81, 105.7, 12, 2, 4);


let UEC01 = new Luta();

UEC01.marcarLuta(lutadores[4], lutadores[5]);
UEC01.lutar();