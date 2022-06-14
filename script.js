let tracker = 0;
window.document.addEventListener('click', (e) => {
    tracker = tracker + 100;
    document.getElementById("clicks").innerHTML = tracker;
    if (tracker == 10000) {
        alert("Alright that it ;(")
        window.location.href='hack.html'
    }
  });

