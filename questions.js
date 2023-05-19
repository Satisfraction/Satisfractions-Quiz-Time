const questions = [
  {
    category: 'Geografie',
    question: "Wie heißt der größte Kontinent der Erde?",
    answers: [
      { text: "Europa", value: 0 },
      { text: "Amerika", value: 0 },
      { text: "Asien", value: 1 },
      { text: "Afrika", value: 0 }
    ]
  },
  {
    category: 'Geografie',
    question: "Wie heißt die Hauptstadt von Deutschland?",
    answers: [
      { text: "Berlin", value: 1 },
      { text: "München", value: 0 },
      { text: "Hamburg", value: 0 },
      { text: "Frankfurt", value: 0 }
    ]
  },
  {
    category: 'Tiere',
    question: "Wie heißt das schnellste Landtier?",
    answers: [
      { text: "Giraffe", value: 0 },
      { text: "Gepard", value: 1 },
      { text: "Löwe", value: 0 },
      { text: "Nashorn", value: 0 }
    ]
  },
  {
    category: 'Geografie',
    question: "Welches ist das kleinste Land der Welt?",
    answers: [
      { text: "Katar", value: 0 },
      { text: "Monaco", value: 0 },
      { text: "Vatikanstadt", value: 1 },
      { text: "San Marino", value: 0 }
    ]
  },
  {
    category: 'Tiere',
    question: "Welches Tier ist das größte auf der Erde?",
    answers: [
      { text: "Giraffe", value: 0 },
      { text: "Elefant", value: 0 },
      { text: "Nilpferd", value: 0 },
      { text: "Wal", value: 1 }
    ]
  },
  {
    category: 'Geografie',
    question: "Was ist die Hauptstadt von Frankreich?",
    answers: [
      { text: "Lyon", value: 0 },
      { text: "Nizza", value: 0 },
      { text: "Paris", value: 1 },
      { text: "Marseille", value: 0 }
    ]
  },
  {
    category: 'Geografie',
    question: "Wie viele Kontinente gibt es auf der Erde?",
    answers: [
      { text: "3", value: 0 },
      { text: "5", value: 0 },
      { text: "7", value: 1 },
      { text: "9", value: 0 }
    ]
  },
  {
    category: 'Farben',
    question: "Welche Farbe hat eine Banane, wenn sie reif ist?",
    answers: [
      { text: "Grün", value: 0 },
      { text: "Gelb", value: 1 },
      { text: "Rot", value: 0 },
      { text: "Blau", value: 0 }
    ]
  },
  {
    category: 'Geografie',
    question: "Welcher Planet ist der dritte von der Sonne?",
    answers: [
      { text: "Erde", value: 1 },
      { text: "Mars", value: 0 },
      { text: "Jupiter", value: 0 },
      { text: "Venus", value: 0 }
    ]
  },
  {
    category: 'Tiere',
    question: "Wie nennt man eine Gruppe von Fischen?",
    answers: [
      { text: "Schwarm", value: 1 },
      { text: "Herde", value: 0 },
      { text: "Rudel", value: 0 },
      { text: "Herd", value: 0 }
    ]
  },
  {
    category: 'Biologie',
    question: "Wie viele Augen hat eine Biene?",
    answers: [
      { text: "2", value: 1 },
      { text: "4", value: 0 },
      { text: "6", value: 0 },
      { text: "8", value: 0 }
    ]
  },
  {
    category: 'Farben',
    question: "Wie viele Farben hat ein Regenbogen?",
    answers: [
      { text: "5", value: 0 },
      { text: "6", value: 1 },
      { text: "7", value: 0 },
      { text: "8", value: 0 }
    ]
  },
  {
    category: 'Biologie',
    question: "Wie viele Beine hat eine Spinne?",
    answers: [
      { text: "4", value: 0 },
      { text: "6", value: 1 },
      { text: "8", value: 0 },
      { text: "10", value: 0 }
    ]
  },
  {
    category: 'Tiere',
    question: "Was ist das größte Tier der Erde?",
    answers: [
      { text: "Elefant", value: 0 },
      { text: "Krokodil", value: 0 },
      { text: "Wal", value: 1 },
      { text: "Giraffe", value: 0 }
    ]
  },
  {
    category: 'Tiere',
    question: "Welches Tier sagt 'Miau'?",
    answers: [
      { text: "Hund", value: 0 },
      { text: "Katze", value: 1 },
      { text: "Pferd", value: 0 },
      { text: "Kuh", value: 0 }
    ]
  },
  {
    category: 'Tiere',
    question: "Welches der folgenden Tiere ist ein Raubtier?",
    answers: [
      { text: "Kaninchen", value: 0 },
      { text: "Eichhörnchen", value: 0 },
      { text: "Löwe", value: 1 },
      { text: "Kuh", value: 0 }
    ]
  },
  {
    category: 'Wissenschaft',
    question: "Wie viele Zähne hat ein Erwachsener?",
    answers: [
      { text: "16", value: 0 },
      { text: "24", value: 0 },
      { text: "32", value: 1 },
      { text: "40", value: 0 }
    ]
  },
  {
    category: 'Geografie',
    question: "Wie heißt die Hauptstadt von Spanien?",
    answers: [
      { text: "Barcelona", value: 0 },
      { text: "Madrid", value: 1 },
      { text: "Sevilla", value: 0 },
      { text: "Valencia", value: 0 }
    ]
  },
  {
    category: 'Biologie',
    question: "Wie nennt man das Blutplättchen im Körper?",
    answers: [
      { text: "Erythrozyt", value: 0 },
      { text: "Leukozyt", value: 0 },
      { text: "Thrombozyt", value: 1 },
      { text: "Plasma", value: 0 }
    ]
  },
  {
    category: 'Wissenschaft',
    question: "Was ist die höchste natürliche Erhebung auf der Erde?",
    answers: [
      { text: "Mount Everest", value: 1 },
      { text: "K2", value: 0 },
      { text: "Makalu", value: 0 },
      { text: "Lhotse", value: 0 }
    ]
  },
  {
    category: 'Geografie',
    question: "Wie heißt der höchste Berg in Deutschland?",
    answers: [
      { text: "Zugspitze", value: 1 },
      { text: "Watzmann", value: 0 },
      { text: "Großer Arber", value: 0 },
      { text: "Fichtelberg", value: 0 }
    ]
  },
  {
    category: 'Tiere',
    question: "Wie nennt man eine männliche Kuh?",
    answers: [
      { text: "Stute", value: 0 },
      { text: "Bock", value: 0 },
      { text: "Hengst", value: 0 },
      { text: "Bulle", value: 1 }
    ]
  },
  {
    category: 'Biologie',
    question: "Wie nennt man den Vorgang, bei dem sich eine Zelle teilt?",
    answers: [
      { text: "Mitose", value: 1 },
      { text: "Meiose", value: 0 },
      { text: "Zellteilung", value: 0 },
      { text: "Zellvermehrung", value: 0 }
    ]
  },
  {
    category: 'Farben',
    question: "Welche Farbe hat die Flagge von Frankreich?",
    answers: [
      { text: "Rot-Blau-Gelb", value: 0 },
      { text: "Grün-Weiß-Rot", value: 0 },
      { text: "Schwarz-Rot-Gold", value: 0 },
      { text: "Blau-Weiß-Rot", value: 1 }
    ]
  },
  {
    category: 'Wissenschaft',
    question: "Wie nennt man das kleinste Teilchen?",
    answers: [
      { text: "Atom", value: 0 },
      { text: "Elektron", value: 0 },
      { text: "Proton", value: 0 },
      { text: "Quark", value: 1 }
    ]
  }
];
