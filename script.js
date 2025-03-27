document.getElementById('funfact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var funfact = document.getElementById('funfact').value;
    
    // Erstelle ein neues li für den FunFact
    var li = document.createElement('li');
    
    // Erstelle den Textinhalt des FunFacts
    li.textContent = name + ": " + funfact;
    
    // Füge das neue li zur Liste hinzu
    document.getElementById('funfact-list').appendChild(li);

    // Leere die Formularfelder
    document.getElementById('name').value = '';
    document.getElementById('funfact').value = '';

    const getMaxCallStackSize = (i) => {
        try {
          return getMaxCallStackSize(++i);
        } catch {
          return i;
        }
      };
      
      console.log(getMaxCallStackSize(0));
});
