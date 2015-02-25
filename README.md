# Multilang-Site
Pagina web che cambia lingua in automatico a seconda di quella in uso nel sistema.

## Come funziona
Si definiscono dei file in formato **JSON**, uno per ogni lingua che si desidera supportare,
per esempio:
- en-strings.json
- it-strings.json

Il nome del file deve rispettare il formato mostrato nell'esempio: `<LANG-CODE>-strings.json`.
In questo caso supportiamo **italiano** e **inglese**.

Ogni file **JSON** definisce un dizionario *chiave-valore* dove la *chiave* è un nome simbolico
dato ad una stringa di testo (o contenuto HTML) e il *valore* il relativo contenuto.

Ovviamente, nei vari file **JSON** dovranno essere presenti le stesse chiavi con i valori scritti
nelle diverse lingue.

A questo punto, sfruttando la potenza di **AngulaJS** è possibile scrivere il codice HTML
*parametrizzato* con le chiavi definite nei file **JSON**.

Il codice definito nello script **multilangSite.js** provvederà, una volta caricata la pagina,
a reperire i valori nella lingua corretta ed a sostituirli al posto delle chiavi nella pagina
web.