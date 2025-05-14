function capitalizeEachWord(str) {
    str = str.split(/\s+/) // GESTISCE SPAZI MULTIPLI
    // str = str.split(" ")   NON GESTISCE SPAZI MULTIPLI

    let result = ""

    for(let i = 0; i<str.length; i++){
        result+=(String(str[i]).charAt(0).toUpperCase() + String(str[i]).slice(1) + " ")
    }

    return String(result).trim()
}

const tests = [
  {
    "Frasi normali": [
      { "ciao come stai": "Ciao Come Stai" },
      { "questo è un test": "Questo È Un Test" },
      { "mese di giugno": "Mese Di Giugno" },
      { "sito web": "Sito Web" }
    ]
  },
  {
    "Spazi extra": [
      { "  ciao   mondo   ": "Ciao Mondo" },
      { "   prova  test": "Prova Test" }
    ]
  },
  {
    "Frasi vuote": [
      { "": "" },
      { "   ": "" }
    ]
  },
  {
    "Caratteri speciali e numeri": [
      { "ciao mondo 123": "Ciao Mondo 123" },
      { "user#1 test": "User#1 Test" },
      { "ciao! come va?": "Ciao! Come Va?" }
    ]
  },
  {
    "Singole parole": [
      { "ciao": "Ciao" },
      { "test": "Test" },
      { "web": "Web" }
    ]
  },
  {
    "Maiuscole/miste": [
      { "hELlo WoRLd": "HELlo WoRLd" },
      { "Già CorreTTo": "Già CorreTTo" },
      { "TUTTO MAIUSCOLO": "TUTTO MAIUSCOLO" }
    ]
  }
];

doTest(tests, capitalizeEachWord)