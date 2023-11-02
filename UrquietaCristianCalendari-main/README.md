# UrquietaCristianCalendari

Estrucutra Calendari:

Per començar en el meu html costara de td per fer els numeros de cada mes, a mes a mes en la part superior dels dies de cada mes 
fare dos botons pero poder cambiar de mes, amb un select pondria els numero de meses que hi hauran amb un option,
el js constara de 2 arrays de moment on en una array posarem els mesos de cada mes y altre per fer el dies de cada setmana, 
per saber la posicio del primer y el ultim dies de cada mes utilizarem Date(any, mes, 1).getDate(), Date(any, mes + 1, 0).getDate(),



Plantejament Mostrar Dies i Mesos:

Al princpi vaig estar pesant fer-ho amb td pero com cada mes la posicio del dia podia cambiar donç vaig estar investigant que es millor tenir-ho tot amb js y desde ahi fer-ho tot.
Per començar primer declararem una variable array pero els dias de cada setmana, on hi declararem dillus, dimarts, dimecres, dijous, divendres, dissabte y diumenge, despres d'aixo farem una funcio pero poder obtenir en l'any en el que estem i un altre funcio pero poder sapiguer en el mes que estem, despres d'aixo começarem a fer una funcio que esn pugi retornar el mes y el any amb els dias corresponents, a mes a mes una funcio pero poder mostrar el dies del nostre calendari 