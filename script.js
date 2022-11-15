function allRead() {
    let x = document.querySelectorAll(".notification");
    for (notification of x) {
        notification.classList.remove("notification");
        notification.classList.add("notification-read");
    }
    let notifications = document.getElementsByClassName("notification").length;
    document.getElementById("number").innerHTML = notifications;

    let y = document.querySelectorAll(".dot");
    for (dot of y) {
        dot.style.display = "none";
    }
   }




