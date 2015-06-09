$(document).ready(function() { 
  
  var species = document.getElementById('species').getAttribute('value').split(",")
  var limit = 4,
      amount = 4,
      lower_bound = 0,
      upper_bound = 3,
      order = [];
  
  if (amount > limit) limit = amount; 
  
  while (order.length < limit) {
      var random_number = Math.round(Math.random()*(upper_bound - lower_bound) + lower_bound);
      if (order.indexOf(random_number) == -1) { 
          // Yay! new random number
          order.push( random_number );
      }
  }
    $('#option1').click(function() {
      if (this.getAttribute('value') == document.getElementById("picture").getAttribute('value'))  {
        var bird = order.pop()
        var options = [bird]
        document.getElementById('option2').setAttribute('value',species[bird]);
        $('#option2').html(species[bird]);
        document.getElementById("picture").setAttribute('src','/assets/'.concat(species[bird], '.jpg'));
        document.getElementById("picture").setAttribute('value',species[bird]);
      } else {
        //WRONG ANSWER HANDLE
      }
    } )
    $('#option2').click(function() {
      if (this.getAttribute('value') == document.getElementById("picture").getAttribute('value'))  {
        var bird = order.pop()
        document.getElementById('option2').setAttribute('value',species[bird]);
        $('#option2').html(species[bird]);
        document.getElementById("picture").setAttribute('src','/assets/'.concat(species[bird], '.jpg'));
        document.getElementById("picture").setAttribute('value',species[bird]);
      } else {
        //WRONG ANSWER HANDLE
      }
    } )
    $('#option3').click(function() {
      if (this.getAttribute('value') == document.getElementById("picture").getAttribute('value'))  {
        var bird = order.pop()
        document.getElementById('option2').setAttribute('value',species[bird]);
        $('#option2').html(species[bird]);
        document.getElementById("picture").setAttribute('src','/assets/'.concat(species[bird], '.jpg'));
        document.getElementById("picture").setAttribute('value',species[bird]);
      } else {
        //WRONG ANSWER HANDLE
      }
    } )
    $('#option4').click(function() {
      if (this.getAttribute('value') == document.getElementById("picture").getAttribute('value'))  {
        var bird = order.pop()
        document.getElementById('option2').setAttribute('value',species[bird]);
        $('#option2').html(species[bird]);
        document.getElementById("picture").setAttribute('src','/assets/'.concat(species[bird], '.jpg'));
        document.getElementById("picture").setAttribute('value',species[bird]);
      } else {
        //WRONG ANSWER HANDLE
      }
    } )
    
});
    